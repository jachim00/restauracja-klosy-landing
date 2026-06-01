/** Duży, dekoracyjny kłos (sygnatura marki). Kołysze się (animate-sway, gated globalnie). */
export function WheatPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" className={className} fill="none" aria-hidden>
      <g className="origin-bottom animate-sway">
        <path d="M100 400 V120" stroke="currentColor" strokeWidth="3" />
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i}>
            <ellipse cx={92} cy={140 + i * 28} rx="9" ry="18" fill="currentColor" transform={`rotate(-30 92 ${140 + i * 28})`} />
            <ellipse cx={108} cy={140 + i * 28} rx="9" ry="18" fill="currentColor" transform={`rotate(30 108 ${140 + i * 28})`} />
          </g>
        ))}
        <path d="M100 120 L100 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
