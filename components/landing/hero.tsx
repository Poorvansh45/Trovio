'use client';

import { motion } from 'motion/react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { MeshBackground } from '@/components/ui/mesh-background';
import { VerdictCard } from './verdict-card';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <MeshBackground className="-z-10" />
      <div className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 text-[13px] font-medium text-ink-secondary shadow-[0_1px_2px_rgba(11,11,15,0.04)] backdrop-blur">
                <Sparkles className="size-3.5 text-primary" />
                The AI investment committee for Amazon sellers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="mt-6 text-balance text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
            >
              Discover your next{' '}
              <span className="font-serif italic font-normal text-gradient">winning</span>{' '}
              product.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-secondary sm:text-xl"
            >
              Trovio&rsquo;s AI committee mines real market data, reads thousands of reviews, and
              hands you an evidence-backed verdict — not another dashboard. Know what to launch
              before you spend a dollar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg">
                Start free trial
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="secondary" size="lg">
                <PlayCircle className="size-4 text-ink-tertiary" />
                See how it works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-5 text-[13.5px] text-ink-tertiary"
            >
              No credit card required &nbsp;·&nbsp; 1 full verdict included &nbsp;·&nbsp; Cancel
              anytime
            </motion.p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <VerdictCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
