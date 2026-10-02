export const HERO_ASSETS = {
  // Replace null with '/models/beauty-face.glb' when a commissioned model is supplied.
  model: null as string | null,
} as const;

export const HERO_STAGES = {
  GLIMPSE: 0,
  REVEAL: 0.1,
  TRANSFORMATION: 0.3,
  ORBIT: 0.45,
  ENVIRONMENT: 0.6,
  TYPOGRAPHY: 0.72,
  COPY: 0.82,
  CTA: 0.92,
  END: 1,
} as const;

export const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
export const range = (n: number, start: number, end: number) => clamp01((n - start) / (end - start));
export const smooth = (n: number) => n * n * (3 - 2 * n);
