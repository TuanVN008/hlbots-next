# HLBots – Multilingual Website (Next.js 15)


## Quickstart
1. `pnpm i` (or `npm i` / `yarn`)
2. `pnpm dev` and open http://localhost:3000
3. The middleware redirects `/` → `/en` by default. Switch languages via the header dropdown.


## Content edits
- All text lives in `/messages/*.json`.
- Add or remove sections by editing page blocks under `components/blocks` and wiring them in `app/[locale]/(marketing)/*`.


## Production
- `pnpm build && pnpm start`
- Deploy to Vercel or any Node host.


## Extend
- Hook real product pages from WooCommerce or a custom checkout.
- Integrate NowPayments callbacks → KeyAuth license issue.
- Add blog/docs in `app/[locale]/docs/*` with MDX if needed.