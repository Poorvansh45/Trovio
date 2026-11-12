'use client';

import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Blur-to-sharp entrance, used for hero-level emphasis. */
  blur?: boolean;
}

const baseVariants = (y: number, blur: boolean): Variants => ({
  hidden: { opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
});

/** Fades + rises into view once, the first time it enters the viewport. */
export function FadeIn({ children, className, delay = 0, y = 18, blur = false }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={baseVariants(y, blur)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each direct child's reveal, in seconds. */
  step?: number;
}

/** Wrap a list of elements to reveal them in sequence as the group enters view. */
export function Stagger({ children, className, step = 0.08 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 14 }: FadeInProps) {
  return (
    <motion.div className={className} variants={baseVariants(y, false)}>
      {children}
    </motion.div>
  );
}
