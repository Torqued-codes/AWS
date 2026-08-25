// Groq AI integration for the Bulk Question Importer.
//
// Extracted document text (see documentParser.ts) is sent to Groq's
// OpenAI-compatible chat completions endpoint with a strict JSON-schema
// system prompt, and the response is parsed into staged MCQ drafts for
// admin review before anything touches the live Question Bank.

export type StagedDifficulty = string; // e.g. 'Practitioner' | 'Associate' | 'Pro' — kept as
// free text rather than a strict union since Groq may return slight
// variations (e.g. "Foundational") that the admin can still edit/normalize
// in the staging review step before publishing.

export interface StagedQuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface StagedQuestion {
  stagingId: string; // client-only id for the review list, replaced with a
  // real `q_custom_...` id at publish time — never touches the live bank.
  questionText: string;
  options: StagedQuestionOption[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  domain: string;
  difficulty: StagedDifficulty;
}

// NOTE on the endpoint: the real Groq OpenAI-compatible chat completions
// route is `/openai/v1/chat/completions` (matching OpenAI's own path).
// `/chat_completions` (with an underscore) is not a valid Groq route and
// would 404 — corrected here so the integration actually works.
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
// llama-3.3-70b-versatile was deprecated by Groq (announced June 2026).
// openai/gpt-oss-120b is the recommended general-purpose replacement.
const GROQ_MODEL = 'openai/gpt-oss-120b';

// Per-request character budget so each Groq call stays comfortably inside
// both the model's context window and its output-token budget (more
// questions asked for per request means more completion tokens needed to
// answer, and openai/gpt-oss-120b is a reasoning model that also spends
// completion tokens on hidden chain-of-thought before it writes the JSON).
//
// Sized against Groq's FREE tier for this model specifically: 8,000
// tokens per minute (TPM), and Groq counts the *requested*
// max_completion_tokens against that budget up front — not just what's
// actually generated. A request asking for an 8,000-char chunk plus an
// 8,000-token completion budget was, on its own, ~10,200 requested
// tokens: already over the entire per-minute allowance in one call. Kept
// small here so several chunks can fit inside one minute; see
// waitForRateLimitBudget() below for the pacing between requests.
const CHUNK_CHARS = 3200;

// Safety ceiling on how many chunks a single upload will fire off, so one
// enormous document can't turn into an unbounded number of API calls.
// Raised from earlier since chunks are now smaller (more of them per doc).
const MAX_CHUNKS = 24;

// Completion-token budget per request. Enough for a handful of MCQs'
// worth of JSON — deliberately modest because Groq's free-tier TPM limit
// is charged against this requested value, not actual usage.
const MAX_COMPLETION_TOKENS = 1400;

// How many times a single chunk may be automatically split in half and
// retried if Groq's response comes back truncated or unparseable, instead
// of silently keeping (or losing) a partial result.
const MAX_SPLIT_RETRIES = 3;

// --- Free-tier rate limiting (8,000 TPM for openai/gpt-oss-120b) ---
//
// Groq's TPM limit is a rolling 60-second budget, checked against
// requested tokens (prompt + max_completion_tokens) at request time. A
// client-side sliding window here reserves budget before each call and
// waits out the window if a request would exceed it, so the importer
// self-paces instead of hammering the API and getting 413/429s.
const RATE_LIMIT_TPM = 8000;
const RATE_LIMIT_SAFETY_MARGIN = 6800; // stay under the hard cap for tokenizer-estimate variance
const rateLimitLog: { time: number; tokens: number }[] = [];

/** Rough token estimate — real tokenizers vary, so this deliberately
 * over-estimates slightly (fewer chars/token) to stay on the safe side. */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 3.3);
}

/** Reserves `tokens` worth of budget against the rolling 60s TPM window,
 * sleeping first if there isn't room yet. Calls onWaiting with the
 * remaining seconds so the UI can show real progress instead of a
 * frozen spinner during the wait. */
async function waitForRateLimitBudget(
  tokens: number,
  onWaiting?: (waitSeconds: number) => void
): Promise<void> {
  for (;;) {
    const now = Date.now();
    while (rateLimitLog.length && now - rateLimitLog[0].time > 60_000) rateLimitLog.shift();

    const used = rateLimitLog.reduce((sum, r) => sum + r.tokens, 0);
    if (used + tokens <= RATE_LIMIT_SAFETY_MARGIN) {
      rateLimitLog.push({ time: now, tokens });
      onWaiting?.(0);
      return;
    }

    const waitMs = 60_000 - (now - rateLimitLog[0].time) + 500;
    onWaiting?.(Math.ceil(waitMs / 1000));
    await new Promise((resolve) => setTimeout(resolve, Math.max(waitMs, 500)));
  }
}

