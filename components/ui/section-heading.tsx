import { cn } from '@/lib/utils';
import { FadeIn } from './fade-in';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-balance font-semibold tracking-tight text-ink text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-pretty text-lg leading-relaxed text-ink-secondary',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
