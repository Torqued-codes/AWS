import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Student } from '../../types';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';

interface ThreeCityCanvasProps {
  students: Student[];
  selectedDistrict: string;
  searchQuery: string;
  skyTheme: 'midnight' | 'sunset' | 'bright';
  onSelectStudent: (student: Student) => void;
  targetStudentId: string | null;
  navEvent?: { dir: string; t: number } | null;
}

export const ThreeCityCanvas: React.FC<ThreeCityCanvasProps> = ({
  students,
  skyTheme,
  onSelectStudent,
  targetStudentId,
  navEvent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentUser, toggleBuildingLights } = useGame();

  const [hoveredStudent, setHoveredStudent] = useState<Student | null>(null);
  const [hoveredLightSwitch, setHoveredLightSwitch] = useState(false);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [teleportFeedback, setTeleportFeedback] = useState<{ x: number; z: number } | null>(null);

  // References for Three.js internal objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const buildingMeshesRef = useRef<Map<string, THREE.Group>>(new Map());
  const spotlightRef = useRef<THREE.SpotLight | null>(null);
  const spotlightTargetRef = useRef<THREE.Object3D | null>(null);
  const teleportMarkerRef = useRef<THREE.Mesh | null>(null);

  // Camera animation targets
  const cameraTargetPos = useRef<THREE.Vector3 | null>(null);
  const controlsTargetPos = useRef<THREE.Vector3 | null>(null);

  // Persists the camera's position/orbit-target ACROSS scene rebuilds.
  // The main effect below rebuilds the entire Three.js scene whenever
  // `students` changes by reference — which includes harmless updates
  // like toggling your building's lights (that flips `currentUser`,
  // which recomputes the memoized `allStudents` array in GameContext).
  // Without this, every such rebuild re-created the camera at its
  // hardcoded startup position, making the view visibly "jump/reset"
  // on every click. Null only on the very first mount, so the initial
  // load still uses the intended default framing.
  const savedCameraPos = useRef<THREE.Vector3 | null>(null);
  const savedControlsTarget = useRef<THREE.Vector3 | null>(null);

  // Build Procedural Window Texture
  const createWindowTexture = (tier: string, isCurrent: boolean, isBright: boolean) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Building Wall Base
    if (isBright) {
      ctx.fillStyle = isCurrent ? '#dbeafe' : tier === 'apex_monolith' ? '#fef3c7' : '#e2e8f0';
    } else {
      ctx.fillStyle = isCurrent ? '#182030' : tier === 'apex_monolith' ? '#241a10' : '#141720';
    }
    ctx.fillRect(0, 0, 128, 256);

    // Window Grids
    const rows = 16;
    const cols = 6;
    const padX = 6;
    const padY = 6;
    const w = (128 - padX * (cols + 1)) / cols;
    const h = (256 - padY * (rows + 1)) / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isLit = Math.random() > 0.35;
        if (isLit) {
          if (isCurrent) {
            ctx.fillStyle = '#FF9900';
          } else if (tier === 'apex_monolith') {
            ctx.fillStyle = Math.random() > 0.5 ? '#F59E0B' : '#D97706';
          } else if (tier === 'cyber_tower') {
            ctx.fillStyle = Math.random() > 0.5 ? '#0284C7' : '#0EA5E9';
          } else {
            ctx.fillStyle = isBright ? '#059669' : '#34D399';
          }
        } else {
          ctx.fillStyle = isBright ? '#94a3b8' : '#0a0d14';
        }
        ctx.fillRect(padX + c * (w + padX), padY + r * (h + padY), w, h);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  };

  // Fly camera to a specific student building
  const flyToStudent = useCallback((studentId: string) => {
    const group = buildingMeshesRef.current.get(studentId);
    if (!group || !cameraRef.current || !controlsRef.current) return;

    const pos = group.position;
    controlsTargetPos.current = new THREE.Vector3(pos.x, pos.y + 8, pos.z);
    cameraTargetPos.current = new THREE.Vector3(pos.x + 32, pos.y + 40, pos.z + 40);

    if (spotlightRef.current && spotlightTargetRef.current) {
      spotlightTargetRef.current.position.set(pos.x, 0, pos.z);
      spotlightRef.current.position.set(pos.x, 85, pos.z);
      spotlightRef.current.intensity = skyTheme === 'bright' ? 30 : 80;
    }
  }, [skyTheme]);

  // Teleport camera smoothly to any clicked coordinate on the city ground
  const teleportToPoint = useCallback((point: THREE.Vector3) => {
    controlsTargetPos.current = new THREE.Vector3(point.x, 2, point.z);
    cameraTargetPos.current = new THREE.Vector3(point.x + 35, 45, point.z + 45);

    if (teleportMarkerRef.current) {
      teleportMarkerRef.current.position.set(point.x, 0.6, point.z);
      teleportMarkerRef.current.visible = true;
    }
    setTeleportFeedback({ x: Math.round(point.x), z: Math.round(point.z) });
    setTimeout(() => setTeleportFeedback(null), 2000);
  }, []);

  // Initialize Three.js World
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const isBright = skyTheme === 'bright';

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const bgColors = {
      midnight: 0x07090e,
      // Brighter, warmer hybrid dark/bright preset — amber horizon glow
      // with enough ambient light for clear building contrast, while
      // staying visibly distinct from the "bright" daylight preset.
      sunset: 0x2b1c28,
      bright: 0xe2e8f0
    };
    scene.background = new THREE.Color(bgColors[skyTheme]);
    // Fog density halved from the previous preset so the outer rings of
    // the expanded 20x20-plot city remain visible instead of fading into
    // haze well before the edge of the skyline.
    scene.fog = new THREE.FogExp2(bgColors[skyTheme], isBright ? 0.0013 : skyTheme === 'sunset' ? 0.0011 : 0.0017);

    // 2. Camera — far plane and starting position pulled back to frame
    // the expanded ~730-unit-wide, 400-plot metropolis on load. On any
    // rebuild after the first (e.g. toggling your building lights),
    // restore wherever the camera was instead of resetting to this
    // default — see `savedCameraPos` comment above.
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    if (savedCameraPos.current) {
      camera.position.copy(savedCameraPos.current);
    } else {
      camera.position.set(240, 200, 280);
    }
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isBright ? 1.25 : 1.1;
    container.replaceChildren(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.minDistance = 15;
    // Raised from 500 → 950 → 1400 to keep pace with taller top-scorer
    // buildings: each step widens how far the camera can pull back
    // before the tallest towers' peaks poke above the top of frame.
    controls.maxDistance = 1400;
    if (savedControlsTarget.current) {
      controls.target.copy(savedControlsTarget.current);
    } else {
      controls.target.set(0, 8, 0);
    }
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isBright ? 1.3 : skyTheme === 'sunset' ? 0.95 : 0.55);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      skyTheme === 'sunset' ? 0xffb877 : 0xffffff, 
      isBright ? 1.8 : skyTheme === 'sunset' ? 1.65 : 1.4
    );
    dirLight.position.set(120, 180, 100);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    // Widened to match the expanded ~730-unit city footprint so shadows
    // still render correctly across the outer blocks.
    dirLight.shadow.camera.far = 1100;
    const d = 400;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    // Warm amber horizon glow — a soft hemisphere fill exclusive to the
    // Sunset preset so building silhouettes stay crisp against a lifted,
    // golden-hour sky rather than the previous near-black backdrop.
    if (skyTheme === 'sunset') {
      const hemiLight = new THREE.HemisphereLight(0xffcf9e, 0x2b1c28, 0.9);
      scene.add(hemiLight);
    }

    // Spotlight
    const spotTarget = new THREE.Object3D();
    scene.add(spotTarget);
    spotlightTargetRef.current = spotTarget;

    const spotLight = new THREE.SpotLight(0xff9900, 0, 180, Math.PI / 6, 0.4, 1);
    spotLight.position.set(0, 80, 0);
    spotLight.target = spotTarget;
    scene.add(spotLight);
    spotlightRef.current = spotLight;

    // 6. Ground & City Blocks — sized to the expanded 10x10 block grid
    // (~730 units across) so the ground never runs out under the
    // outermost towers.
    const citySize = 740;
    const groundGeo = new THREE.PlaneGeometry(citySize * 1.6, citySize * 1.6);
    const groundMat = new THREE.MeshStandardMaterial({ 
      color: isBright ? 0xcbd5e1 : skyTheme === 'sunset' ? 0x1c1420 : 0x090c14, 
      roughness: 0.9 
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.receiveShadow = true;
    groundMesh.userData = { isGround: true };
    scene.add(groundMesh);

    // Click Teleport Ring Marker
    const markerGeo = new THREE.RingGeometry(2, 2.6, 32);
    const markerMat = new THREE.MeshBasicMaterial({ 
      color: 0xff9900, 
      side: THREE.DoubleSide 
    });
    const markerMesh = new THREE.Mesh(markerGeo, markerMat);
    markerMesh.rotation.x = -Math.PI / 2;
    markerMesh.position.set(0, 0.6, 0);
    markerMesh.visible = false;
    scene.add(markerMesh);
    teleportMarkerRef.current = markerMesh;

    // Grid Lines — division count raised to match the larger footprint
    const gridHelper = new THREE.GridHelper(
      citySize, 
      60, 
      isBright ? 0x94a3b8 : 0xff9900, 
      isBright ? 0xd1d5db : 0x1a2333
    );
    gridHelper.position.y = 0.1;
    scene.add(gridHelper);

    // 7. Blocks and Roads — expanded to a 10x10 block grid (each block
    // holds a 2x2 sub-arrangement of plots), giving an effective 20x20
    // plot matrix and 400 total buildable plots — comfortably above the
    // 300-tower capacity target.
    const blockSize = 60;
    const roadWidth = 14;
    const gridDim = 10;
    const startOffset = -((gridDim * (blockSize + roadWidth) - roadWidth) / 2) + blockSize / 2;

    const sidewalkMat = new THREE.MeshStandardMaterial({ 
      color: isBright ? 0xf8fafc : skyTheme === 'sunset' ? 0x2e2130 : 0x1c2333, 
      roughness: 0.7 
    });
    const grassMat = new THREE.MeshStandardMaterial({ 
      color: isBright ? 0x86efac : 0x0e241b, 
      roughness: 0.9 
    });

    const plotPositions: Array<{ x: number; z: number }> = [];

    for (let bx = 0; bx < gridDim; bx++) {
      for (let bz = 0; bz < gridDim; bz++) {
        const blockCenterX = startOffset + bx * (blockSize + roadWidth);
        const blockCenterZ = startOffset + bz * (blockSize + roadWidth);

        const blockGeo = new THREE.BoxGeometry(blockSize, 0.8, blockSize);
        const blockMesh = new THREE.Mesh(blockGeo, sidewalkMat);
        blockMesh.position.set(blockCenterX, 0.4, blockCenterZ);
        blockMesh.receiveShadow = true;
        blockMesh.userData = { isGround: true };
        scene.add(blockMesh);

        const parkGeo = new THREE.BoxGeometry(blockSize - 8, 0.9, blockSize - 8);
        const parkMesh = new THREE.Mesh(parkGeo, grassMat);
        parkMesh.position.set(blockCenterX, 0.45, blockCenterZ);
        parkMesh.receiveShadow = true;
        parkMesh.userData = { isGround: true };
        scene.add(parkMesh);

        const offset = 16;
        plotPositions.push({ x: blockCenterX - offset, z: blockCenterZ - offset });
        plotPositions.push({ x: blockCenterX + offset, z: blockCenterZ - offset });
        plotPositions.push({ x: blockCenterX - offset, z: blockCenterZ + offset });
        plotPositions.push({ x: blockCenterX + offset, z: blockCenterZ + offset });
      }
    }

    // 8. Place Student Buildings
    //
    // Performance note: with the grid expanded to support 300+ towers,
    // per-building `new THREE.BoxGeometry(...)` and per-building canvas
    // texture generation (createWindowTexture draws to a <canvas> every
    // call) would mean hundreds of unique geometries and hundreds of
    // expensive canvas rasterizations on every scene rebuild. Both are
    // avoided below:
    //  - `unitBoxGeo` is created ONCE and every building's tower/roof/
    //    base meshes reuse it via `.scale.set(...)` instead of each
    //    allocating their own BoxGeometry.
    //  - Window textures are cached by their (tier, isCurrent, isBright)
    //    key — there are only a handful of distinct combinations no
    //    matter how many students exist — and reused via `.clone()`
    //    (a cheap operation that shares the underlying canvas image but
    //    keeps each building's `.repeat` independent for its floor count).
    buildingMeshesRef.current.clear();

    const unitBoxGeo = new THREE.BoxGeometry(1, 1, 1);
    const windowTextureCache = new Map<string, THREE.Texture>();
    const getWindowTexture = (tier: string, isCurrent: boolean, isBrightTheme: boolean) => {
      const key = `${tier}_${isCurrent}_${isBrightTheme}`;
      let base = windowTextureCache.get(key);
      if (!base) {
        base = createWindowTexture(tier, isCurrent, isBrightTheme);
        windowTextureCache.set(key, base);
      }
      const cloned = base.clone();
      cloned.needsUpdate = true;
      return cloned;
    };

    students.forEach((student, index) => {
      const plot = plotPositions[index % plotPositions.length];
      if (!plot) return;

      const isCurrent = student.id === currentUser.id;
      const isApex = student.buildingTier === 'apex_monolith';
      const isCyber = student.buildingTier === 'cyber_tower';
      // Defaults to ON so existing/mock students light up exactly as
      // before. Only the profile owner can ever flip their own flag.
      const buildingLightsOn = student.lightsOn !== false;

      const buildingHeight = Math.max(8, student.floors * 1.8 + 4);
      const buildingWidth = isApex ? 13 : isCyber ? 11 : 9.5;

      const buildingGroup = new THREE.Group();
      buildingGroup.position.set(plot.x, 0.8, plot.z);

      const windowTexture = getWindowTexture(student.buildingTier, isCurrent, isBright);
      windowTexture.repeat.set(1, Math.max(1, Math.floor(student.floors / 2)));

      const towerMat = new THREE.MeshStandardMaterial({
        map: windowTexture,
        roughness: 0.4,
        metalness: isBright ? 0.2 : 0.6,
        color: isBright ? 0xffffff : isCurrent ? 0xffffff : 0xdddddd,
        // Reuses the same window texture as an emissive map — the lit
        // (bright-colored) window pixels glow in the dark, the unlit
        // (near-black) pixels stay non-emissive. This makes towers
        // visible at night without the cost of per-building point
        // lights, and turns fully off when `lightsOn` is false.
        emissiveMap: windowTexture,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: buildingLightsOn ? (isBright ? 0.15 : 0.85) : 0,
      });

      const towerMesh = new THREE.Mesh(unitBoxGeo, towerMat);
      towerMesh.scale.set(buildingWidth, buildingHeight, buildingWidth);
      towerMesh.position.y = buildingHeight / 2;
      towerMesh.castShadow = true;
      towerMesh.receiveShadow = true;
      towerMesh.userData = { student };
      buildingGroup.add(towerMesh);

      const roofEdgeMat = new THREE.MeshBasicMaterial({
        color: isCurrent ? 0xff9900 : isApex ? 0xf59e0b : isCyber ? 0x06b6d4 : 0x10b981
      });
      const roofEdgeMesh = new THREE.Mesh(unitBoxGeo, roofEdgeMat);
      roofEdgeMesh.scale.set(buildingWidth + 0.6, 0.6, buildingWidth + 0.6);
      roofEdgeMesh.position.y = buildingHeight + 0.3;
      buildingGroup.add(roofEdgeMesh);

      if (isApex) {
        const spireGeo = new THREE.CylinderGeometry(0.1, 0.6, 12, 8);
        const spireMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8 });
        const spire = new THREE.Mesh(spireGeo, spireMat);
        spire.position.y = buildingHeight + 6;
        buildingGroup.add(spire);

        const beaconGeo = new THREE.SphereGeometry(0.5, 8, 8);
        const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
        const beacon = new THREE.Mesh(beaconGeo, beaconMat);
        beacon.position.y = buildingHeight + 12;
        buildingGroup.add(beacon);
      } else if (isCyber) {
        const dishGeo = new THREE.CylinderGeometry(0.2, 0.4, 6, 8);
        const dishMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4 });
        const dish = new THREE.Mesh(dishGeo, dishMat);
        dish.position.y = buildingHeight + 3;
        buildingGroup.add(dish);
      }

      const baseMat = new THREE.MeshStandardMaterial({ color: isBright ? 0x94a3b8 : 0x1a2233, roughness: 0.9 });
      const baseMesh = new THREE.Mesh(unitBoxGeo, baseMat);
      baseMesh.scale.set(buildingWidth + 1.2, 1.2, buildingWidth + 1.2);
      baseMesh.position.y = 0.6;
      buildingGroup.add(baseMesh);

      // Light switch — a small lamp-post object, rendered ONLY on the
      // logged-in user's own building. Clicking it toggles that user's
      // `lightsOn` flag; there is no equivalent control on anyone else's
      // tower, so peers can never touch another student's lights.
      if (isCurrent) {
        const switchGroup = new THREE.Group();
        switchGroup.position.set(buildingWidth / 2 + 3.5, 0, 0);

        const postGeo = new THREE.CylinderGeometry(0.25, 0.3, 3.2, 8);
        const postMat = new THREE.MeshStandardMaterial({ color: 0x2a2f3a, roughness: 0.6, metalness: 0.4 });
        const post = new THREE.Mesh(postGeo, postMat);
        post.position.y = 1.6;
        switchGroup.add(post);

        const bulbGeo = new THREE.SphereGeometry(0.7, 12, 12);
        const bulbMat = new THREE.MeshStandardMaterial({
          color: buildingLightsOn ? 0xffc978 : 0x3a3f4a,
          emissive: buildingLightsOn ? 0xffb84d : 0x000000,
          emissiveIntensity: buildingLightsOn ? 1.2 : 0,
          roughness: 0.3,
        });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.y = 3.4;
        bulb.userData = { isLightSwitch: true, studentId: student.id };
        switchGroup.add(bulb);

        // Wider invisible hit-target so the switch is easy to click
        // without needing pixel-perfect precision on the small bulb.
        const hitGeo = new THREE.SphereGeometry(1.6, 8, 8);
        const hitMat = new THREE.MeshBasicMaterial({ visible: false });
        const hitTarget = new THREE.Mesh(hitGeo, hitMat);
        hitTarget.position.y = 3.4;
        hitTarget.userData = { isLightSwitch: true, studentId: student.id };
        switchGroup.add(hitTarget);

        buildingGroup.add(switchGroup);
      }

      scene.add(buildingGroup);
      buildingMeshesRef.current.set(student.id, buildingGroup);
    });

    // ── Ambient AWS "cloud" background models, floating high above the
    // skyline. Purely decorative — reinforces the same amber/gold theme
    // as the Hero and lower Overview sections, with high-visibility
    // emissive material so it reads clearly against the dark sky without
    // ever obscuring buildings or the HUD. ──────────────────────────────
    const cloudGeos = [
      new THREE.IcosahedronGeometry(6, 1),
      new THREE.OctahedronGeometry(5, 0),
      new THREE.TorusGeometry(4, 1.2, 8, 16),
    ];
    const ambientCloudGroup = new THREE.Group();
    const ambientClouds: THREE.Mesh[] = [];
    const cloudCount = 14;
    for (let i = 0; i < cloudCount; i++) {
      const geo = cloudGeos[i % cloudGeos.length];
      const mat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.4,
        wireframe: Math.random() > 0.5,
        transparent: true,
        opacity: 0.55,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / cloudCount) * Math.PI * 2;
      const radius = 260 + Math.random() * 240;
      mesh.position.set(
        Math.cos(angle) * radius,
        130 + Math.random() * 90,
        Math.sin(angle) * radius
      );
      mesh.scale.setScalar(0.9 + Math.random() * 1.6);
      mesh.userData.bobSpeed = 0.15 + Math.random() * 0.25;
      mesh.userData.bobOffset = Math.random() * Math.PI * 2;
      mesh.userData.rotSpeed = 0.04 + Math.random() * 0.08;
      mesh.userData.basePos = mesh.position.clone();
      ambientClouds.push(mesh);
      ambientCloudGroup.add(mesh);
    }
    scene.add(ambientCloudGroup);

    // 9. Raycasting: Click to Teleport & Hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      let foundStudent: Student | null = null;
      let foundLightSwitch = false;
      for (const hit of intersects) {
        if (hit.object.userData && hit.object.userData.isLightSwitch) {
          foundLightSwitch = true;
          break;
        }
        if (hit.object.userData && hit.object.userData.student) {
          foundStudent = hit.object.userData.student as Student;
          break;
        }
      }

      if (foundLightSwitch) {
        setHoveredStudent(null);
        setHoveredLightSwitch(true);
        setTooltipPos({ x: e.clientX, y: e.clientY });
        container.style.cursor = 'pointer';
      } else if (foundStudent) {
        setHoveredStudent(foundStudent);
        setHoveredLightSwitch(false);
        setTooltipPos({ x: e.clientX, y: e.clientY });
        container.style.cursor = 'pointer';
      } else {
        setHoveredStudent(null);
        setHoveredLightSwitch(false);
        setTooltipPos(null);
        container.style.cursor = 'crosshair';
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      for (const hit of intersects) {
        // Light-switch has priority over building selection. It only
        // ever exists on the current user's own tower (see building
        // creation above), so this can never toggle someone else's
        // lights — there is no such object to click on peers' buildings.
        if (hit.object.userData && hit.object.userData.isLightSwitch) {
          if (hit.object.userData.studentId === currentUser.id) {
            toggleBuildingLights();
          }
          return;
        }

        // If clicked a building
        if (hit.object.userData && hit.object.userData.student) {
          const clickedStudent = hit.object.userData.student as Student;
          soundEngine.playTap();
          onSelectStudent(clickedStudent);
          flyToStudent(clickedStudent.id);
          return;
        }
        
        // If clicked the city ground / road -> Teleport Camera there!
        if (hit.object.userData && hit.object.userData.isGround) {
          soundEngine.playTap();
          teleportToPoint(hit.point);
          return;
        }
      }
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('click', handleClick);

    // 10. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Slow, smooth float/rotation for the ambient background cloud
      // models — deliberately gentle so they read as atmosphere rather
      // than a distraction while navigating the city.
      ambientClouds.forEach((mesh) => {
        const base = mesh.userData.basePos as THREE.Vector3;
        mesh.position.y = base.y + Math.sin(t * mesh.userData.bobSpeed + mesh.userData.bobOffset) * 6;
        mesh.rotation.x += mesh.userData.rotSpeed * 0.01;
        mesh.rotation.y += mesh.userData.rotSpeed * 0.014;
      });
      ambientCloudGroup.rotation.y = Math.sin(t * 0.02) * 0.05;

      // Camera fly-to/teleport lerp. Both target refs are always set
      // together (see flyToStudent/teleportToPoint), but we defensively
      // guard against one being null to avoid a runtime throw inside the
      // render loop — an uncaught error here would otherwise repeat on
      // every subsequent frame (since the next rAF is already scheduled
      // above), which is what a "camera lock / infinite loop" looks like
      // to a user. Once the camera settles within a tight 0.01 radius of
      // its static destination vector, both refs are cleared so the
      // interpolation cleanly stops — it never re-triggers itself.
      if (cameraRef.current && controlsRef.current) {
        if (cameraTargetPos.current && controlsTargetPos.current) {
          cameraRef.current.position.lerp(cameraTargetPos.current, 0.05);
          controlsRef.current.target.lerp(controlsTargetPos.current, 0.05);

          const settled = cameraRef.current.position.distanceTo(cameraTargetPos.current) < 0.01;
          if (settled) {
            cameraTargetPos.current = null;
            controlsTargetPos.current = null;
          }
        } else {
          // Mismatched state (one ref set, the other not) — clear both
          // rather than risk lerping toward `null`.
          cameraTargetPos.current = null;
          controlsTargetPos.current = null;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Snapshot exactly where the camera is right now, so the NEXT
      // scene build (if this effect fires again) restores this view
      // instead of resetting to the default startup framing.
      if (cameraRef.current && controlsRef.current) {
        savedCameraPos.current = cameraRef.current.position.clone();
        savedControlsTarget.current = controlsRef.current.target.clone();
      }

      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);

      // Dispose the resources shared across all 300+ buildings so
      // rebuilding the scene (e.g. on theme switch) doesn't leak GPU
      // memory: one shared box geometry + a handful of cached window
      // textures, instead of hundreds of individual ones.
      unitBoxGeo.dispose();
      windowTextureCache.forEach((tex) => tex.dispose());
      cloudGeos.forEach((g) => g.dispose());
      ambientClouds.forEach((mesh) => (mesh.material as THREE.Material).dispose());

      renderer.dispose();
    };
  }, [students, currentUser.id, skyTheme, onSelectStudent, flyToStudent, teleportToPoint, toggleBuildingLights]);

  useEffect(() => {
    if (targetStudentId) {
      flyToStudent(targetStudentId);
    }
  }, [targetStudentId, flyToStudent]);

  // ── On-screen D-Pad Navigation ──────────────────────────────────────────
  // Consumes `navEvent` fired by the HUD's arrow buttons and pans/rotates/
  // zooms the live OrbitControls camera. Mouse-drag orbit and scroll-wheel
  // zoom remain fully intact since we only mutate the same camera/controls
  // instances that OrbitControls itself drives every frame.
  useEffect(() => {
    if (!navEvent) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    const PAN_STEP = 18;
    const ZOOM_STEP = 0.85; // <1 zooms in, >1 zooms out

    // Any in-flight fly-to/teleport animation should be cancelled so the
    // D-pad takes immediate, predictable effect.
    cameraTargetPos.current = null;
    controlsTargetPos.current = null;

    // Build camera-relative forward/right vectors (flattened to the
    // ground plane) so "up/down/left/right" always pans intuitively
    // regardless of current orbit angle.
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, camera.up).normalize();

    const pan = (vec: THREE.Vector3) => {
      camera.position.addScaledVector(vec, PAN_STEP);
      controls.target.addScaledVector(vec, PAN_STEP);
    };

    switch (navEvent.dir) {
      case 'up':
        pan(forward);
        break;
      case 'down':
        pan(forward.clone().negate());
        break;
      case 'left':
        pan(right.clone().negate());
        break;
      case 'right':
        pan(right);
        break;
      case 'zoomin': {
        const offset = camera.position.clone().sub(controls.target).multiplyScalar(ZOOM_STEP);
        const newDist = offset.length();
        if (newDist >= controls.minDistance) {
          camera.position.copy(controls.target).add(offset);
        }
        break;
      }
      case 'zoomout': {
        const offset = camera.position.clone().sub(controls.target).multiplyScalar(1 / ZOOM_STEP);
        const newDist = offset.length();
        if (newDist <= controls.maxDistance) {
          camera.position.copy(controls.target).add(offset);
        }
        break;
      }
      default:
        break;
    }

    controls.update();
  }, [navEvent]);

  return (
    <div className="relative w-full h-full min-h-[580px] bg-[#07090e] overflow-hidden select-none">
      
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Teleport Coordinates Notification */}
      {teleportFeedback && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-zinc-950/90 border border-aws-orange/60 text-aws-orange font-mono text-xs px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 animate-bounce-subtle pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-aws-orange animate-ping" />
          <span>Navigating to Coordinates [X: {teleportFeedback.x}, Z: {teleportFeedback.z}]</span>
        </div>
      )}

      {/* Light Switch Tooltip */}
      {hoveredLightSwitch && tooltipPos && (
        <div 
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full mb-4 px-3 py-2 rounded-xl bg-zinc-950/95 border border-amber-500/40 shadow-2xl backdrop-blur-md text-xs text-white whitespace-nowrap"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y - 12}px` }}
        >
          <span className="font-mono font-bold text-amber-300">💡 Toggle your building lights</span>
        </div>
      )}

      {/* 3D Hover Tooltip */}
      {hoveredStudent && tooltipPos && (
        <div 
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full mb-4 px-3.5 py-2.5 rounded-xl bg-zinc-950/95 border border-zinc-700/80 shadow-2xl backdrop-blur-md text-xs text-white"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y - 12}px` }}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-aws-orange">{hoveredStudent.name}</span>
            {hoveredStudent.id === currentUser.id && (
              <span className="px-1.5 py-0.2 bg-aws-orange text-black font-black text-[9px] rounded">YOU</span>
            )}
          </div>
          <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
            {hoveredStudent.department} • {hoveredStudent.rollNumber}
          </div>
          <div className="flex items-center gap-3 mt-1.5 pt-1.5 border-t border-zinc-800 font-mono text-[10px]">
            <span className="text-emerald-400 font-bold">{hoveredStudent.points} PTS</span>
            <span className="text-cyan-400 font-bold">{hoveredStudent.floors} FLOORS</span>
            <span className="text-amber-400 font-bold">{hoveredStudent.streak}d STREAK</span>
          </div>
        </div>
      )}

    </div>
  );
};
