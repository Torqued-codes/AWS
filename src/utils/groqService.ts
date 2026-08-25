export type StagedDifficulty = string;

export interface StagedQuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface StagedQuestion {
  stagingId: string;
  questionText: string;
  options: StagedQuestionOption[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  domain: string;
  difficulty: StagedDifficulty;
}

const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'openai/gpt-oss-120b';

const CHUNK_CHARS = 3200;
const MAX_CHUNKS = 24;
const MAX_COMPLETION_TOKENS = 1100;
const MAX_SPLIT_RETRIES = 3;

const RATE_LIMIT_TPM = 8000;
const RATE_LIMIT_SAFETY_MARGIN = 7600;
const rateLimitLog: { time: number; tokens: number }[] = [];

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 3.6);
}

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

const QUESTION_START_RE = /(?:^|\n)[ \t]*(?:Q(?:uestion)?\.?\s*)?\d{1,3}[.)]\s+/g;

function findQuestionBoundaries(text: string): number[] {
  const boundaries: number[] = [];
  QUESTION_START_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = QUESTION_START_RE.exec(text)) !== null) {
    boundaries.push(match.index);
    if (match[0].length === 0) QUESTION_START_RE.lastIndex++;
  }
  return boundaries;
}

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

export function getGroqApiKey(): string {
  const envKey = import.meta.env.VITE_GROQ_API_KEY;
  if (envKey && envKey.trim()) return envKey.trim();

  try {
    return localStorage.getItem(LOCAL_STORAGE_OVERRIDE_KEY) || '';
  } catch {
    return '';
  }
}

export function isGroqApiKeyFromEnv(): boolean {
  const envKey = import.meta.env.VITE_GROQ_API_KEY;
  return !!(envKey && envKey.trim());
}

export function setGroqApiKeyOverride(key: string): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_OVERRIDE_KEY, key.trim());
  } catch {
  }
}

export function clearGroqApiKeyOverride(): void {
  try {
    localStorage.removeItem(LOCAL_STORAGE_OVERRIDE_KEY);
  } catch {
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
  onProgress?: (chunkIndex: number, totalChunks: number) => void;
  onWaiting?: (waitSeconds: number) => void;
}

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

function splitChunkInHalf(text: string): [string, string] {
  const boundaries = findQuestionBoundaries(text);
  if (boundaries.length >= 2) {
    const mid = boundaries[Math.floor(boundaries.length / 2)];
    if (mid > 0 && mid < text.length) return [text.slice(0, mid), text.slice(mid)];
  }
  const mid = Math.floor(text.length / 2);
  return [text.slice(0, mid), text.slice(mid)];
}

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

  return parsed ?? [];
}

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
