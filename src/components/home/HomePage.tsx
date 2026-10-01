import React from 'react';
import { useGame } from '../../context/GameContext';
import {
  Building2,
  Zap,
  Heart,
  Award,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Sparkles,
  Shield,
  Globe,
  BarChart3,
  Network,
  Settings,
  BrainCircuit,
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { OverviewCityScene } from './OverviewCityScene';

interface StatCardData {
  label: string;
  value: string;
  sub: string;
  color: string;
  glow: string;
}

const StatCard: React.FC<{ stat: StatCardData }> = ({ stat }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#10161f]/88 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background: 'radial-gradient(ellipse at center, rgba(255,153,0,0.08) 0%, transparent 70%)' }} />
    <div className="relative z-10">
      <div className="mb-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
      <div className={`text-2xl sm:text-3xl font-stats font-bold ${stat.color} leading-none`}>{stat.value}</div>
      <div className="mt-1 text-[11px] text-zinc-500 font-sans">{stat.sub}</div>
    </div>
  </div>
);

const CityContinuation: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <section className={`relative overflow-hidden bg-[#173f1e] ${className}`}>
    <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
      <div className="absolute -left-[12%] top-[12%] h-24 w-[76%] rotate-[10deg] rounded-full border-[18px] border-[#4b5561]/45" />
      <div className="absolute -right-[14%] top-[55%] h-28 w-[78%] -rotate-[9deg] rounded-full border-[16px] border-[#4b5561]/35" />
      <div className="absolute left-[12%] top-[25%] h-2 w-[50%] rotate-[10deg] border-t-2 border-dashed border-white/25" />
      <div className="absolute right-[18%] top-[68%] h-2 w-[42%] -rotate-[9deg] border-t-2 border-dashed border-white/20" />
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-3 w-3 rounded-full bg-[#2c7a2a]"
          style={{
            left: `${4 + ((i * 37) % 92)}%`,
            top: `${6 + ((i * 61) % 88)}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">{children}</div>
  </section>
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

  const districts = [
    {
      icon: BrainCircuit,
      iconColor: 'text-violet-300',
      title: 'Intelligence District',
      desc: 'AI/ML, analytics and developer tooling form the first learning district of the city.',
      tag: 'LEARNING SYSTEMS',
    },
    {
      icon: Shield,
      iconColor: 'text-cyan-300',
      title: 'Foundation District',
      desc: 'Security, storage and integration services are grouped around the second city corridor.',
      tag: 'CORE SERVICES',
    },
    {
      icon: Network,
      iconColor: 'text-blue-300',
      title: 'Core Cloud District',
      desc: 'Compute and networking connect into the Community Center and the main road.',
      tag: 'CLOUD INFRASTRUCTURE',
    },
    {
      icon: Settings,
      iconColor: 'text-amber-300',
      title: 'Operations District',
      desc: 'Management, IoT and the Challenge Zone close the route through the city.',
      tag: 'OPERATIONS',
    },
  ];

  const features = [
    {
      icon: Building2,
      iconColor: 'text-aws-orange',
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      title: '3D Procedural Metropolis',
      desc: 'Real-Time WebGL City Engine — Visualizes code contributions and quiz scores as physical skyscraper tiers using Three.js instanced meshes. Features 360° orbit controls, dynamic lighting shaders, and live peer block inspection.',
      tag: 'Git-City Engine',
    },
    {
      icon: Heart,
      iconColor: 'text-rose-400',
      iconBg: 'bg-rose-500/10 border-rose-500/20',
      title: '5-Heart Attempt Engine',
      desc: 'Gamified Knowledge Retention — Prevents brute-force guessing via a strict 5-heart stamina pool. Incorrect answers trigger an automated 45-minute cooldown per heart, incentivizing thorough study over random attempts.',
      tag: 'Adaptive Pacing',
    },
    {
      icon: Terminal,
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
      title: 'Official Cert Question Bank',
      desc: 'AWS Practitioner & SAA-C03 Questions — 500+ domain-tagged MCQs covering IAM policies, S3 lifecycle rules, VPC subnet architecture, EC2 auto-scaling, and Well-Architected frameworks.',
      tag: 'Domain-Tagged',
    },
    {
      icon: Award,
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      title: 'Verifiable Certificates',
      desc: 'On-Chain & Dynamic Certificates — High-performing architects generate cryptographic verification hashes, custom rank badges, and high-resolution PDF exports signed by chapter SPOCs.',
      tag: 'SPOC Signed',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#173f1e] text-zinc-100">
      {/* The city is now the complete Overview world, from the first viewport to the bottom of the page. */}
      <OverviewCityScene
        onExplore={() => { soundEngine.playTap(); setActiveTab('city'); }}
        onQuiz={() => { soundEngine.playTap(); setActiveTab('quiz'); }}
      />

      {/* City information plaza: transparent/frosted UI instead of a disconnected dark section. */}
      <CityContinuation className="-mt-[1px] border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-aws-orange">CITY STATUS</span>
              <h2 className="mt-2 text-2xl font-display font-bold tracking-tight text-white sm:text-3xl">
                Your current architecture footprint
              </h2>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-mono text-zinc-400 sm:flex">
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              LIVE CITY DATA
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
        </div>
      </CityContinuation>

      {/* District map legend: this explains the vertical city route without breaking the city metaphor. */}
      <CityContinuation className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-aws-orange">CITY DISTRICTS</span>
            <h2 className="mt-3 text-2xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Follow the road through the AWS learning city
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Each district is deliberately separated by roads, parks, water and bridges so the services remain readable while still belonging to one continuous world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {districts.map((district) => {
              const Icon = district.icon;
              return (
                <div key={district.title} className="group rounded-2xl border border-white/10 bg-[#10161f]/82 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/30">
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${district.iconColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-[10px] font-stats font-bold tracking-wide text-zinc-400">
                      {district.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-display font-bold text-white">{district.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{district.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CityContinuation>

      {/* Existing platform capabilities remain functional, but are styled as city hubs. */}
      <CityContinuation className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-aws-orange">PLATFORM ARCHITECTURE</span>
            <h2 className="mt-3 text-2xl font-display font-bold tracking-tight text-white sm:text-4xl">
              Systems powering the city
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              const [leadIn, ...rest] = f.desc.split(' — ');
              const bodyText = rest.join(' — ');
              return (
                <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#10161f]/82 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/40">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.08) 0%, transparent 65%)' }} />
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${f.iconBg} ${f.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-[10px] font-stats font-bold tracking-wide text-zinc-400">{f.tag}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-display font-bold tracking-tight text-white">{f.title}</h3>
                    <p className="text-sm font-sans leading-relaxed text-zinc-400">
                      <span className="font-stats font-bold text-amber-400/90">{leadIn}</span>
                      {bodyText && <> — {bodyText}</>}
                    </p>
                  </div>
                  <div className="relative z-10 mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-zinc-500 font-mono">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Included in this sprint</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CityContinuation>

      {/* Final destination: preserves both existing quiz and leaderboard actions. */}
      <CityContinuation className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="relative overflow-hidden rounded-3xl border border-amber-500/20 p-10 text-center sm:p-14"
            style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #111418 50%, #0d0f14 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-[200px] w-[400px] rounded-full bg-amber-500/6 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-mono text-amber-400">
                <Sparkles className="h-3 w-3" />
                <span>Week {activeWeek} is LIVE</span>
              </div>

              <h3 className="mb-3 text-2xl font-display font-bold tracking-tight text-white sm:text-4xl">
                Ready to build your first floor?
              </h3>
              <p className="mx-auto mb-8 max-w-sm text-sm text-zinc-400">
                You're logged in as <strong className="font-display text-white">{currentUser.name}</strong>. Jump straight into this week's challenge.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => { soundEngine.playTap(); setActiveTab('quiz'); }}
                  className="group flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-display font-bold text-zinc-950 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #FF9900 0%, #F59E0B 100%)',
                    boxShadow: '0 0 25px rgba(255,153,0,0.3)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 45px rgba(255,153,0,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 25px rgba(255,153,0,0.3)')}
                >
                  <Zap className="h-4 w-4" />
                  <span>Begin Week {activeWeek} Sprint</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => { soundEngine.playTap(); setActiveTab('leaderboard'); }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-display font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>View Rankings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </CityContinuation>
    </div>
  );
};















