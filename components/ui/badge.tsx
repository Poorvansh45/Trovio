import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-medium',
  {
    variants: {
      variant: {
        neutral: 'bg-bg-soft text-ink-secondary border border-border-soft',
        primary: 'bg-primary-soft text-primary-700',
        emerald: 'bg-emerald-soft text-emerald',
        amber: 'bg-amber-soft text-amber',
        outline: 'border border-border text-ink-secondary bg-white',
      },
    },
    defaultVariants: { variant: 'neutral' },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
