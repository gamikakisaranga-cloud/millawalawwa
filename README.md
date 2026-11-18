# Milla Walawwa Retreat by Maara — Website

Next.js 14 (App Router) + TypeScript + Tailwind + GSAP + Framer Motion + Lenis.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## Pages (matches the proposal's Platform Structure)

| Route | Purpose |
|---|---|
| `/` | Home — hero, story, four-room preview, lounge break, packages teaser, CTA |
| `/rooms` | All four rooms with descriptions, features, rates |
| `/rooms/[slug]` | Individual room detail + gallery + "reserve this room" |
| `/reservation` | Reservation & checkout UI — dates, room, guest details, online/pay-at-hotel |
| `/packages` | Travel packages (Polonnaruwa trail, Cultural Triangle circuit, Minneriya safari) |
| `/login` | Guest login UI |

## Design tokens

- **Colors:** ivory `#F5EFE2`, terracotta `#B24E2B`, teak `#3A2416`, ink `#1B1611`, ochre `#C0872E`, palm `#4A5B3C` — pulled directly from the property's whitewashed walls, tiled roof, and teak interiors rather than a generic "luxury hotel" palette.
- **Type:** Bodoni Moda (display) + Inter (body), loaded via Google Fonts `<link>` in `app/layout.tsx` (not `next/font`, since this build environment couldn't reach `fonts.googleapis.com` at build time — swap to `next/font/google` once you're building on a machine with normal internet access, it's a drop-in change).
- **Motion:** GSAP hero entrance + parallax (`components/HomeHero.tsx`), Lenis smooth scroll (`components/SmoothScroll.tsx`), Framer Motion scroll-reveals everywhere else (`components/Reveal.tsx`). All motion respects `prefers-reduced-motion`.

## What's real vs. placeholder

- **Photos:** all 8 of your uploaded photos are used, mapped across the hero, story section, room cards/detail pages, lounge break, and login page. They're modest resolution (biggest is 1000×667), so they're kept fairly small on screen and treated with a grain overlay to hide upscaling softness — swap in higher-res shots when you have them, especially for the home hero and room detail galleries.
- **Room names, features, rates:** placeholder copy I wrote to match what's visible in the photos (canopy bed, ochre bathroom, tiled roofline, garden-facing room). Replace with your real four room names/rates before launch.
- **Travel packages:** placeholder itineraries (Polonnaruwa, Cultural Triangle, Minneriya) — swap in your actual curated packages and pricing.
- **Reservation & Login:** fully designed and interactive UI, but **not wired to a payment gateway or database** — submitting shows a mock confirmation. Matches Phase 3/4 in the proposal (core dev + payment integration) as the next build step, which needs your PHP/MySQL or Node backend plus PayHere (or chosen gateway) credentials.

## Next steps toward the full proposal scope

1. Swap placeholder room/package content for the real thing.
2. Backend: rooms/rates/availability database, reservation table, admin panel (Phase 3 in your proposal).
3. Payment gateway integration (Phase 4) — PayHere or similar, plus the pay-at-hotel workflow already reflected in the UI.
4. Point `next/font/google` at the actual fonts once building outside this sandbox, and optimize images (`next.config.js` currently has `images.unoptimized: true` as a safe default for static export — remove that if deploying to a Node host with Next's image optimizer).
