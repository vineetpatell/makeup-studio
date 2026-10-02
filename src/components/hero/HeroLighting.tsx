import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { range, smooth } from './config';
import type { SceneProps } from './types';

export function HeroLighting({ progress }: Pick<SceneProps, 'progress'>) {
  const key = useRef<THREE.SpotLight>(null);
  const rim = useRef<THREE.PointLight>(null);
  useFrame(() => {
    const p = progress.current.value;
    if (key.current) key.current.intensity = 20 + smooth(range(p, 0.12, 0.48)) * 35;
    if (rim.current) rim.current.intensity = smooth(range(p, 0.5, 0.78)) * 16;
  });
  return <>
    <ambientLight intensity={0.65} color="#9c8273" />
    <spotLight ref={key} color="#ffe4c5" position={[-3, 5, 5]} angle={0.72} penumbra={1} intensity={20} distance={15} />
    <pointLight color="#b87d5d" position={[4, 0.5, 2.5]} intensity={5} distance={9} />
    <pointLight ref={rim} color="#e6bb88" position={[2, 3, -2]} intensity={0} distance={9} />
  </>;
}