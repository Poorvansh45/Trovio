export const researchDate = '12 November 2026';

export const workflow = [
  { title: 'Find the real market', detail: 'Start with the customer problem. Compare 20–50 ideas across materials; use Cerebro to find the main buying keyword.' },
  { title: 'Prove demand', detail: 'Check 12 months of search trends and relevant page-one sales. Separate bridge shelves from magnetic shelves; remove duplicate variations.' },
  { title: 'Check the entry gap', detail: 'Read the first 10 organic results. Look for sales among newer, low-review sellers and at least 3 independent sellers at the target price.' },
  { title: 'Fix a real complaint', detail: 'Read dated 1–3 star reviews and a 5-star sample. Count unique reviews, state the denominator, and propose two practical improvements.' },
  { title: 'Price the whole product', detail: 'Get 3 supplier quotes, packed dimensions, landed cost, current Amazon fees, returns and ad assumptions. Test downside economics against your budget.' },
  { title: 'Decide, then document', detail: 'Advance only when the gates pass. Otherwise park or reject with a reason. Keep 2–3 independently validated backups and publish the evidence.' },
];

// Historical figures transcribed from Master Product Dossier Rev. C, page 9.
// Raw Helium 10 exports and their collection dates were not supplied.
export const keywords = [
  { phrase: 'over the stove shelf', volume: 7165, cpr: 39, group: 'Core', use: 'Main market / title; broader competition' },
  { phrase: 'stove top shelf', volume: 2915, cpr: 38, group: 'Core', use: 'Secondary phrase; mixed product types' },
  { phrase: 'stove shelf for back of stove', volume: 2314, cpr: 29, group: 'Core', use: 'Check whether results match a bridge shelf' },
  { phrase: 'over the stove shelf wood', volume: 1061, cpr: 25, group: 'Test first', use: 'Only for a genuinely wooden version' },
  { phrase: 'oven shelf for top of stove', volume: 896, cpr: 12, group: 'Test first', use: 'Verify relevant search results before bidding' },
  { phrase: 'over the stove rack', volume: 809, cpr: 11, group: 'Test first', use: 'Relevant intent; refresh volume and competition' },
  { phrase: 'spice rack over stove', volume: 607, cpr: 10, group: 'Test first', use: 'Specific use case; test exact match' },
  { phrase: 'back of stove shelf', volume: 591, cpr: 9, group: 'Test first', use: 'Strong placement intent; check fit' },
];

export const sources = [
  { id: 'S1', title: 'Master Product Dossier — Revision C', kind: 'Provided PDF · 14 pages', href: 'https://chatgpt.com/library?file_id=libfile_a2de4927ccdc8191bc17d75f0b9c38c8&account_id=personal', note: 'Pages 1–2: reported market/review figures. Pages 5–8: proposed specification and estimated costs. Page 9: historical keyword figures. No raw exports or collection dates supplied. Access requires the owner’s account.' },
  { id: 'S2', title: 'HomeBound Basic Rules', kind: 'Provided PDF · 6 pages', href: 'https://chatgpt.com/library?file_id=libfile_846998d5edb0819192bdc74792771001&account_id=personal', note: 'Basis for demand, competition and margin gates. The user’s new material-neutral direction overrides the earlier material preference. Access requires the owner’s account.' },
  { id: 'S3', title: 'Interactive Research Protocol', kind: 'Provided PDF · 4 pages', href: 'https://chatgpt.com/library?file_id=libfile_eb25724cab048191a896f6627c3d6584&account_id=personal', note: 'Evidence packets: keywords, page-one competitors, reviews, supplier quotes and budget. Used as a checklist, with the user authorizing research and implementation together.' },
  { id: 'S4', title: 'Product Research by AI', kind: 'Provided PDF · 50 pages · partial readability', href: 'https://chatgpt.com/library?file_id=libfile_9ad49230f8e48191936a11700cb0b0e1&account_id=personal', note: 'Readable text supports the market-first process. Many pages are image-based; a full visual read could not be completed. No unseen content is treated as evidence.' },
  { id: 'S5', title: 'StoveShelf official product page', kind: 'Public source · checked 12 Nov 2026', href: 'https://stoveshelf.com/products/stoveshelf-magnetic-shelf-for-kitchen-stove', note: '$49.99 displayed for a magnetic shelf; page also advertises a 15% code and shows sold-out text. This is a direct-store asking price, not proof of Amazon sales or bridge-shelf demand.' },
  { id: 'S6', title: 'SpaceAid bamboo magnetic shelf', kind: 'Public source · checked 12 Nov 2026', href: 'https://spaceaidhome.com/products/bamboo-shelf-for-over-stove', note: '$23.99 displayed. Magnetic mounting; an adjacent substitute, not a freestanding bridge comparator. Sitewide discounts may change effective price.' },
  { id: 'S7', title: 'Amazon US selling fees', kind: 'Official source · checked 12 Nov 2026', href: 'https://sell.amazon.com/pricing/', note: 'Home and Kitchen referral fee is 15%, subject to category assignment. Fulfillment costs require real packed dimensions and shipping weight; use the current calculator.' },
  { id: 'S8', title: 'SpaceAid bridge shelf — ASIN B0DMNLQM85', kind: 'Competitor lead · verification pending', href: 'https://www.amazon.com/dp/B0DMNLQM85', note: 'Candidate for the direct-comparison set. Current offer, reviews and monthly sales were not reliably retrieved; excluded from verified price and sales conclusions.' },
  { id: 'S9', title: 'SpaceAid freestanding bamboo shelf — Target', kind: 'Retail listing · checked 12 Nov 2026', href: 'https://www.target.com/p/-/A-1011268713', note: 'Displayed offer $39.99, out of stock, sold and shipped by SpaceAid. Freestanding bamboo; listed inner width 31.5 inches. The page shows 3/5 from 4 ratings. This is not Amazon sales evidence, and shipping specifications conflict with the stated item weight.' },
  { id: 'S10', title: 'VEVOR freestanding bamboo shelf — Target', kind: 'Retail listing · checked 12 Nov 2026', href: 'https://www.target.com/p/-/A-1007779482', note: 'Displayed offer $34.99, in stock, sold by Vevor Store Inc. Bamboo bridge shelf with 6 hooks; 4.5/5 from 2 ratings. A 24 March 2026 review reports insufficient fit for the reviewer’s stove despite acceptable quality. Small anecdotal sample, not a defect-rate estimate.' },
];

export const defaultEconomics = { landed: 13.74, fba: 11, reserve: 2, referral: 15, tacos: 15, overhead: 1 };
export function economics(price: number, costs = defaultEconomics) {
  const preAd = price * (1 - costs.referral / 100) - costs.landed - costs.fba - costs.reserve;
  const contribution = preAd - price * costs.tacos / 100 - costs.overhead;
  return { preAd, contribution, preMargin: preAd / price * 100, margin: contribution / price * 100,
    breakEvenTacos: Math.max(0, (preAd - costs.overhead) / price * 100),
    maxLanded: Math.min(price * (1 - costs.referral / 100 - .4) - costs.fba - costs.reserve,
      price * (1 - costs.referral / 100 - costs.tacos / 100 - .3) - costs.fba - costs.reserve - costs.overhead) };
}
