// components/Tower.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export default function Tower({ src, size = 180 }) {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;
    // Rotate slowly around Y-axis — one full turn every 15 seconds
    meshRef.current.rotation.y += 0.005;
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