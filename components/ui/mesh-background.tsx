import { cn } from '@/lib/utils';

/**
 * Soft, animated gradient-blob mesh used behind hero-weight sections.
 * Pure CSS/SVG — no image assets required.
 */
export function MeshBackground({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className="mesh-blob animate-drift absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-primary/25" />
      <div
        className="mesh-blob animate-drift absolute -top-16 right-[4%] h-[380px] w-[380px] rounded-full bg-violet/20"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="mesh-blob animate-drift absolute top-[30%] left-[38%] h-[320px] w-[320px] rounded-full bg-sky/15"
        style={{ animationDelay: '-11s' }}
      />
    </div>
  );
}
