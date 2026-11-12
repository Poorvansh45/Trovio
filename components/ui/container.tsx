import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

/** Consistent max-width + gutter wrapper used by every section. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6 lg:px-8', className)} {...props} />;
}
