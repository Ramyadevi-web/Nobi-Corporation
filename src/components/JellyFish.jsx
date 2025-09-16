// components/Jellyfish.jsx
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import {  TextureLoader } from 'three';
import * as THREE from 'three';

export default function Jellyfish({ src, size = 200 }) {
  const meshRef = useRef();

  // Use time-based animation for natural movement
  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime(); // Time since page load

    // Pulsing: expand/contract every 4 seconds
    const pulseScale = 1 + Math.sin(t * 0.5) * 0.1; // Gentle breathing

    // Drifting: slow side-to-side float
    const driftX = Math.sin(t * 0.2) * 0.3;
    const driftY = Math.cos(t * 0.15) * 0.2;

    meshRef.current.scale.set(pulseScale, pulseScale, 1);
    meshRef.current.position.x = driftX;
    meshRef.current.position.y = driftY;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <planeGeometry args={[size / 100, size / 100]} />
      <meshBasicMaterial
        map={new TextureLoader().load(src)}
        transparent={true}
        side={THREE.DoubleSide}
        depthWrite={false}
        opacity={1}
      />
    </mesh>
  );
}