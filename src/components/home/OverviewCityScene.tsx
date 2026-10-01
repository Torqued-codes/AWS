import React from 'react';
import {
  ShieldCheck, Cpu, BrainCircuit, Database, Network, BarChart3,
  Code2, Link2, Settings, RadioTower, Building2, Zap,
} from 'lucide-react';

type Props = { onExplore: () => void; onQuiz: () => void };

/**
 * Full-page hardcoded AWS city.
 *
 * Design intent:
 * - One continuous 1216px-wide city map rather than a 642px hero.
 * - Service districts are deliberately spaced vertically so the city never
 *   feels like a pile of buildings.
 * - One continuous road spine connects every district.
 * - Water, bridges, parks, trees and secondary buildings continue between
 *   service landmarks.
 * - The component remains pure SVG: no image asset, canvas or WebGL required.
 */
const W = 1216;
const H = 3000;

const seeded = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const GREENS = ['#17491a', '#1f5a1f', '#2c7a2a', '#3b9433', '#4aa53a', '#256b25'];

interface Tree { x: number; y: number; r: number; c: string; }

const TREES: Tree[] = (() => {
  const list: Tree[] = [];
  for (let i = 0; i < 1150; i++) {
    const x = 24 + seeded(i * 3 + 1) * (W - 48);
    const y = 620 + seeded(i * 3 + 2) * (H - 660);
    const r = 3 + seeded(i * 7 + 9) * 8;
    list.push({ x, y, r, c: GREENS[Math.floor(seeded(i * 5 + 4) * GREENS.length)] });
  }
  return list;
})();

interface BoxProps {
  x: number; y: number; w: number; h: number; d?: number;
  front: string; side: string; top: string; win?: boolean; glow?: string;
}

const Box: React.FC<BoxProps> = ({
  x, y, w, h, d = 14, front, side, top, win = true, glow,
}) => {
  const l = x - w / 2;
  const r = x + w / 2;

  return (
    <g filter={glow ? 'url(#citySoft)' : undefined}>
      <polygon
        points={`${r},${y} ${r + d},${y - d * 0.5} ${r + d},${y - h - d * 0.5} ${r},${y - h}`}
        fill={side}
      />
      <rect x={l} y={y - h} width={w} height={h} fill={front} />
      <polygon
        points={`${l},${y - h} ${r},${y - h} ${r + d},${y - h - d * 0.5} ${l + d},${y - h - d * 0.5}`}
        fill={top}
      />
      {win && <rect x={l} y={y - h} width={w} height={h} fill="url(#cityWin)" />}
      {glow && <rect x={l} y={y - h} width={w} height={2} fill={glow} opacity={0.9} />}
      {glow && <line x1={l} y1={y} x2={l} y2={y - h} stroke={glow} strokeWidth={1.4} opacity={0.85} />}
    </g>
  );
};

interface DrumProps {
  cx: number; y: number; rx: number; ry: number; h: number;
  body: string; roof: string; band?: string;
}

const Drum: React.FC<DrumProps> = ({ cx, y, rx, ry, h, body, roof, band }) => (
  <g>
    <path
      d={`M${cx - rx},${y} L${cx - rx},${y - h} A${rx},${ry} 0 0 1 ${cx + rx},${y - h} L${cx + rx},${y} A${rx},${ry} 0 0 1 ${cx - rx},${y} Z`}
      fill={body}
    />
    <path
      d={`M${cx - rx},${y} L${cx - rx},${y - h} A${rx},${ry} 0 0 1 ${cx + rx},${y - h} L${cx + rx},${y} A${rx},${ry} 0 0 1 ${cx - rx},${y} Z`}
      fill="url(#cityWin)"
      opacity={0.7}
    />
    {band && (
      <path
        d={`M${cx - rx},${y - h * 0.45} A${rx},${ry} 0 0 0 ${cx + rx},${y - h * 0.45}`}
        fill="none"
        stroke={band}
        strokeWidth={2.2}
        opacity={0.9}
      />
    )}
    <ellipse cx={cx} cy={y - h} rx={rx} ry={ry} fill={roof} />
    <ellipse cx={cx} cy={y - h} rx={rx * 0.72} ry={ry * 0.72} fill="#000" opacity={0.13} />
  </g>
);

