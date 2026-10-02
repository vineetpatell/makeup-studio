import { useGLTF, useTexture } from '@react-three/drei';
import poster from '@/assets/beauty-poster.jpg';
import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { HERO_ASSETS, range, smooth } from './config';

type Props = { progress: React.RefObject<{ value: number }>; compact: boolean };

function LoadedModel({ path, progress, compact }: Props & { path: string }) {
  const gltf = useGLTF(path);
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!group.current) return;
    const p = progress.current.value;
    group.current.rotation.y = THREE.MathUtils.degToRad(-8 + smooth(range(p, 0.1, 0.3)) * 8 - smooth(range(p, 0.45, 0.53)) * 8 + smooth(range(p, 0.53, 0.6)) * 5);
    group.current.position.x = compact ? 0 : 0.72;
    // Commissioned GLBs can expose named makeup meshes/materials and be adapted here.
    group.current.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const makeup = child.userData['makeupStage'];
      if (typeof makeup === 'number') child.visible = range(p, 0.3 + makeup * 0.025, 0.34 + makeup * 0.025) > 0.5;
    });
  });
  return <group ref={group}><primitive object={gltf.scene} /></group>;
}

function SculptedPlaceholder({ progress, compact }: Props) {
  const group = useRef<THREE.Group>(null);
  const veil = useRef<THREE.Mesh>(null);
  const portrait = useTexture(poster);
  portrait.colorSpace = THREE.SRGBColorSpace;
  const edgeMask = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const image = ctx.createImageData(256, 256);
    const fade = (n: number) => smooth(Math.min(1, n / .13, (1 - n) / .13));
    for (let y = 0; y < 256; y++) for (let x = 0; x < 256; x++) {
      const i = (y * 256 + x) * 4;
      const alpha = Math.round(255 * fade(x / 255) * fade(y / 255));
      image.data[i] = alpha; image.data[i + 1] = alpha; image.data[i + 2] = alpha; image.data[i + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
    return new THREE.CanvasTexture(canvas);
  }, []);
  const geometry = useMemo(() => {
    const shape = new THREE.PlaneGeometry(2.42, 3.2, 28, 32);
    const position = shape.attributes['position'];
    if (!position) return shape;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i) / 1.21;
      const y = position.getY(i) / 1.6;
      position.setZ(i, .18 * (1 - x * x) * (1 - y * y * .3));
    }
    shape.computeVertexNormals();
    return shape;
  }, []);
  const cosmeticTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 384; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    const diffuse = (x: number, y: number, rx: number, ry: number, color: string) => {
      ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry);
      const gradient = ctx.createRadialGradient(0, 0, .05, 0, 0, 1);
      gradient.addColorStop(0, color); gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(0, 0, 1, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    };
    diffuse(265, 190, 78, 30, 'rgba(82,32,37,.52)'); // eyes
    diffuse(250, 270, 80, 72, 'rgba(156,66,67,.22)'); // contour
    diffuse(298, 327, 52, 25, 'rgba(127,38,50,.46)'); // lips
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
  useEffect(() => () => { edgeMask?.dispose(); cosmeticTexture?.dispose(); geometry.dispose(); }, [edgeMask, cosmeticTexture, geometry]);
  useFrame(() => {
    if (!group.current) return;
    const p = progress.current.value;
    group.current.position.x = compact ? 0 : .85;
    group.current.rotation.y = THREE.MathUtils.degToRad(-8 + smooth(range(p, .1, .3)) * 8 - smooth(range(p, .45, .53)) * 12 + smooth(range(p, .53, .6)) * 8);
    if (veil.current) (veil.current.material as THREE.MeshBasicMaterial).opacity = smooth(range(p, .32, .46)) * .85;
  });
  return <group ref={group} position={[0, 0, 0]}>
    <mesh geometry={geometry}><meshBasicMaterial map={portrait} alphaMap={edgeMask} side={THREE.DoubleSide} transparent depthWrite={false} /></mesh>
    {cosmeticTexture && <mesh ref={veil} geometry={geometry} position={[0, 0, .008]}><meshBasicMaterial map={cosmeticTexture} alphaMap={edgeMask} transparent opacity={0} depthWrite={false} polygonOffset polygonOffsetFactor={-1} /></mesh>}
    <mesh position={[0, 0, -.34]} scale={[.92, 1.39, .38]}><sphereGeometry args={[1, 40, 24]} /><meshStandardMaterial color="#261812" roughness={.83} /></mesh>
  </group>;
}

export function BeautyModel(props: Props) {
  return HERO_ASSETS.model ? <LoadedModel {...props} path={HERO_ASSETS.model} /> : <SculptedPlaceholder {...props} />;
}
