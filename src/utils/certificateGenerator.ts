import { Student } from '../types';

export interface CertificateData {
  student: Student;
  rankTitle: string;
  category: 'Weekly Cloud Champion' | 'Monthly Grandmaster' | 'Cert Domain Achiever';
  dateString: string;
  verificationHash: string;
}

export function generateVerificationHash(rollNumber: string, date: string): string {
  let hash = 0;
  const str = `AWS-CC-${rollNumber}-${date}-VERIFIED`;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `AWS-${Math.abs(hash).toString(16).toUpperCase()}-2026`;
}

export function drawCertificateToCanvas(canvas: HTMLCanvasElement, data: CertificateData): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 1200;
  const height = 800;
  canvas.width = width;
  canvas.height = height;

  // 1. Background (Deep Dark Slate with subtle radiant glow)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#090D16');
  bgGrad.addColorStop(0.5, '#111927');
  bgGrad.addColorStop(1, '#080C14');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Radial glow around center
  const radialGlow = ctx.createRadialGradient(width / 2, height / 2 - 50, 50, width / 2, height / 2, 500);
  radialGlow.addColorStop(0, 'rgba(255, 153, 0, 0.08)');
  radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = radialGlow;
  ctx.fillRect(0, 0, width, height);

  // 2. Cyber Circuit & Border Frame
  ctx.strokeStyle = '#1E293B';
  ctx.lineWidth = 1;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  // Gold Inner Accent Border
  const goldGrad = ctx.createLinearGradient(50, 50, width - 50, height - 50);
  goldGrad.addColorStop(0, '#FF9900');
  goldGrad.addColorStop(0.5, '#FFD700');
  goldGrad.addColorStop(1, '#FF7700');
  ctx.strokeStyle = goldGrad;
  ctx.lineWidth = 3;
  ctx.strokeRect(45, 45, width - 90, height - 90);

  // Corner Cyber Accents
  const cornerSize = 24;
  ctx.fillStyle = '#FF9900';
  // Top-left
  ctx.fillRect(40, 40, cornerSize, 4);
  ctx.fillRect(40, 40, 4, cornerSize);
  // Top-right
  ctx.fillRect(width - 40 - cornerSize, 40, cornerSize, 4);
  ctx.fillRect(width - 44, 40, 4, cornerSize);
  // Bottom-left
  ctx.fillRect(40, height - 44, cornerSize, 4);
  ctx.fillRect(40, height - 40 - cornerSize, 4, cornerSize);
  // Bottom-right
  ctx.fillRect(width - 40 - cornerSize, height - 44, cornerSize, 4);
  ctx.fillRect(width - 44, height - 40 - cornerSize, 4, cornerSize);

  // 3. Top Header / Brand
  ctx.textAlign = 'center';
  ctx.font = '700 18px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#FF9900';
  ctx.fillText('AWS STUDENT CLOUD COMMUNITY • COLLEGE CHAPTER', width / 2, 105);

  ctx.font = '800 38px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('CERTIFICATE OF ACHIEVEMENT', width / 2, 160);

  ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('THIS PRESTIGIOUS BADGE OF EXCELLENCE IS PROUDLY PRESENTED TO', width / 2, 205);

  // 4. Student Name
  ctx.font = '800 48px "Space Grotesk", sans-serif';
  const nameGrad = ctx.createLinearGradient(width / 2 - 250, 0, width / 2 + 250, 0);
  nameGrad.addColorStop(0, '#FFFFFF');
  nameGrad.addColorStop(0.5, '#FFD700');
  nameGrad.addColorStop(1, '#FF9900');
  ctx.fillStyle = nameGrad;
  ctx.fillText(data.student.name.toUpperCase(), width / 2, 275);

  // Underline for name
  ctx.strokeStyle = '#FF9900';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 180, 295);
  ctx.lineTo(width / 2 + 180, 295);
  ctx.stroke();

  // 5. Student Details (Roll & Dept)
  ctx.font = '600 16px "JetBrains Mono", monospace';
  ctx.fillStyle = '#38BDF8';
  ctx.fillText(
    `[ ROLL: ${data.student.rollNumber} | DEPT: ${data.student.department} | ${data.student.year} YEAR ]`,
    width / 2,
    335
  );

  // 6. Achievement Description
  ctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#CBD5E1';
  ctx.fillText(
    `For outstanding demonstration of Cloud Computing expertise, active weekly participation,`,
    width / 2,
    390
  );
  ctx.fillText(
    `and securing a top rank in the AWS Cloud City gamified architecture challenges.`,
    width / 2,
    420
  );

  // 7. Stat Badges Center Bar
  const boxY = 465;
  const boxW = 190;
  const boxH = 75;
  const gap = 30;
  const startX = width / 2 - (boxW * 3 + gap * 2) / 2;

  // Box 1: Points
  drawBadgeBox(ctx, startX, boxY, boxW, boxH, 'TOTAL SCORE', `${data.student.points} PTS`, '#10B981');
  // Box 2: Skyline Height
  drawBadgeBox(ctx, startX + boxW + gap, boxY, boxW, boxH, 'SKYLINE TOWER', `${data.student.floors} FLOORS`, '#FF9900');
  // Box 3: Category
  drawBadgeBox(ctx, startX + (boxW + gap) * 2, boxY, boxW, boxH, 'AWARD TIER', data.rankTitle, '#8B5CF6');

  // 8. Signatures & Footer
  const footerY = 660;

  // Left: SPOC Signature
  ctx.textAlign = 'center';
  ctx.font = 'italic 700 22px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#F8FAFC';
  ctx.fillText('AWS Student SPOC', 240, footerY);
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(140, footerY + 12);
  ctx.lineTo(340, footerY + 12);
  ctx.stroke();
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('FACULTY & STUDENT COORDINATOR', 240, footerY + 32);

  // Right: Club President / Lead
  ctx.font = 'italic 700 22px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#F8FAFC';
  ctx.fillText('AWS Community Lead', width - 240, footerY);
  ctx.beginPath();
  ctx.moveTo(width - 340, footerY + 12);
  ctx.lineTo(width - 140, footerY + 12);
  ctx.stroke();
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('COLLEGE TECHNICAL CHAPTER', width - 240, footerY + 32);

  // Center Seal Stamp
  ctx.beginPath();
  ctx.arc(width / 2, footerY + 5, 42, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 153, 0, 0.1)';
  ctx.fill();
  ctx.strokeStyle = '#FF9900';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = '800 11px "Space Grotesk", sans-serif';
  ctx.fillStyle = '#FF9900';
  ctx.fillText('VERIFIED', width / 2, footerY - 5);
  ctx.fillText('AWS CLUB', width / 2, footerY + 10);
  ctx.fillText('2026', width / 2, footerY + 24);

  // Verification Hash in footer bottom
  ctx.font = '500 12px "JetBrains Mono", monospace';
  ctx.fillStyle = '#64748B';
  ctx.fillText(`VERIFICATION CODE: ${data.verificationHash} • ISSUED ON: ${data.dateString}`, width / 2, height - 55);
}

function drawBadgeBox(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  value: string,
  accentColor: string
) {
  ctx.fillStyle = '#0F172A';
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, 8);
  ctx.fill();

  ctx.strokeStyle = '#1E293B';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Top accent bar
  ctx.fillStyle = accentColor;
  ctx.fillRect(x + 12, y, w - 24, 2);

  ctx.textAlign = 'center';
  ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText(label, x + w / 2, y + 25);

  ctx.font = '700 18px "Space Grotesk", sans-serif';
  ctx.fillStyle = accentColor;
  ctx.fillText(value, x + w / 2, y + 54);
}

export function downloadCertificateAsImage(canvas: HTMLCanvasElement, filename: string): void {
  const link = document.createElement('a');
  link.download = `${filename}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
