/** Mały znak kłosa do logotypu / faviconu. */
export function WheatMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 22V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M12 ${9 + i * 3.3} C 8.5 ${8 + i * 3.3}, 7 ${10 + i * 3.3}, 6.6 ${12 + i * 3.3}`} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d={`M12 ${9 + i * 3.3} C 15.5 ${8 + i * 3.3}, 17 ${10 + i * 3.3}, 17.4 ${12 + i * 3.3}`} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      ))}
      <path d="M12 8 V4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