const Stadium: React.FC<{
  cx: number; y: number; rx: number; ry: number; h: number;
  body: string; dome: string;
}> = ({ cx, y, rx, ry, h, body, dome }) => (
  <g>
    <Drum cx={cx} y={y} rx={rx} ry={ry} h={h} body={body} roof="#c9d3dd" band="#ffb648" />
    <ellipse cx={cx} cy={y - h - 2} rx={rx * 0.9} ry={ry * 0.86} fill={dome} />
    {Array.from({ length: 9 }).map((_, i) => (
      <line
        key={i}
        x1={cx - rx * 0.85 + i * rx * 0.21}
        y1={y - h - ry * 0.7}
        x2={cx - rx * 0.6 + i * rx * 0.15}
        y2={y - h + ry * 0.55}
        stroke="#7fb8ff"
        strokeWidth={1}
        opacity={0.75}
      />
    ))}
    <ellipse
      cx={cx - rx * 0.2}
      cy={y - h - ry * 0.35}
      rx={rx * 0.5}
      ry={ry * 0.32}
      fill="#fff"
      opacity={0.18}
    />
  </g>
);

const SERVICE_MARKERS = [
  { label: 'AI/ML', Icon: BrainCircuit, x: 188, y: 790, action: 'quiz' },
  { label: 'Analytics', Icon: BarChart3, x: 520, y: 705, action: 'quiz' },
  { label: 'Developer Tools', Icon: Code2, x: 928, y: 845, action: 'quiz' },
  { label: 'Security', Icon: ShieldCheck, x: 190, y: 1265, action: 'explore' },
  { label: 'Storage', Icon: Database, x: 610, y: 1190, action: 'explore' },
  { label: 'Integration', Icon: Link2, x: 972, y: 1320, action: 'quiz' },
  { label: 'Compute', Icon: Cpu, x: 250, y: 1790, action: 'explore' },
  { label: 'Networking', Icon: Network, x: 640, y: 1720, action: 'explore' },
  { label: 'Community Center', Icon: Building2, x: 1005, y: 1850, action: 'explore' },
  { label: 'Management', Icon: Settings, x: 280, y: 2310, action: 'explore' },
  { label: 'IoT', Icon: RadioTower, x: 690, y: 2250, action: 'explore' },
  { label: 'Challenge Zone', Icon: Zap, x: 1010, y: 2500, action: 'quiz' },
] as const;

const DISTRICTS = [
  { y: 700, title: 'INTELLIGENCE DISTRICT', subtitle: 'AI, analytics and developer infrastructure' },
  { y: 1160, title: 'FOUNDATION DISTRICT', subtitle: 'Security, storage and service integration' },
  { y: 1690, title: 'CORE CLOUD DISTRICT', subtitle: 'Compute, networking and community' },
  { y: 2240, title: 'OPERATIONS DISTRICT', subtitle: 'Management, IoT and the challenge zone' },
] as const;

