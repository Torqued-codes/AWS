// Client-side document text extraction for the Bulk Question Importer.

import * as pdfjsLib from 'pdfjs-dist';

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

export async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const pageTexts: string[] = [];
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const content = await page.getTextContent();

    const items = content.items
      .filter((it): it is typeof it & { str: string; transform: number[] } => 'str' in it && 'transform' in it)
      .map((it) => ({ str: it.str, x: it.transform[4], y: it.transform[5] }))
      .filter((it) => it.str.length > 0);

    items.sort((a, b) => (Math.abs(a.y - b.y) < 2 ? a.x - b.x : b.y - a.y));

    const lines: string[] = [];
    let currentLine: string[] = [];
    let lastY: number | null = null;
    let typicalLineGap = 0;

    for (const item of items) {
      if (lastY === null || Math.abs(item.y - lastY) < 2) {
        currentLine.push(item.str);
      } else {
        const gap = lastY - item.y;
        lines.push(currentLine.join(' ').replace(/\s+/g, ' ').trim());
        if (typicalLineGap > 0 && gap > typicalLineGap * 1.6) lines.push('');
        if (gap > 0) typicalLineGap = typicalLineGap === 0 ? gap : typicalLineGap * 0.7 + gap * 0.3;
        currentLine = [item.str];
      }
      lastY = item.y;
    }
    if (currentLine.length) lines.push(currentLine.join(' ').replace(/\s+/g, ' ').trim());

    pageTexts.push(lines.join('\n'));
  }

  return pageTexts.join('\n\n--- Page Break ---\n\n');
}

export async function extractTextFromDOCX(file: File): Promise<string> {
  const mammoth = await import('mammoth');
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
}

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