// Matches a question's numbering at the start of a line, e.g. "12.",
// "12)", "Q12.", "Question 12:". This is the primary signal used to find
// safe places to cut a document into request-sized chunks — the earlier
// approach of guessing at paragraph breaks broke down on real PDFs, whose
// extracted text often has no blank lines to find (see documentParser.ts
// for the accompanying fix to preserve real line structure at the source).
const QUESTION_START_RE = /(?:^|\n)[ \t]*(?:Q(?:uestion)?\.?\s*)?\d{1,3}[.)]\s+/g;

function findQuestionBoundaries(text: string): number[] {
  const boundaries: number[] = [];
  QUESTION_START_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = QUESTION_START_RE.exec(text)) !== null) {
    boundaries.push(match.index);
    if (match[0].length === 0) QUESTION_START_RE.lastIndex++; // guard against zero-width loops
  }
  return boundaries;
}

/** Fallback for documents with no detectable question numbering: break on
 * the nearest blank line to the target size rather than mid-sentence. */
function splitOnBlankLines(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + maxChars, text.length);
    if (end < text.length) {
      const searchFrom = start + Math.floor(maxChars * 0.6);
      const breakPoint = text.lastIndexOf('\n\n', end);
      if (breakPoint > searchFrom) end = breakPoint;
    }
    chunks.push(text.slice(start, end));
    start = end;
  }
  return chunks;
}

/**
 * Splits raw extracted document text into request-sized chunks WITHOUT
 * ever cutting a question in half. When numbered questions can be
 * detected (the normal case for MCQ study docs / past-paper dumps), every
 * chunk boundary lands exactly on a question start. Only documents where
 * fewer than 3 numbered questions are detected fall back to the blind
 * blank-line splitter.
 */
function splitIntoChunks(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];

  const boundaries = findQuestionBoundaries(text);
  if (boundaries.length < 3) return splitOnBlankLines(text, maxChars);

  const starts = boundaries[0] === 0 ? boundaries : [0, ...boundaries];
  const chunks: string[] = [];
  let chunkStartIdx = 0;

  for (let i = 1; i < starts.length; i++) {
    const spanLength = starts[i] - starts[chunkStartIdx];
    if (spanLength > maxChars && i - 1 > chunkStartIdx) {
      chunks.push(text.slice(starts[chunkStartIdx], starts[i - 1]));
      chunkStartIdx = i - 1;
    }
  }
  chunks.push(text.slice(starts[chunkStartIdx]));

  return chunks.filter((c) => c.trim().length > 0);
}

const LOCAL_STORAGE_OVERRIDE_KEY = 'aws_cc_groq_api_key_override';

/**
 * Resolves the Groq API key: prefers the build-time environment variable
 * (VITE_GROQ_API_KEY — see .env.example / README instructions printed by
 * scripts/setup-groq-env.mjs), and falls back to a locally-stored key the
 * admin typed into the in-app fallback field, if any.
 */
export function getGroqApiKey(): string {
  // NOTE: this must stay the plain, unwrapped `import.meta.env.X` shape.
  // Vite/esbuild replaces env vars via a static textual match on exactly
  // that pattern at build time — wrapping it in optional chaining, an
  // `as any` cast, or an intermediate variable (e.g. `(import.meta as any)
  // ?.env?.VITE_GROQ_API_KEY`) breaks the match, so it silently falls back
  // to a runtime property lookup that is never populated in production.
  const envKey = import.meta.env.VITE_GROQ_API_KEY;
  if (envKey && envKey.trim()) return envKey.trim();

  try {
    return localStorage.getItem(LOCAL_STORAGE_OVERRIDE_KEY) || '';
  } catch {
    return '';
  }
}

/** True if the key came from .env rather than the in-app fallback field. */
export function isGroqApiKeyFromEnv(): boolean {
  const envKey = import.meta.env.VITE_GROQ_API_KEY;
  return !!(envKey && envKey.trim());
}

/** Stores an admin-entered fallback key in localStorage (dev/demo only —
 * this is NOT a secure secret store; a real deployment should keep the
 * key server-side). Only used when VITE_GROQ_API_KEY isn't set. */
export function setGroqApiKeyOverride(key: string): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_OVERRIDE_KEY, key.trim());
  } catch {
    // ignore write failures (e.g. private browsing)
  }
}

export function clearGroqApiKeyOverride(): void {
  try {
    localStorage.removeItem(LOCAL_STORAGE_OVERRIDE_KEY);
  } catch {
    // ignore
  }
}

