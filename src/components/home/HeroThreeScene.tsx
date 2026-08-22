import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Purely decorative, ambient WebGL backdrop for the Hero section — a
// handful of low-poly cloud/service-style mesh geometries drifting and
// bobbing in the dark amber/gold palette, connected by faint glowing
// "constellation" lines. Deliberately lightweight (no shadows, few
// objects, capped pixel ratio) since this renders behind text on the
// landing page and must stay smooth on modest laptops.
export const HeroThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.replaceChildren(renderer.domElement);

    // Soft amber key light + a cooler fill so the low-poly facets read
    // as gentle gradients rather than flat silhouettes.
    const keyLight = new THREE.DirectionalLight(0xffb84d, 1.6);
    keyLight.position.set(6, 8, 10);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.35);
    fillLight.position.set(-8, -4, 6);
    scene.add(fillLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    // ── Low-poly "cloud service" nodes ────────────────────────────────
    const geometries = [
      new THREE.IcosahedronGeometry(1.1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.IcosahedronGeometry(0.8, 1),
    ];
    const amberPalette = [0xff9900, 0xffb84d, 0xf59e0b, 0xffd08a];

    const nodeCount = 9;
    const nodes: THREE.Mesh[] = [];
    const nodeGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const geo = geometries[i % geometries.length];
      const color = amberPalette[i % amberPalette.length];
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.5,
        flatShading: true,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Spread nodes across a wide, shallow volume so they read as an
      // ambient field behind the headline rather than a focal object.
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 9 + Math.random() * 6;
      mesh.position.set(
        Math.cos(angle) * radius + (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius * 0.55 + (Math.random() - 0.5) * 4,
        -6 - Math.random() * 10
      );
      const scale = 0.5 + Math.random() * 0.7;
      mesh.scale.setScalar(scale);
      mesh.userData.bobSpeed = 0.4 + Math.random() * 0.6;
      mesh.userData.bobOffset = Math.random() * Math.PI * 2;
      mesh.userData.rotSpeed = (Math.random() - 0.5) * 0.25;
      mesh.userData.basePos = mesh.position.clone();

      nodes.push(mesh);
      nodeGroup.add(mesh);
    }
    scene.add(nodeGroup);

    // ── Glowing constellation lines between nearby nodes ────────────────
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xff9900,
      transparent: true,
      opacity: 0.18,
    });
    const lineGroup = new THREE.Group();
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < 11) {
          const geo = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          lineGroup.add(new THREE.Line(geo, lineMat));
        }
      }
    }
    scene.add(lineGroup);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      nodes.forEach((mesh) => {
        const base = mesh.userData.basePos as THREE.Vector3;
        mesh.position.y = base.y + Math.sin(t * mesh.userData.bobSpeed + mesh.userData.bobOffset) * 0.6;
        mesh.rotation.x += mesh.userData.rotSpeed * 0.01;
        mesh.rotation.y += mesh.userData.rotSpeed * 0.015;
      });

      // Constellation lines follow their nodes' gentle bobbing
      let lineIdx = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].userData.basePos.distanceTo(nodes[j].userData.basePos);
          if (dist < 11) {
            const line = lineGroup.children[lineIdx] as THREE.Line;
            if (line) {
              const positions = (line.geometry as THREE.BufferGeometry).attributes.position;
              positions.setXYZ(0, nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
              positions.setXYZ(1, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
              positions.needsUpdate = true;
            }
            lineIdx++;
          }
        }
      }

      // Extremely slow overall parallax drift
      nodeGroup.rotation.y = Math.sin(t * 0.05) * 0.08;
      lineGroup.rotation.y = nodeGroup.rotation.y;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometries.forEach((g) => g.dispose());
      nodes.forEach((m) => (m.material as THREE.Material).dispose());
      lineGroup.children.forEach((l) => (l as THREE.Line).geometry.dispose());
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