const serviceBuilding = (label: string, x: number, y: number) => {
  switch (label) {
    case 'AI/ML':
      return (
        <g>
          <Box x={x} y={y + 58} w={92} h={112} d={18} front="#37429a" side="#241d6e" top="#6a5cff" glow="#a48bff" />
          <rect x={x - 38} y={y - 10} width={76} height={26} rx={6} fill="#7a6bff" opacity={0.55} />
          <circle cx={x} cy={y - 18} r={12} fill="#a48bff" opacity={0.65} />
        </g>
      );
    case 'Analytics':
      return (
        <g>
          <Drum cx={x} y={y + 70} rx={78} ry={27} h={52} body="#5a4fc0" roof="#c6cede" band="#7fc8ff" />
          <Drum cx={x} y={y + 48} rx={44} ry={15} h={20} body="#8a98ae" roof="#dbe4ee" band="#7fc8ff" />
        </g>
      );
    case 'Developer Tools':
      return (
        <g>
          <Box x={x} y={y + 65} w={142} h={68} d={24} front="#4b3da8" side="#332a80" top="#7c6dff" glow="#b08bff" />
          <Box x={x - 54} y={y + 18} w={52} h={34} d={12} front="#5a4dc0" side="#3a2e94" top="#8a7bff" />
        </g>
      );
    case 'Security':
      return (
        <g>
          <Box x={x} y={y + 68} w={112} h={128} d={20} front="#263852" side="#18253a" top="#4b6280" glow="#4fa8ff" />
          <path d={`M${x - 24},${y - 8} L${x},${y - 30} L${x + 24},${y - 8} L${x + 19},${y + 20} L${x},${y + 34} L${x - 19},${y + 20} Z`} fill="#4fa8ff" opacity={0.65} />
        </g>
      );
    case 'Storage':
      return (
        <g>
          <Drum cx={x} y={y + 80} rx={72} ry={24} h={70} body="#8e99ab" roof="#c9d3df" band="#ffb648" />
          <ellipse cx={x} cy={y + 8} rx={45} ry={14} fill="#5b6a86" />
        </g>
      );
    case 'Integration':
      return (
        <g>
          <Box x={x} y={y + 78} w={126} h={76} d={22} front="#d8e2ee" side="#a6b4c6" top="#f1f6fb" />
          <Box x={x - 50} y={y + 40} w={44} h={36} d={12} front="#c8d4e2" side="#93a2b6" top="#e6eef7" />
          <path d={`M${x - 32},${y - 2} Q${x},${y - 30} ${x + 32},${y - 2}`} fill="none" stroke="#ff9900" strokeWidth={4} opacity={0.9} />
        </g>
      );
    case 'Compute':
      return (
        <g>
          <Box x={x} y={y + 78} w={112} h={142} d={22} front="#26384f" side="#17263a" top="#4e6582" glow="#4fa8ff" />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={x - 37 + (i % 2) * 44} y={y - 28 + Math.floor(i / 2) * 28} width={18} height={11} rx={2} fill="#ffb648" opacity={0.85} />
          ))}
        </g>
      );
    case 'Networking':
      return (
        <g>
          <Drum cx={x} y={y + 84} rx={62} ry={21} h={70} body="#9aa6b8" roof="#cfd8e3" band="#ffb648" />
          <path d={`M${x - 44},${y + 6} Q${x},${y - 30} ${x + 44},${y + 6}`} fill="none" stroke="#7ad0ff" strokeWidth={4} opacity={0.8} />
        </g>
      );
    case 'Community Center':
      return <Stadium cx={x} y={y + 100} rx={112} ry={42} h={58} body="#c8bfa8" dome="#2a63e0" />;
    case 'Management':
      return (
        <g>
          <Box x={x} y={y + 82} w={116} h={84} d={22} front="#d2c8ae" side="#a89e86" top="#efe6cf" />
          <rect x={x - 56} y={y + 20} width={16} height={42} fill="#2a63e6" />
          <rect x={x - 30} y={y + 20} width={16} height={28} fill="#ff9900" />
        </g>
      );
    case 'IoT':
      return (
        <g>
          <Box x={x} y={y + 98} w={64} h={174} d={18} front="#2e6fd0" side="#1a469c" top="#5aa6ff" glow="#7ad0ff" />
          <line x1={x} y1={y + 2} x2={x} y2={y - 64} stroke="#c9d3df" strokeWidth={3} />
          <circle cx={x} cy={y - 72} r={8} fill="#ff9900" filter="url(#cityGlow)" />
        </g>
      );
    case 'Challenge Zone':
      return <Stadium cx={x} y={y + 110} rx={124} ry={48} h={68} body="#b8a88c" dome="#2660dd" />;
    default:
      return <Box x={x} y={y + 70} w={100} h={80} d={18} front="#71839b" side="#4c5b70" top="#a6b5c7" />;
  }
};

