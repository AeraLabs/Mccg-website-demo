# Motor Carrier Compliance Group LLC — Homepage Demo

Local-only demo. **Not live, not pushed to GitHub, not sent to anyone.**

## Files

- `index.html` — homepage, sections in brief order (see below)
- `styles.css` — warm paper-cream, navy, sparing green, asphalt dark bands; paper/asphalt grain via CSS/SVG noise only
- `app.js` — mobile nav, scroll reveals, parallax hero, 3-step road draw, demo-form notice. No network calls.
- `assets/ridge.svg` — Sawtooth ridge silhouette (two layers: far + near)
- `assets/highway.svg` — highway curve with dashed centre line
- `assets/logo.png` — **NOT included in this folder.** Referenced in the header as `assets/logo.png` with alt text "Motor Carrier Compliance Group LLC". The coordinator uploads the real logo file separately. No fake or redrawn logo was created, and the logo was not embedded or recoloured.

## Homepage sections, in order

1. Hero (`#home`) — headline "Helping you get on the road with confidence", the brief's intro paragraph verbatim, Request a Consultation button, layered ridge + highway parallax art. No stock images.
2. Quick contact form (`#quick-contact`) — name, phone, email, "How can we help?"
3. Services cards (`#services`)
4. Who we help (`#about`, labelled "About MCCG" in the nav) — motor carrier owners, owner-operators, fleet managers, people starting a trucking company
5. How to get started (`#get-started`) — 3 steps: contact MCCG; discuss your needs; receive guidance on next steps
6. Why choose MCCG (`#why-choose`)
7. Final contact (`#contact`) — consultation button, phone placeholder, contact-info placeholder

An additional FAQ placeholder (`#faqs`) sits **after** those seven sections, so the seven brief sections keep their exact order and the FAQs nav item still has a destination. Its content is a placeholder only.

Nav: Home / Services / About MCCG / FAQs / Contact. "Request a Consultation" appears in the top bar, header nav, hero, services, who-we-help, get-started, final contact, and footer.

## Placeholders — nothing invented

Exact placeholder wording used throughout (no digits, no quotes, no claims):

- Phone, everywhere a phone would go: **"Phone number to be added by MCCG"**
- Services: **"Service list coming from MCCG"** and on each card **"Service category — coming from MCCG"** with **"Details to be added by MCCG."**
- Testimonials: **"Testimonials coming soon."** — no quotes are shown.
- Credentials: **"Credentials to be added by MCCG."**
- FAQs: **"FAQs coming from MCCG."**
- Other contact details: **"Contact details to be added by MCCG."**

No specific service names, no phone numbers, no testimonials, no credentials, and no coverage or turnaround claims appear anywhere in these files.

## Demo form — does not send

The quick contact form has no backend. Its HTML carries a comment stating it is a demo form with no backend, the page shows "Demo form — no message is sent when you submit this form." beside the button, and submitting it only reveals an on-page demo notice. Nothing is emailed or stored.

## Design notes

- Benchmark feel: grounded and clean, not futuristic or businessy-AI. Big readable type: Fraunces serif headlines, DM Sans body. Warm paper-cream base, deep navy from the logo family, compliance green used sparingly, charcoal asphalt for dark bands.
- Textures: subtle paper grain on light sections, faint asphalt grain on dark bands, dashed highway line as a recurring motif.
- Idaho: layered parallax hero (ridge behind, highway in front) moving at different scroll speeds via `requestAnimationFrame` and `transform` only. Parallax is disabled below 640px width and when `prefers-reduced-motion` is set; scroll reveals and the road-line draw also respect reduced motion.
- Motion: IntersectionObserver reveals, cards lift slightly on hover/focus, the 3-step road line draws with scroll progress.
- Accessibility / mobile: mobile-first, skip link, semantic landmarks, aria labels, large tap targets (buttons at least 52px tall).
- External resources: Google Fonts only. All other art is inline SVG or the two SVG files above. No stock images.

## To preview locally

Open `index.html` in a browser. If `assets/logo.png` is not yet supplied, the header image hides itself (`onerror`) and the text brand shows cleanly instead — that fallback is intentional until the real logo file lands.
