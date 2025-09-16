// components/Ball.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

export default function Ball({ src, size = 160 }) {
  const meshRef = useRef();
  const bounceOffset = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Bounce: up/down motion with easing (like a spring)
    bounceOffset.current = Math.sin(t * 1.2) * 0.4;

    // Spin: rotate on both axes
    meshRef.current.rotation.x = Math.sin(t * 0.8) * 0.3;
    meshRef.current.rotation.y = Math.cos(t * 0.7) * 0.4;

    // Apply vertical bounce
    meshRef.current.position.y = bounceOffset.current;
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