export const OverviewCityScene: React.FC<Props> = ({ onExplore, onQuiz }) => {
  const road = 'M608,600 C430,720 760,850 580,1010 C400,1170 760,1320 610,1490 C430,1690 770,1810 610,1990 C420,2180 760,2330 610,2510 C520,2630 620,2750 610,2920';

  return (
    <section className="relative w-full overflow-hidden bg-[#173f1e]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full h-auto select-none"
        role="img"
        aria-label="AWS smart city overview"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="citySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d8fe0" />
            <stop offset="0.42" stopColor="#7fbdf0" />
            <stop offset="1" stopColor="#cfe7f7" />
          </linearGradient>
          <linearGradient id="cityWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3aa0e6" />
            <stop offset="0.5" stopColor="#1f86d6" />
            <stop offset="1" stopColor="#1670c0" />
          </linearGradient>
          <linearGradient id="cityLand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#477f35" />
            <stop offset="0.42" stopColor="#326b2c" />
            <stop offset="1" stopColor="#173f1e" />
          </linearGradient>
          <linearGradient id="cityRoad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a535e" />
            <stop offset="1" stopColor="#14171d" />
          </linearGradient>
          <linearGradient id="cityBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff9900" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ff9900" stopOpacity="0" />
          </linearGradient>
          <pattern id="cityWin" width="7" height="8" patternUnits="userSpaceOnUse">
            <rect width="7" height="8" fill="none" />
            <rect x="1.5" y="2" width="3.2" height="3" fill="#ffd98a" opacity="0.55" />
          </pattern>
          <filter id="citySoft"><feGaussianBlur stdDeviation="0.3" /></filter>
          <filter id="cityGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="towerLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#10141c" />
            <stop offset="1" stopColor="#1d2733" />
          </linearGradient>
          <linearGradient id="towerRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4fbf" />
            <stop offset="1" stopColor="#0e2f86" />
          </linearGradient>
        </defs>

        {/* ── CONTINUOUS WORLD BACKDROP ─────────────────────────────────── */}
        <rect width={W} height={H} fill="url(#cityLand)" />
        <rect width={W} height="420" fill="url(#citySky)" />

        {/* Top atmosphere, mountains and water */}
        <path d="M0,245 L110,170 L205,218 L315,135 L430,215 L545,128 L670,208 L805,122 L930,202 L1050,138 L1216,205 L1216,330 L0,330 Z" fill="#6b8fb3" />
        <path d="M0,280 L145,225 L260,260 L380,192 L510,265 L650,185 L790,258 L920,195 L1040,250 L1160,205 L1216,230 L1216,350 L0,350 Z" fill="#8fb0c8" opacity={0.85} />
        <rect y="300" width={W} height="220" fill="url(#cityWater)" />
        {Array.from({ length: 42 }).map((_, i) => {
          const x = 25 + seeded(i + 80) * (W - 50);
          const y = 325 + seeded(i + 120) * 160;
          return <line key={i} x1={x} y1={y} x2={x + 28} y2={y} stroke="#bfe6ff" strokeWidth={1} opacity={0.35} />;
        })}

        {/* Bridge carrying the city from the opening scene into the first district */}
        <path d="M0,420 Q280,350 610,420 T1216,395" fill="none" stroke="#d3dbe2" strokeWidth={14} />
        <path d="M0,420 Q280,350 610,420 T1216,395" fill="none" stroke="#697482" strokeWidth={4} />
        {Array.from({ length: 48 }).map((_, i) => {
          const t = i / 47;
          const px = 20 + t * 1176;
          const py = 420 - Math.sin(t * Math.PI) * 52;
          return (
            <g key={i}>
              <line x1={px} y1={py - 2} x2={px} y2={py - 18} stroke="#a6b2be" strokeWidth={2} />
              <path d={`M${px - 8},${py - 4} Q${px},${py - 20} ${px + 8},${py - 4}`} fill="none" stroke="#c5ced6" strokeWidth={1.5} />
            </g>
          );
        })}

        {/* AWS landmark tower: the visual anchor of the whole city */}
        <g>
          <ellipse cx="608" cy="570" rx="154" ry="48" fill="none" stroke="#ff8a00" strokeWidth={3.2} filter="url(#cityGlow)" />
          <ellipse cx="608" cy="560" rx="112" ry="38" fill="#303b4d" stroke="#5b687a" strokeWidth={1.2} />
          <ellipse cx="608" cy="552" rx="94" ry="31" fill="#121a27" />
          <path d="M540,370 L540,540 A34,14 0 0 0 608,554 L608,372 Z" fill="url(#towerLeft)" />
          <path d="M608,372 L676,370 L676,540 L608,554 Z" fill="url(#towerRight)" />
          <path d="M540,370 L608,360 L676,370 L608,382 Z" fill="#111c2e" />
          <path d="M540,494 Q608,534 676,494" fill="none" stroke="#ff8a00" strokeWidth={5} strokeLinecap="round" filter="url(#cityGlow)" />
          <path d="M540,432 Q608,458 676,432" fill="none" stroke="#ff8a00" strokeWidth={4} strokeLinecap="round" filter="url(#cityGlow)" />
          <rect x="622" y="316" width="48" height="54" rx="2" fill="#1b4fc4" />
          <rect x="629" y="311" width="34" height="9" rx="2" fill="#2d70ea" />
          <text x="642" y="425" fontSize="28" fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif">aws</text>
          <path d="M620,434 Q642,446 663,432" fill="none" stroke="#ff9900" strokeWidth="3.2" strokeLinecap="round" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={551 + (i % 2) * 25} y={454 + Math.floor(i / 2) * 24} width={10} height={13} rx={1} fill="#d99a3d" opacity={0.9} />
          ))}
        </g>

        {/* City ground / district bands */}
        <path d={`M0,520 C220,470 350,560 520,520 S820,470 980,540 S1120,570 ${W},525 L${W},${H} L0,${H} Z`} fill="url(#cityLand)" />
        <path d="M0,870 C170,800 330,900 500,850 S820,820 1216,900" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,1500 C180,1430 330,1510 520,1460 S860,1420 1216,1510" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,2100 C180,2020 340,2130 520,2070 S860,2030 1216,2130" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,2660 C180,2580 340,2680 520,2630 S860,2590 1216,2690" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />

        {/* District water bodies */}
        <ellipse cx="1040" cy="1040" rx="132" ry="48" fill="url(#cityWater)" opacity={0.95} />
        <ellipse cx="220" cy="1560" rx="150" ry="54" fill="url(#cityWater)" opacity={0.95} />
        <ellipse cx="1020" cy="2120" rx="156" ry="54" fill="url(#cityWater)" opacity={0.95} />
        <ellipse cx="240" cy="2780" rx="180" ry="62" fill="url(#cityWater)" opacity={0.95} />

        {/* Continuous main road: thick edge, thin lane divider and orange guidance */}
        <path d={road} fill="none" stroke="#12161c" strokeWidth={112} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#4b5561" strokeWidth={100} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#d8dee7" strokeWidth={6} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#111720" strokeWidth={88} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#f4f6f8" strokeWidth={2.4} strokeLinecap="round" strokeDasharray="20 18" />
        <path d="M608,630 C500,760 720,850 590,1010 C500,1125 650,1225 620,1360 C590,1490 700,1600 610,1735 C520,1870 700,1980 620,2120 C535,2250 710,2380 615,2520 C570,2600 620,2720 610,2860" fill="none" stroke="#ff8a00" strokeWidth={7} strokeLinecap="round" opacity={0.85} filter="url(#cityGlow)" />

        {/* Smaller connecting roads */}
        {[
          'M80,940 Q240,900 360,820',
          'M720,780 Q850,820 1060,760',
          'M90,1340 Q250,1290 390,1250',
          'M760,1250 Q900,1290 1130,1380',
          'M100,1850 Q240,1790 360,1760',
          'M760,1770 Q900,1820 1130,1890',
          'M90,2340 Q250,2290 400,2320',
          'M760,2310 Q900,2260 1120,2390',
          'M120,2700 Q270,2660 430,2600',
        ].map((d, i) => (
          <g key={i}>
            <path d={d} fill="none" stroke="#1b2028" strokeWidth={46} strokeLinecap="round" />
            <path d={d} fill="none" stroke="#59636e" strokeWidth={40} strokeLinecap="round" />
            <path d={d} fill="none" stroke="#f1f3f5" strokeWidth={1.8} strokeDasharray="15 13" />
          </g>
        ))}

        {/* Bridges between districts */}
        {[
          { y: 1040, x1: 890, x2: 1180 },
          { y: 1560, x1: 70, x2: 380 },
          { y: 2120, x1: 850, x2: 1180 },
          { y: 2780, x1: 60, x2: 420 },
        ].map((b, i) => (
          <g key={i}>
            <path d={`M${b.x1},${b.y} Q${(b.x1 + b.x2) / 2},${b.y - 22} ${b.x2},${b.y}`} fill="none" stroke="#d3dbe2" strokeWidth={18} />
            <path d={`M${b.x1},${b.y} Q${(b.x1 + b.x2) / 2},${b.y - 22} ${b.x2},${b.y}`} fill="none" stroke="#68737f" strokeWidth={5} />
            {Array.from({ length: 9 }).map((_, j) => {
              const x = b.x1 + ((b.x2 - b.x1) * j) / 8;
              return <line key={j} x1={x} y1={b.y - 4} x2={x} y2={b.y - 23} stroke="#aab5c0" strokeWidth={2} />;
            })}
          </g>
        ))}

        {/* Procedural greenery, behind service landmarks */}
        {TREES.map((t, i) => (
          <g key={`tree-${i}`}>
            <circle cx={t.x} cy={t.y + t.r * 0.35} r={t.r} fill="#0f3a12" opacity={0.55} />
            <circle cx={t.x} cy={t.y} r={t.r} fill={t.c} />
            <circle cx={t.x - t.r * 0.28} cy={t.y - t.r * 0.32} r={t.r * 0.5} fill="#7cc65a" opacity={0.32} />
          </g>
        ))}

        {/* Secondary city buildings: deliberately small and scattered */}
        {Array.from({ length: 54 }).map((_, i) => {
          const x = 50 + seeded(i * 11 + 3) * 1110;
          const y = 680 + seeded(i * 13 + 7) * 2110;
          const w = 24 + seeded(i * 17 + 5) * 42;
          const h = 34 + seeded(i * 19 + 2) * 82;
          if (Math.abs(x - 608) < 75) return null;
          return (
            <Box
              key={`minor-${i}`}
              x={x}
              y={y}
              w={w}
              h={h}
              d={10 + seeded(i + 33) * 10}
              front={i % 4 === 0 ? '#4b5d75' : '#71839a'}
              side={i % 4 === 0 ? '#29384d' : '#4c5b70'}
              top="#9babbf"
              glow={i % 5 === 0 ? '#4fa8ff' : undefined}
            />
          );
        })}

        {/* Service districts */}
        {DISTRICTS.map((d) => (
          <g key={d.title}>
            <rect x="42" y={d.y - 38} width="350" height="34" rx="17" fill="#10161f" opacity={0.76} />
            <text x="62" y={d.y - 16} fontSize="13" fontWeight={800} fill="#ffad33" fontFamily="system-ui,sans-serif" letterSpacing="2">
              {d.title}
            </text>
            <text x="410" y={d.y - 16} fontSize="11" fill="#dce5ef" opacity={0.72} fontFamily="system-ui,sans-serif">
              {d.subtitle}
            </text>
          </g>
        ))}

        {/* Service landmarks */}
        {SERVICE_MARKERS.map(({ label, x, y }) => (
          <g key={`building-${label}`}>
            {serviceBuilding(label, x, y)}
          </g>
        ))}

        {/* Small parks around each district */}
        {[
          [95, 740], [740, 720], [1015, 910],
          [90, 1160], [810, 1130], [1060, 1460],
          [90, 1680], [820, 1660], [1080, 2020],
          [90, 2200], [830, 2190], [1080, 2640],
        ].map(([x, y], i) => (
          <g key={`park-${i}`}>
            <ellipse cx={x} cy={y} rx="62" ry="24" fill="#286b2b" opacity={0.9} />
            <circle cx={x - 28} cy={y - 4} r={9} fill="#4aa53a" />
            <circle cx={x} cy={y + 3} r={11} fill="#3b9433" />
            <circle cx={x + 30} cy={y - 3} r={8} fill="#2c7a2a" />
          </g>
        ))}

        {/* Service markers */}
        {SERVICE_MARKERS.map(({ label, Icon, x, y, action }) => {
          const tw = Math.min(label.length * 6.7 + 24, 178);
          const labelX = x < 610 ? x + 30 : x - tw - 30;

          return (
            <g
              key={label}
              onClick={action === 'quiz' ? onQuiz : onExplore}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  action === 'quiz' ? onQuiz() : onExplore();
                }
              }}
            >
              <rect x={x - 1.4} y={y + 22} width={2.8} height={44} fill="url(#cityBeam)" />
              <path d={`M${x - 9},${y + 15} L${x},${y + 30} L${x + 9},${y + 15} Z`} fill="#ffa21a" filter="url(#cityGlow)" />
              <circle cx={x} cy={y} r={21} fill="#ffa21a" filter="url(#cityGlow)" />
              <circle cx={x} cy={y} r={17} fill="#171b23" />
              <Icon x={x - 9} y={y - 9} width={18} height={18} color="#ffb020" strokeWidth={2.4} />
              <rect x={labelX} y={y - 13} width={tw} height={26} rx={7} fill="#15181f" opacity={0.95} />
              <text
                x={labelX + tw / 2}
                y={y + 4.6}
                fontSize="12.5"
                fontWeight={600}
                fill="#fff"
                textAnchor="middle"
                fontFamily="Inter,system-ui,sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Architect at the bottom: the player has travelled through the city */}
        <g transform="translate(608 2880)">
          <ellipse cx="0" cy="62" rx="46" ry="10" fill="#000" opacity={0.35} />
          <rect x="-19" y="-16" width="15" height="72" rx="4" fill="#15181e" />
          <rect x="4" y="-16" width="15" height="72" rx="4" fill="#1b1f27" />
          <rect x="-22" y="54" width="21" height="10" rx="4" fill="#111" />
          <rect x="2" y="54" width="21" height="10" rx="4" fill="#111" />
          <path d="M-33,-80 Q-33,-96 0,-98 Q34,-96 34,-80 L38,-22 L-38,-22 Z" fill="#20242c" />
          <rect x="-39" y="-34" width="78" height="8" fill="#e8730e" />
          <rect x="-45" y="-78" width="12" height="58" rx="5" fill="#20242c" />
          <rect x="33" y="-78" width="12" height="58" rx="5" fill="#20242c" />
          <rect x="-21" y="-78" width="42" height="52" rx="8" fill="#14171d" stroke="#ff8a00" strokeWidth={1.6} />
          <text x="0" y="-55" fontSize="9" fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif">aws</text>
          <path d="M-11,-51 Q0,-45 11,-52" fill="none" stroke="#ff9900" strokeWidth={1.6} strokeLinecap="round" />
          <circle cx="0" cy="-108" r="13" fill="#1a1410" />
          <rect x="-5" y="-101" width="10" height="7" fill="#c98f64" />
        </g>

        {/* Bottom destination marker */}
        <text x="608" y="2970" textAnchor="middle" fontSize="15" fontWeight={800} fill="#fff" fontFamily="system-ui,sans-serif" letterSpacing="2">
          AWS CLOUD CITY • END OF OVERVIEW
        </text>
        <text x="608" y="2990" textAnchor="middle" fontSize="11" fill="#b8c6d6" fontFamily="system-ui,sans-serif">
          Follow the road to explore every learning district
        </text>
      </svg>
    </section>
  );
};

