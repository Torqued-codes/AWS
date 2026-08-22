import React from 'react';
import { useGame } from '../../context/GameContext';
import { 
  Building2, 
  Zap, 
  Heart, 
  Award, 
  ArrowRight, 
  Terminal,
  Compass,
  CheckCircle2,
  Sparkles,
  Shield,
  Database,
  Globe
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { HeroAWSScene } from './HeroAWSScene';
import { HeroThreeScene } from './HeroThreeScene';

// Typed shape for the metrics bar — deliberately decoupled from any one
// data source. Today these four values are derived from the in-memory
// `students`/`questions` state; once Supabase is wired in, the same
// shape can be populated from a `select count(*) ...` / realtime
// subscription without touching the render layer below.
interface StatCardData {
  label: string;
  value: string;
  sub: string;
  color: string;
  glow: string;
}

const StatCard: React.FC<{ stat: StatCardData }> = ({ stat }) => (
  <div
    className={`group relative backdrop-blur-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${stat.glow} cursor-default`}
  >
    {/* Inner glow on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(255,153,0,0.05) 0%, transparent 70%)' }} />

    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">{stat.label}</div>
    <div className={`text-2xl sm:text-3xl font-stats font-bold ${stat.color} leading-none`}>{stat.value}</div>
    <div className="text-[11px] text-zinc-500 font-sans mt-1">{stat.sub}</div>
  </div>
);

export const HomePage: React.FC = () => {
  const { students, questions, activeWeek, currentUser, setActiveTab } = useGame();

  const highestFloors = Math.max(...students.map(s => s.floors), 1);
  const totalPoints = students.reduce((sum, s) => sum + s.points, 0);
  const weekQCount = questions.filter(q => q.weekNumber === activeWeek).length;

  const stats: StatCardData[] = [
    { label: 'REGISTERED TOWERS', value: students.length.toString(), sub: 'Active Architects', color: 'text-emerald-400', glow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]' },
    { label: 'TOTAL SCORE POOL', value: totalPoints.toLocaleString(), sub: 'Cumulative Points', color: 'text-aws-orange', glow: 'group-hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]' },
    { label: 'APEX HEIGHT', value: `${highestFloors}F`, sub: 'Tallest Tower', color: 'text-cyan-400', glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]' },
    { label: 'ACTIVE SPRINT', value: `W${activeWeek}`, sub: `${weekQCount} Modules Live`, color: 'text-amber-400', glow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]' },
  ];

  const features = [
    {
      icon: Building2,
      iconColor: 'text-aws-orange',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      title: '3D Procedural Metropolis',
      desc: 'Built on Three.js and WebGL. Every 50 points adds a physical floor to your skyscraper. Rotate 360°, pan across blocks, and inspect peers in a live city.',
      tag: 'Git-City Engine',
    },
    {
      icon: Heart,
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      title: '5-Heart Attempt Engine',
      desc: 'Anti-guess mechanics: 5 hearts per player. Wrong answers cost a heart. Reaching zero triggers a cooldown (+1 heart every 45 mins). Earn more by studying.',
      tag: 'Adaptive Pacing',
    },
    {
      icon: Terminal,
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
      title: 'Official Cert Question Bank',
      desc: 'Curated AWS Cloud Practitioner & Solutions Architect Associate questions covering IAM, S3, VPC, EC2, DynamoDB, and the Well-Architected Framework.',
      tag: 'Domain-Tagged',
    },
    {
      icon: Award,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Verifiable Certificates',
      desc: 'Top weekly and monthly architects unlock AWS Student Club certificates with dynamic verification codes, custom rank titles, and 1-click high-res export.',
      tag: 'SPOC Signed',
    },
  ];

  return (
    <div className="text-zinc-100 overflow-hidden">

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">

        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0">
          {/* Primary radial warm glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/6 rounded-full blur-[120px]" />
          {/* Secondary cyan accent bottom-right */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-cyan-500/4 rounded-full blur-[100px]" />
          {/* Top-left subtle purple */}
          <div className="absolute top-0 left-0 w-[300px] h-[200px] bg-purple-500/3 rounded-full blur-[80px]" />

          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Horizontal rule divider line (Vercel-esque) */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Ambient Three.js mesh field — genuine WebGL low-poly nodes in
            the amber/gold palette, rendered behind the HTML service-icon
            labels/lines below so both layers combine into one scene. */}
        <HeroThreeScene />

        {/* Floating AWS service icons */}
        <HeroAWSScene />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Animated pill badge with amber glowing border */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/20 backdrop-blur-md text-amber-300 font-medium text-xs font-mono mb-8 animate-pulse">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
            <span>AWS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">COLLEGE CHAPTER</span>
            <Sparkles className="w-3 h-3 text-amber-400/60" />
          </div>

          {/* Main headline — Plus Jakarta Sans. Primary words render crisp
              white with tight tracking; only the key phrases get the
              metallic gold-to-amber gradient treatment. */}
          <h1
            className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold tracking-tight mb-8 text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            <span>Learn </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              AWS in 3D.
            </span>
            <br className="hidden sm:block" />
            <span> Construct your </span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              skyline.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            A gamified cloud computing arena for engineering students. Solve weekly certification MCQs, protect your 5 hearts, and watch your skyscraper rise on an interactive 3D metropolis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            {/* Primary — Glow CTA */}
            <button
              onClick={() => { soundEngine.playTap(); setActiveTab('city'); }}
              className="group w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-bold text-sm text-zinc-950 flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
                boxShadow: '0 0 25px rgba(255,153,0,0.3), 0 4px 15px rgba(255,153,0,0.2)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 45px rgba(255,153,0,0.5), 0 8px 25px rgba(255,153,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 25px rgba(255,153,0,0.3), 0 4px 15px rgba(255,153,0,0.2)')}
            >
              <Compass className="w-4 h-4" />
              <span>Explore 3D City</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary — Glassy dark */}
            <button
              onClick={() => { soundEngine.playTap(); setActiveTab('quiz'); }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-zinc-200 flex items-center justify-center gap-2 transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-aws-orange" />
              <span>Launch Weekly Quiz</span>
            </button>
          </div>

          {/* Micro-hint */}
          <p className="text-[11px] text-zinc-600 font-mono mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Logged in as <span className="text-zinc-400">{currentUser.name}</span> · {currentUser.department} · {currentUser.points} pts · {currentUser.floors} floors
          </p>
        </div>
      </section>

      {/* ── STATS BAR (Frosted Glass Cards) ─────────────────────────────── */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-aws-orange font-bold">
              PLATFORM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-3 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              Engineered for real AWS cert mastery
            </h2>
            <p className="text-sm text-zinc-400 font-sans mt-3 max-w-lg mx-auto">
              Four interconnected systems that make learning AWS feel more like a game than a chore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group relative backdrop-blur-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  {/* Subtle glow that blooms in on hover, matching the card border accent */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.06) 0%, transparent 65%)' }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl ${f.iconBg} border flex items-center justify-center ${f.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2 py-1 rounded-lg tracking-wide">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                  <div className="relative z-10 mt-5 pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Included in this sprint</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM LAUNCH CTA ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden border border-neutral-800/60"
            style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #111418 50%, #0d0f14 100%)' }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[200px] bg-amber-500/6 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-400 mb-5">
                <Sparkles className="w-3 h-3" />
                <span>Week {activeWeek} is LIVE</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Ready to build your first floor?
              </h3>
              <p className="text-sm text-zinc-400 font-sans max-w-sm mx-auto mb-8">
                You're logged in as <strong className="text-white font-display">{currentUser.name}</strong>. Jump straight into this week's challenge.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => { soundEngine.playTap(); setActiveTab('quiz'); }}
                  className="group px-8 py-3.5 rounded-xl font-display font-bold text-sm text-zinc-950 flex items-center gap-2 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
                    boxShadow: '0 0 25px rgba(255,153,0,0.3)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 45px rgba(255,153,0,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 25px rgba(255,153,0,0.3)')}
                >
                  <Zap className="w-4 h-4" />
                  <span>Begin Week {activeWeek} Sprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => { soundEngine.playTap(); setActiveTab('leaderboard'); }}
                  className="px-8 py-3.5 rounded-xl font-display font-semibold text-sm text-zinc-200 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2"
                >
                  <span>View Rankings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
