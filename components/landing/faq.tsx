'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cn } from '@/lib/utils';

/**
 * Six items per the landing spec. Answers are the customer-facing readings of the
 * founder FAQ (`99-learning/08-faq.md`) — candor is the pitch here, so nothing is
 * softened: the NO, the no-free-tier stance, and the failure odds all stay explicit.
 */
const ITEMS = [
  {
    q: 'I already pay for Helium 10. Why do I need this?',
    a: 'Helium 10 answers "what does the data say?" Trovio answers "what should I do?" We are additive, not a rip-and-replace fight — the product actually runs on the exports you already generate. You keep your data tools; we supply the judgment layer they were never built to give you.',
  },
  {
    q: 'Why does it say NO so often?',
    a: 'Because the NO is the product. You are risking real savings, and every early kill is thousands of dollars protected before you spend them. We track "kill acceptance" — whether our NOs land as protection rather than rejection — as a core health metric, not a vanity one.',
  },
  {
    q: 'What stops the AI from inventing a number?',
    a: 'It structurally cannot publish one. Every fact claim requires a citation to a specific evidence row, the Claim Checker verifies that row actually says what is claimed, and all arithmetic is recomputed by deterministic calculators — never by a model. An unsupported claim is not filtered out; it is unwritable.',
  },
  {
    q: 'Is there a free tier?',
    a: 'No. Instead: a 14-day trial that includes one full verdict credit — enough to experience the entire arc, from import through the gates to a sealed memo. We would rather you test the real thing once than sample a hollow version forever.',
  },
  {
    q: 'Do you train models on my research?',
    a: 'No. Provider contracts are no-training and no-retention, and that is asserted in gateway config rather than trusted as policy. Your research never crosses into another workspace — that boundary is enforced at the database itself. Only anonymous, text-free outcome statistics ever aggregate.',
  },
  {
    q: 'What if a verdict turns out to be wrong?',
    a: 'Every memo states its failure odds plainly — 72% confidence fails about 1 in 4 times — and you always own the final call. Every number replays back to exactly what was known and assumed at the time. When we get one wrong, we say so and re-convene the affected verdicts. That is what accountable means.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="The questions worth asking"
          description="Straight answers, including the ones that are less convenient for us."
        />

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-border-soft border-y border-border-soft">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left transition-colors hover:text-primary"
                  >
                    <span className="text-[16px] font-medium leading-snug text-ink">
                      {item.q}
                    </span>
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-bg-soft text-ink-secondary">
                      <Plus
                        className={cn(
                          'size-3.5 transition-transform duration-300 ease-out',
                          isOpen && 'rotate-45',
                        )}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-[14.5px] leading-relaxed text-ink-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
