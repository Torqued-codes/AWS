import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  ShieldCheck, Cpu, BrainCircuit, Database, Network, BarChart3,
  Code2, Workflow, Settings, RadioTower, Building2, Zap,
  Compass, ArrowRight,
} from 'lucide-react';

type Props = { onExplore: () => void; onQuiz: () => void };

const MARKERS = [
  { label: 'Security', Icon: ShieldCheck, left: 17.5, top: 17.5 },
  { label: 'Compute', Icon: Cpu, left: 48.5, top: 17.5 },
  { label: 'AI/ML', Icon: BrainCircuit, left: 3.2, top: 30.5 },
  { label: 'Storage', Icon: Database, left: 28.2, top: 30.0 },
  { label: 'Networking', Icon: Network, left: 61.5, top: 27.0 },
  { label: 'Databases', Icon: Database, left: 74.0, top: 63.0 },
  { label: 'Analytics', Icon: BarChart3, left: 10.0, top: 42.0 },
  { label: 'Developer Tools', Icon: Code2, left: 4.0, top: 67.0 },
  { label: 'Integration', Icon: Workflow, left: 22.5, top: 67.0 },
  { label: 'Management', Icon: Settings, left: 62.5, top: 72.5 },
  { label: 'IoT', Icon: RadioTower, left: 87.0, top: 34.0 },
  { label: 'Community Center', Icon: Building2, left: 70.0, top: 39.0 },
  { label: 'Challenge Zone', Icon: Zap, left: 82.0, top: 66.0 },
] as const;

