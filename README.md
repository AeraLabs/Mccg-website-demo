# MCCG Website Demo — v4 (editorial photo rework + split hero)

Built from v3, photos only plus the hero layout. Same Apple-clean base
(system sans only, white / `#f5f7fa`, green tint `#eaf3ee`, navy
`#16365c` bands, rounded glossy cards, frosted sticky header), same
brief sections in the same order, same placeholders. What changed: all
7 v3 photos were replaced with editorial/detail shots (aerial roads,
road-marking texture, truck details, hands on the wheel) instead of
generic wide truck-on-highway stock, and the hero is now a split layout
— headline on clean white beside the photo in a rounded card — so the
photo is fully visible with no dark overlay and never covers the text.

## How to preview

Open `index.html` in a browser. No build step, no backend, no dependencies.
The repo already supplies the logo at `assets/Logo.png` (capital L); the
header references exactly that path and hides the image (leaving the text
brand) if the file is missing. No logo file is included in this folder,
and no binary image was added — every photo below loads from its remote
stock URL. The v2 Idaho ridge/highway SVGs are still in `assets/` for
reuse; they are not rendered on this version.

## Sections (in order) and their color bands

1. Hero — SPLIT layout: headline, intro, and CTAs on clean white;
   aerial winding-road photo beside them in a large rounded glossy card
   (24px radius, soft shadow, subtle parallax), fully visible with no
   overlay. On mobile ≤760px the photo stacks BELOW the copy.
   (Band: white.)
2. Quick contact form (demo only) — white form card on `#f5f7fa`.
3. Services cards (placeholders) — white band, each card topped with an
   editorial detail photo (road markings, truck grille, side mirror,
   heavy tire tread).
4. Who we help (About MCCG) — soft green-tinted band `#eaf3ee`, with a
   close-up hands-on-the-wheel photo beside the audience list.
5. How to get started (3 steps) — deep navy band `#16365c`: white
   headings, white step cards, light-green road dot `#8fd0ae`.
6. Why choose MCCG — white band, wide aerial arid-mountain road photo
   banner above the three trust cards.
7. Final contact — navy CTA card (`#16365c`, white text, white button)
   on `#f5f7fa`.
8. FAQ placeholder (so the FAQs nav item has a destination) — white.

Nav: Home / Services / About MCCG / FAQs / Contact. "Request a
Consultation" is the primary action throughout.

## Contrast (WCAG AA, checked by token, not by eye)

- White on navy `#16365c` and navy-dark `#0f2745`: ~12–13:1.
- Navy `#16365c` and body text `#1c2733` on white: ~12:1 / ~14:1.
- Muted `#52616f` on white and on the green tint `#eaf3ee`: ~5.9:1 / ~5.6:1.
- Light text `#e8eef4` / `#d7e0ea` on the navy band and navy contact
  card: ~11:1 / ~9:1. Green eyebrow on navy uses light green `#8fd0ae`
  (~9:1); standard green `#2f7d5b` is used only on light grounds
  (~4.9:1 on white).
- Hero headline is dark navy `#16365c` on white (~12:1); no text sits on
  a photo anywhere on the page.

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

Every URL below was verified before use: HTTP 200, `image/jpeg`, and
the served file opened as a JPEG at the stated pixel size (checked with
a download to a scratch folder, not shipped in this build). All are
Pexels free stock photos (Pexels license: free to use, no attribution
required; credited here anyway). No watermarks, no expiring thumbnails,
no binary downloads. No v3 photo was kept: all 7 were replaced, because
the brief was to stop reading as generic truck-on-highway stock.

| Placement | Photo | Photographer / source | Served size | URL |
|---|---|---|---|---|
| Hero (split card) | Aerial winding highway through green hills | Josué Rodríguez, Pexels | 1800×1350 | https://images.pexels.com/photos/17666152/pexels-photo-17666152/free-photo-of-aerial-view-of-a-road.jpeg?auto=compress&cs=tinysrgb&w=1800 |
| Service card 1 | Close-up of vivid yellow road markings on textured asphalt | Andre Moura, Pexels | 1200×1600 | https://images.pexels.com/photos/3618594/pexels-photo-3618594.jpeg?auto=compress&cs=tinysrgb&w=1200 |
| Service card 2 | Close-up of a weathered vintage Ford truck grille | Alwin Johnson, Pexels | 1200×800 | https://images.pexels.com/photos/33983944/pexels-photo-33983944/free-photo-of-close-up-of-vintage-ford-truck-grill-in-rustic-setting.jpeg?auto=compress&cs=tinysrgb&w=1200 |
| Service card 3 | Close-up of a yellow truck's side mirror and door | cottonbro studio, Pexels | 1200×1800 | https://images.pexels.com/photos/7541991/pexels-photo-7541991.jpeg?auto=compress&cs=tinysrgb&w=1200 |
| Service card 4 | Close-up of a heavy equipment tire tread on a dirt road | Omer Al Faruq, Pexels | 1200×800 | https://images.pexels.com/photos/12860520/pexels-photo-12860520.jpeg?auto=compress&cs=tinysrgb&w=1200 |
| Who we help | Close-up of a driver's hands on the steering wheel | Erik Mclean, Pexels | 1200×1800 | https://images.pexels.com/photos/4800308/pexels-photo-4800308.jpeg?auto=compress&cs=tinysrgb&w=1200 |
| Why choose MCCG | Aerial winding road through arid brown mountains | K, Pexels | 1600×899 | https://images.pexels.com/photos/9229444/pexels-photo-9229444.jpeg?auto=compress&cs=tinysrgb&w=1600 |

Why these read less generic than v3: the hero is a drone editorial
(winding road as a line through hills, not a truck beauty shot); the
service cards are all details/textures (paint on asphalt, chrome and
weathered metal, tread) that feel like magazine close-ups; the
who-we-help shot is faceless hands on the wheel rather than a posed
smiling-driver stock portrait; the banner is a high-altitude arid
mountain road (Pexels itself tags it Idaho-adjacent) rather than trucks
parked in a lot at sunset.

Alt text for each photo is in `index.html` on the matching `<img>`.
Hero loads eagerly (fetchpriority high); all others use
`loading="lazy"`. Every photo has width/height attributes matching its
served size and a fixed CSS aspect ratio with `object-fit: cover`, so
no layout shift and no distortion on mobile. Portrait sources in
landscape slots (cards 1 and 3, who-we-help) are center-cropped by
`object-fit: cover`; all three subjects are centered textures/details,
so the crop keeps the subject.

## Motion

Photos fade/scale gently as their section scroll-reveals, hero card
photo parallax stays light (2% drift, capped to the top of the page,
inside the card's overflow-hidden frame with an 8% baseline scale so no
edge ever shows), and `prefers-reduced-motion` disables parallax,
reveals, and photo motion.

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

## What changed vs v3

| v3 | v4 |
|---|---|
| Full-bleed hero photo under a navy gradient overlay (0.88→0.38), white text on top | Split hero: headline/intro/CTAs on clean white, photo in a 24px rounded glossy card beside them, no overlay; photo stacks below the copy on mobile ≤760px |
| 7 generic wide truck-on-highway / parked-truck / smiling-driver stock photos | 7 editorial/detail photos: aerial winding roads, asphalt-marking texture, truck grille/mirror/tire details, faceless hands on the wheel — all re-verified (HTTP 200, JPEG, pixel size) |
| Hero parallax 6% drift | Hero card parallax 2% drift inside an overflow-hidden card, 8% baseline scale so no edge shows |
| Same brief sections and placeholders | Same sections, same order, same placeholders, no invented copy |
