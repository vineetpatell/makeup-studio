import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { BeautyModel } from './BeautyModel';
import { CameraRig } from './CameraRig';
import { HeroLighting } from './HeroLighting';
import { HeroParticles } from './HeroParticles';
import { StudioEnvironment } from './StudioEnvironment';
import type { SceneProps } from './types';

function SceneContent(props: SceneProps) {
  const { onReady } = props;
  useFrame((state) => { if (state.clock.elapsedTime > 0.15) onReady(); });
  return <>
    <color attach="background" args={['#100c0a']} />
    <CameraRig {...props} />
    <HeroLighting {...props} />
    <StudioEnvironment {...props} />
    <BeautyModel {...props} />
    <HeroParticles {...props} />
  </>;
}

export default function BeautyScene(props: SceneProps) {
  return <Canvas dpr={[1, props.compact ? 1.3 : 1.75]} camera={{ fov: props.compact ? 35 : 32, near: 0.1, far: 50, position: [1.05, 0.22, 1.62] }} gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}>
    <Suspense fallback={null}><SceneContent {...props} /></Suspense>
  </Canvas>;
}
