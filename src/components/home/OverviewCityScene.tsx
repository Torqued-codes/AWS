import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  ShieldCheck, Cpu, BrainCircuit, Database, Network, BarChart3,
  Code2, Workflow, Settings, RadioTower, Blocks,
} from 'lucide-react';

/**
 * Procedurally modelled Overview city. The scene is built from Three.js
 * geometry/materials (not a screenshot or image texture), so it can be
 * extended with real buildings and service interactions later.
 */
const CATEGORIES = [
  { label: 'Security', Icon: ShieldCheck, left: '19.2%', top: '15.5%' },
  { label: 'Compute', Icon: Cpu, left: '50.2%', top: '15.5%' },
  { label: 'AI/ML', Icon: BrainCircuit, left: '4.5%', top: '27.3%' },
  { label: 'Storage', Icon: Database, left: '30.0%', top: '29.5%' },
  { label: 'Networking', Icon: Network, left: '63.0%', top: '25.2%' },
  { label: 'Databases', Icon: Database, left: '73.8%', top: '62.0%' },
  { label: 'Analytics', Icon: BarChart3, left: '12.0%', top: '41.2%' },
  { label: 'Developer Tools', Icon: Code2, left: '5.8%', top: '71.2%' },
  { label: 'Integration', Icon: Workflow, left: '22.5%', top: '71.2%' },
  { label: 'Management', Icon: Settings, left: '62.0%', top: '77.0%' },
  { label: 'IoT', Icon: RadioTower, left: '88.0%', top: '33.5%' },
] as const;

function makeWindowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#233c5b';
  ctx.fillRect(0, 0, 128, 256);
  for (let y = 8; y < 250; y += 17) {
    for (let x = 7; x < 125; x += 17) {
      const lit = Math.random() > 0.23;
      ctx.fillStyle = lit ? (Math.random() > 0.65 ? '#73dfff' : '#ffbd55') : '#15263c';
      ctx.fillRect(x, y, 8, 10);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export const OverviewCityScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#78b9ed');
    scene.fog = new THREE.Fog(0x91c8ee, 250, 650);

    const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 1200);
    camera.position.set(0, 155, 270);
    camera.lookAt(0, 28, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    host.replaceChildren(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xc8eaff, 0x52603c, 2.0));
    const sun = new THREE.DirectionalLight(0xfff2d1, 3.2);
    sun.position.set(-120, 220, 100);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -260;
    sun.shadow.camera.right = 260;
    sun.shadow.camera.top = 260;
    sun.shadow.camera.bottom = -260;
    scene.add(sun);

    const mat = (color: THREE.ColorRepresentation, roughness = 0.8, metalness = 0) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness });
    const grassMat = mat('#497b39');
    const roadMat = mat('#29394b', 0.85);
    const concreteMat = mat('#9baebc');
    const glassMat = new THREE.MeshStandardMaterial({ color: '#174b7d', roughness: 0.25, metalness: 0.45, map: makeWindowTexture(), emissive: '#183b55', emissiveIntensity: 0.22 });
    const blueGlass = mat('#22679b', 0.28, 0.45);
    const orangeGlow = new THREE.MeshStandardMaterial({ color: '#ff9b19', emissive: '#ff7900', emissiveIntensity: 2.4, metalness: 0.4 });
    const cyanGlow = new THREE.MeshStandardMaterial({ color: '#00bfff', emissive: '#007dff', emissiveIntensity: 1.8 });

    const addMesh = (geo: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number, sx = 1, sy = 1, sz = 1, cast = true) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      mesh.castShadow = cast;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    };

    // Island terrain and bright blue bay behind the skyline.
    addMesh(new THREE.PlaneGeometry(900, 760), grassMat, 0, -2, 0).rotation.x = -Math.PI / 2;
    const water = addMesh(new THREE.PlaneGeometry(850, 220), mat('#168bd0', 0.22, 0.18), 0, -0.8, -195, 1, 1, 1, false);
    water.rotation.x = -Math.PI / 2;
    // Far shore, layered green hills, and mountain silhouettes.
    for (let i = 0; i < 23; i++) {
      const x = -310 + i * 28;
      const h = 28 + (Math.sin(i * 1.7) + 1) * 22 + (i % 4) * 5;
      addMesh(new THREE.ConeGeometry(34 + (i % 3) * 10, h, 7), mat(i % 2 ? '#477e49' : '#315f40'), x, h / 2 - 1, -300 + (i % 3) * 9, 1, 1, 1, false);
      addMesh(new THREE.ConeGeometry(42, h * 1.15, 6), mat(i % 3 ? '#83b7d9' : '#9bc8e3'), x + 9, h * 0.75, -360, 1, 1, 1, false);
    }

    // Shoreline and road/bridge running across the bay.
    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-360, 6, -158), new THREE.Vector3(-190, 9, -168),
      new THREE.Vector3(0, 8, -164), new THREE.Vector3(180, 10, -170), new THREE.Vector3(360, 7, -154),
    ]);
    addMesh(new THREE.TubeGeometry(bridgeCurve, 90, 3.4, 8, false), roadMat, 0, 0, 0, 1, 1, 1, false);
    const railCurve = new THREE.CatmullRomCurve3(bridgeCurve.getPoints(40).map(p => new THREE.Vector3(p.x, p.y + 4.2, p.z)));
    addMesh(new THREE.TubeGeometry(railCurve, 80, 0.65, 6, false), concreteMat, 0, 0, 0, 1, 1, 1, false);
    for (let i = 0; i < 31; i++) {
      const p = bridgeCurve.getPoint(i / 30);
      addMesh(new THREE.CylinderGeometry(1.1, 1.5, 12, 8), mat('#647c8d'), p.x, p.y - 4, p.z, 1, 1, 1, false);
    }

    // City roads: a ring boulevard and cross-city elevated connectors.
    const ringPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      ringPts.push(new THREE.Vector3(Math.cos(a) * 95, 1.8, Math.sin(a) * 61));
    }
    addMesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(ringPts), 180, 7.5, 10, false), roadMat, 0, 0, 0, 1, 1, 1, false);
    const roadCurves = [
      [[-360, 2, 115], [-230, 4, 70], [-80, 4, 34], [70, 4, -5], [220, 4, -55], [360, 3, -90]],
      [[-350, 2, -55], [-220, 4, -18], [-90, 4, 20], [70, 4, 62], [230, 4, 110], [360, 2, 145]],
      [[-320, 3, 160], [-190, 6, 115], [-60, 6, 82], [90, 6, 40], [250, 5, 0], [360, 3, -20]],
    ];
    roadCurves.forEach(points => {
      const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p[0], p[1], p[2])));
      addMesh(new THREE.TubeGeometry(curve, 100, 4.5, 8, false), roadMat, 0, 0, 0, 1, 1, 1, false);
      const edge = new THREE.TubeGeometry(curve, 100, 0.42, 6, false);
      addMesh(edge, orangeGlow, 0, 0, 0, 1, 1, 1, false);
    });

    // Dense grid of smaller city buildings around the landmark structures.
    const towerPositions: Array<[number, number, number, number]> = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 15; col++) {
        const x = -245 + col * 34 + (row % 2) * 8;
        const z = -105 + row * 34;
        if (Math.abs(x) < 48 && Math.abs(z) < 48) continue;
        if (Math.abs(x) > 285 && row % 2 === 0) continue;
        const h = 15 + ((row * 13 + col * 7) % 7) * 5 + (Math.abs(x) < 130 ? 12 : 0);
        towerPositions.push([x, z, h, 9 + ((row + col) % 4) * 3]);
      }
    }
    towerPositions.forEach(([x, z, h, w], i) => {
      const base = addMesh(new THREE.BoxGeometry(w + 4, 2, w + 4), concreteMat, x, 1, z);
      base.rotation.y = (i % 3) * 0.12;
      const building = addMesh(new THREE.BoxGeometry(w, h, w * (i % 2 ? 0.82 : 1)), i % 4 === 0 ? blueGlass : glassMat, x, h / 2 + 2, z);
      building.rotation.y = (i % 4) * 0.08;
      addMesh(new THREE.BoxGeometry(w + 0.6, 0.65, w + 0.6), i % 5 === 0 ? cyanGlow : mat('#8ca4b6', 0.45, 0.45), x, h + 2.2, z, 1, 1, 1, false);
      if (i % 3 === 0) addMesh(new THREE.ConeGeometry(2.2, 7, 5), mat('#d8e8f5', 0.4, 0.4), x, h + 6, z, 1, 1, 1, false);
    });

    // Central AWS landmark: broad podium, glowing rings, and signature tower.
    addMesh(new THREE.CylinderGeometry(49, 53, 8, 48), mat('#344b61', 0.42, 0.55), 0, 5, 0);
    addMesh(new THREE.CylinderGeometry(43, 45, 2.2, 48), orangeGlow, 0, 10, 0, 1, 1, 1, false);
    addMesh(new THREE.CylinderGeometry(36, 39, 10, 40), mat('#2c435b', 0.35, 0.5), 0, 15, 0);
    addMesh(new THREE.CylinderGeometry(31, 33, 1.4, 40), cyanGlow, 0, 20.5, 0, 1, 1, 1, false);
    addMesh(new THREE.BoxGeometry(39, 87, 34), glassMat, 0, 65, 0);
    addMesh(new THREE.BoxGeometry(45, 3, 39), orangeGlow, 0, 23, 0, 1, 1, 1, false);
    addMesh(new THREE.BoxGeometry(45, 3, 39), orangeGlow, 0, 108, 0, 1, 1, 1, false);
    addMesh(new THREE.BoxGeometry(13, 95, 2.2), orangeGlow, -19.8, 65, 17.5, 1, 1, 1, false);
    addMesh(new THREE.BoxGeometry(13, 95, 2.2), orangeGlow, 19.8, 65, 17.5, 1, 1, 1, false);
    addMesh(new THREE.BoxGeometry(24, 22, 21), blueGlass, 0, 120, 0);
    addMesh(new THREE.ConeGeometry(13, 19, 4), orangeGlow, 0, 140, 0, 1, 1, 1, false);
    // AWS-style mark on the front of the tower, built from simple geometry.
    const logoTextCanvas = document.createElement('canvas');
    logoTextCanvas.width = 512; logoTextCanvas.height = 256;
    const lctx = logoTextCanvas.getContext('2d')!;
    lctx.clearRect(0, 0, 512, 256);
    lctx.fillStyle = '#f7fbff'; lctx.font = 'bold 112px Arial'; lctx.textAlign = 'center';
    lctx.fillText('aws', 256, 142);
    lctx.strokeStyle = '#ff9900'; lctx.lineWidth = 12; lctx.beginPath(); lctx.arc(260, 148, 118, 0.2, 2.65); lctx.stroke();
    const logoTex = new THREE.CanvasTexture(logoTextCanvas); logoTex.colorSpace = THREE.SRGBColorSpace;
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(26, 13), new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, depthWrite: false }));
    logo.position.set(0, 67, 17.7); scene.add(logo);

    // Circular training / community buildings and solar-roof challenge arena.
    const roundBuilding = (x: number, z: number, r: number, h: number, roofColor: string, solar = false) => {
      addMesh(new THREE.CylinderGeometry(r + 3, r + 5, 3, 32), concreteMat, x, 2, z);
      addMesh(new THREE.CylinderGeometry(r, r + 1, h, 32), blueGlass, x, h / 2 + 3, z);
      addMesh(new THREE.CylinderGeometry(r + 2, r + 2, 2, 32), mat('#d5e3ec', 0.35, 0.4), x, h + 4, z);
      addMesh(new THREE.CylinderGeometry(r + 1, r + 1, 1.4, 32), mat(roofColor, 0.35, 0.25), x, h + 5.4, z, 1, 1, 1, false);
      if (solar) {
        for (let i = -2; i <= 2; i++) {
          const panel = addMesh(new THREE.BoxGeometry(r * 0.42, 0.8, r * 0.85), mat('#1264bd', 0.24, 0.55), x + i * r * 0.4, h + 7, z, 1, 1, 1, false);
          panel.rotation.y = -0.15;
        }
      }
    };
    roundBuilding(-118, -15, 34, 25, '#3b7eb3');
    roundBuilding(112, -16, 31, 24, '#4b8db9');
    roundBuilding(190, 70, 49, 24, '#1b5fa9', true);
    roundBuilding(-180, 88, 30, 17, '#397caf');

    // Smaller landmark blocks at foreground corners.
    const landmark = (x: number, z: number, w: number, h: number, d: number) => {
      addMesh(new THREE.BoxGeometry(w + 7, 3, d + 7), concreteMat, x, 2, z);
      addMesh(new THREE.BoxGeometry(w, h, d), blueGlass, x, h / 2 + 3, z);
      addMesh(new THREE.BoxGeometry(w + 2, 2, d + 2), cyanGlow, x, h + 4, z, 1, 1, 1, false);
      addMesh(new THREE.BoxGeometry(w * 0.72, 2, d * 0.72), mat('#a8c6d9', 0.35, 0.35), x, h + 6, z, 1, 1, 1, false);
    };
    landmark(-230, 145, 64, 24, 45);
    landmark(220, 140, 63, 32, 46);
    landmark(145, 10, 48, 18, 37);

    // Parks and repeated trees along roads. Each tree is lightweight geometry.
    const treeTrunk = mat('#60452b');
    const treeLeafMats = [mat('#236a32'), mat('#347d38'), mat('#4b8b3b'), mat('#1e5932')];
    for (let i = 0; i < 430; i++) {
      const x = -330 + ((i * 71) % 660);
      const z = -130 + ((i * 47) % 330);
      if ((Math.abs(x) < 58 && Math.abs(z) < 65) || (Math.abs(x) < 90 && Math.abs(z) < 25)) continue;
      if (Math.abs(x) < 120 && Math.abs(z) < 100 && i % 3 !== 0) continue;
      const s = 0.75 + ((i * 13) % 9) / 10;
      addMesh(new THREE.CylinderGeometry(0.65 * s, 1 * s, 4 * s, 6), treeTrunk, x, 2 * s, z, 1, 1, 1, false);
      addMesh(new THREE.SphereGeometry(3.2 * s, 7, 6), treeLeafMats[i % treeLeafMats.length], x, 5.1 * s, z, 1.15, 0.95, 1.05, false);
    }

    // Foreground viewing deck with orange inset light strips.
    const deck = addMesh(new THREE.CylinderGeometry(190, 205, 16, 64, 1, false, Math.PI * 0.08, Math.PI * 0.84), mat('#152b43', 0.45, 0.55), 0, -1, 205);
    deck.rotation.x = 0.01;
    const deckRim = addMesh(new THREE.TorusGeometry(174, 3.2, 8, 90, Math.PI * 0.84), orangeGlow, 0, 7, 205, 1, 1, 1, false);
    deckRim.rotation.z = Math.PI * 0.08;

    // Small stylized player avatar standing on the overlook.
    const avatar = new THREE.Group();
    avatar.position.set(-3, 7, 157);
    const avatarMat = mat('#101a2a', 0.6, 0.15);
    const skinMat = mat('#b9825d');
    const backpackMat = mat('#102f4b', 0.45, 0.35);
    const part = (geo: THREE.BufferGeometry, material: THREE.Material, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, material); m.position.set(x, y, z); m.castShadow = true; avatar.add(m); return m;
    };
    part(new THREE.BoxGeometry(8, 13, 5), avatarMat, 0, 20, 0);
    part(new THREE.BoxGeometry(5.5, 10, 2.4), backpackMat, 0, 20, -3.2);
    part(new THREE.SphereGeometry(3.4, 14, 12), skinMat, 0, 30, 0);
    part(new THREE.CylinderGeometry(1.5, 1.7, 10, 8), avatarMat, -2.3, 9, 0);
    part(new THREE.CylinderGeometry(1.5, 1.7, 10, 8), avatarMat, 2.3, 9, 0);
    part(new THREE.CylinderGeometry(1.2, 1.5, 12, 8), avatarMat, -5.4, 21, 0);
    part(new THREE.CylinderGeometry(1.2, 1.5, 12, 8), avatarMat, 5.4, 21, 0);
    scene.add(avatar);

    // Camera/renderer sizing.
    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach(m => { if ('map' in m && (m as THREE.MeshStandardMaterial).map) (m as THREE.MeshStandardMaterial).map?.dispose(); m.dispose(); });
        }
      });
      renderer.dispose();
      host.replaceChildren();
    };
  }, []);

  return (
    <section className="relative h-[calc(100vh-48px)] min-h-[580px] max-h-[1000px] w-full overflow-hidden bg-[#5ca8df]">
      <div ref={mountRef} className="absolute inset-0" aria-label="Procedurally rendered AWS CYNERGY city" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-sky-300/10 via-transparent to-slate-950/10" />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {CATEGORIES.map(({ label, Icon, left, top }) => (
          <div key={label} className="absolute flex items-center gap-2 -translate-x-0 -translate-y-1/2 whitespace-nowrap" style={{ left, top }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400 bg-[#101d31]/95 text-amber-400 shadow-[0_0_0_4px_rgba(255,153,0,.08),0_0_24px_rgba(255,153,0,.38)]">
              <Icon size={20} strokeWidth={2.4} />
            </span>
            <span className="rounded-md border border-slate-500/50 bg-[#071525]/95 px-3 py-2 text-xs font-semibold text-slate-100 shadow-lg">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
