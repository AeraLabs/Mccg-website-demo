# MCCG Website Demo — v2 (visual redo)

A full visual redo of the rejected v1. Light, airy, Apple-like: white /
very light gray background, system sans throughout, large tight headlines,
rounded glossy cards, and a frosted-glass sticky header. No cream, no serif
headlines, no vintage homestead styling, no dark SaaS gradients, no neon.

## How to preview

Open `index.html` in a browser. No build step, no backend, no dependencies.
The repo already supplies the logo at `assets/Logo.png` (capital L); the
header references exactly that path and hides the image (leaving the text
brand) if the file is missing. No logo file is included in this folder.

## Sections (in order)

1. Hero — "Helping you get on the road with confidence"
2. Quick contact form (demo only)
3. Services cards (placeholders)
4. Who we help (About MCCG)
5. How to get started (3 steps)
6. Why choose MCCG
7. Final contact
8. FAQ placeholder (so the FAQs nav item has a destination)

Nav: Home / Services / About MCCG / FAQs / Contact. "Request a
Consultation" is the primary action throughout.

## Placeholders — nothing invented

- Phone: "Phone number to be added by MCCG"
- Services: "Service list coming from MCCG" / "Service — coming from MCCG"
  / "Details to be added by MCCG."
- Contact details: "Contact details to be added by MCCG."
- Credentials: "Credentials to be added by MCCG."
- Testimonials: "Testimonials coming soon." (no quotes shown)
- FAQs: "FAQs coming from MCCG."

No phone number, service list, testimonial, credential, or FAQ was invented.
Nothing was copied from Express Compliance — structure only (clear hero,
easy contact, organised service slots, trust placeholders).

## Demo form

The quick contact form has no backend and makes no network calls. Submitting
validates the required fields first (name, phone, email, "How can we help?")
and then shows only an on-page notice: "Demo form — no message is sent
when you submit this form." Nothing is sent or stored.

## Design notes

- Type: system stack (Inter / -apple-system / SF-style), 17px body,
  headlines at letter-spacing about -0.05em, 11px+ type floor respected
  (smallest text is 13px eyebrow / 14px notes).
- Surfaces: opaque white cards, one hairline border, soft realistic shadow,
  subtle gloss highlight on card tops and button top edges.
- Motion: cubic-bezier(0.2,0,0,1), 160–200ms state changes, scroll reveals,
  light hero parallax, 3-step road line that draws itself on scroll.
  `prefers-reduced-motion` disables parallax, reveals, and transitions.
- Accessibility: semantic landmarks, skip link, focus-visible outlines,
  scroll-margin so anchors clear the sticky header, AA contrast body text
  (dark navy/slate on white and light gray).
- Idaho accent: a clean, light ridge line and highway line at the foot of
  the hero only — subtle, not an illustration takeover.
- Mobile-first: pill CTAs at 48–52px tap height, no horizontal overflow
  (verified by layout: full-width grids collapse to one column, header nav
  collapses to a toggle menu).

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling
- `app.js` — nav toggle, scroll reveals, light parallax, steps road draw,
  demo-form handling (passes `node --check`)
- `assets/ridge.svg` — light, simplified ridge line
- `assets/highway.svg` — light, simplified highway line

## What changed vs v1

| v1 | v2 |
|---|---|
| Cream / paper vintage background | White / very light gray background |
| Fraunces serif headlines + DM Sans | System sans throughout, no serif |
| Dark navy section blocks, heavy vintage illustration | White cards on light gray, scenery reduced to a light ridge/highway strip |
| Heavy parallax ridge + highway takeover | Lighter parallax (4%/8% drift), scenery confined to hero foot |
| Lowercase `assets/logo.png` reference | Exactly `assets/Logo.png`, onerror hides it |
| Same brief sections and placeholders | Same sections, same placeholders, rebuilt visuals |
