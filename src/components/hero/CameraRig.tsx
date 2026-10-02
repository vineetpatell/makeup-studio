import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { range, smooth } from './config';
import type { SceneProps } from './types';

export function CameraRig({ progress, compact, reduced }: Pick<SceneProps, 'progress' | 'compact' | 'reduced'>) {
  const { camera, pointer } = useThree();
  const target = useMemo(() => new THREE.Vector3(), []);
  const desired = useMemo(() => new THREE.Vector3(), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(), []);
  useFrame((_, delta) => {
    const p = reduced ? 1 : progress.current.value;
    const reveal = smooth(range(p, 0.08, 0.48));
    const final = smooth(range(p, 0.56, 0.75));
    const orbit = smooth(range(p, 0.45, 0.53)) - smooth(range(p, 0.53, 0.63)) * 0.58;
    desired.set(
      (compact ? 0.37 : 1.05) + orbit * (compact ? 0.28 : 0.74) - final * (compact ? 0.37 : 0.56),
      0.22 - reveal * 0.05,
      (compact ? 2.55 : 1.62) + reveal * (compact ? 2.4 : 2.95) + final * (compact ? 0.3 : 0.55),
    );
    camera.position.lerp(desired, 1 - Math.exp(-delta * 5));
    desiredTarget.set((compact ? 0 : .45) + (reduced || compact ? 0 : pointer.x * .045), (1 - reveal) * .72 + (reduced || compact ? 0 : pointer.y * .025), 0);
    target.lerp(desiredTarget, 1 - Math.exp(-delta * 5));
    camera.lookAt(target);
  });
  return null;
}