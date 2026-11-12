import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  mark?: boolean;
  wordmark?: boolean;
  inverse?: boolean;
}

/** Faceted gem mark — "Trovio" from Italian trovare, to find/discover. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn('h-7 w-7', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trovio-grad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M16 2 L28 11 L23 28 L9 28 L4 11 Z" fill="url(#trovio-grad)" />
      <path d="M16 2 L28 11 L16 16 Z" fill="white" fillOpacity="0.22" />
      <path d="M4 11 L16 16 L9 28 Z" fill="white" fillOpacity="0.1" />
      <path d="M16 16 L23 28 L9 28 Z" fill="black" fillOpacity="0.08" />
      <path d="M16 2 L16 16 L4 11 Z" fill="black" fillOpacity="0.05" />
    </svg>
  );
}

export function Logo({ className, mark = true, wordmark = true, inverse = false }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      {mark ? <LogoMark /> : null}
      {wordmark ? (
        <span
          className={cn(
            'text-[19px] font-semibold tracking-tight',
            inverse ? 'text-white' : 'text-ink',
          )}
        >
          Trovio
        </span>
      ) : null}
    </span>
  );
}