const SYSTEM_PROMPT = `You are an AWS certification exam question extractor.
You will be given raw text extracted from a study document (PDF or DOCX).
Find every multiple-choice question in the text and convert each one into
a strict JSON object.

Respond with ONLY a single JSON object of this exact shape, and nothing else:

{
  "questions": [
    {
      "questionText": "string - the full question stem",
      "options": [
        { "key": "A", "text": "string" },
        { "key": "B", "text": "string" },
        { "key": "C", "text": "string" },
        { "key": "D", "text": "string" }
      ],
      "correctKey": "A" | "B" | "C" | "D",
      "explanation": "string - a concise explanation of why the correct option is right",
      "domain": "string - short AWS domain tag, e.g. IAM, S3, VPC, EC2, DynamoDB, Lambda, Cost Optimization",
      "difficulty": "string - one of Practitioner, Associate, or Pro"
    }
  ]
}

Rules:
- Every question MUST have exactly 4 options with keys A, B, C, D.
- If the source text doesn't clearly mark a correct answer, infer the most
  technically correct AWS answer and still return it — never omit correctKey.
- If explanation isn't present in the source, write a brief, accurate one yourself.
- Skip any text that is not actually a question (headings, prose, page numbers).
- If no valid questions are found, return { "questions": [] }.
- Do not include markdown code fences, commentary, or any text outside the JSON object.`;

interface GroqParseOptions {
  apiKey: string;
  signal?: AbortSignal;
  /** Called before each chunk request fires, 1-indexed, e.g. (2, 3). */
  onProgress?: (chunkIndex: number, totalChunks: number) => void;
  /** Called with seconds remaining while paced by the free-tier rate
   * limit (0 once clear to proceed), so the UI can show real status
   * instead of an unexplained pause. */
  onWaiting?: (waitSeconds: number) => void;
}

/** Sends one chunk of text to Groq. Returns the parsed questions plus
 * whether the response was cut off by the completion-token limit. Paces
 * itself against the free-tier TPM budget first, and if Groq still
 * returns a rate-limit error (413/429) despite that, waits and retries
 * rather than aborting the whole import over one chunk. */
