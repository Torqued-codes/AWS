import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A Three.js backdrop meant to sit behind ordinary page content on the
// lower Overview sections (Platform Architecture, Ready to Build) — NOT
// the Hero, which keeps its own untouched canvas/constellation setup.
//
// Each "cloud node" is rendered as a paired mesh: a low-opacity emissive
// solid (volumetric glow) plus a crisper wireframe overlay on top, both
// using the site's gold/amber accent. This keeps the models distinctly
// visible against the dark background — per spec: emissive #f59e0b,
// emissiveIntensity 0.35 — without ever obscuring foreground text, since
// opacity and pointer-events stay low/none respectively.
export const SectionAmbientBackdrop: React.FC<{ density?: 'low' | 'medium' }> = ({ density = 'low' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.replaceChildren(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffb84d, 0.8));
    const light = new THREE.DirectionalLight(0xffcf9e, 0.7);
    light.position.set(4, 6, 8);
    scene.add(light);

    // Larger, higher-contrast low-poly "cloud/service" node field.
    const group = new THREE.Group();
    const count = density === 'medium' ? 14 : 9;
    const geoDefs = [
      () => new THREE.IcosahedronGeometry(2.1, 0),
      () => new THREE.OctahedronGeometry(2, 0),
      () => new THREE.TetrahedronGeometry(2.3, 0),
    ];

    interface CloudNode {
      solid: THREE.Mesh;
      wire: THREE.LineSegments;
      basePos: THREE.Vector3;
      bobSpeed: number;
      bobOffset: number;
      rotSpeed: number;
    }
    const nodes: CloudNode[] = [];
    const disposableGeos: THREE.BufferGeometry[] = [];

    for (let i = 0; i < count; i++) {
      const baseGeo = geoDefs[i % geoDefs.length]();
      disposableGeos.push(baseGeo);

      // Volumetric emissive glow — high-visibility per spec, but kept
      // translucent so it never competes with card/text contrast.
      const solidMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.35,
        roughness: 0.35,
        metalness: 0.3,
        transparent: true,
        opacity: 0.16,
      });
      const solid = new THREE.Mesh(baseGeo, solidMat);

      // Crisp amber wireframe overlay for geometric definition/contrast.
      const wireGeo = new THREE.WireframeGeometry(baseGeo);
      disposableGeos.push(wireGeo);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0xffc978,
        transparent: true,
        opacity: 0.28,
      });
      const wire = new THREE.LineSegments(wireGeo, wireMat);

      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 34,
        (Math.random() - 0.5) * 20,
        -5 - Math.random() * 12
      );
      const scale = 1.1 + Math.random() * 1.6;

      [solid, wire].forEach((obj) => {
        obj.position.copy(position);
        obj.scale.setScalar(scale);
      });

      nodes.push({
        solid,
        wire,
        basePos: position.clone(),
        bobSpeed: 0.15 + Math.random() * 0.2,
        bobOffset: Math.random() * Math.PI * 2,
        rotSpeed: 0.05 + Math.random() * 0.09,
      });

      group.add(solid);
      group.add(wire);
    }
    scene.add(group);

    let animationFrameId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      nodes.forEach(({ solid, wire, basePos, bobSpeed, bobOffset, rotSpeed }) => {
        // Smooth, slow float + rotation — deliberately gentle so it
        // reads as ambient atmosphere, not a distraction.
        const y = basePos.y + Math.sin(t * bobSpeed + bobOffset) * 1.2;
        solid.position.y = y;
        wire.position.y = y;
        solid.rotation.x += rotSpeed * 0.006;
        solid.rotation.y += rotSpeed * 0.009;
        wire.rotation.copy(solid.rotation);
      });
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
      disposableGeos.forEach((g) => g.dispose());
      nodes.forEach(({ solid, wire }) => {
        (solid.material as THREE.Material).dispose();
        (wire.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [density]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none opacity-90"
      aria-hidden="true"
    />
  );
};