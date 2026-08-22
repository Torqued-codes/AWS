import React from 'react';
import { useGame } from '../../context/GameContext';
import { 
  ExternalLink, 
  Award, 
  BookOpen, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const EventsHub: React.FC = () => {
  const { announcements } = useGame();

  const certRoadmaps = [
    {
      title: 'AWS Certified Cloud Practitioner (CLF-C02)',
      level: 'Foundational',
      badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      description: 'Ideal starting credential for all college students. Validates foundational understanding of AWS cloud services, security, architecture, pricing, and support models.',
      voucherStatus: 'Student Exam Voucher Eligible',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      level: 'Associate',
      badgeColor: 'bg-aws-orange/15 text-aws-orange border-aws-orange/30',
      description: 'The industry standard for cloud engineering. Covers resilient architectures, high-performing compute/storage systems, secure VPC network topologies, and cost optimization.',
      voucherStatus: 'Curriculum Covered in Arena',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
    },
    {
      title: 'AWS Certified Developer - Associate (DVA-C02)',
      level: 'Associate',
      badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      description: 'Focuses on developing, deploying, and debugging cloud applications using AWS Lambda, DynamoDB, API Gateway, and automated CI/CD pipelines.',
      voucherStatus: 'Hands-on Labs Available',
      link: 'https://aws.amazon.com/certification/certified-developer-associate/'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in text-zinc-100 font-sans">
      
      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-aws-orange mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>RESOURCES & COMMUNITY HUB</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading text-white">
          Certification Tracks & Events
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-1 max-w-xl">
          Official certification blueprints, study jams, and official WhatsApp group channels curated by your college SPOC.
        </p>

        <div className="flex flex-wrap items-center gap-2.5 mt-5">
          <a
            href="https://chat.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playTap()}
            className="px-4 py-2 rounded-xl bg-aws-orange hover:bg-amber-500 text-zinc-950 text-xs font-mono font-bold inline-flex items-center gap-2 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Official WhatsApp Group</span>
          </a>

          <a
            href="https://explore.skillbuilder.aws/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playTap()}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-mono font-semibold inline-flex items-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>AWS Skill Builder Free Labs</span>
          </a>
        </div>
      </div>

      {/* Announcements */}
      {announcements.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-heading text-white mb-4">
            Active Community Broadcasts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            {announcements.map((ann) => (
              <div 
                key={ann.id}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[10px] uppercase font-bold">
                      {ann.category}
                    </span>
                    <span className="text-[10px] text-zinc-500">{ann.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5 font-sans">
                    {ann.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                    {ann.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80">
                  <a
                    href={ann.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playTap()}
                    className="text-aws-orange hover:text-amber-300 font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{ann.linkText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certification Tracks */}
      <div>
        <h2 className="text-xl font-heading text-white mb-4">
          Certification Exam Blueprints
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certRoadmaps.map((cert, i) => (
            <div 
              key={i}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${cert.badgeColor}`}>
                    {cert.level}
                  </span>
                  <span className="text-[10px] text-zinc-400">AWS Track</span>
                </div>

                <h3 className="text-sm font-heading font-normal text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playTap()}
                className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>View Blueprint</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
