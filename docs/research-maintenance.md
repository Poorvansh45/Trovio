# Research journal

The journal is frontend-only. It adds no API routes, database, account connection, credential storage or upload service. Nothing has been deployed.

## Routes

- `/research`: journal index and the six-step, material-neutral research workflow.
- `/research/gas-stove-shelf`: initial feasibility study with calculator, keyword filters and source disclosures.
- The home page and navbar link to the journal.

## Updating the research

1. Update the dated evidence, source ledger and historical keyword records in `lib/research.ts`.
2. Update the editorial conclusions in `app/research/gas-stove-shelf/page.tsx` only after reviewing that evidence.
3. Keep reported PDF claims, current observations and model assumptions distinct. Record marketplace, collection date, ASIN/variation, product type and effective price.
4. Replace missing observations with an explicit unknown, never a zero or a generated market metric.
5. Add the next article as another route and add a real card to the journal index. No backend is needed for this workflow.

Calculator assumptions reset on refresh. `economics()` is the shared calculation used by the static comparison and interactive tool. The comparison table intentionally keeps the baseline assumptions; the calculator is editable. Profit excludes tax and any costs the researcher has not entered. Use TACoS for ad cost across all units, not ACoS on ad-attributed revenue. A numerical margin pass is not product approval.

## First study status

Preliminary validation only. Three provided PDFs were readable in full; the illustrated 50-page manual was only partly extractable, and its download failed. Raw Helium 10 exports were not available. ToolzBuy account access succeeded, but research navigation did not load and the Cerebro attempt redirected to the dashboard. No current Helium sales/keyword data is represented as verified.

The current dossier contains conflicting dimensions and unsupported absolute product claims. These are documented in the article. Its $54.99 recommendation is a hypothesis; the expanded illustrative model does not clear the research margin gates. The latest user instruction makes discovery material-neutral, overriding the old wood/wheat-straw-only preference. Do not auto-recommend acacia or present hypothetical alternatives as validated products.

## Verification and deployment

Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build`. The existing layout uses Google-hosted Inter and Instrument Serif through `next/font/google`; production builds require access to Google Fonts. The build in this restricted environment could not fetch those fonts. TypeScript, lint and arithmetic checks passed.

Use `http://localhost:3000` for local preview. The existing development server blocked some assets when accessed via `127.0.0.1`; localhost supports the client interactions. Local link copying deliberately explains that deployment is needed before teammate sharing.

Vercel publication remains a separate user-requested step. Review the source links before public deployment: native document links require each viewer's own access and do not share the source files automatically. No credentials belong in this repository, its static output or the article.