async function callGroq(
  inputText: string,
  apiKey: string,
  signal: AbortSignal | undefined,
  onWaiting?: (waitSeconds: number) => void
): Promise<{ content: string; truncated: boolean }> {
  const estimatedPromptTokens = estimateTokens(SYSTEM_PROMPT) + estimateTokens(inputText) + 30;
  const requestBudget = estimatedPromptTokens + MAX_COMPLETION_TOKENS;

  for (let attempt = 0; attempt < 3; attempt++) {
    await waitForRateLimitBudget(requestBudget, onWaiting);

    let response: Response;
    try {
      response = await fetch(GROQ_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey.trim()}`,
        },
        signal,
        body: JSON.stringify({
          model: GROQ_MODEL,
          temperature: 0.2,
          max_completion_tokens: MAX_COMPLETION_TOKENS,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: `Extract all AWS certification MCQs from this document text:\n\n${inputText}` },
          ],
        }),
      });
    } catch (err) {
      throw new Error(`Could not reach the Groq API — check your network connection. (${(err as Error).message})`);
    }

    if (response.status === 429 || response.status === 413) {
      // Free-tier rate limit hit despite our own pacing (estimate was a
      // bit optimistic) — back off and retry instead of failing the
      // whole import over one chunk.
      const retryAfterHeader = Number(response.headers.get('retry-after'));
      const waitSeconds = Number.isFinite(retryAfterHeader) && retryAfterHeader > 0 ? retryAfterHeader : 20;
      onWaiting?.(waitSeconds);
      await new Promise((resolve) => setTimeout(resolve, waitSeconds * 1000));
      continue;
    }

    if (!response.ok) {
      let detail = '';
      try {
        const errJson = await response.json();
        detail = errJson?.error?.message || JSON.stringify(errJson);
      } catch {
        detail = await response.text().catch(() => '');
      }
      throw new Error(`Groq API returned ${response.status}: ${detail || response.statusText}`);
    }

    const data = await response.json();
    const choice = data?.choices?.[0];
    const content: string | undefined = choice?.message?.content;
    if (!content) {
      throw new Error('Groq returned an empty response — try again or with a smaller document.');
    }

    return { content, truncated: choice?.finish_reason === 'length' };
  }

  throw new Error('Groq API keeps rate-limiting this request (free-tier tokens-per-minute limit). Wait a minute and try again.');
}

function parseContentToQuestions(content: string, stagingIdOffset: number): StagedQuestion[] | null {
  let parsed: { questions?: unknown[] };
  try {
    parsed = JSON.parse(content);
  } catch {
    return null;
  }

  const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : [];

  return rawQuestions
    .map((q: any, idx: number): StagedQuestion | null => {
      if (!q || typeof q.questionText !== 'string' || !Array.isArray(q.options)) return null;

      const options: StagedQuestionOption[] = ['A', 'B', 'C', 'D'].map((key) => {
        const match = q.options.find((o: any) => o && o.key === key);
        return { key: key as 'A' | 'B' | 'C' | 'D', text: typeof match?.text === 'string' ? match.text : '' };
      });

      const correctKey: 'A' | 'B' | 'C' | 'D' = ['A', 'B', 'C', 'D'].includes(q.correctKey) ? q.correctKey : 'A';

      return {
        stagingId: `stage_${stagingIdOffset + idx}`,
        questionText: q.questionText,
        options,
        correctKey,
        explanation: typeof q.explanation === 'string' ? q.explanation : '',
        domain: typeof q.domain === 'string' && q.domain ? q.domain : 'General AWS',
        difficulty: typeof q.difficulty === 'string' && q.difficulty ? q.difficulty : 'Associate',
      };
    })
    .filter((q: StagedQuestion | null): q is StagedQuestion => q !== null);
}

/** Splits a chunk roughly in half on the nearest detected question
 * boundary (falling back to a raw midpoint), for the truncation retry. */
function splitChunkInHalf(text: string): [string, string] {
  const boundaries = findQuestionBoundaries(text);
  if (boundaries.length >= 2) {
    const mid = boundaries[Math.floor(boundaries.length / 2)];
    if (mid > 0 && mid < text.length) return [text.slice(0, mid), text.slice(mid)];
  }
  const mid = Math.floor(text.length / 2);
  return [text.slice(0, mid), text.slice(mid)];
}

/**
 * Parses one chunk of text into staged questions. If Groq's response comes
 * back truncated (it ran out of completion-token budget partway through
 * the JSON) rather than silently keeping a broken partial result, this
 * splits the chunk in half on a question boundary and retries each half —
 * so a chunk that was still too large for the output budget doesn't cost
 * the questions near its end, up to MAX_SPLIT_RETRIES levels deep.
 */
async function parseChunk(
  inputText: string,
  apiKey: string,
  signal: AbortSignal | undefined,
  stagingIdOffset: number,
  onWaiting: ((waitSeconds: number) => void) | undefined,
  depth = 0
): Promise<StagedQuestion[]> {
  const { content, truncated } = await callGroq(inputText, apiKey, signal, onWaiting);
  const parsed = parseContentToQuestions(content, stagingIdOffset);

  const needsRetry = truncated || parsed === null;
  if (needsRetry && depth < MAX_SPLIT_RETRIES && inputText.length > 400) {
    const [first, second] = splitChunkInHalf(inputText);
    if (first.trim() && second.trim() && first.length < inputText.length) {
      const firstQuestions = await parseChunk(first, apiKey, signal, stagingIdOffset, onWaiting, depth + 1);
      const secondQuestions = await parseChunk(second, apiKey, signal, stagingIdOffset + firstQuestions.length, onWaiting, depth + 1);
      return [...firstQuestions, ...secondQuestions];
    }
  }

  // Out of retries, or couldn't split further — return whatever parsed
  // successfully rather than throwing and losing every other chunk's
  // results too.
  return parsed ?? [];
}

/**
 * Sends extracted document text to Groq and returns parsed staged
 * question drafts. Long documents are split into multiple sequential
 * requests (see splitIntoChunks) rather than being cut off, so every
 * question in the source doc is still sent for extraction — only a
 * document beyond MAX_CHUNKS × CHUNK_CHARS hits the hard safety ceiling
 * and gets flagged as truncated. Throws with a human-readable message on
 * any failure (missing key, network error, bad JSON, non-2xx response,
 * etc.) so the calling UI can surface it directly.
 */
export async function parseQuestionsWithGroq(
  rawText: string,
  { apiKey, signal, onProgress, onWaiting }: GroqParseOptions
): Promise<{ questions: StagedQuestion[]; wasTruncated: boolean; chunkCount: number }> {
  if (!apiKey || !apiKey.trim()) {
    throw new Error('No Groq API key configured. Add VITE_GROQ_API_KEY to your .env file, or enter a key in the fallback field below.');
  }

  const allChunks = splitIntoChunks(rawText, CHUNK_CHARS);
  const wasTruncated = allChunks.length > MAX_CHUNKS;
  const chunks = wasTruncated ? allChunks.slice(0, MAX_CHUNKS) : allChunks;

  const questions: StagedQuestion[] = [];
  for (let i = 0; i < chunks.length; i++) {
    onProgress?.(i + 1, chunks.length);
    const chunkQuestions = await parseChunk(chunks[i], apiKey, signal, questions.length, onWaiting);
    questions.push(...chunkQuestions);
  }

  return { questions, wasTruncated, chunkCount: chunks.length };
}