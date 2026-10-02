import type { RefObject } from 'react';

export type SceneProps = { progress: RefObject<{ value: number }>; compact: boolean; reduced: boolean; onReady: () => void };