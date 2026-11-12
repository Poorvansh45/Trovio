import { Check, Minus } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stagger, StaggerItem } from '@/components/ui/fade-in';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Plans mirror `03-business/monetization-and-pricing.md` §3 exactly. Tiers differ in
 * quantity (credits, candidates, seats) and never in gate integrity — that rule is
 * load-bearing, so the caption below the cards is spec copy, not marketing filler.
 */
const PLANS = [
  {
    name: 'Scout',
    price: 79,
    tagline: 'Exploring seriously',
    features: [
      { label: 'Unlimited imports & screening', included: true },
      { label: '10 active candidates', included: true },
      { label: '1 verdict credit / month', included: true },
      { label: 'Committee chat', included: true },
      { label: 'Handoff pack & memo export', included: false },
    ],
    featured: false,
  },
  {
    name: 'Committee',
    price: 149,
    tagline: 'Launching this year',
    features: [
      { label: 'Unlimited imports & screening', included: true },
      { label: 'Unlimited candidates', included: true },
      { label: '4 verdict credits / month', included: true },
      { label: 'Committee chat', included: true },
      { label: 'Handoff pack & memo export', included: true },
    ],
    featured: true,
  },
  {
    name: 'Operator',
    price: 299,
    tagline: 'Portfolio builders',
    features: [
      { label: 'Unlimited imports & screening', included: true },
      { label: 'Unlimited candidates', included: true },
      { label: '12 verdict credits / month', included: true },
      { label: 'Priority-depth committee chat', included: true },
      { label: 'Handoff pack & memo export', included: true },
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-bg-soft py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Price the decision, not the seat-time"
          description="One avoided bad launch pays for years of subscription. You're not buying data access — you're buying a verdict you can act on."
        />

        <Stagger
          className="mt-16 grid grid-cols-1 items-start gap-6 md:grid-cols-3"
          step={0.1}
        >
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-3xl bg-white p-7',
                  plan.featured
                    ? 'border-2 border-primary shadow-card md:-mt-4 md:pb-10 md:pt-10'
                    : 'border border-border',
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11.5px] font-semibold uppercase tracking-wide text-white">
                    Most launches
                  </span>
                ) : null}

                <h3 className="text-[15px] font-semibold text-ink">{plan.name}</h3>
                <p className="mt-1 text-[13.5px] text-ink-tertiary">{plan.tagline}</p>

                <p className="mt-5 flex items-baseline gap-1">
                  <span className="text-[2.5rem] font-semibold tracking-tight text-ink">
                    ${plan.price}
                  </span>
                  <span className="text-[14px] text-ink-tertiary">/mo</span>
                </p>

                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="md"
                  className="mt-6 w-full"
                >
                  Start free trial
                </Button>

                <ul className="mt-7 space-y-3 border-t border-border-soft pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          'mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full',
                          feature.included
                            ? 'bg-emerald-soft text-emerald'
                            : 'bg-bg-soft text-ink-tertiary',
                        )}
                      >
                        {feature.included ? (
                          <Check className="size-3" strokeWidth={3} />
                        ) : (
                          <Minus className="size-3" strokeWidth={3} />
                        )}
                      </span>
                      <span
                        className={cn(
                          'text-[14px] leading-snug',
                          feature.included ? 'text-ink-secondary' : 'text-ink-tertiary',
                        )}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-[14px] font-medium text-ink">
              Every tier gets the same gates. Tiers change quantity, never integrity.
            </p>
            <p className="max-w-xl text-[13.5px] leading-relaxed text-ink-tertiary">
              14-day trial includes 1 full verdict credit — no free tier, no credit card to
              start. Extra credits are ~$29 each, cheaper in packs. Annual billing gets 2
              months free.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
