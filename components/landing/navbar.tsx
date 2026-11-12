'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <Container>
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300',
            scrolled
              ? 'border border-border/80 bg-white/80 shadow-soft backdrop-blur-xl'
              : 'border border-transparent bg-transparent',
          )}
        >
          <a href="#top" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-secondary transition-colors hover:bg-bg-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="primary" size="sm">
              Start free trial
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-white p-3 shadow-soft md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink-secondary hover:bg-bg-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border-soft pt-3">
              <Button variant="secondary" size="md">
                Sign in
              </Button>
              <Button variant="primary" size="md">
                Start free trial
              </Button>
            </div>
          </motion.div>
        ) : null}
      </Container>
    </motion.header>
  );
}
