# MCCG Website Demo — v3 (image + color layering)

Built from v2, not a rebuild. Same Apple-clean base (system sans only,
white / very light gray, rounded glossy cards, frosted sticky header,
navy #16365c, green #2f7d5b used sparingly), plus free stock photos via
remote URLs and purposeful color banding so the page no longer reads as
one flat white/gray run.

## How to preview

Open `index.html` in a browser. No build step, no backend, no dependencies.
The repo already supplies the logo at `assets/Logo.png` (capital L); the
header references exactly that path and hides the image (leaving the text
brand) if the file is missing. No logo file is included in this folder,
and no binary image was added — every photo below loads from its remote
stock URL. The v2 Idaho ridge/highway SVGs are still in `assets/` for
reuse; the hero photo now carries the mountain visual, so they are not
rendered on this version.

## Sections (in order) and their color bands

1. Hero — full-bleed trucking photo under a dark navy gradient overlay,
   white headline/intro on top. (Band: photo + navy overlay.)
2. Quick contact form (demo only) — white form card on `#f5f7fa`.
3. Services cards (placeholders) — white band, each card topped with a
   trucking/highway photo.
4. Who we help (About MCCG) — soft green-tinted band `#eaf3ee`, with a
   driver photo beside the audience list.
5. How to get started (3 steps) — deep navy band `#16365c`: white
   headings, white step cards, light-green road dot `#8fd0ae`.
6. Why choose MCCG — white band, wide sunset-truck photo banner above
   the three trust cards.
7. Final contact — navy CTA card (`#16365c`, white text, white button)
   on `#f5f7fa`.
8. FAQ placeholder (so the FAQs nav item has a destination) — white.

Nav: Home / Services / About MCCG / FAQs / Contact. "Request a
Consultation" is the primary action throughout.

## Contrast (WCAG AA, checked by token, not by eye)

- White on navy `#16365c` and navy-dark `#0f2745`: ~12–13:1.
- Navy `#16365c` and body text `#1c2733` on white: ~12:1 / ~14:1.
- Muted `#52616f` on white and on the green tint `#eaf3ee`: ~5.9:1 / ~5.6:1.
- Light text `#e8eef4` / `#d7e0ea` on the navy hero overlay and navy band:
  ~11:1 / ~9:1. Green eyebrow on navy uses light green `#8fd0ae` (~9:1);
  standard green `#2f7d5b` is used only on light grounds (~4.9:1 on white).
- No text sits directly on a photo without the navy overlay (hero) or a
  solid card behind it.

## Placeholders — nothing invented

- Phone: "Phone number to be added by MCCG"
- Services: "Service list coming from MCCG" / "Service — coming from MCCG"
  / "Details to be added by MCCG."
- Contact details: "Contact details to be added by MCCG."
- Credentials: "Credentials to be added by MCCG."
- Testimonials: "Testimonials coming soon." (no quotes shown)
- FAQs: "FAQs coming from MCCG."

No phone number, service list, testimonial, credential, or FAQ was
invented. No wording, service, phone number, or review was copied from
the reference site used for structure — it was a structure/functionality
reference only, and service photos suggest trucking/compliance generally
without claiming any specific service.

## Demo form

The quick contact form has no backend and makes no network calls.
Submitting validates the required fields first (name, phone, email,
"How can we help?") and then shows only an on-page notice: "Demo form —
no message is sent when you submit this form." Nothing is sent or stored.

## Photos — all free-to-use stock, remote URLs only

Every URL below was verified before use with `curl -I`: HTTP 200 and
`image/jpeg`. All are Pexels free stock photos (Pexels license: free to
use, no attribution required; credited here anyway). No watermarks, no
expiring thumbnails, no binary downloads.

| Placement | Photo | URL |
|---|---|---|
| Hero (full-bleed) | Semi-truck on a scenic highway with mountains | https://images.pexels.com/photos/34902065/pexels-photo-34902065/free-photo-of-semi-truck-on-scenic-highway-with-mountains.jpeg?auto=compress&cs=tinysrgb&w=1600 |
| Service card 1 | Cargo truck on a highway under a blue sky | https://images.pexels.com/photos/39000647/pexels-photo-39000647/free-photo-of-cargo-truck-on-highway-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=800 |
| Service card 2 | Truck on an expressway on a clear day | https://images.pexels.com/photos/15595843/pexels-photo-15595843/free-photo-of-a-truck-on-an-expressway.jpeg?auto=compress&cs=tinysrgb&w=800 |
| Service card 3 | Trucks and cars traveling on a highway | https://images.pexels.com/photos/16325212/pexels-photo-16325212/free-photo-of-trucks-and-cars-on-a-highway.jpeg?auto=compress&cs=tinysrgb&w=800 |
| Service card 4 | Truck on a long open highway through countryside | https://images.pexels.com/photos/13663664/pexels-photo-13663664.jpeg?auto=compress&cs=tinysrgb&w=800 |
| Who we help | Smiling truck driver waving from his truck window | https://images.pexels.com/photos/17377416/pexels-photo-17377416/free-photo-of-happy-bearded-man-in-truck.jpeg?auto=compress&cs=tinysrgb&w=1000 |
| Why choose MCCG | Trucks parked at sunset in an industrial lot | https://images.pexels.com/photos/35097902/pexels-photo-35097902/free-photo-of-trucks-parked-at-sunset-in-industrial-lot.jpeg?auto=compress&cs=tinysrgb&w=1200 |

Alt text for each photo is in `index.html` on the matching `<img>`.
Hero loads eagerly (fetchpriority high); all others use
`loading="lazy"`. Every photo has width/height attributes and a fixed
CSS aspect ratio with `object-fit: cover`, so no layout shift and no
distortion on mobile.

## Motion

Photos fade/scale gently as their section scroll-reveals, hero photo
parallax stays light (6% drift, capped to the top of the page), and
`prefers-reduced-motion` disables parallax, reveals, and photo motion.

## Design notes (carried from v2)

- Type: system stack (Inter / -apple-system / SF-style), 17px body,
  headlines at letter-spacing about -0.05em, 13px+ type floor respected.
- Surfaces: opaque white cards, one hairline border, soft realistic
  shadow, subtle gloss highlight on card tops and button top edges.
- Accessibility: semantic landmarks, skip link, focus-visible outlines,
  scroll-margin so anchors clear the sticky header, AA contrast (above).
- Mobile-first: pill CTAs at 48–52px tap height, grids collapse to one
  column, header nav collapses to a toggle menu, photos crop with
  `object-fit: cover` and never overflow.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling, including color bands and photo treatment
- `app.js` — nav toggle, scroll reveals, light hero parallax, steps road
  draw, demo-form handling (passes `node --check`)
- `assets/ridge.svg` — light ridge line, retained from v2 (not rendered)
- `assets/highway.svg` — light highway line, retained from v2 (not rendered)

## What changed vs v2

| v2 | v3 |
|---|---|
| White hero, headline on white, SVG ridge/highway strip at hero foot | Full-bleed trucking photo hero with navy gradient overlay, white text |
| White / `#f5f7fa` throughout, no section banding | Alternating bands: photo+navy hero, `#f5f7fa`, white, green tint `#eaf3ee`, deep navy `#16365c` steps band, white, navy contact card on `#f5f7fa`, navy footer |
| No photos | 7 verified Pexels photos (hero, 4 service cards, who-we-help, why-choose) via remote URLs only |
| Light ridge/highway parallax | Light hero-photo parallax (6%); ridge/highway SVGs retained but not rendered |
| Same brief sections and placeholders | Same sections, same order, same placeholders, no invented copy |
