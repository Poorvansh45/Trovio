'use client';

import { useState } from 'react';
import { Check, Copy, RotateCcw, Search } from 'lucide-react';
import { defaultEconomics, economics, keywords } from '@/lib/research';

const money = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

export function ShareResearch() {
  const [state, setState] = useState('Copy link');
  return <button className="journal-button secondary" onClick={async () => {
    if (['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
      setState('Local preview — deploy before sharing');
      return;
    }
    try { await navigator.clipboard.writeText(window.location.href); setState('Link copied'); }
    catch { setState('Copy the address from your browser'); }
  }}>{state === 'Link copied' ? <Check size={15} /> : <Copy size={15} />}<span aria-live="polite">{state}</span></button>;
}

export function PriceCalculator() {
  const [price, setPrice] = useState(54.99);
  const [costs, setCosts] = useState(defaultEconomics);
  const result = economics(price, costs);
  const passes = result.preMargin >= 40 && result.margin >= 30;
  const fields = [
    ['landed', 'Landed cost / unit ($)', 'Product, packaging, freight, duty and inbound placement.'],
    ['fba', 'FBA fulfillment / unit ($)', 'Replace the dossier estimate with the current calculator total.'],
    ['reserve', 'Storage + returns / unit ($)', 'Illustrative allowance; replace with expected costs.'],
    ['overhead', 'Other cost / unit ($)', 'Allocate plan, inspection, content and other overhead.'],
    ['referral', 'Referral fee (%)', '15% Home and Kitchen reference; verify final category.'],
    ['tacos', 'Ads / total revenue (%)', 'TACoS, not ACoS. Try 10%, 15% and 25%.'],
  ] as const;
  return <div className="calculator">
    <div className="calculator-inputs">
      <div className="section-mini"><span>EDIT THE ASSUMPTIONS</span><button aria-label="Reset calculator assumptions" className="icon-button" onClick={() => {setCosts(defaultEconomics); setPrice(54.99);}}><RotateCcw size={16} /></button></div>
      <label htmlFor="sell-price" className="price-label">Selling price <strong>{money(price)}</strong></label>
      <input id="sell-price" type="range" min="29.99" max="79.99" step="5" value={price} onChange={e=>setPrice(Number(e.target.value))} />
      <div className="preset-prices">{[44.99,49.99,54.99,59.99].map(p=><button key={p} aria-pressed={price===p} onClick={()=>setPrice(p)}>{money(p)}</button>)}</div>
      <div className="cost-input-grid">{fields.map(([key,label,hint])=><label key={key}>{label}<input type="number" min="0" max={key==='tacos'||key==='referral'?100:1000} step={key==='tacos'||key==='referral'?'1':'.01'} value={costs[key]} onChange={e=>{ const n=Number(e.target.value); setCosts({...costs,[key]:Math.max(0,Math.min(key==='tacos'||key==='referral'?100:1000,Number.isFinite(n)?n:0))}); }} /><small>{hint}</small></label>)}</div>
    </div>
    <div className="calculator-result" aria-live="polite">
      <span className="eyebrow">MODELLED PROFIT / UNIT</span><div className="profit-number">{money(result.contribution)}</div><p>{result.margin.toFixed(1)}% after ads and entered costs</p>
      <div className="calc-lines"><div><span>Before ads</span><strong>{money(result.preAd)} · {result.preMargin.toFixed(1)}%</strong></div><div><span>Ad spend / unit</span><strong>−{money(price*costs.tacos/100)}</strong></div><div><span>Other cost / unit</span><strong>−{money(costs.overhead)}</strong></div><div><span>Break-even TACoS*</span><strong>{result.breakEvenTacos.toFixed(1)}%</strong></div><div><span>Max landed cost for both gates</span><strong>{money(result.maxLanded)}</strong></div></div>
      <div className={`calc-verdict ${passes?'pass':''}`}><strong>{passes?'Model clears both margin gates':'Model does not clear both gates'}</strong><p>Target: ≥40% before ads and ≥30% after ads and entered costs. {passes?'Demand, compatibility and supplier validation still required.':'Reduce costs, validate a higher price, or park this version.'}</p></div>
      <small>*If negative before advertising, no ad budget breaks even. This is a scenario, not a sales forecast or guaranteed net profit. Tax and any costs not entered are excluded. Changes stay in this page session.</small>
    </div>
  </div>;
}

export function KeywordTable() {
  const [filter,setFilter] = useState('All');
  const [query,setQuery] = useState('');
  const rows=keywords.filter(k=>(filter==='All'||k.group===filter)&&k.phrase.includes(query.toLowerCase().trim()));
  return <div className="keyword-panel"><div className="keyword-controls"><div className="filter-tabs" aria-label="Keyword group">{['All','Test first','Core'].map(f=><button aria-pressed={filter===f} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div><label className="keyword-search"><Search size={16}/><input aria-label="Search keywords" placeholder="Find a keyword…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
    <div className="table-scroll"><table><caption className="sr-only">Historical keyword metrics reported in Dossier Rev. C page 9. Collection date and raw export unavailable.</caption><thead><tr><th>Search phrase</th><th>Searches / mo*</th><th>CPR*</th><th>Suggested use</th></tr></thead><tbody>{rows.map(k=><tr key={k.phrase}><td><strong>{k.phrase}</strong><div className="keyword-bar" style={{width:`${Math.max(8,k.volume/7165*100)}%`}}/></td><td>{k.volume.toLocaleString('en-US')}</td><td>{k.cpr}</td><td>{k.use}</td></tr>)}</tbody></table>{rows.length===0&&<p className="empty-state">No matching keywords. Try another phrase or select All.</p>}</div>
    <p className="table-note">*Reported historical figures, not a fresh Helium 10 export. Search volumes overlap and must not be added as unique buyers. CPR is a tool estimate, not a ranking guarantee. <a href="#sources">Source S1, p. 9 ↗</a></p>
  </div>;
}
