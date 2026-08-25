// Client-side document text extraction for the Bulk Question Importer.
//
// Both PDF and DOCX parsing happen entirely in the browser — no file
// bytes are ever sent to a server. Only the extracted plain text is
// later sent to Groq (see groqService.ts) for question parsing.

import * as pdfjsLib from 'pdfjs-dist';
// Vite-native way to get a bundled, hashed URL for the pdf.js worker
// script so it's included in the production build automatically.
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

export type SupportedDocType = 'pdf' | 'docx';

export function detectDocType(file: File): SupportedDocType | null {
  const name = file.name.toLowerCase();
  if (name.endsWith('.pdf') || file.type === 'application/pdf') return 'pdf';
  if (
    name.endsWith('.docx') ||
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return 'docx';
  }
  return null;
}

/**
 * Extracts raw text from a PDF file entirely client-side using pdfjs-dist.
 * Text items are joined per page, with a page-break marker in between so
 * the AI parser retains some structural context.
 */
export async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const pageTexts: string[] = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ('str' in item ? item.str : ''))
      .join(' ');
    pageTexts.push(pageText);
  }

  return pageTexts.join('\n\n--- Page Break ---\n\n');
}

/**
 * Extracts raw text from a DOCX file entirely client-side using mammoth.
 */
export async function extractTextFromDOCX(file: File): Promise<string> {
  const mammoth = await import('mammoth');
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

/**
 * Detects the file type and routes to the correct extractor.
 * Throws a descriptive error for unsupported file types.
 */
export async function extractTextFromDocument(file: File): Promise<{ text: string; docType: SupportedDocType }> {
  const docType = detectDocType(file);
  if (!docType) {
    throw new Error(`Unsupported file type "${file.name}". Please upload a .pdf or .docx file.`);
  }

  const text = docType === 'pdf'
    ? await extractTextFromPDF(file)
    : await extractTextFromDOCX(file);

  const trimmed = text.trim();
  if (!trimmed) {
    throw new Error(`No readable text could be extracted from "${file.name}". The file may be a scanned/image-only document.`);
  }

  return { text: trimmed, docType };
}
