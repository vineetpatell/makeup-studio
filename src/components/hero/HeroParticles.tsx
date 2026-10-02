import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { range, smooth } from './config';
import type { SceneProps } from './types';

export function HeroParticles({ progress, compact, reduced }: Pick<SceneProps, 'progress' | 'compact' | 'reduced'>) {
  const ref = useRef<THREE.Points>(null);
  const count = reduced ? 0 : compact ? 18 : 42;
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      a[i * 3] = Math.sin(i * 17.3) * 3.3;
      a[i * 3 + 1] = Math.cos(i * 9.7) * 2.4;
      a[i * 3 + 2] = Math.sin(i * 3.3) * 2 + 1;
    }
    return a;
  }, [count]);
  useFrame((state) => {
    if (!ref.current) return;
    const p = progress.current.value;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    (ref.current.material as THREE.PointsMaterial).opacity = 0.035 + smooth(range(p, 0.3, 0.39)) * 0.22 - smooth(range(p, 0.46, 0.65)) * 0.17;
  });
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry><pointsMaterial color="#e5c19b" size={0.025} sizeAttenuation transparent opacity={0.04} depthWrite={false} /></points>;
}