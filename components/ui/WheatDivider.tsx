import { cn } from "@/lib/utils";

/** Organiczny dzielnik sekcji z subtelnym motywem kłosów (SVG, dekoracyjny). */
export function WheatDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center justify-center gap-3 py-2 text-wheat/70", className)}>
      <span className="h-px w-16 bg-current sm:w-24" />
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="shrink-0">
        <path d="M13 24V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path d={`M13 ${10 + i * 3.4} C 9 ${9 + i * 3.4}, 7 ${11 + i * 3.4}, 6.5 ${13 + i * 3.4}`} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <path d={`M13 ${10 + i * 3.4} C 17 ${9 + i * 3.4}, 19 ${11 + i * 3.4}, 19.5 ${13 + i * 3.4}`} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </g>
        ))}
        <path d="M13 9 L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="h-px w-16 bg-current sm:w-24" />
    </div>
  );
}