const seeded = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function createWindowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  ctx.fillStyle = '#102b4a'; ctx.fillRect(0, 0, 256, 512);
  for (let y = 10; y < 500; y += 25) {
    for (let x = 9; x < 250; x += 24) {
      const r = seeded(x * 2 + y * 3);
      ctx.fillStyle = r > 0.88 ? '#ffbd62' : r > 0.30 ? '#1474bb' : '#071c34';
      ctx.fillRect(x, y, 11, 15);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function createAwsLogo(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  ctx.clearRect(0, 0, 512, 256);
  ctx.textAlign = 'center'; ctx.fillStyle = '#f7fbff';
  ctx.font = 'bold 148px Arial'; ctx.fillText('aws', 256, 150);
  ctx.strokeStyle = '#ff9900'; ctx.lineWidth = 12;
  ctx.beginPath(); ctx.moveTo(150, 177); ctx.quadraticCurveTo(270, 232, 370, 173); ctx.stroke();
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}

export const OverviewCityScene: React.FC<Props> = ({ onExplore, onQuiz }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#72b8ed');
    scene.fog = new THREE.Fog(0x8dc8ed, 410, 900);
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 1400);
    camera.position.set(0, 205, 405);
    camera.lookAt(0, 56, -15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    host.replaceChildren(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xd7efff, 0x415333, 2.25));
    const sun = new THREE.DirectionalLight(0xfff2d6, 3.0);
    sun.position.set(-180, 280, 160); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -380; sun.shadow.camera.right = 380;
    sun.shadow.camera.top = 360; sun.shadow.camera.bottom = -360;
    sun.shadow.bias = -0.00025; scene.add(sun);

    const material = (color: THREE.ColorRepresentation, roughness = 0.72, metalness = 0) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness });
    const groundMat = material('#2b643b');
    const asphalt = material('#1a2c43', 0.85, 0.22);
    const roadEdge = material('#9db9ca', 0.45, 0.35);
    const concrete = material('#718da4', 0.58, 0.28);
    const glass = new THREE.MeshStandardMaterial({ color: '#275f91', roughness: 0.25, metalness: 0.55, map: createWindowTexture(), emissive: '#17436c', emissiveIntensity: 0.28 });
    const darkGlass = new THREE.MeshStandardMaterial({ color: '#092a4b', roughness: 0.2, metalness: 0.45, map: createWindowTexture(), emissive: '#06274b', emissiveIntensity: 0.2 });
    const blueGlass = material('#176ca9', 0.25, 0.52);
    const orange = new THREE.MeshStandardMaterial({ color: '#ff9d20', emissive: '#ff7600', emissiveIntensity: 2.0, metalness: 0.35 });
    const cyan = new THREE.MeshStandardMaterial({ color: '#0baaff', emissive: '#007bff', emissiveIntensity: 1.65, metalness: 0.3 });
    const white = material('#c8dce7', 0.4, 0.35);

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, sx = 1, sy = 1, sz = 1, cast = true) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z); mesh.scale.set(sx, sy, sz);
      mesh.castShadow = cast; mesh.receiveShadow = true; scene.add(mesh); return mesh;
    };
    const addCurve = (points: THREE.Vector3[], radius: number, mat: THREE.Material, tubular = 150) => {
      const curve = new THREE.CatmullRomCurve3(points);
      return add(new THREE.TubeGeometry(curve, tubular, radius, 8, false), mat, 0, 0, 0, 1, 1, 1, false);
    };

    // Island, bay, shoreline and distant mountain ridge.
    add(new THREE.PlaneGeometry(1000, 900), groundMat, 0, -5, 25, 1, 1, 1, false).rotation.x = -Math.PI / 2;
    const water = add(new THREE.PlaneGeometry(1150, 300), new THREE.MeshStandardMaterial({ color: '#168bd0', roughness: 0.19, metalness: 0.24, emissive: '#064c8c', emissiveIntensity: 0.13 }), 0, -3.5, -265, 1, 1, 1, false);
    water.rotation.x = -Math.PI / 2;
    const farWater = add(new THREE.PlaneGeometry(1150, 110), material('#2798d4', 0.24, 0.2), 0, -3.2, -435, 1, 1, 1, false); farWater.rotation.x = -Math.PI / 2;
    for (let i = 0; i < 52; i++) {
      const x = -520 + i * 20.5;
      const h = 45 + seeded(i + 13) * 92;
      const ridgeMat = material(i % 4 === 0 ? '#5e9fc4' : i % 3 === 0 ? '#7eb7d8' : '#4b8db9', 1, 0);
      add(new THREE.ConeGeometry(28 + seeded(i + 2) * 25, h, 5), ridgeMat, x, h * 0.48, -465 + seeded(i + 50) * 28, 1, 1, 1, false);
    }
    // Green island hills behind the waterfront.
    for (let i = 0; i < 38; i++) {
      const x = -490 + i * 26;
      const h = 26 + seeded(i + 99) * 55;
      add(new THREE.ConeGeometry(30 + seeded(i + 20) * 24, h, 7), material(i % 2 ? '#2c6b3a' : '#3e7d43'), x, h / 2 - 1, -330 + seeded(i + 5) * 38, 1, 1, 1, false);
    }

    // Elevated bay bridge with repeated piers, guardrails and lights.
    const bridgePts = [new THREE.Vector3(-560, 16, -250), new THREE.Vector3(-350, 21, -270), new THREE.Vector3(-120, 22, -268), new THREE.Vector3(140, 23, -260), new THREE.Vector3(360, 19, -252), new THREE.Vector3(560, 15, -235)];
    addCurve(bridgePts, 6.2, asphalt, 200);
    addCurve(bridgePts.map(p => new THREE.Vector3(p.x, p.y + 4.5, p.z + 6.2)), 0.8, roadEdge, 200);
    addCurve(bridgePts.map(p => new THREE.Vector3(p.x, p.y + 4.5, p.z - 6.2)), 0.8, roadEdge, 200);
    const bridgeCurve = new THREE.CatmullRomCurve3(bridgePts);
    for (let i = 0; i <= 44; i++) {
      const p = bridgeCurve.getPoint(i / 44);
      add(new THREE.BoxGeometry(4, p.y - 2, 4), concrete, p.x, (p.y - 2) / 2, p.z, 1, 1, 1, false);
      if (i % 2 === 0) add(new THREE.BoxGeometry(1.1, 1.2, 1.1), orange, p.x, p.y + 4.6, p.z, 1, 1, 1, false);
    }

    // City road network: curving arterial roads and ring roads.
    const ring: THREE.Vector3[] = [];
    for (let i = 0; i <= 120; i++) { const a = (i / 120) * Math.PI * 2; ring.push(new THREE.Vector3(Math.cos(a) * 132, 2.4, Math.sin(a) * 94 + 12)); }
    addCurve(ring, 10.5, asphalt, 220);
    addCurve(ring, 0.7, orange, 220);
    const arterials = [
      [[-500, 3, 190], [-340, 5, 125], [-190, 6, 95], [-70, 5, 70], [70, 5, 28], [240, 5, -40], [520, 3, -95]],
      [[-520, 2, -80], [-350, 4, -30], [-190, 5, 30], [0, 6, 95], [180, 5, 140], [350, 4, 175], [520, 2, 200]],
      [[-480, 4, 275], [-300, 6, 220], [-110, 7, 175], [80, 7, 112], [270, 5, 40], [490, 3, -5]],
      [[-480, 3, 35], [-330, 4, 50], [-180, 5, 72], [0, 6, 40], [190, 5, 12], [390, 4, 48], [510, 3, 95]],
    ];
    arterials.forEach((coords, idx) => {
      const pts = coords.map(([x, y, z]) => new THREE.Vector3(x, y, z));
      addCurve(pts, idx === 1 ? 6.8 : 5.2, asphalt, 180);
      addCurve(pts.map(p => new THREE.Vector3(p.x, p.y + 0.8, p.z)), 0.34, idx % 2 ? cyan : orange, 180);
      addCurve(pts.map(p => new THREE.Vector3(p.x, p.y + 0.5, p.z + (idx % 2 ? 4.5 : -4.5))), 0.45, roadEdge, 180);
    });

    // Building helper with detailed roof cap, facade glazing and a lit crown.
    const makeBuilding = (x: number, z: number, w: number, d: number, h: number, index: number, landmark = false) => {
      const base = add(new THREE.BoxGeometry(w + 5, 3.5, d + 5), concrete, x, 1.2, z);
      base.rotation.y = (index % 5 - 2) * 0.035;
      const body = add(new THREE.BoxGeometry(w, h, d), index % 4 === 0 ? darkGlass : glass, x, h / 2 + 3, z);
      body.rotation.y = (index % 7 - 3) * 0.018;
      add(new THREE.BoxGeometry(w + 1.2, 1.2, d + 1.2), index % 3 === 0 ? cyan : white, x, h + 3.8, z, 1, 1, 1, false);
      add(new THREE.BoxGeometry(w * 0.84, 1.5, d * 0.84), material('#0a2743', 0.3, 0.55), x, h + 5, z, 1, 1, 1, false);
      if (index % 3 === 0 || landmark) {
        add(new THREE.BoxGeometry(1.4, h * 0.76, 0.8), cyan, x - w * 0.42, h * 0.52 + 3, z + d / 2 + 0.55, 1, 1, 1, false);
        add(new THREE.BoxGeometry(1.2, h * 0.65, 0.8), orange, x + w * 0.42, h * 0.48 + 3, z + d / 2 + 0.55, 1, 1, 1, false);
      }
      if (index % 4 === 0) add(new THREE.CylinderGeometry(0.65, 1.0, 10 + (index % 3) * 3, 6), white, x, h + 10, z, 1, 1, 1, false);
      return body;
    };

    // Dense downtown skyline, with deliberate corridors around landmarks.
    let buildingIndex = 0;
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 21; col++) {
        const x = -420 + col * 42 + (row % 2) * 10;
        const z = -175 + row * 43;
        if (Math.abs(x) < 62 && Math.abs(z) < 82) continue;
        if (Math.abs(x) < 175 && Math.abs(z) < 36) continue;
        if (Math.abs(x - 260) < 75 && Math.abs(z - 75) < 75) continue;
        if (Math.abs(x + 245) < 70 && Math.abs(z - 120) < 55) continue;
        if (Math.abs(x - 265) < 80 && Math.abs(z - 175) < 65) continue;
        if (seeded(row * 37 + col * 17) < 0.10) continue;
        const height = 18 + seeded(buildingIndex + 5) * 65 + (Math.abs(x) < 190 ? 20 : 0);
        const width = 13 + seeded(buildingIndex + 27) * 15;
        const depth = 12 + seeded(buildingIndex + 45) * 14;
        makeBuilding(x, z, width, depth, height, buildingIndex++);
      }
    }

    // Central AWS tower podium and illuminated tower.
    add(new THREE.CylinderGeometry(66, 73, 11, 64), material('#293e55', 0.35, 0.58), 0, 5.5, 0);
    add(new THREE.CylinderGeometry(61, 64, 2.6, 64), orange, 0, 12, 0, 1, 1, 1, false);
    add(new THREE.CylinderGeometry(51, 54, 10, 64), material('#385a78', 0.32, 0.55), 0, 18, 0);
    add(new THREE.CylinderGeometry(47, 49, 2, 64), cyan, 0, 24, 0, 1, 1, 1, false);
    add(new THREE.BoxGeometry(64, 132, 52), darkGlass, 0, 92, -2);
    add(new THREE.BoxGeometry(72, 4, 60), orange, 0, 28, -2, 1, 1, 1, false);
    add(new THREE.BoxGeometry(72, 4, 60), orange, 0, 157, -2, 1, 1, 1, false);
    add(new THREE.BoxGeometry(7, 122, 2.5), orange, -32.5, 92, 25, 1, 1, 1, false);
    add(new THREE.BoxGeometry(7, 122, 2.5), orange, 32.5, 92, 25, 1, 1, 1, false);
    add(new THREE.BoxGeometry(32, 22, 28), blueGlass, 0, 171, -2);
    add(new THREE.ConeGeometry(17, 22, 4), orange, 0, 193, -2, 1, 1, 1, false);
    const logo = add(new THREE.PlaneGeometry(40, 20), new THREE.MeshBasicMaterial({ map: createAwsLogo(), transparent: true, side: THREE.DoubleSide }), 0, 96, 24.8, 1, 1, 1, false);
    logo.rotation.y = 0;

    // Landmark campus: cylindrical learning/lab buildings and solar-roof challenge arena.
    const roundBuilding = (x: number, z: number, radius: number, h: number, color = '#3679a8') => {
      add(new THREE.CylinderGeometry(radius + 7, radius + 9, 4, 40), concrete, x, 2, z);
      add(new THREE.CylinderGeometry(radius, radius * 1.03, h, 40), material(color, 0.28, 0.48), x, h / 2 + 4, z);
      add(new THREE.CylinderGeometry(radius + 1, radius + 1, 2.2, 40), cyan, x, h + 5, z, 1, 1, 1, false);
      add(new THREE.CylinderGeometry(radius * 0.82, radius * 0.82, 2.2, 40), white, x, h + 7, z, 1, 1, 1, false);
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        add(new THREE.BoxGeometry(2.1, h * 0.62, 0.8), i % 3 === 0 ? orange : cyan, x + Math.cos(a) * (radius + 0.25), h * 0.54 + 4, z + Math.sin(a) * (radius + 0.25), 1, 1, 1, false).rotation.y = -a;
      }
    };
    roundBuilding(-185, -10, 48, 38, '#2d6fa4');
    roundBuilding(185, -75, 39, 30, '#2f759d');
    roundBuilding(-255, 135, 44, 27, '#2870a6');
    roundBuilding(265, 155, 46, 29, '#286a9d');

    // Solar-panel arena: wide oval roof with blue photovoltaic panels.
    add(new THREE.CylinderGeometry(72, 77, 7, 64), concrete, 270, 4, 72);
    add(new THREE.CylinderGeometry(66, 69, 30, 64), darkGlass, 270, 22, 72);
    add(new THREE.CylinderGeometry(76, 76, 3, 64), cyan, 270, 39, 72, 1, 1, 1, false);
    const solarRoof = add(new THREE.CylinderGeometry(70, 70, 7, 64), material('#123e72', 0.24, 0.62), 270, 43, 72, 1.0, 0.15, 0.74);
    solarRoof.rotation.z = -0.03;
    const panelMat = new THREE.MeshStandardMaterial({ color: '#1267bd', roughness: 0.25, metalness: 0.5, emissive: '#053c8e', emissiveIntensity: 0.38 });
    for (let i = 0; i < 10; i++) {
      const panel = add(new THREE.BoxGeometry(12, 0.6, 22), panelMat, 270 - 48 + i * 10.7, 44.3, 72, 1, 1, 1, false);
      panel.rotation.y = -0.18;
    }
    for (let i = 0; i < 7; i++) add(new THREE.BoxGeometry(0.5, 0.7, 47), cyan, 270 - 32 + i * 10.5, 44.7, 72, 1, 1, 1, false);

    // Distinct IoT antenna tower and compact tech campus buildings.
    makeBuilding(390, 18, 43, 42, 100, 888, true);
    add(new THREE.CylinderGeometry(1.2, 2, 42, 8), white, 390, 174, 18, 1, 1, 1, false);
    add(new THREE.SphereGeometry(4.5, 12, 10), cyan, 390, 197, 18, 1, 1, 1, false);
    makeBuilding(-360, 15, 55, 48, 62, 901, true);
    makeBuilding(-340, 110, 60, 50, 52, 902, true);
    makeBuilding(145, 190, 58, 48, 45, 903, true);
    makeBuilding(145, 115, 48, 40, 36, 904, true);
    makeBuilding(30, 205, 62, 48, 39, 905, true);

    // Elevated flyovers sweeping through the foreground and across campus.
    const flyovers = [
      [new THREE.Vector3(-560, 19, 265), new THREE.Vector3(-350, 25, 205), new THREE.Vector3(-160, 28, 165), new THREE.Vector3(35, 25, 130), new THREE.Vector3(240, 21, 65), new THREE.Vector3(560, 17, 5)],
      [new THREE.Vector3(-540, 14, 160), new THREE.Vector3(-350, 18, 105), new THREE.Vector3(-180, 20, 70), new THREE.Vector3(30, 19, 5), new THREE.Vector3(260, 18, -80), new THREE.Vector3(540, 14, -120)],
    ];
    flyovers.forEach((pts, i) => {
      addCurve(pts, 5.5, asphalt, 200);
      addCurve(pts.map(p => new THREE.Vector3(p.x, p.y + 3.8, p.z + 5.5)), 0.65, roadEdge, 200);
      addCurve(pts.map(p => new THREE.Vector3(p.x, p.y + 3.8, p.z - 5.5)), 0.65, roadEdge, 200);
      const curve = new THREE.CatmullRomCurve3(pts);
      for (let j = 0; j <= 22; j++) {
        const p = curve.getPoint(j / 22);
        add(new THREE.CylinderGeometry(1.8, 2.4, p.y - 2, 7), concrete, p.x, (p.y - 2) / 2, p.z, 1, 1, 1, false);
      }
    });

    // Trees as instanced meshes to keep the detailed green canopy performant.
    const trunkGeo = new THREE.CylinderGeometry(0.55, 0.85, 5.2, 6);
    const crownGeo = new THREE.IcosahedronGeometry(4.3, 1);
    const trunkMat = material('#62462d');
    const leaves = [material('#245e2d'), material('#2f7437'), material('#43853b'), material('#1d5129')];
    const treeData: Array<{ x: number; z: number; s: number; c: number }> = [];
    for (let i = 0; i < 820; i++) {
      const x = -480 + seeded(i * 3 + 2) * 960;
      const z = -215 + seeded(i * 5 + 8) * 560;
      if ((Math.abs(x) < 95 && Math.abs(z) < 95) || (Math.abs(x - 270) < 100 && Math.abs(z - 70) < 80)) continue;
      if (Math.abs(x) < 165 && Math.abs(z) < 150 && i % 3 !== 0) continue;
      if (Math.abs(z + 260) < 34) continue;
      treeData.push({ x, z, s: 0.65 + seeded(i + 71) * 0.8, c: i % leaves.length });
    }
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeData.length);
    const crownMeshes = leaves.map((m, index) => new THREE.InstancedMesh(crownGeo, m, treeData.filter(t => t.c === index).length));
    const dummy = new THREE.Object3D();
    const leafCounts = [0, 0, 0, 0];
    treeData.forEach((tree, i) => {
      dummy.position.set(tree.x, 2.6 * tree.s, tree.z); dummy.scale.setScalar(tree.s); dummy.updateMatrix(); trunks.setMatrixAt(i, dummy.matrix);
      dummy.position.set(tree.x, 6.3 * tree.s, tree.z); dummy.scale.set(tree.s * 1.25, tree.s * 1.1, tree.s * 1.25); dummy.rotation.set(seeded(i) * 0.3, seeded(i + 1) * 6, 0); dummy.updateMatrix();
      crownMeshes[tree.c].setMatrixAt(leafCounts[tree.c]++, dummy.matrix);
    });
    trunks.castShadow = true; trunks.receiveShadow = true; scene.add(trunks);
    crownMeshes.forEach(mesh => { mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh); });

    // Foreground observation deck, curved rim and orange inlaid lighting.
    const deck = add(new THREE.CylinderGeometry(245, 255, 18, 96, 1, false, Math.PI * 0.08, Math.PI * 0.84), material('#101f35', 0.36, 0.58), 0, -2, 265);
    deck.rotation.x = 0.01;
    const deckInset = add(new THREE.CylinderGeometry(214, 224, 2.2, 96, 1, false, Math.PI * 0.08, Math.PI * 0.84), material('#1d3551', 0.4, 0.55), 0, 7.2, 265);
    deckInset.rotation.x = 0.01;
    const deckArc = new THREE.TorusGeometry(224, 3.2, 8, 100, Math.PI * 0.84);
    const rim = add(deckArc, orange, 0, 7.5, 265, 1, 1, 1, false); rim.rotation.z = Math.PI * 0.08;
    for (let i = 0; i < 5; i++) {
      const strip = add(new THREE.BoxGeometry(44, 1.5, 4), orange, -140 + i * 70, 8.7, 205 + Math.abs(i - 2) * 9, 1, 1, 1, false);
      strip.rotation.y = i < 2 ? -0.22 : i > 2 ? 0.22 : 0;
    }

    // Stylized student avatar with backpack and orange details.
    const avatar = new THREE.Group(); avatar.position.set(-8, 8, 218);
    const avatarMat = material('#101a2a', 0.56, 0.2);
    const skin = material('#b9825d');
    const backpack = material('#0c3152', 0.42, 0.35);
    const avatarPart = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; avatar.add(m); return m;
    };
    avatarPart(new THREE.BoxGeometry(15, 24, 9), avatarMat, 0, 28, 0);
    avatarPart(new THREE.BoxGeometry(11, 18, 4), backpack, 0, 29, -6.5);
    avatarPart(new THREE.BoxGeometry(9, 1.4, 1), orange, 0, 36, -8.8);
    avatarPart(new THREE.SphereGeometry(6.3, 18, 16), skin, 0, 45, 0);
    avatarPart(new THREE.CylinderGeometry(2.8, 3.2, 19, 9), avatarMat, -4.2, 10, 0);
    avatarPart(new THREE.CylinderGeometry(2.8, 3.2, 19, 9), avatarMat, 4.2, 10, 0);
    avatarPart(new THREE.BoxGeometry(4.6, 3.5, 7), white, -4.2, 1.2, 1.5);
    avatarPart(new THREE.BoxGeometry(4.6, 3.5, 7), white, 4.2, 1.2, 1.5);
    avatarPart(new THREE.CylinderGeometry(2.1, 2.5, 21, 9), avatarMat, -10.1, 29, 0).rotation.z = -0.09;
    avatarPart(new THREE.CylinderGeometry(2.1, 2.5, 21, 9), avatarMat, 10.1, 29, 0).rotation.z = 0.09;
    const avatarLogo = add(new THREE.PlaneGeometry(7, 4), new THREE.MeshBasicMaterial({ map: createAwsLogo(), transparent: true, side: THREE.DoubleSide }), 0, 30, 0, 1, 1, 1, false);
    avatarLogo.visible = false;
    scene.add(avatar);

    const resize = () => {
      const width = Math.max(1, host.clientWidth); const height = Math.max(1, host.clientHeight);
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize); observer.observe(host);
    let raf = 0;
    const animate = () => { raf = requestAnimationFrame(animate); renderer.render(scene, camera); };
    animate();

    return () => {
      cancelAnimationFrame(raf); observer.disconnect();
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.InstancedMesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach(m => { const mm = m as THREE.MeshStandardMaterial; if (mm.map) mm.map.dispose(); m.dispose(); });
        }
      });
      renderer.dispose(); host.replaceChildren();
    };
  }, []);

  return (
    <section className="relative h-[calc(100vh-48px)] min-h-[650px] w-full overflow-hidden bg-[#68b6e9]">
      <div ref={mountRef} className="absolute inset-0" aria-label="Procedurally modeled AWS CYNERGY metropolis" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-sky-300/5 via-transparent to-slate-950/15" />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {MARKERS.map(({ label, Icon, left, top }) => (
          <div key={label} className="absolute flex items-center gap-2 -translate-y-1/2 whitespace-nowrap" style={{ left: `${left}%`, top: `${top}%` }}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 bg-[#081a2c]/95 text-amber-400 shadow-[0_0_0_4px_rgba(255,153,0,.08),0_0_24px_rgba(255,153,0,.42)]">
              <Icon size={19} strokeWidth={2.3} />
            </span>
            <span className="rounded-md border border-slate-600/70 bg-[#06172a]/95 px-3 py-2 text-[12px] font-semibold text-slate-100 shadow-lg">{label}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-5 z-20 flex flex-wrap gap-2">
        <button onClick={onExplore} className="inline-flex items-center gap-2 rounded-xl border border-amber-400/60 bg-[#07172b]/90 px-4 py-3 text-xs font-bold text-white shadow-[0_0_22px_rgba(255,153,0,.15)] backdrop-blur-md transition hover:bg-[#102b47]">
          <Compass size={15} className="text-amber-400" /> Explore 3D City <ArrowRight size={14} />
        </button>
        <button onClick={onQuiz} className="inline-flex items-center gap-2 rounded-xl border border-slate-500/60 bg-[#07172b]/90 px-4 py-3 text-xs font-bold text-white shadow-lg backdrop-blur-md transition hover:bg-[#102b47]">
          <Zap size={15} className="text-amber-400" /> Launch Weekly Quiz
        </button>
      </div>
    </section>
  );
};
