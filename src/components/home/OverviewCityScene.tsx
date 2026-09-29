import React from 'react';
import {
  ShieldCheck, Cpu, BrainCircuit, Database, Network, BarChart3,
  Code2, Link2, Settings, RadioTower, Building2, Zap,
} from 'lucide-react';

type Props = { onExplore: () => void; onQuiz: () => void };

// ──────────────────────────────────────────────────────────────────────────
// Fully hardcoded vector recreation of the reference artwork (no image file,
// no WebGL). Everything is drawn in a 1216x642 coordinate space so it scales
// perfectly; pins live in the same space so they always sit on their building.
// ──────────────────────────────────────────────────────────────────────────
const W = 1216;
const H = 642;

const seeded = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const SHORE: [number, number][] = [[0, 120], [330, 100], [440, 150], [560, 186], [700, 172], [880, 176], [1000, 214], [1216, 240]];
const shoreY = (x: number) => {
  for (let i = 0; i < SHORE.length - 1; i++) {
    const [x1, y1] = SHORE[i]; const [x2, y2] = SHORE[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((x - x1) / (x2 - x1)) * (y2 - y1);
  }
  return 240;
};

const GREENS = ['#17491a', '#1f5a1f', '#2c7a2a', '#3b9433', '#4aa53a', '#256b25'];

interface Tree { x: number; y: number; r: number; c: string; }
const TREES: Tree[] = (() => {
  const list: Tree[] = [];
  for (let i = 0; i < 1500; i++) {
    const x = seeded(i * 3 + 1) * W;
    const y = 96 + seeded(i * 3 + 2) * (H - 96);
    if (y < shoreY(x) + 6) continue;
    const r = 2.6 + (y / H) * 7.5 * (0.7 + seeded(i + 9) * 0.6);
    list.push({ x, y, r, c: GREENS[Math.floor(seeded(i * 5 + 4) * GREENS.length)] });
  }
  return list;
})();

// ── building primitives ────────────────────────────────────────────────────
interface BoxProps {
  x: number; y: number; w: number; h: number; d?: number;
  front: string; side: string; top: string; win?: boolean; glow?: string;
}
const Box: React.FC<BoxProps> = ({ x, y, w, h, d = 14, front, side, top, win = true, glow }) => {
  const l = x - w / 2; const r = x + w / 2;
  return (
    <g filter={glow ? 'url(#soft)' : undefined}>
      <polygon points={`${r},${y} ${r + d},${y - d * 0.5} ${r + d},${y - h - d * 0.5} ${r},${y - h}`} fill={side} />
      <rect x={l} y={y - h} width={w} height={h} fill={front} />
      <polygon points={`${l},${y - h} ${r},${y - h} ${r + d},${y - h - d * 0.5} ${l + d},${y - h - d * 0.5}`} fill={top} />
      {win && <rect x={l} y={y - h} width={w} height={h} fill="url(#win)" />}
      {glow && <rect x={l} y={y - h} width={w} height={2} fill={glow} opacity={0.9} />}
      {glow && <line x1={l} y1={y} x2={l} y2={y - h} stroke={glow} strokeWidth={1.4} opacity={0.85} />}
    </g>
  );
};

interface DrumProps { cx: number; y: number; rx: number; ry: number; h: number; body: string; roof: string; band?: string; }
const Drum: React.FC<DrumProps> = ({ cx, y, rx, ry, h, body, roof, band }) => (
  <g>
    <path d={`M${cx - rx},${y} L${cx - rx},${y - h} A${rx},${ry} 0 0 1 ${cx + rx},${y - h} L${cx + rx},${y} A${rx},${ry} 0 0 1 ${cx - rx},${y} Z`} fill={body} />
    <path d={`M${cx - rx},${y} L${cx - rx},${y - h} A${rx},${ry} 0 0 1 ${cx + rx},${y - h} L${cx + rx},${y} A${rx},${ry} 0 0 1 ${cx - rx},${y} Z`} fill="url(#win)" opacity={0.7} />
    {band && <path d={`M${cx - rx},${y - h * 0.45} A${rx},${ry} 0 0 0 ${cx + rx},${y - h * 0.45}`} fill="none" stroke={band} strokeWidth={2.2} opacity={0.9} />}
    <ellipse cx={cx} cy={y - h} rx={rx} ry={ry} fill={roof} />
    <ellipse cx={cx} cy={y - h} rx={rx * 0.72} ry={ry * 0.72} fill="#000" opacity={0.13} />
  </g>
);

const Stadium: React.FC<{ cx: number; y: number; rx: number; ry: number; h: number; body: string; dome: string }> = ({ cx, y, rx, ry, h, body, dome }) => (
  <g>
    <Drum cx={cx} y={y} rx={rx} ry={ry} h={h} body={body} roof="#c9d3dd" band="#ffb648" />
    <ellipse cx={cx} cy={y - h - 2} rx={rx * 0.9} ry={ry * 0.86} fill={dome} />
    {Array.from({ length: 9 }).map((_, i) => (
      <line key={i} x1={cx - rx * 0.85 + i * rx * 0.21} y1={y - h - ry * 0.7} x2={cx - rx * 0.6 + i * rx * 0.15} y2={y - h + ry * 0.55} stroke="#7fb8ff" strokeWidth={1} opacity={0.75} />
    ))}
    <ellipse cx={cx - rx * 0.2} cy={y - h - ry * 0.35} rx={rx * 0.5} ry={ry * 0.32} fill="#fff" opacity={0.18} />
  </g>
);

// ── pins ───────────────────────────────────────────────────────────────────
const MARKERS = [
  { label: 'Security', Icon: ShieldCheck, x: 232, y: 97, action: 'explore' },
  { label: 'Compute', Icon: Cpu, x: 612, y: 97, action: 'explore' },
  { label: 'AI/ML', Icon: BrainCircuit, x: 54, y: 172, action: 'quiz' },
  { label: 'Storage', Icon: Database, x: 369, y: 181, action: 'explore' },
  { label: 'Networking', Icon: Network, x: 766, y: 159, action: 'explore' },
  { label: 'Community Center', Icon: Building2, x: 900, y: 224, action: 'explore' },
  { label: 'IoT', Icon: RadioTower, x: 1088, y: 214, action: 'explore' },
  { label: 'Analytics', Icon: BarChart3, x: 150, y: 242, action: 'quiz' },
  { label: 'Developer Tools', Icon: Code2, x: 68, y: 371, action: 'quiz' },
  { label: 'Integration', Icon: Link2, x: 294, y: 371, action: 'quiz' },
  { label: 'Management', Icon: Settings, x: 779, y: 402, action: 'explore' },
  { label: 'Challenge Zone', Icon: Zap, x: 1050, y: 421, action: 'quiz' },
] as const;

export const OverviewCityScene: React.FC<Props> = ({ onExplore, onQuiz }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#2f6f2a]">
      <svg viewBox={`0 0 ${W} ${H}`} className="block w-full h-auto select-none" role="img" aria-label="AWS smart city overview" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3d8fe0" /><stop offset="0.6" stopColor="#7fbdf0" /><stop offset="1" stopColor="#cfe7f7" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3aa0e6" /><stop offset="0.5" stopColor="#1f86d6" /><stop offset="1" stopColor="#1670c0" />
          </linearGradient>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#477f35" /><stop offset="0.42" stopColor="#326b2c" /><stop offset="1" stopColor="#173f1e" />
          </linearGradient>
          <linearGradient id="deck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3c434d" /><stop offset="1" stopColor="#14171d" />
          </linearGradient>
          <linearGradient id="towerL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#10141c" /><stop offset="1" stopColor="#1d2733" />
          </linearGradient>
          <linearGradient id="towerR" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4fbf" /><stop offset="1" stopColor="#0e2f86" />
          </linearGradient>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff9900" stopOpacity="0.9" /><stop offset="1" stopColor="#ff9900" stopOpacity="0" />
          </linearGradient>
          <pattern id="win" width="5" height="6" patternUnits="userSpaceOnUse">
            <rect width="5" height="6" fill="none" />
            <rect x="1" y="1.5" width="2.4" height="2.4" fill="#ffd98a" opacity="0.55" />
          </pattern>
          <filter id="soft"><feGaussianBlur stdDeviation="0.3" /></filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>

        {/* sky */}
        <rect width={W} height={H} fill="url(#sky)" />
        {[[860, 14, 60], [1010, 22, 46], [1140, 30, 54], [740, 10, 40]].map(([cx, cy, r], i) => (
          <g key={i} opacity={0.85}>
            <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.22} fill="#fff" />
            <ellipse cx={cx + r * 0.3} cy={cy - r * 0.1} rx={r * 0.6} ry={r * 0.2} fill="#fff" />
          </g>
        ))}

        {/* distant mountains */}
        <path d="M330,80 L420,44 L500,58 L560,36 L640,52 L720,34 L800,50 L880,36 L960,46 L1050,30 L1130,42 L1216,28 L1216,90 L330,90 Z" fill="#6b8fb3" />
        <path d="M400,80 L470,58 L540,66 L610,50 L690,62 L780,48 L860,60 L940,52 L1040,60 L1140,54 L1216,60 L1216,90 L400,90 Z" fill="#8fb0c8" opacity={0.9} />
        {/* far-shore skyline */}
        {Array.from({ length: 22 }).map((_, i) => {
          const bx = 1010 + i * 10; const bh = 14 + seeded(i + 40) * 34;
          return <rect key={i} x={bx} y={96 - bh} width={7 + seeded(i + 60) * 4} height={bh} fill={i % 3 ? '#93a9bd' : '#7f97ad'} />;
        })}

        {/* water */}
        <rect x="0" y="60" width={W} height="200" fill="url(#water)" />
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={i} x1={400 + seeded(i) * 800} y1={75 + seeded(i + 3) * 150} x2={430 + seeded(i) * 800} y2={75 + seeded(i + 3) * 150} stroke="#bfe6ff" strokeWidth={0.8} opacity={0.35} />
        ))}
        {/* bridge */}
        <path d="M360,104 Q790,94 1216,128" fill="none" stroke="#d3dbe2" strokeWidth={5} />
        <path d="M360,110 Q790,100 1216,134" fill="none" stroke="#7c8896" strokeWidth={2.5} />
        {Array.from({ length: 58 }).map((_, i) => {
          const t = i / 57; const px = 360 + t * 856; const py = 104 + t * 24 - Math.sin(t * Math.PI) * 6;
          return <g key={i}><rect x={px - 1} y={py + 4} width={2.4} height={16} fill="#a6b2be" /><path d={`M${px - 7},${py + 4} Q${px},${py - 9} ${px + 7},${py + 4}`} fill="none" stroke="#c5ced6" strokeWidth={1.4} /></g>;
        })}
        {/* islands */}
        {[[1035, 139, 34, 11], [930, 125, 10, 4], [548, 128, 12, 5], [1168, 172, 16, 6], [650, 122, 8, 3]].map(([cx, cy, rx, ry], i) => (
          <g key={i}><ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#1e5a26" /><ellipse cx={cx} cy={cy - ry * 0.4} rx={rx * 0.8} ry={ry * 0.7} fill="#2f7a34" /></g>
        ))}

        {/* Removed the oversized green foreground hill so the blue sky/water remains visible. */}

        {/* land */}
        <path d={`M0,120 L330,100 C360,110 400,130 440,150 C520,190 600,190 700,172 C800,160 880,178 950,205 C1050,232 1150,236 1216,242 L1216,${H} L0,${H} Z`} fill="url(#land)" />
        <path d="M0,302 C190,250 300,300 460,260 S760,244 920,300 S1110,350 1216,316" fill="none" stroke="#75a64a" strokeWidth={24} opacity={0.08} />
        <path d="M-20,450 C180,390 310,440 500,398 S840,370 1010,430 S1140,470 1240,438" fill="none" stroke="#0d351a" strokeWidth={34} opacity={0.13} />
        <path d="M330,100 C360,110 400,130 440,150 C520,190 600,190 700,172 C800,160 880,178 950,205 C1050,232 1150,236 1216,242" fill="none" stroke="#a5c78a" strokeWidth={1.6} opacity={0.38} />

        {/* ground roads + ponds */}
        <ellipse cx="880" cy="424" rx="34" ry="12" fill="#3aa8c8" /><ellipse cx="960" cy="574" rx="46" ry="14" fill="#3aa8c8" />
        <ellipse cx="490" cy="300" rx="16" ry="6" fill="#3aa8c8" />
        <path d="M-20,230 Q120,205 300,262 T440,292" fill="none" stroke="#a9b3bd" strokeWidth={7} opacity={0.9} />
        <path d="M-20,230 Q120,205 300,262 T440,292" fill="none" stroke="#5aa8ff" strokeWidth={1.4} />
        <path d="M640,300 Q700,255 800,250 T1000,210" fill="none" stroke="#a9b3bd" strokeWidth={6} />
        <path d="M430,330 Q470,410 560,405" fill="none" stroke="#9aa5b0" strokeWidth={8} />

        {/* trees + buildings, back to front */}
        {(() => {
          type Item = { y: number; el: React.ReactNode };
          const items: Item[] = TREES.map((t, i) => ({
            y: t.y,
            el: (
              <g key={`t${i}`}>
                <circle cx={t.x} cy={t.y + t.r * 0.35} r={t.r} fill="#0f3a12" opacity={0.55} />
                <circle cx={t.x} cy={t.y} r={t.r} fill={t.c} />
                <circle cx={t.x - t.r * 0.28} cy={t.y - t.r * 0.32} r={t.r * 0.5} fill="#7cc65a" opacity={0.32} />
              </g>
            ),
          }));
          const add = (y: number, el: React.ReactNode, key: string) => items.push({ y, el: <g key={key}>{el}</g> });

          // far-left / back skyline
          add(150, <Box x={168} y={225} w={30} h={100} d={12} front="#3a4a63" side="#26324a" top="#5d708c" glow="#4fa8ff" />, 'b1');
          add(150, <Box x={280} y={250} w={44} h={135} d={16} front="#242b3a" side="#171c28" top="#3d475a" glow="#4fa8ff" />, 'b2');
          add(150, <Box x={238} y={185} w={26} h={70} d={10} front="#4d5f78" side="#334159" top="#7488a3" glow="#4fa8ff" />, 'b2b');
          add(150, <Box x={402} y={165} w={46} h={92} d={16} front="#2e3b52" side="#1b2436" top="#56688a" glow="#4fa8ff" />, 'b3');
          add(150, <rect x={393} y={92} width={26} height={22} fill="#1a54c9" />, 'b3s');
          add(150, <text x={406} y={107} fontSize={9} fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif">aws</text>, 'b3t');
          add(220, <Box x={452} y={245} w={42} h={62} d={14} front="#8492a6" side="#5d6b80" top="#aab6c6" glow="#4fa8ff" />, 'b4');
          add(220, <Box x={352} y={205} w={34} h={30} d={12} front="#9db0c6" side="#6a7d95" top="#c3d0e0" />, 'b4b');
          add(200, <Box x={705} y={240} w={30} h={55} d={12} front="#4a5a72" side="#2f3c52" top="#7387a3" glow="#4fa8ff" />, 'b5');
          add(190, <Box x={798} y={150} w={34} h={42} d={12} front="#8492a6" side="#5d6b80" top="#aab6c6" />, 'b5b');
          add(200, <Box x={725} y={182} w={30} h={30} d={12} front="#7ad0ff" side="#3d8fd0" top="#b8e8ff" glow="#7ad0ff" />, 'b5c');

          // extra mid-city density
          add(210, <Box x={520} y={215} w={30} h={46} d={12} front="#5c6e88" side="#3a475e" top="#8a9db6" glow="#4fa8ff" />, 'x1');
          add(232, <Box x={330} y={240} w={26} h={64} d={10} front="#33425c" side="#212b40" top="#5e7090" glow="#4fa8ff" />, 'x2');
          add(240, <Box x={205} y={262} w={34} h={52} d={12} front="#46577a" side="#2d3a58" top="#6f83a6" glow="#7ad0ff" />, 'x3');
          add(275, <Box x={500} y={278} w={32} h={38} d={12} front="#a3b1c4" side="#74849a" top="#d0dbe8" />, 'x4');
          add(300, <Box x={470} y={340} w={44} h={30} d={14} front="#8e9db2" side="#63738a" top="#bdc9d9" glow="#4fa8ff" />, 'x5');
          add(280, <Box x={668} y={290} w={40} h={44} d={14} front="#7d8da4" side="#55647c" top="#aebbcc" glow="#4fa8ff" />, 'x6');
          add(360, <Box x={690} y={362} w={34} h={30} d={12} front="#c7d1de" side="#96a4b7" top="#e8eef6" />, 'x7');
          add(345, <Box x={845} y={352} w={26} h={36} d={10} front="#5c6e88" side="#3a475e" top="#8a9db6" glow="#4fa8ff" />, 'x8');
          add(392, <Box x={195} y={395} w={40} h={44} d={14} front="#7f92ae" side="#566a86" top="#a9bbd2" glow="#7ad0ff" />, 'x9');
          add(520, <Box x={420} y={470} w={46} h={40} d={14} front="#c9d3e0" side="#98a6ba" top="#e9eff7" />, 'x10');
          add(560, <Box x={700} y={548} w={56} h={40} d={16} front="#a99f88" side="#7f7761" top="#d3c9b0" />, 'x11');
          // AI/ML (purple neon)
          add(275, <g><Box x={58} y={275} w={72} h={68} d={16} front="#37429a" side="#241d6e" top="#6a5cff" glow="#a48bff" /><rect x={28} y={215} width={40} height={30} fill="#7a6bff" opacity={0.5} /></g>, 'aiml');
          // Analytics ring
          add(330, <Drum cx={150} y={330} rx={76} ry={26} h={34} body="#5a4fc0" roof="#c6cede" band="#7fc8ff" />, 'analytics');
          add(332, <Drum cx={150} y={318} rx={44} ry={15} h={20} body="#8a98ae" roof="#dbe4ee" band="#7fc8ff" />, 'analytics2');
          // Storage / centre-left drum
          add(310, <Drum cx={380} y={310} rx={62} ry={22} h={54} body="#8e99ab" roof="#c9d3df" band="#ffb648" />, 'storage');
          add(300, <ellipse cx={380} cy={250} rx={38} ry={13} fill="#5b6a86" />, 'storage2');
          // Networking drum
          add(255, <Drum cx={758} y={255} rx={50} ry={17} h={36} body="#9aa6b8" roof="#cfd8e3" band="#ffb648" />, 'net');
          // Developer tools building
          add(465, <g><Box x={100} y={465} w={120} h={38} d={22} front="#4b3da8" side="#332a80" top="#7c6dff" glow="#b08bff" /><Box x={60} y={438} w={44} h={26} d={12} front="#5a4dc0" side="#3a2e94" top="#8a7bff" /></g>, 'dev');
          // Integration building
          add(462, <g><Box x={300} y={462} w={100} h={46} d={22} front="#d8e2ee" side="#a6b4c6" top="#f1f6fb" /><Box x={262} y={442} w={38} h={26} d={12} front="#c8d4e2" side="#93a2b6" top="#e6eef7" /></g>, 'int');
          // Data mgmt block
          add(385, <Box x={752} y={385} w={72} h={44} d={16} front="#8492a6" side="#5d6b80" top="#aab6c6" glow="#4fa8ff" />, 'dm');
          // Management block
          add(500, <g><Box x={795} y={500} w={80} h={48} d={18} front="#d2c8ae" side="#a89e86" top="#efe6cf" /><rect x={757} y={462} width={12} height={34} fill="#2a63e6" /></g>, 'mgmt');
          // IoT tower
          add(370, <g><Box x={1098} y={368} w={48} h={96} d={16} front="#2e6fd0" side="#1a469c" top="#5aa6ff" glow="#7ad0ff" /><line x1={1126} y1={250} x2={1126} y2={285} stroke="#c9d3df" strokeWidth={2} /></g>, 'iot');
          // Community stadium
          add(325, <Stadium cx={935} y={330} rx={102} ry={38} h={34} body="#c8bfa8" dome="#2a63e0" />, 'stad1');
          // Challenge stadium
          add(495, <Stadium cx={1095} y={492} rx={112} ry={44} h={44} body="#b8a88c" dome="#2660dd" />, 'stad2');

          items.sort((a, b) => a.y - b.y);
          return items.map((it) => it.el);
        })()}

        {/* central AWS tower — clean dark front and blue side, matching the reference */}
        <g>
          {/* broad circular foundation with orange illuminated perimeter */}
          <ellipse cx="588" cy="352" rx="134" ry="46" fill="none" stroke="#ff8a00" strokeWidth={3.2} filter="url(#glow)" />
          <ellipse cx="590" cy="344" rx="99" ry="36" fill="#303b4d" stroke="#5b687a" strokeWidth={1.2} />
          <ellipse cx="590" cy="338" rx="85" ry="30" fill="#121a27" />
          <ellipse cx="590" cy="331" rx="70" ry="22" fill="#1a2738" opacity={0.95} />

          {/* tower body: left face is charcoal, right face is AWS blue */}
          <path d="M527,176 L527,330 A31,12 0 0 0 589,342 L589,178 Z" fill="url(#towerL)" />
          <path d="M589,178 L589,342 L646,330 L646,176 Z" fill="url(#towerR)" />
          <path d="M527,176 L589,166 L646,176 L589,188 Z" fill="#111c2e" />
          <path d="M527,176 L589,178 L589,342 A31,12 0 0 1 527,330 Z" fill="#141c29" opacity={0.72} />
          <path d="M589,178 L646,176 L646,330 L589,342 Z" fill="#1646b2" opacity={0.72} />

          {/* subtle edge highlights only; no vertical facade grid lines */}
          <path d="M530,184 L530,326" fill="none" stroke="#6b829c" strokeWidth={1.2} opacity={0.22} />
          <path d="M642,180 L642,328" fill="none" stroke="#8fcaff" strokeWidth={1.2} opacity={0.18} />

          {/* orange illuminated wraparound bands */}
          <path d="M527,300 Q590,340 646,300" fill="none" stroke="#ff8a00" strokeWidth={5.2} strokeLinecap="round" filter="url(#glow)" />
          <path d="M527,236 Q590,262 646,236" fill="none" stroke="#ff8a00" strokeWidth={4.2} strokeLinecap="round" filter="url(#glow)" />

          {/* rooftop blue mechanical crown */}
          <rect x="603" y="128" width="42" height="48" rx="1" fill="#1b4fc4" />
          <rect x="610" y="124" width="28" height="8" rx="2" fill="#2d70ea" />
          <rect x="614" y="132" width="20" height="40" fill="#255bd0" opacity={0.58} />

          {/* AWS wordmark and orange smile on blue face */}
          <text x="613" y="228" fontSize="27" fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif" letterSpacing="-1">aws</text>
          <path d="M594,236 Q612,246 632,232" fill="none" stroke="#ff9900" strokeWidth={3.2} strokeLinecap="round" />

          {/* warm square windows on the dark front face */}
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={539 + (i % 2) * 22} y={258 + Math.floor(i / 2) * 22} width={9} height={12} rx={0.5} fill="#d99a3d" opacity={0.9} />
          ))}
        </g>

        {/* elevated highway sweeping to the deck */}
        <path d="M-10,572 Q220,500 470,432 Q560,412 640,452 Q700,470 780,420 Q900,352 1010,290 Q1120,240 1216,236" fill="none" stroke="#5a6472" strokeWidth={11} />
        <path d="M-10,568 Q220,496 470,428 Q560,408 640,448 Q700,466 780,416 Q900,348 1010,286 Q1120,236 1216,232" fill="none" stroke="#b8c2cc" strokeWidth={2} />
        <path d="M-10,565 Q220,492 470,424" fill="none" stroke="#4fa8ff" strokeWidth={1.4} opacity={0.9} />
        <path d="M640,452 Q700,470 780,420 Q900,352 1010,290" fill="none" stroke="#4fa8ff" strokeWidth={1.4} opacity={0.9} />

        {/* foreground road — asphalt with bold edge lines and thin center lane markings */}
        <path d={`M0,${H} L0,596 C90,540 250,500 430,497 C600,494 730,545 850,${H} Z`} fill="url(#deck)" />

        {/* strong continuous road-edge lines */}
        <path d="M0,596 C90,540 250,500 430,497 C600,494 730,545 850,642" fill="none" stroke="#d8dee7" strokeWidth={8} opacity={0.96} />
        <path d="M0,607 C96,551 256,511 430,508 C600,505 735,557 850,642" fill="none" stroke="#697482" strokeWidth={3} opacity={0.98} />
        <path d="M0,621 C105,566 265,529 430,525 C585,523 710,567 815,642" fill="none" stroke="#111720" strokeWidth={2} opacity={0.95} />

        {/* fine dashed lane divider lines, kept inside the roadway */}
        <path d="M36,614 C115,576 202,548 291,531" fill="none" stroke="#f4f6f8" strokeWidth={2.2} strokeLinecap="round" strokeDasharray="20 17" opacity={0.95} />
        <path d="M326,519 C371,509 416,505 461,506" fill="none" stroke="#f4f6f8" strokeWidth={2.2} strokeLinecap="round" strokeDasharray="18 16" opacity={0.95} />
        <path d="M501,508 C545,512 585,525 621,541" fill="none" stroke="#f4f6f8" strokeWidth={2.2} strokeLinecap="round" strokeDasharray="17 15" opacity={0.95} />
        <path d="M647,553 C679,568 709,588 738,611" fill="none" stroke="#f4f6f8" strokeWidth={2.2} strokeLinecap="round" strokeDasharray="15 13" opacity={0.95} />

        {/* restrained orange guidance strips remain in the middle of the road */}
        <path d="M282,548 L372,528" stroke="#ff8a00" strokeWidth={9} strokeLinecap="round" filter="url(#glow)" />
        <path d="M446,519 Q520,514 592,538" stroke="#ff8a00" strokeWidth={9} strokeLinecap="round" fill="none" filter="url(#glow)" />

        {/* avatar (seen from behind) */}
        <g>
          <ellipse cx="541" cy="588" rx="36" ry="7" fill="#000" opacity={0.35} />
          <rect x="522" y="500" width="15" height="76" rx="4" fill="#15181e" /><rect x="543" y="500" width="15" height="76" rx="4" fill="#1b1f27" />
          <rect x="519" y="574" width="20" height="10" rx="4" fill="#111" /><rect x="541" y="574" width="20" height="10" rx="4" fill="#111" />
          <rect x="519" y="580" width="20" height="4" rx="2" fill="#ff7a00" /><rect x="541" y="580" width="20" height="4" rx="2" fill="#ff7a00" />
          <path d="M508,438 Q508,424 540,422 Q574,424 574,438 L578,494 L504,494 Z" fill="#20242c" />
          <rect x="503" y="482" width="76" height="8" fill="#e8730e" />
          <rect x="497" y="440" width="12" height="56" rx="5" fill="#20242c" /><rect x="573" y="440" width="12" height="56" rx="5" fill="#20242c" />
          <rect x="497" y="484" width="12" height="7" rx="3" fill="#ff7a00" /><rect x="573" y="484" width="12" height="7" rx="3" fill="#ff7a00" />
          <rect x="520" y="440" width="44" height="54" rx="8" fill="#14171d" stroke="#ff8a00" strokeWidth={1.6} />
          <text x="542" y="463" fontSize="9" fontWeight={800} fill="#fff" textAnchor="middle" fontFamily="system-ui,sans-serif">aws</text>
          <path d="M531,467 Q542,473 553,466" fill="none" stroke="#ff9900" strokeWidth={1.6} strokeLinecap="round" />
          <circle cx="541" cy="412" r="13" fill="#1a1410" /><rect x="536" y="420" width="10" height="7" fill="#c98f64" />
        </g>

        {/* pins */}
        {MARKERS.map(({ label, Icon, x, y, action }) => {
          const tw = label.length * 6.7 + 24;
          return (
            <g key={label} onClick={action === 'quiz' ? onQuiz : onExplore} style={{ cursor: 'pointer' }}>
              <rect x={x - 1.4} y={y + 22} width={2.8} height={44} fill="url(#beam)" />
              <path d={`M${x - 9},${y + 15} L${x},${y + 30} L${x + 9},${y + 15} Z`} fill="#ffa21a" filter="url(#glow)" />
              <circle cx={x} cy={y} r={20} fill="#ffa21a" filter="url(#glow)" />
              <circle cx={x} cy={y} r={16.5} fill="#171b23" />
              <Icon x={x - 9} y={y - 9} width={18} height={18} color="#ffb020" strokeWidth={2.4} />
              <rect x={x + 26} y={y - 13} width={tw} height={26} rx={7} fill="#15181f" opacity={0.94} />
              <text x={x + 26 + tw / 2} y={y + 4.6} fontSize={12.5} fontWeight={600} fill="#fff" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif">{label}</text>
            </g>
          );
        })}
      </svg>
    </section>
  );
};
