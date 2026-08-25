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
const GROQ_MODEL = 'llama-3.3-70b-versatile';

// Rough client-side cap so a single request stays comfortably inside the
// model's context window. Longer documents are truncated with a notice
// surfaced back to the admin in the importer UI.
const MAX_INPUT_CHARS = 14000;

const LOCAL_STORAGE_OVERRIDE_KEY = 'aws_cc_groq_api_key_override';

/**
 * Resolves the Groq API key: prefers the build-time environment variable
 * (VITE_GROQ_API_KEY — see .env.example / README instructions printed by
 * scripts/setup-groq-env.mjs), and falls back to a locally-stored key the
 * admin typed into the in-app fallback field, if any.
 */
export function getGroqApiKey(): string {
  const envKey = (import.meta as any)?.env?.VITE_GROQ_API_KEY as string | undefined;
  if (envKey && envKey.trim()) return envKey.trim();

  try {
    return localStorage.getItem(LOCAL_STORAGE_OVERRIDE_KEY) || '';
  } catch {
    return '';
  }
}

/** True if the key came from .env rather than the in-app fallback field. */
export function isGroqApiKeyFromEnv(): boolean {
  const envKey = (import.meta as any)?.env?.VITE_GROQ_API_KEY as string | undefined;
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
}

/**
 * Sends extracted document text to Groq and returns parsed staged
 * question drafts. Throws with a human-readable message on any failure
 * (missing key, network error, bad JSON, non-2xx response, etc.) so the
 * calling UI can surface it directly.
 */
export async function parseQuestionsWithGroq(
  rawText: string,
  { apiKey, signal }: GroqParseOptions
): Promise<{ questions: StagedQuestion[]; wasTruncated: boolean }> {
  if (!apiKey || !apiKey.trim()) {
    throw new Error('No Groq API key configured. Add VITE_GROQ_API_KEY to your .env file, or enter a key in the fallback field below.');
  }

  const wasTruncated = rawText.length > MAX_INPUT_CHARS;
  const inputText = wasTruncated ? rawText.slice(0, MAX_INPUT_CHARS) : rawText;

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
  const content: string | undefined = data?.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error('Groq returned an empty response — try again or with a smaller document.');
  }

  let parsed: { questions?: unknown[] };
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error('Groq returned malformed JSON. Try again — occasionally the model drifts from the schema.');
  }

  const rawQuestions = Array.isArray(parsed.questions) ? parsed.questions : [];

  const questions: StagedQuestion[] = rawQuestions
    .map((q: any, idx: number): StagedQuestion | null => {
      if (!q || typeof q.questionText !== 'string' || !Array.isArray(q.options)) return null;

      const options: StagedQuestionOption[] = ['A', 'B', 'C', 'D'].map((key) => {
        const match = q.options.find((o: any) => o && o.key === key);
        return { key: key as 'A' | 'B' | 'C' | 'D', text: typeof match?.text === 'string' ? match.text : '' };
      });

      const correctKey: 'A' | 'B' | 'C' | 'D' = ['A', 'B', 'C', 'D'].includes(q.correctKey) ? q.correctKey : 'A';

      return {
        stagingId: `stage_${Date.now()}_${idx}`,
        questionText: q.questionText,
        options,
        correctKey,
        explanation: typeof q.explanation === 'string' ? q.explanation : '',
        domain: typeof q.domain === 'string' && q.domain ? q.domain : 'General AWS',
        difficulty: typeof q.difficulty === 'string' && q.difficulty ? q.difficulty : 'Associate',
      };
    })
    .filter((q: StagedQuestion | null): q is StagedQuestion => q !== null);

  return { questions, wasTruncated };
}
