'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

/** Animates a number from 0 to target once it scrolls into view. */
export function CountUp({ target, duration = 1.2, className, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setValue(Math.round(easeOutQuint(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
