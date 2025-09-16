// components/AnimatedObjects.jsx
import { Canvas } from '@react-three/fiber';
import Jellyfish from './JellyFish';
import Tower from './Tower';
import Ball from './Ball';

export default function AnimatedObjects() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      style={{ background: 'transparent' }}
      className="w-full h-full"
    >
      {/* 👇 JELLYFISH — Top Left */}
      <Jellyfish src="/assets/jellyfish.png" size={220} />

      {/* 👇 TOWER — Center Right */}
      <Tower src="/assets/tower.png" size={200} />

      {/* 👇 BALL — Bottom Left */}
      <Ball src="/assets/ball.png" size={180} />

      {/* Optional: Add ambient light for softness */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 1, 1]} intensity={0.6} />
    </Canvas>
  );
}