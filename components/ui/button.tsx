import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-ink text-ink-inverse shadow-soft hover:bg-primary hover:shadow-glow active:scale-[0.98]',
        secondary:
          'bg-white text-ink border border-border hover:border-ink/20 hover:bg-bg-soft active:scale-[0.98]',
        ghost: 'text-ink-secondary hover:text-ink hover:bg-bg-soft active:scale-[0.98]',
        inverse:
          'bg-white text-ink hover:bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.25)] active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-[15px]',
        lg: 'h-[52px] px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
