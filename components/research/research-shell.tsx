import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import type { ReactNode } from 'react';
import './research.css';

export function ResearchShell({ children }: { children: ReactNode }) {
  return <div className="research-site">
    <a className="research-skip" href="#research-main">Skip to research</a>
    <header className="journal-header"><div className="journal-width journal-nav">
      <Link href="/" aria-label="Trovio home"><Logo /></Link>
      <nav aria-label="Research navigation"><Link href="/research">Research journal</Link><Link href="/research#workflow">Our process</Link><Link className="journal-home" href="/"><ArrowLeft size={14} /> Back to Trovio</Link></nav>
    </div></header>
    <main id="research-main">{children}</main>
    <footer className="journal-footer journal-width"><span>Trovio / Research journal</span><span>Evidence first. Better decisions follow.</span><Link href="/research">All research <ArrowUpRight size={14} /></Link></footer>
  </div>;
}

export function ShelfDiagram() {
  return <svg viewBox="0 0 540 300" role="img" aria-labelledby="shelf-diagram-title" className="shelf-diagram">
    <title id="shelf-diagram-title">Concept diagram of a freestanding shelf with two counter-supported legs. Not a validated product specification.</title>
    <defs><pattern id="diagram-grid" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#d5d5cd" /></pattern></defs>
    <rect width="540" height="300" fill="url(#diagram-grid)" />
    <path d="M68 235H475" stroke="#bfc3bc" strokeWidth="1.5" />
    <path d="M130 235V165H410V235" fill="#e9ebe5" stroke="#9baba1" strokeWidth="1.5" />
    <path d="M148 184H392M148 217H392" stroke="#bdc6be" />
    {[170,235,305,370].map(x=><circle key={x} cx={x} cy="201" r="7" stroke="#a8b6ab" fill="none" />)}
    <path d="M104 112V234H122V112M419 112V234H437V112" fill="#c1a27e" stroke="#856e52" strokeWidth="1.5" />
    <path d="M98 94H444V112H98Z" fill="#dcc7a9" stroke="#856e52" strokeWidth="1.5" />
    <path d="M98 94L112 78H458L444 94M444 94L458 78V97L444 112" fill="#e8d7bd" stroke="#856e52" strokeWidth="1.5" />
    <path d="M126 55H416M126 50V60M416 50V60" stroke="#8b9389" />
    <text x="270" y="43" textAnchor="middle" fill="#697466" fontSize="11" fontFamily="sans-serif" letterSpacing="2">CHECK CLEAR WIDTH + VENT CLEARANCE</text>
    <path d="M78 132H51V225H78" stroke="#8b9389" fill="none" strokeDasharray="3 4" />
    <text x="270" y="272" textAnchor="middle" fill="#697466" fontSize="11" fontFamily="sans-serif" letterSpacing="1">TWO COUNTER SUPPORTS · NO CENTRE LEG</text>
  </svg>;
}
