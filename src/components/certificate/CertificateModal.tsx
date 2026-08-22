import React, { useEffect, useRef, useState } from 'react';
import { Student } from '../../types';
import { 
  X, 
  Download, 
  Share2, 
  Check, 
  Award, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { 
  drawCertificateToCanvas, 
  downloadCertificateAsImage, 
  generateVerificationHash 
} from '../../utils/certificateGenerator';
import { soundEngine } from '../../utils/soundEngine';

interface CertificateModalProps {
  student: Student | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  student,
  onClose
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!student || !canvasRef.current) return;

    const dateStr = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const hash = generateVerificationHash(student.rollNumber, dateStr);

    let rankTitle = 'Cloud Practitioner Achiever';
    if (student.points >= 1000) rankTitle = 'Apex Cloud Champion (#1 Tier)';
    else if (student.points >= 500) rankTitle = 'Solutions Architect Elite';
    else if (student.points >= 250) rankTitle = 'VPC & Serverless Pioneer';

    drawCertificateToCanvas(canvasRef.current, {
      student,
      rankTitle,
      category: 'Weekly Cloud Champion',
      dateString: dateStr,
      verificationHash: hash
    });
  }, [student]);

  if (!student) return null;

  const handleDownload = () => {
    soundEngine.playFloorAdded();
    if (canvasRef.current) {
      downloadCertificateAsImage(canvasRef.current, `AWS_Certificate_${student.rollNumber}_${student.name.replace(/\s+/g, '_')}`);
    }
  };

  const handleShare = () => {
    soundEngine.playTap();
    const shareText = `🎓 I just earned the AWS Cloud City Certificate of Achievement with ${student.points} points and an official ${student.floors}-floor tower! Check out our college AWS community leaderboard.`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0B0F19] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100 flex flex-col items-center">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-aws-orange/15 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => { soundEngine.playTap(); onClose(); }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="px-3 py-0.5 rounded-full bg-aws-orange/15 text-aws-orange border border-aws-orange/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              OFFICIAL AWS CLUB CREDENTIAL
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
            Certificate of Achievement
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Verified student credential for <strong className="text-white">{student.name}</strong> ({student.rollNumber})
          </p>
        </div>

        {/* Certificate Canvas Preview */}
        <div className="relative w-full max-w-3xl aspect-[1200/800] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 mb-6 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Actions Bar */}
        <div className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 cyber-btn-primary py-3 text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download High-Res PNG</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto cyber-btn-secondary py-3 px-6 text-sm flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'Copied Share Link!' : 'Share Achievement'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
