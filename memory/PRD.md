# PawClean — PRD

## Original Problem Statement
PawClean is a French landing page for a silicone paw cleaning cup that removes
mud, sand and dirt from dog and cat paws in 10 seconds. Editorial-luxury vibe
(Apple × Aesop × outdoor gear). Static landing page, frontend-only. Three sizes
(S/M/L), three colours (vert forêt, bleu brume, terracotta). Free shipping in
France. Tagline: "La routine de la balade, simplifiée."

## User Decisions
- Static landing page (no backend)
- Realistic product mockups (built as SVG since user did not upload photos)
- Checkout via Stripe Payment Links (S 18€, M 21€, L 23€) — provided by user

## Architecture
- React 19 + Tailwind 3 + shadcn/ui + framer-motion
- No backend used. Stripe checkout is external (Payment Links)
- All product/copy data centralised in `/app/frontend/src/lib/pawclean-data.js`
- Page composition in `/app/frontend/src/pages/PawClean.jsx`

## Implemented (2025-12-11)
- Hero — floating 3-product carousel (SVG cups), editorial split headline,
  magnetic CTA, infinite trust-ticker, parallax + grain overlay
- How it works — 3 steps with clip-path reveal
- Product selector — colour swatches, luxury kraft-paper size tag with scaling
  dog silhouette, dynamic price, Stripe Payment Link redirect per size
- Before/After — split visual with terracotta VS badge
- Features — 4-card 2×2 grid
- Reviews — 6 customer cards, waterfall reveal, verified badges
- Delivery — forest green section with count-up stats
- FAQ — 6-item Radix accordion
- Footer — logo, legal links, payment icons
- Custom cursor (ring + dot), scroll progress bar, smooth anchor scroll

## Verified
- testing_agent_v3 iteration_1.json — 100% pass, 0 real bugs

## Backlog
- **P1** Replace SVG product mockups with real product photography once supplied
- **P1** Add real before/after photos (currently Unsplash placeholders)
- **P2** Add language switcher (FR / EN) for international expansion
- **P2** Add a sticky "buy" bar that appears on scroll past the product section
- **P2** Add an email-capture overlay tied to a 10% discount code (Klaviyo/Brevo)
- **P3** Add a video demo loop in the How-it-works section
