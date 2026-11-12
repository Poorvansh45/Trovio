import { Logo } from '@/components/ui/logo';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-soft py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo />
        <p className="text-[13px] text-ink-tertiary">
          &copy; {new Date().getFullYear()} Trovio. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
