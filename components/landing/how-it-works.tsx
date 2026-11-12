import { Upload, Cpu, FileText, Rocket } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stagger, StaggerItem } from '@/components/ui/fade-in';

const STEPS = [
  {
    icon: Upload,
    step: '01',
    title: 'Bring your research',
    description:
      'Upload your Helium 10 exports or start from a keyword. Trovio treats your data as evidence, not a guess.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'The committee convenes',
    description:
      'Specialist agents analyze the market, mine reviews, model the finances, and score every risk — in parallel.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Get your verdict',
    description:
      'A sealed memo: score, confidence, the case against, and one clear next action. Every figure cited.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch with confidence',
    description:
      'Export your differentiation spec, keyword stack, and financial model — ready to hand to your supplier.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From messy data to a confident decision"
          description="Four steps. No spreadsheets, no guesswork — just a clear answer you can act on."
        />

        <Stagger className="relative mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" step={0.1}>
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {STEPS.map((step) => (
            <StaggerItem key={step.step} className="relative flex flex-col items-start">
              <div className="relative flex size-[76px] items-center justify-center rounded-2xl border border-border bg-white shadow-soft">
                <step.icon className="size-7 text-primary" strokeWidth={1.6} />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-5 text-[16.5px] font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-secondary">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
