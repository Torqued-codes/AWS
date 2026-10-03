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
 * - Natural landscaping and secondary buildings continue between
 *   service landmarks.
 * - The component remains pure SVG: no image asset, canvas or WebGL required.
 */
const W = 1216;
const H = 3000;
const seeded = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};
interface Tree { x: number; y: number; s: number; type: number; }
const MAIN_ROAD_GUIDE: Array<[number, number]> = [
  [608, 660], [430, 760], [760, 860], [580, 1010], [400, 1170], [760, 1320],
  [610, 1490], [430, 1690], [770, 1810], [610, 1990], [420, 2180], [760, 2330],
  [610, 2510], [520, 2630], [620, 2750], [610, 2920],
];
const SIDE_ROAD_SEGMENTS: Array<[[number, number], [number, number]]> = [
  [[70, 940], [635, 900]], [[1120, 900], [635, 900]],
  [[70, 1340], [630, 1340]], [[1135, 1380], [630, 1340]],
  [[80, 1850], [580, 1790]], [[1135, 1890], [640, 1840]],
  [[75, 2340], [625, 2320]], [[1125, 2390], [625, 2320]],
  [[90, 2700], [565, 2630]],
];
const pointToSegmentDistance = (px: number, py: number, ax: number, ay: number, bx: number, by: number) => {
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return Math.hypot(px - cx, py - cy);
};
const isNearRoad = (x: number, y: number) => {
  for (let i = 0; i < MAIN_ROAD_GUIDE.length - 1; i++) {
    const [ax, ay] = MAIN_ROAD_GUIDE[i];
    const [bx, by] = MAIN_ROAD_GUIDE[i + 1];
    if (pointToSegmentDistance(x, y, ax, ay, bx, by) < 92) return true;
  }
  for (const [[ax, ay], [bx, by]] of SIDE_ROAD_SEGMENTS) {
    if (pointToSegmentDistance(x, y, ax, ay, bx, by) < 55) return true;
  }
  return false;
};
// Fewer, deliberately placed trees replace the old dot-like procedural greenery.
// Every tree is substantially smaller than the service buildings and stays clear of roads.
const TREES: Tree[] = (() => {
  const list: Tree[] = [];
  for (let i = 0; i < 280; i++) {
    const x = 32 + seeded(i * 3 + 1) * (W - 64);
    const y = 610 + seeded(i * 3 + 2) * (H - 680);
    if (isNearRoad(x, y)) continue;
    const s = 0.72 + seeded(i * 7 + 9) * 0.5;
    list.push({ x, y, s, type: Math.floor(seeded(i * 5 + 4) * 3) });
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
  { label: 'Analytics', Icon: BarChart3, x: 835, y: 710, action: 'quiz' },
  { label: 'Developer Tools', Icon: Code2, x: 928, y: 1000, action: 'quiz' },
  { label: 'Security', Icon: ShieldCheck, x: 190, y: 1440, action: 'explore' },
  { label: 'Storage', Icon: Database, x: 790, y: 1120, action: 'explore' },
  { label: 'Integration', Icon: Link2, x: 900, y: 1405, action: 'quiz' },
  { label: 'Compute', Icon: Cpu, x: 290, y: 1890, action: 'explore' },
  { label: 'Networking', Icon: Network, x: 800, y: 1675, action: 'explore' },
  { label: 'Community Center', Icon: Building2, x: 900, y: 1900, action: 'explore' },
  { label: 'Management', Icon: Settings, x: 280, y: 2360, action: 'explore' },
  { label: 'IoT', Icon: RadioTower, x: 850, y: 2180, action: 'explore' },
  { label: 'Challenge Zone', Icon: Zap, x: 890, y: 2500, action: 'quiz' },
] as const;
const DISTRICTS = [
  { y: 700, title: 'INTELLIGENCE DISTRICT' },
  { y: 1160, title: 'FOUNDATION DISTRICT' },
  { y: 1690, title: 'CORE CLOUD DISTRICT' },
  { y: 2240, title: 'OPERATIONS DISTRICT' },
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
  const road = 'M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760 C430,760 760,860 580,1010 C400,1170 760,1320 610,1490 C430,1690 770,1810 610,1990 C420,2180 760,2330 610,2510 C520,2630 620,2750 610,2920';
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
        {/* Soft clouds above the mountain line */}
        <g fill="#ffffff" opacity={0.58}>
          <g transform="translate(112 88)">
            <ellipse cx="0" cy="22" rx="42" ry="16" />
            <ellipse cx="-24" cy="15" rx="25" ry="20" />
            <ellipse cx="5" cy="8" rx="30" ry="25" />
            <ellipse cx="30" cy="17" rx="24" ry="18" />
          </g>
          <g transform="translate(430 58) scale(0.88)">
            <ellipse cx="0" cy="22" rx="44" ry="16" />
            <ellipse cx="-26" cy="15" rx="24" ry="19" />
            <ellipse cx="4" cy="7" rx="31" ry="25" />
            <ellipse cx="32" cy="17" rx="23" ry="17" />
          </g>
          <g transform="translate(760 100) scale(1.05)">
            <ellipse cx="0" cy="22" rx="44" ry="16" />
            <ellipse cx="-27" cy="15" rx="24" ry="19" />
            <ellipse cx="4" cy="7" rx="31" ry="25" />
            <ellipse cx="34" cy="17" rx="24" ry="18" />
          </g>
          <g transform="translate(1060 62) scale(0.92)">
            <ellipse cx="0" cy="22" rx="43" ry="16" />
            <ellipse cx="-25" cy="15" rx="24" ry="19" />
            <ellipse cx="4" cy="7" rx="30" ry="24" />
            <ellipse cx="32" cy="17" rx="23" ry="17" />
          </g>
        </g>
        <g fill="#eaf5ff" opacity={0.42}>
          <ellipse cx="275" cy="170" rx="74" ry="20" />
          <ellipse cx="930" cy="185" rx="86" ry="22" />
        </g>
        <rect y="300" width={W} height="220" fill="url(#cityWater)" />
        {Array.from({ length: 42 }).map((_, i) => {
          const x = 25 + seeded(i + 80) * (W - 50);
          const y = 325 + seeded(i + 120) * 160;
          return <line key={i} x1={x} y1={y} x2={x + 28} y2={y} stroke="#bfe6ff" strokeWidth={1} opacity={0.35} />;
        })}
        {/* Small boats in the lake — deliberately much smaller than the city buildings. */}
        <g aria-label="boats on the lake">
          <g transform="translate(250 395)">
            <path d="M-25,0 Q0,9 25,0 L18,12 Q0,19 -18,12 Z" fill="#253342" stroke="#121a22" strokeWidth="2" />
            <path d="M-7,-2 L-7,-25 L10,-25 L10,-2 Z" fill="#f2f5f7" />
            <path d="M-7,-25 L2,-25 L2,-4 L-7,-4 Z" fill="#ff9900" opacity="0.9" />
            <line x1="10" y1="-25" x2="10" y2="1" stroke="#c7d0d8" strokeWidth="2" />
          </g>
          <g transform="translate(920 370) scale(0.82)">
            <path d="M-25,0 Q0,9 25,0 L18,12 Q0,19 -18,12 Z" fill="#314153" stroke="#121a22" strokeWidth="2" />
            <path d="M-7,-2 L-7,-25 L10,-25 L10,-2 Z" fill="#f2f5f7" />
            <path d="M-7,-25 L2,-25 L2,-4 L-7,-4 Z" fill="#1f66c7" opacity="0.95" />
            <line x1="10" y1="-25" x2="10" y2="1" stroke="#c7d0d8" strokeWidth="2" />
          </g>
          <g transform="translate(1090 455) scale(0.68)">
            <path d="M-24,0 Q0,8 24,0 L17,11 Q0,18 -17,11 Z" fill="#263847" stroke="#121a22" strokeWidth="2" />
            <path d="M-6,-2 L-6,-23 L9,-23 L9,-2 Z" fill="#eef3f7" />
            <path d="M-6,-23 L2,-23 L2,-4 L-6,-4 Z" fill="#ff9900" opacity="0.9" />
            <line x1="9" y1="-23" x2="9" y2="1" stroke="#c7d0d8" strokeWidth="2" />
          </g>
        </g>
        {/* City ground / district bands */}
        <path d={`M0,520 C220,470 350,560 520,520 S820,470 980,540 S1120,570 ${W},525 L${W},${H} L0,${H} Z`} fill="url(#cityLand)" />
        <path d="M0,870 C170,800 330,900 500,850 S820,820 1216,900" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,1500 C180,1430 330,1510 520,1460 S860,1420 1216,1510" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,2100 C180,2020 340,2130 520,2070 S860,2030 1216,2130" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        <path d="M0,2660 C180,2580 340,2680 520,2630 S860,2590 1216,2690" fill="none" stroke="#75a64a" strokeWidth={42} opacity={0.08} />
        {/* Main road connection under the AWS landmark.
            This is the SAME road as the city spine: identical width, edge layers,
            center marking and colors. It runs behind the tower so the full-width
            road visibly connects directly to the blue building base. */}
        <path d="M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760" fill="none" stroke="#12161c" strokeWidth={112} strokeLinecap="round" />
        <path d="M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760" fill="none" stroke="#4b5561" strokeWidth={100} strokeLinecap="round" />
        <path d="M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760" fill="none" stroke="#d8dee7" strokeWidth={6} strokeLinecap="round" />
        <path d="M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760" fill="none" stroke="#111720" strokeWidth={88} strokeLinecap="round" />
        <path d="M608,566 C618,604 628,638 604,672 C575,711 508,741 430,760" fill="none" stroke="#f4f6f8" strokeWidth={2.4} strokeLinecap="round" strokeDasharray="20 18" />
        {/* Side roads now physically meet the main black road instead of stopping short. */}
        {[
          // Intelligence district
          'M70,940 Q300,900 635,900',
          'M1120,900 Q900,885 635,900',
          // Foundation district
          'M70,1340 Q300,1285 630,1340',
          'M1135,1380 Q900,1340 630,1340',
          // Core cloud district
          'M80,1850 Q320,1790 580,1790',
          'M1135,1890 Q900,1845 640,1840',
          // Operations district
          'M75,2340 Q300,2300 625,2320',
          'M1125,2390 Q900,2350 625,2320',
        ].map((d, i) => (
          <g key={`connector-${i}`}>
            <path d={d} fill="none" stroke="#1b2028" strokeWidth={50} strokeLinecap="round" />
            <path d={d} fill="none" stroke="#59636e" strokeWidth={43} strokeLinecap="round" />
            <path d={d} fill="none" stroke="#f1f3f5" strokeWidth={2} strokeDasharray="16 14" strokeLinecap="round" />
          </g>
        ))}
        {/* Continuous main road: thick edge and clean white lane divider */}
        <path d={road} fill="none" stroke="#12161c" strokeWidth={112} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#4b5561" strokeWidth={100} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#d8dee7" strokeWidth={6} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#111720" strokeWidth={88} strokeLinecap="round" />
        <path d={road} fill="none" stroke="#f4f6f8" strokeWidth={2.4} strokeLinecap="round" strokeDasharray="20 18" />
        {/* AWS landmark tower — anchored on the green land with a visible circular base. */}
        <g>
          <path d="M536,370 L536,548 A36,16 0 0 0 608,566 L608,370 Z" fill="url(#towerLeft)" />
          <path d="M608,370 L680,368 L680,548 L608,566 Z" fill="url(#towerRight)" />
          <path d="M536,370 L608,358 L680,368 L608,380 Z" fill="#111c2e" />
          <path d="M536,493 Q608,534 680,493" fill="none" stroke="#ff8a00" strokeWidth={5} strokeLinecap="round" filter="url(#cityGlow)" />
          <path d="M536,432 Q608,458 680,432" fill="none" stroke="#ff8a00" strokeWidth={4} strokeLinecap="round" filter="url(#cityGlow)" />
          <rect x="622" y="316" width="48" height="54" rx="2" fill="#1b4fc4" />
          <rect x="629" y="311" width="34" height="9" rx="2" fill="#2d70ea" />
          <path d="M646,305 L646,278" stroke="#ff9900" strokeWidth="3" strokeLinecap="round" />
          <circle cx="646" cy="273" r="6" fill="#ff9900" filter="url(#cityGlow)" />
          <text x="642" y="425" fontSize="28" fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif">aws</text>
          <path d="M620,434 Q642,446 663,432" fill="none" stroke="#ff9900" strokeWidth="3.2" strokeLinecap="round" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={`tower-window-${i}`}
              x={547 + (i % 2) * 25}
              y={454 + Math.floor(i / 2) * 24}
              width={10}
              height={13}
              rx={1}
              fill="#d99a3d"
              opacity={0.9}
            />
          ))}
        </g>
        {/* Natural landscaping, kept away from every road */}
        {TREES.map((t, i) => {
          const { x, y, s: scale, type } = t;
          const canopy = 15 * scale;
          return (
            <g key={`tree-${i}`} transform={`translate(${x} ${y})`}>
              <ellipse cx="0" cy="18" rx={14 * scale} ry={4 * scale} fill="#163b18" opacity={0.22} />
              <rect x={-2.5 * scale} y={0} width={5 * scale} height={15 * scale} rx={2 * scale} fill="#684529" />
              {type === 0 && (
                <g>
                  <circle cx={0} cy={-12 * scale} r={canopy} fill="#205d26" />
                  <circle cx={-10 * scale} cy={-7 * scale} r={canopy * 0.72} fill="#2f7d31" />
                  <circle cx={10 * scale} cy={-7 * scale} r={canopy * 0.68} fill="#3d9137" />
                  <circle cx={-4 * scale} cy={-19 * scale} r={canopy * 0.48} fill="#5aa846" />
                </g>
              )}
              {type === 1 && (
                <g>
                  <path d={`M0,${-4 * scale} C${-16 * scale},${-12 * scale} ${-15 * scale},${-29 * scale} 0,${-39 * scale} C${15 * scale},${-29 * scale} ${16 * scale},${-12 * scale} 0,${-4 * scale} Z`} fill="#2e7830" />
                  <path d={`M0,${-10 * scale} C${-10 * scale},${-19 * scale} ${-8 * scale},${-33 * scale} 0,${-41 * scale} C${8 * scale},${-33 * scale} ${10 * scale},${-19 * scale} 0,${-10 * scale} Z`} fill="#4b9b3d" />
                  <circle cx={-3 * scale} cy={-28 * scale} r={3.5 * scale} fill="#79b95b" opacity={0.75} />
                </g>
              )}
              {type === 2 && (
                <g>
                  <circle cx={-8 * scale} cy={-12 * scale} r={12 * scale} fill="#236528" />
                  <circle cx={9 * scale} cy={-14 * scale} r={14 * scale} fill="#327f31" />
                  <circle cx={0} cy={-23 * scale} r={13 * scale} fill="#4a9639" />
                  <circle cx={-5 * scale} cy={-27 * scale} r={5 * scale} fill="#73b856" opacity={0.72} />
                </g>
              )}
            </g>
          );
        })}
        {/* Curated demo buildings: placed intentionally in open green zones, away from service landmarks and the main road. */}
        {[
          { x: 88, y: 760, w: 58, h: 112, front: '#60758d', side: '#3b4d63', top: '#a9b9c9', roof: '#d6dee6' },
          { x: 400, y: 650, w: 70, h: 128, front: '#71859b', side: '#485b70', top: '#b1bfcc', roof: '#e2e8ee' },
          { x: 1085, y: 675, w: 68, h: 118, front: '#667b91', side: '#405369', top: '#aab9c8', roof: '#dce4eb' },
          { x: 95, y: 1120, w: 64, h: 118, front: '#657a90', side: '#405268', top: '#a9b9c8', roof: '#dce4eb' },
          { x: 365, y: 1180, w: 72, h: 126, front: '#74879a', side: '#4b5d71', top: '#afbdca', roof: '#e2e8ee' },
          { x: 1040, y: 1215, w: 64, h: 112, front: '#60758c', side: '#3b4f65', top: '#a8b8c7', roof: '#dce4eb' },
          { x: 105, y: 1640, w: 68, h: 126, front: '#6c8197', side: '#42566b', top: '#adbdca', roof: '#e0e7ed' },
          { x: 350, y: 1760, w: 72, h: 112, front: '#5e738a', side: '#394d63', top: '#a4b5c5', roof: '#dce4eb' },
          { x: 1030, y: 1690, w: 70, h: 130, front: '#72869a', side: '#4a5d72', top: '#afbdca', roof: '#e2e8ee' },
          { x: 1135, y: 2020, w: 58, h: 106, front: '#65798f', side: '#405267', top: '#a8b8c7', roof: '#dce4eb' },
          { x: 105, y: 2160, w: 68, h: 120, front: '#667b91', side: '#405268', top: '#a9b9c8', roof: '#dce4eb' },
          { x: 355, y: 2280, w: 62, h: 108, front: '#73879a', side: '#4b5d72', top: '#b0becb', roof: '#e1e7ed' },
          { x: 1045, y: 2260, w: 72, h: 122, front: '#61768d', side: '#3d5166', top: '#a7b7c6', roof: '#dce4eb' },
          { x: 1140, y: 2540, w: 62, h: 110, front: '#73869a', side: '#4b5c70', top: '#adbdca', roof: '#e0e7ed' },
          { x: 465, y: 820, w: 48, h: 76, front: '#536a82', side: '#34485e', top: '#9daec0', roof: '#d9e1e8' },
          { x: 1080, y: 1460, w: 52, h: 84, front: '#526980', side: '#34485d', top: '#9eafc0', roof: '#d9e1e8' },
          { x: 450, y: 2050, w: 54, h: 88, front: '#5a7087', side: '#394d63', top: '#a1b2c2', roof: '#dbe3e9' },
          { x: 785, y: 2450, w: 58, h: 94, front: '#60758b', side: '#3c5065', top: '#a6b6c5', roof: '#dce4ea' },
        ].map((b, i) => (
          <g key={`curated-demo-${i}`}>
            <Box x={b.x} y={b.y} w={b.w} h={b.h} d={14} front={b.front} side={b.side} top={b.top} />
            <rect x={b.x - b.w / 2 + 7} y={b.y - b.h - 7} width={b.w - 14} height={4} rx={2} fill={b.roof} opacity={0.8} />
            {i % 3 === 0 && (
              <g>
                <rect x={b.x + b.w / 2 - 17} y={b.y - b.h - 18} width={8} height={11} rx={2} fill="#657383" />
                <rect x={b.x + b.w / 2 - 8} y={b.y - b.h - 15} width={3} height={8} fill="#ff9900" opacity={0.75} />
              </g>
            )}
          </g>
        ))}
        {/* Service districts */}
        {DISTRICTS.map((d) => (
          <g key={d.title}>
            <rect x="42" y={d.y - 38} width="350" height="34" rx="17" fill="#10161f" opacity={0.76} />
            <text x="62" y={d.y - 16} fontSize="13" fontWeight={800} fill="#ffad33" fontFamily="system-ui,sans-serif" letterSpacing="2">
              {d.title}
            </text>
          </g>
        ))}
        {/* Service landmarks */}
        {SERVICE_MARKERS.map(({ label, x, y }) => (
          <g key={`building-${label}`}>
            {serviceBuilding(label, x, y)}
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
