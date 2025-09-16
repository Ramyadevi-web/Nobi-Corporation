// components/FloatingLogo.jsx
import { useRef, useEffect } from 'react';
import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function FloatingLogo({ src, size = 128 }) {
  const meshRef = useRef();
  const { camera, gl } = useThree();

  // Store mouse position for parallax
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gl]);

  // Animate rotation with smooth easing
  useFrame(() => {
    if (!meshRef.current) return;

    // 👇 1. SLOW AUTO-ROTATION — always active
    const time = Date.now() * 0.0001;
    const baseRotationX = Math.sin(time * 0.5) * 0.05;   // Gentle up/down sway
    const baseRotationY = Math.cos(time * 0.7) * 0.08;   // Gentle left/right spin
    const baseRotationZ = Math.sin(time * 1.2) * 0.02;   // Tiny twist

    // 👇 2. MOUSE INFLUENCE — only adds tilt when mouse moves
    targetRotation.current.x += (mouse.current.y * 0.1 - targetRotation.current.x) * 0.05;
    targetRotation.current.y += (mouse.current.x * 0.1 - targetRotation.current.y) * 0.05;

    // 👇 3. FINAL ROTATION = BASE ROTATION + MOUSE TILT
    meshRef.current.rotation.x = baseRotationX + targetRotation.current.x * 0.3;
    meshRef.current.rotation.y = baseRotationY + targetRotation.current.y * 0.3;
    meshRef.current.rotation.z = baseRotationZ + Math.sin(time * 0.9) * 0.01;
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