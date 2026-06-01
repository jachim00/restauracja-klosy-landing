/**
 * Ultralekka tekstura ziarna/lnu (film grain) — inline SVG feTurbulence (~0.3KB),
 * fixed + pointer-events-none + pod treścią, więc zero wpływu na LCP/CLS.
 */
export function GrainOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.04] mix-blend-multiply"
    >
      <filter id="klosy-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#klosy-grain)" />
    </svg>
  );
}
