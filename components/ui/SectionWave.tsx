import { cn } from "@/lib/utils";

/**
 * Organiczny separator-fala między sekcjami (dzień↔wieczór).
 * `color` = klasa text-* (fill = currentColor) odpowiadająca sekcji „nad" falą.
 * Domyślnie umieszczany na górze ciemnej sekcji (cream „przelewa się" w forest).
 */
export function SectionWave({
  className,
  color = "text-cream",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none leading-[0]", color, className)}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-8 w-full sm:h-14">
        <path
          fill="currentColor"
          d="M0,40 C240,82 480,2 720,34 C960,66 1200,6 1440,40 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}
