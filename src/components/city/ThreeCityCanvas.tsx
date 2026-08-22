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
  const { currentUser } = useGame();

  const [hoveredStudent, setHoveredStudent] = useState<Student | null>(null);
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
      sunset: 0x140e1a,
      bright: 0xe2e8f0
    };
    scene.background = new THREE.Color(bgColors[skyTheme]);
    scene.fog = new THREE.FogExp2(bgColors[skyTheme], isBright ? 0.0025 : 0.0035);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(130, 110, 150);
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
    controls.maxDistance = 500;
    controls.target.set(0, 8, 0);
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isBright ? 1.3 : skyTheme === 'sunset' ? 0.7 : 0.55);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      skyTheme === 'sunset' ? 0xffaa66 : 0xffffff, 
      isBright ? 1.8 : 1.4
    );
    dirLight.position.set(120, 180, 100);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 500;
    const d = 160;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    scene.add(dirLight);

    // Spotlight
    const spotTarget = new THREE.Object3D();
    scene.add(spotTarget);
    spotlightTargetRef.current = spotTarget;

    const spotLight = new THREE.SpotLight(0xff9900, 0, 180, Math.PI / 6, 0.4, 1);
    spotLight.position.set(0, 80, 0);
    spotLight.target = spotTarget;
    scene.add(spotLight);
    spotlightRef.current = spotLight;

    // 6. Ground & City Blocks
    const citySize = 320;
    const groundGeo = new THREE.PlaneGeometry(citySize * 1.6, citySize * 1.6);
    const groundMat = new THREE.MeshStandardMaterial({ 
      color: isBright ? 0xcbd5e1 : 0x090c14, 
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

    // Grid Lines
    const gridHelper = new THREE.GridHelper(
      citySize, 
      32, 
      isBright ? 0x94a3b8 : 0xff9900, 
      isBright ? 0xd1d5db : 0x1a2333
    );
    gridHelper.position.y = 0.1;
    scene.add(gridHelper);

    // 7. Blocks and Roads
    const blockSize = 60;
    const roadWidth = 14;
    const gridDim = 4;
    const startOffset = -((gridDim * (blockSize + roadWidth) - roadWidth) / 2) + blockSize / 2;

    const sidewalkMat = new THREE.MeshStandardMaterial({ 
      color: isBright ? 0xf8fafc : 0x1c2333, 
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
    buildingMeshesRef.current.clear();

    students.forEach((student, index) => {
      const plot = plotPositions[index % plotPositions.length];
      if (!plot) return;

      const isCurrent = student.id === currentUser.id;
      const isApex = student.buildingTier === 'apex_monolith';
      const isCyber = student.buildingTier === 'cyber_tower';

      const buildingHeight = Math.max(8, student.floors * 3.2 + 4);
      const buildingWidth = isApex ? 13 : isCyber ? 11 : 9.5;

      const buildingGroup = new THREE.Group();
      buildingGroup.position.set(plot.x, 0.8, plot.z);

      const towerGeo = new THREE.BoxGeometry(buildingWidth, buildingHeight, buildingWidth);
      const windowTexture = createWindowTexture(student.buildingTier, isCurrent, isBright);
      windowTexture.repeat.set(1, Math.max(1, Math.floor(student.floors / 2)));

      const towerMat = new THREE.MeshStandardMaterial({
        map: windowTexture,
        roughness: 0.4,
        metalness: isBright ? 0.2 : 0.6,
        color: isBright ? 0xffffff : isCurrent ? 0xffffff : 0xdddddd
      });

      const towerMesh = new THREE.Mesh(towerGeo, towerMat);
      towerMesh.position.y = buildingHeight / 2;
      towerMesh.castShadow = true;
      towerMesh.receiveShadow = true;
      towerMesh.userData = { student };
      buildingGroup.add(towerMesh);

      const roofEdgeGeo = new THREE.BoxGeometry(buildingWidth + 0.6, 0.6, buildingWidth + 0.6);
      const roofEdgeMat = new THREE.MeshBasicMaterial({
        color: isCurrent ? 0xff9900 : isApex ? 0xf59e0b : isCyber ? 0x06b6d4 : 0x10b981
      });
      const roofEdgeMesh = new THREE.Mesh(roofEdgeGeo, roofEdgeMat);
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

      const baseGeo = new THREE.BoxGeometry(buildingWidth + 1.2, 1.2, buildingWidth + 1.2);
      const baseMat = new THREE.MeshStandardMaterial({ color: isBright ? 0x94a3b8 : 0x1a2233, roughness: 0.9 });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = 0.6;
      buildingGroup.add(baseMesh);

      scene.add(buildingGroup);
      buildingMeshesRef.current.set(student.id, buildingGroup);
    });

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
      for (const hit of intersects) {
        if (hit.object.userData && hit.object.userData.student) {
          foundStudent = hit.object.userData.student as Student;
          break;
        }
      }

      if (foundStudent) {
        setHoveredStudent(foundStudent);
        setTooltipPos({ x: e.clientX, y: e.clientY });
        container.style.cursor = 'pointer';
      } else {
        setHoveredStudent(null);
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
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (cameraTargetPos.current && cameraRef.current && controlsRef.current) {
        cameraRef.current.position.lerp(cameraTargetPos.current, 0.05);
        controlsRef.current.target.lerp(controlsTargetPos.current!, 0.05);

        if (cameraRef.current.position.distanceTo(cameraTargetPos.current) < 0.6) {
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
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [students, currentUser.id, skyTheme, onSelectStudent, flyToStudent, teleportToPoint]);

  useEffect(() => {
    if (targetStudentId) {
      flyToStudent(targetStudentId);
    }
  }, [targetStudentId, flyToStudent]);

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
