import { ShieldCheck, ScanSearch, Scale, EyeOff } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/ui/fade-in';

/**
 * Honest positioning bar. Trovio hasn't launched publicly yet, so this
 * intentionally avoids fabricated usage stats — it states what's true today:
 * the methodology and the mechanism, not invented traction numbers.
 */
const POINTS = [
  { icon: Scale, label: 'Built on a 9-gate methodology, not guesswork' },
  { icon: ScanSearch, label: 'Every verdict traces back to real evidence' },
  { icon: ShieldCheck, label: 'An AI committee that argues with you' },
  { icon: EyeOff, label: 'Your research is never shared, ever' },
];

export function TrustBar() {
  return (
    <section className="border-y border-border-soft bg-bg-soft py-10">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-6">
            {POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(11,11,15,0.06)]">
                  <Icon className="size-4 text-primary" strokeWidth={1.75} />
                </span>
                <span className="text-[13.5px] font-medium leading-tight text-ink-secondary">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
