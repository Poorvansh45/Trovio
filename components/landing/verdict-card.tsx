'use client';

import { motion } from 'motion/react';
import { Check, Sparkles, TrendingUp } from 'lucide-react';
import { CountUp } from '@/components/ui/count-up';
import { Stagger, StaggerItem } from '@/components/ui/fade-in';
import { cn } from '@/lib/utils';

const GATES = [
  { label: 'Demand', detail: '2,100 searches/mo' },
  { label: 'Competition', detail: 'Beatable page one' },
  { label: 'Margin', detail: '42% pre-ad' },
  { label: 'Risk', detail: '3.8 / 10 composite' },
];

/** The signature hero visual: a live "verdict" reveal, mirroring the real product. */
export function VerdictCard({ className }: { className?: string }) {
  const score = 87;
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={cn('relative', className)}>
      {/* Floating context chips */}
      <motion.div
        className="absolute -left-6 top-10 z-10 hidden rounded-2xl border border-border bg-white px-4 py-2.5 shadow-soft sm:flex sm:items-center sm:gap-2"
        initial={{ opacity: 0, x: -16, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-emerald-soft">
          <TrendingUp className="size-3.5 text-emerald" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-ink">$14.2k/mo</p>
          <p className="text-[11px] text-ink-tertiary">Est. category revenue</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 bottom-16 z-10 hidden rounded-2xl border border-border bg-white px-4 py-2.5 shadow-soft sm:flex sm:items-center sm:gap-2"
        initial={{ opacity: 0, x: 16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-primary-soft">
          <Sparkles className="size-3.5 text-primary" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-ink">2 differentiators</p>
          <p className="text-[11px] text-ink-tertiary">Found in reviews</p>
        </div>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative w-full max-w-[420px] rounded-[28px] border border-border bg-white p-6 shadow-glow sm:p-7"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-wide text-ink-tertiary">
              Investment Committee Verdict
            </p>
            <h3 className="mt-1 text-[17px] font-semibold text-ink">Bamboo Utensil Set</h3>
          </div>
          <span className="rounded-full bg-emerald-soft px-3 py-1 text-[12px] font-semibold text-emerald">
            YES
          </span>
        </div>

        <div className="mt-6 flex items-center gap-5">
          <div className="relative flex size-24 shrink-0 items-center justify-center">
            <svg viewBox="0 0 100 100" className="size-24 -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-border-soft)" strokeWidth="8" />
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#score-grad)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
              <defs>
                <linearGradient id="score-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-semibold tracking-tight text-ink">
                <CountUp target={score} />
              </span>
              <span className="text-[10px] font-medium text-ink-tertiary">/100</span>
            </div>
          </div>

          <Stagger className="flex-1 space-y-2" step={0.12}>
            {GATES.map((gate) => (
              <StaggerItem key={gate.label} y={8}>
                <div className="flex items-center gap-2.5 rounded-xl bg-bg-soft px-3 py-2">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[12.5px] font-medium text-ink">{gate.label}</p>
                    <p className="truncate text-[11px] text-ink-tertiary">{gate.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-5 rounded-xl border border-primary/10 bg-primary-soft/60 px-4 py-3">
          <p className="text-[12.5px] leading-relaxed text-ink-secondary">
            <span className="font-semibold text-primary-700">Chair:</span> Evidence-backed,
            passes every gate with room to spare. Confidence{' '}
            <span className="font-semibold text-ink">78%</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
