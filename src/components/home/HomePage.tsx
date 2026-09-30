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
import { OverviewCityScene } from './OverviewCityScene';
import { SectionAmbientBackdrop } from './SectionAmbientBackdrop';

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
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(255,153,0,0.05) 0%, transparent 70%)'
      }}
    />

    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">
      {stat.label}
    </div>
    <div className={`text-2xl sm:text-3xl font-stats font-bold ${stat.color} leading-none`}>
      {stat.value}
    </div>
    <div className="text-[11px] text-zinc-500 font-sans mt-1">{stat.sub}</div>
  </div>
);

export const HomePage: React.FC = () => {
  const { students, questions, activeWeek, currentUser, setActiveTab } = useGame();

  const highestFloors = Math.max(...students.map(s => s.floors), 1);
  const totalPoints = students.reduce((sum, s) => sum + s.points, 0);
  const weekQCount = questions.filter(q => q.weekNumber === activeWeek).length;

  const stats: StatCardData[] = [
    {
      label: 'REGISTERED TOWERS',
      value: students.length.toString(),
      sub: 'Active Architects',
      color: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]'
    },
    {
      label: 'TOTAL SCORE POOL',
      value: totalPoints.toLocaleString(),
      sub: 'Cumulative Points',
      color: 'text-aws-orange',
      glow: 'group-hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]'
    },
    {
      label: 'APEX HEIGHT',
      value: `${highestFloors}F`,
      sub: 'Tallest Tower',
      color: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
    },
    {
      label: 'ACTIVE SPRINT',
      value: `W${activeWeek}`,
      sub: `${weekQCount} Modules Live`,
      color: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]'
    }
  ];

  const features = [
    {
      icon: Building2,
      iconColor: 'text-aws-orange',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      title: '3D Procedural Metropolis',
      desc: 'Real-Time WebGL City Engine — Visualizes code contributions and quiz scores as physical skyscraper tiers using Three.js instanced meshes. Features 360° orbit controls, dynamic lighting shaders, and live peer block inspection.',
      tag: 'Git-City Engine'
    },
    {
      icon: Heart,
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      title: '5-Heart Attempt Engine',
      desc: 'Gamified Knowledge Retention — Prevents brute-force guessing via a strict 5-heart stamina pool. Incorrect answers trigger an automated 45-minute cooldown per heart, incentivizing thorough study over random attempts.',
      tag: 'Adaptive Pacing'
    },
    {
      icon: Terminal,
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
      title: 'Official Cert Question Bank',
      desc: 'AWS Practitioner & SAA-C03 Questions — 500+ domain-tagged MCQs covering IAM policies, S3 lifecycle rules, VPC subnet architecture, EC2 auto-scaling, and Well-Architected frameworks.',
      tag: 'Domain-Tagged'
    },
    {
      icon: Award,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Verifiable Certificates',
      desc: 'On-Chain & Dynamic Certificates — High-performing architects generate cryptographic verification hashes, custom rank badges, and high-resolution PDF exports signed by chapter SPOCs.',
      tag: 'SPOC Signed'
    }
  ];

  return (
    <div className="text-zinc-100 overflow-hidden">

      {/* ── OVERVIEW CITY HERO ───────────────────────────────────────────── */}
      <OverviewCityScene
        onExplore={() => {
          soundEngine.playTap();
          setActiveTab('city');
        }}
        onQuiz={() => {
          soundEngine.playTap();
          setActiveTab('quiz');
        }}
      />

      {/* ── CONTINUATION OF THE CITY INTO THE LOWER HOMEPAGE ────────────── */}
      <div className="relative isolate overflow-hidden bg-[#07090e]">

        {/* ================================================================
            CITY CONTINUATION BACKGROUND
            This is intentionally behind all existing HomePage content.
            ================================================================ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <svg
            viewBox="0 0 1440 1500"
            preserveAspectRatio="xMidYMin slice"
            className="absolute inset-0 h-full w-full"
          >
            <defs>

              {/* Atmospheric blue glow */}
              <radialGradient id="cityAtmosphere" cx="50%" cy="15%" r="70%">
                <stop offset="0%" stopColor="#123b5c" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#0b263d" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#07090e" stopOpacity="0" />
              </radialGradient>

              {/* Subtle road illumination */}
              <linearGradient id="cityRoad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#151d26" />
                <stop offset="45%" stopColor="#202b36" />
                <stop offset="100%" stopColor="#10161d" />
              </linearGradient>

              {/* Distant city haze */}
              <linearGradient id="cityHaze" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1b6387" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#071019" stopOpacity="0" />
              </linearGradient>

              {/* Orange atmospheric accent */}
              <radialGradient id="orangeAtmosphere">
                <stop offset="0%" stopColor="#ff9900" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Overall blue/cyan atmospheric continuation */}
            <rect
              x="0"
              y="0"
              width="1440"
              height="1500"
              fill="url(#cityAtmosphere)"
            />

            {/* Distant horizon haze */}
            <rect
              x="0"
              y="90"
              width="1440"
              height="500"
              fill="url(#cityHaze)"
            />

            {/* ============================================================
                DISTANT FUTURISTIC SKYLINE
                ============================================================ */}
            <g
              fill="#0c2436"
              stroke="#24536c"
              strokeOpacity="0.38"
              strokeWidth="1"
            >
              {/* Left skyline */}
              <path d="M0 410V300H55V410H0Z" />
              <path d="M48 410V245H91V410H48Z" />
              <path d="M86 410V330H132V410H86Z" />
              <path d="M125 410V215H174V410H125Z" />
              <path d="M168 410V280H220V410H168Z" />
              <path d="M214 410V190H270V410H214Z" />
              <path d="M263 410V315H315V410H263Z" />

              {/* Central skyline */}
              <path d="M305 410V230H355V410H305Z" />
              <path d="M347 410V175H405V410H347Z" />
              <path d="M397 410V255H455V410H397Z" />
              <path d="M448 410V145H505V410H448Z" />
              <path d="M498 410V215H560V410H498Z" />
              <path d="M553 410V285H610V410H553Z" />

              {/* Right skyline */}
              <path d="M603 410V205H655V410H603Z" />
              <path d="M648 410V265H706V410H648Z" />
              <path d="M698 410V170H754V410H698Z" />
              <path d="M748 410V245H805V410H748Z" />
              <path d="M799 410V195H854V410H799Z" />
              <path d="M848 410V300H910V410H848Z" />
              <path d="M904 410V225H965V410H904Z" />
              <path d="M959 410V155H1020V410H959Z" />
              <path d="M1014 410V270H1072V410H1014Z" />
              <path d="M1065 410V210H1120V410H1065Z" />
              <path d="M1114 410V295H1175V410H1114Z" />
              <path d="M1168 410V180H1228V410H1168Z" />
              <path d="M1220 410V250H1280V410H1220Z" />
              <path d="M1270 410V200H1330V410H1270Z" />
              <path d="M1320 410V285H1385V410H1320Z" />
              <path d="M1375 410V230H1440V410H1375Z" />
            </g>

            {/* Skyline rooftop accents */}
            <g
              fill="none"
              stroke="#3a8caf"
              strokeOpacity="0.25"
              strokeWidth="2"
            >
              <path d="M125 215V195H174V215" />
              <path d="M214 190V165H270V190" />
              <path d="M347 175V150H405V175" />
              <path d="M448 145V118H505V145" />
              <path d="M698 170V145H754V170" />
              <path d="M959 155V130H1020V155" />
              <path d="M1168 180V152H1228V180" />
              <path d="M1270 200V178H1330V200" />
            </g>

            {/* ============================================================
                CITY WINDOWS / LIGHTS
                ============================================================ */}
            <g fill="#38bdf8" opacity="0.28">
              {Array.from({ length: 88 }, (_, i) => {
                const x = 16 + (i * 157) % 1400;
                const y = 220 + (i * 47) % 145;

                return (
                  <rect
                    key={`window-${i}`}
                    x={x}
                    y={y}
                    width="4"
                    height="8"
                    rx="1"
                  />
                );
              })}
            </g>

            <g fill="#ff9900" opacity="0.22">
              {Array.from({ length: 28 }, (_, i) => {
                const x = 45 + (i * 211) % 1350;
                const y = 245 + (i * 61) % 120;

                return (
                  <rect
                    key={`orange-window-${i}`}
                    x={x}
                    y={y}
                    width="3"
                    height="6"
                    rx="1"
                  />
                );
              })}
            </g>

            {/* ============================================================
                DISTANT PARK / GREEN BELT
                ============================================================ */}
            <path
              d="M0 410C180 350 330 455 520 405S830 345 1035 420s275 25 405-20V650H0Z"
              fill="#103722"
              opacity="0.72"
            />

            <path
              d="M0 470C210 420 360 510 560 465S900 415 1110 475s240 30 330 0V670H0Z"
              fill="#123f29"
              opacity="0.48"
            />

            {/* Park tree clusters */}
            <g fill="#1c5937" opacity="0.68">
              {Array.from({ length: 42 }, (_, i) => {
                const x = 20 + (i * 83) % 1400;
                const y = 430 + (i * 37) % 150;
                const r = 7 + (i % 4) * 2;

                return (
                  <circle
                    key={`tree-${i}`}
                    cx={x}
                    cy={y}
                    r={r}
                  />
                );
              })}
            </g>

            {/* Tree highlights */}
            <g fill="#2c7650" opacity="0.34">
              {Array.from({ length: 30 }, (_, i) => {
                const x = 45 + (i * 113) % 1350;
                const y = 445 + (i * 29) % 120;

                return (
                  <circle
                    key={`tree-highlight-${i}`}
                    cx={x}
                    cy={y}
                    r="4"
                  />
                );
              })}
            </g>

            {/* ============================================================
                CONTINUING ELEVATED ROAD
                ============================================================ */}

            {/* Outer road shadow */}
            <path
              d="M-120 820C180 610 435 575 690 690S1110 900 1560 610"
              fill="none"
              stroke="#030509"
              strokeWidth="118"
              strokeLinecap="round"
              opacity="0.95"
            />

            {/* Road outer structure */}
            <path
              d="M-120 820C180 610 435 575 690 690S1110 900 1560 610"
              fill="none"
              stroke="#66727e"
              strokeWidth="92"
              strokeLinecap="round"
              opacity="0.72"
            />

            {/* Asphalt */}
            <path
              d="M-120 820C180 610 435 575 690 690S1110 900 1560 610"
              fill="none"
              stroke="url(#cityRoad)"
              strokeWidth="78"
              strokeLinecap="round"
            />

            {/* Thick left road edge */}
            <path
              d="M-120 785C180 575 435 540 690 655S1110 865 1560 575"
              fill="none"
              stroke="#cbd5df"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.82"
            />

            {/* Thick right road edge */}
            <path
              d="M-120 855C180 645 435 610 690 725S1110 935 1560 645"
              fill="none"
              stroke="#cbd5df"
              strokeWidth="4.5"
              strokeLinecap="round"
              opacity="0.82"
            />

            {/* Thin dashed center lane marking */}
            <path
              d="M-120 820C180 610 435 575 690 690S1110 900 1560 610"
              fill="none"
              stroke="#f5f7fa"
              strokeWidth="2.5"
              strokeDasharray="32 28"
              strokeLinecap="round"
              opacity="0.78"
            />

            {/* Subtle AWS orange center accents */}
            <path
              d="M-70 818C170 645 410 610 660 710"
              fill="none"
              stroke="#ff9900"
              strokeWidth="3"
              strokeDasharray="10 38"
              strokeLinecap="round"
              opacity="0.5"
            />

            <path
              d="M790 720C1030 805 1190 825 1450 650"
              fill="none"
              stroke="#ff9900"
              strokeWidth="3"
              strokeDasharray="10 42"
              strokeLinecap="round"
              opacity="0.38"
            />

            {/* ============================================================
                SUBTLE ROAD-SIDE LIGHTS
                ============================================================ */}
            <g
              stroke="#42b7e8"
              strokeWidth="1"
              opacity="0.28"
              fill="none"
            >
              <path d="M170 690V630" />
              <path d="M430 640V575" />
              <path d="M720 700V625" />
              <path d="M1010 820V750" />
              <path d="M1270 755V690" />
            </g>

            <g fill="#67d5ff" opacity="0.55">
              <circle cx="170" cy="628" r="3" />
              <circle cx="430" cy="573" r="3" />
              <circle cx="720" cy="623" r="3" />
              <circle cx="1010" cy="748" r="3" />
              <circle cx="1270" cy="688" r="3" />
            </g>

            {/* ============================================================
                LOW ORANGE CITY GLOW
                ============================================================ */}
            <ellipse
              cx="720"
              cy="960"
              rx="520"
              ry="190"
              fill="url(#orangeAtmosphere)"
              opacity="0.7"
            />

            {/* Lower atmospheric fade */}
            <rect
              x="0"
              y="850"
              width="1440"
              height="650"
              fill="url(#cityHaze)"
              opacity="0.25"
            />

            {/* Fine futuristic horizon lines */}
            <g
              stroke="#2780a6"
              strokeWidth="1"
              opacity="0.14"
            >
              <path d="M0 575H1440" />
              <path d="M0 600H1440" />
              <path d="M0 625H1440" />
            </g>
          </svg>

          {/* Very subtle dark overlay to keep the existing cards readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/20 via-[#07090e]/35 to-[#07090e]/80" />
        </div>

        {/* ================================================================
            EXISTING HOMEPAGE CONTENT
            Kept above the city continuation.
            ================================================================ */}

        {/* ── STATS BAR (Frosted Glass Cards) ─────────────────────────────── */}
        <section className="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE CARDS ─────────────────────────────────────────────────── */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Ambient wireframe continuation of the hero's 3D scene — kept
              very low-opacity so the glass cards and copy stay fully
              legible on top of it. */}
          <SectionAmbientBackdrop density="low" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-aws-orange font-bold">
                PLATFORM ARCHITECTURE
              </span>

              <h2
                className="text-2xl sm:text-4xl font-display font-bold text-white mt-3 tracking-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Engineered for real AWS cert mastery
              </h2>

              <p className="text-sm text-zinc-400 font-sans mt-3 max-w-lg mx-auto">
                Four interconnected systems that make learning AWS feel more like a game than a chore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                const [leadIn, ...rest] = f.desc.split(' — ');
                const bodyText = rest.join(' — ');

                return (
                  <div
                    key={f.title}
                    className="group relative backdrop-blur-xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                  >
                    {/* Subtle glow that blooms in on hover, matching the card border accent */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(ellipse at top right, rgba(245,158,11,0.08) 0%, transparent 65%)'
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-10 h-10 rounded-xl ${f.iconBg} border flex items-center justify-center ${f.iconColor}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <span className="text-[10px] font-stats font-bold text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2 py-1 rounded-lg tracking-wide">
                          {f.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight">
                        {f.title}
                      </h3>

                      <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                        <span className="font-stats font-bold text-amber-400/90">
                          {leadIn}
                        </span>
                        {bodyText && <> — {bodyText}</>}
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
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <SectionAmbientBackdrop density="low" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div
              className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden border border-neutral-800/60"
              style={{
                background:
                  'linear-gradient(135deg, #0d0f14 0%, #111418 50%, #0d0f14 100%)'
              }}
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

                <h3
                  className="text-2xl sm:text-4xl font-display font-bold text-white mb-3 tracking-tight"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Ready to build your first floor?
                </h3>

                <p className="text-sm text-zinc-400 font-sans max-w-sm mx-auto mb-8">
                  You're logged in as{' '}
                  <strong className="text-white font-display">
                    {currentUser.name}
                  </strong>
                  . Jump straight into this week's challenge.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      soundEngine.playTap();
                      setActiveTab('quiz');
                    }}
                    className="group px-8 py-3.5 rounded-xl font-display font-bold text-sm text-zinc-950 flex items-center gap-2 transition-all duration-200"
                    style={{
                      background:
                        'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
                      boxShadow: '0 0 25px rgba(255,153,0,0.3)'
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.boxShadow =
                        '0 0 45px rgba(255,153,0,0.5)')
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(255,153,0,0.3)')
                    }
                  >
                    <Zap className="w-4 h-4" />
                    <span>Begin Week {activeWeek} Sprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      soundEngine.playTap();
                      setActiveTab('leaderboard');
                    }}
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
    </div>
  );
};