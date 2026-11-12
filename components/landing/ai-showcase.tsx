'use client';

import { motion } from 'motion/react';
import { BarChart3, CircleDot } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/fade-in';
import { Badge } from '@/components/ui/badge';

const REVENUE_BARS = [
  { label: 'Listing A', value: 62, note: '$18.4k/mo' },
  { label: 'Listing B', value: 84, note: '$24.9k/mo' },
  { label: 'Listing C', value: 38, note: '$11.2k/mo' },
  { label: 'Listing D', value: 71, note: '$21.0k/mo' },
  { label: 'Listing E', value: 26, note: '$7.6k/mo' },
];

const TRANSCRIPT = [
  {
    role: 'Market Analyst',
    color: 'bg-primary',
    text: 'Demand is broad, not a single outlier — 4 of 5 page-one listings clear $10k/mo.',
  },
  {
    role: 'Customer Analyst',
    color: 'bg-violet',
    text: '212 reviews cite handle failure. A reinforced grip is a real, defensible fix.',
  },
  {
    role: "Devil's Advocate",
    color: 'bg-amber',
    text: 'Freight assumption is the widest estimate here — a real quote would firm this up.',
  },
  {
    role: 'Chair',
    color: 'bg-emerald',
    text: 'Passes every gate. Recommending YES at 78% confidence.',
  },
];

export function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg-inverse py-24 sm:py-32">
      <div className="bg-dot-grid-inverse pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div
        className="mesh-blob animate-drift pointer-events-none absolute -top-20 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/30"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="See it think"
          title="Watch the committee work in real time"
          description="Every verdict is the product of specialists reading real data — not one model guessing. Here's a live analysis in progress."
          className="[&_h2]:text-white [&_span]:text-primary/90 [&_p]:text-white/60"
        />

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_-24px_rgba(79,70,229,0.35)] backdrop-blur-sm">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[12.5px] font-medium text-white/40">
                Market: bamboo kitchen utensils
              </span>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-[1.1fr_1fr]">
              {/* Market chart */}
              <div className="bg-[#0d0d12] p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="size-4 text-white/40" />
                    <span className="text-[13px] font-medium text-white/60">
                      Page-one revenue depth
                    </span>
                  </div>
                  <Badge variant="emerald" className="bg-emerald/15 text-emerald">
                    Demand gate: pass
                  </Badge>
                </div>

                <div className="mt-8 flex h-40 items-end gap-3">
                  {REVENUE_BARS.map((bar, i) => (
                    <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full rounded-t-md bg-gradient-to-t from-primary/70 to-violet/70"
                        style={{ height: `${bar.value}%` }}
                      />
                      <span className="text-[10.5px] text-white/30">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[11px] text-white/35">Median price</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-white">$32.00</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/35">Median reviews</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-white">340</p>
                  </div>
                </div>
              </div>

              {/* Live transcript */}
              <div className="bg-[#0d0d12] p-7">
                <div className="flex items-center gap-2">
                  <CircleDot className="size-4 animate-pulse text-emerald" />
                  <span className="text-[13px] font-medium text-white/60">
                    Committee deliberation
                  </span>
                </div>

                <Stagger className="mt-6 space-y-4" step={0.15}>
                  {TRANSCRIPT.map((msg) => (
                    <StaggerItem key={msg.role} y={10}>
                      <div className="flex gap-3">
                        <span className={`mt-1 size-2 shrink-0 rounded-full ${msg.color}`} />
                        <div>
                          <p className="text-[12px] font-semibold text-white/70">{msg.role}</p>
                          <p className="mt-0.5 text-[13.5px] leading-relaxed text-white/50">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
