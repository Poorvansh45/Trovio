import {
  Users,
  FileCheck2,
  ShieldAlert,
  MessageSquareText,
  LineChart,
  Ban,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stagger, StaggerItem } from '@/components/ui/fade-in';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    icon: Users,
    title: 'An AI committee, not a chatbot',
    description:
      'Seven specialist agents — market, customer, economics, risk, and a dedicated devil’s advocate — debate every candidate before you see a verdict.',
    className: 'lg:col-span-2',
  },
  {
    icon: Ban,
    title: 'Instant disqualifiers',
    description:
      'Nine hard rules kill unviable products in seconds: price band, margin floor, patent risk, brand-dominated markets, and more.',
    className: '',
  },
  {
    icon: FileCheck2,
    title: 'Evidence-backed verdicts',
    description:
      'Every number in every report is a clickable citation back to the exact data row it came from. No black boxes, ever.',
    className: '',
  },
  {
    icon: MessageSquareText,
    title: 'Review mining at scale',
    description:
      'We read thousands of reviews to surface what customers actually complain about — and what you should never change.',
    className: 'lg:col-span-2',
  },
  {
    icon: LineChart,
    title: 'Full financial modeling',
    description:
      'Landed cost, ad spend, break-even, and margin — modeled line by line, with every assumption clearly labeled.',
    className: '',
  },
  {
    icon: ShieldAlert,
    title: 'Ten-point risk scoring',
    description:
      'Patent exposure, compliance, tariffs, seasonality, and copycat risk — scored and justified before you commit capital.',
    className: '',
  },
];

export function Features() {
  return (
    <section id="product" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Trovio"
          title="Research that ends in a decision, not a data dump"
          description="Every other tool hands you charts and leaves you to guess. Trovio hands you a YES or NO — with the reasoning shown."
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" step={0.08}>
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title} className={feature.className}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
                <div
                  className={cn(
                    'absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100',
                  )}
                />
                <span className="relative flex size-11 items-center justify-center rounded-xl bg-primary-soft">
                  <feature.icon className="size-5 text-primary" strokeWidth={1.75} />
                </span>
                <h3 className="relative mt-5 text-[17px] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-[14.5px] leading-relaxed text-ink-secondary">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
