import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import type { SceneProps } from './types';

export function StudioEnvironment({ progress, compact }: Pick<SceneProps, 'progress' | 'compact'>) {
  const group = useRef<THREE.Group>(null);
  useFrame(() => { if (group.current) group.current.visible = progress.current.value > 0.57; });
  if (compact) return null;
  return <group ref={group} visible={false} position={[0, 0, -2.7]}>
    <mesh position={[0, -1.9, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[20, 16]} /><meshStandardMaterial color="#1c1410" roughness={0.9} /></mesh>
    <mesh position={[0, 0, -1.5]}><planeGeometry args={[20, 8]} /><meshStandardMaterial color="#241a15" roughness={1} /></mesh>
    <mesh position={[-2.5, 0, -.8]}><torusGeometry args={[1.25, .04, 12, 80]} /><meshStandardMaterial color="#735943" metalness={.6} roughness={.5} /></mesh>
    <mesh position={[-2.5, 0, -.84]}><circleGeometry args={[1.2, 80]} /><meshStandardMaterial color="#2b2420" metalness={.65} roughness={.2} /></mesh>
    <mesh position={[-3.95, 0, -.65]}><boxGeometry args={[.04, 3.4, .08]} /><meshStandardMaterial color="#b69565" emissive="#76502f" emissiveIntensity={.6} /></mesh>
    <mesh position={[3.5, 0, -.65]}><boxGeometry args={[.04, 3.4, .08]} /><meshStandardMaterial color="#b69565" emissive="#76502f" emissiveIntensity={.6} /></mesh>
  </group>;
}