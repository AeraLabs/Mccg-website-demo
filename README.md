# MCCG — Motor Carrier Compliance Group Homepage Demo

A responsive editorial website concept for **Motor Carrier Compliance Group LLC (MCCG)**. This redesign replaces the original v4 light template with a distinctive, road-inspired visual system while keeping all unconfirmed business details explicitly marked as placeholders.

## Design direction

- Deep ink and evergreen palette with mint accents, cream-white surfaces, and editorial trucking photography.
- A sculpted, split hero with the client-requested headline; prominent typographic contrast; intentional white space; restrained motion.
- A sticky frosted navigation with the supplied logo as the sole header wordmark, a subtle looping vector semi-truck on its own thin roadway above the logo, a working mobile drawer, active section links, and a scroll progress indicator.
- Curated, clearly labeled example service topics, dedicated audience panel, three-step process, honest values, and consultation CTAs.
- A readable contact form with focused states, accessible validation, and clear demo-only disclosure.
- Desktop, tablet, and phone layouts; keyboard-accessible interaction and reduced-motion support.

## Preview

Open **index.html** in any modern browser, or serve this folder using any static file host. The site has no build step, package manager, runtime dependency, API keys, database, or analytics script.

### GitHub Pages / mobile caching

Production HTML deliberately references **styles.mccg-v8.css** and **app.mccg-v7.js**. These are copied from styles.css and app.js, respectively, with distinct filenames so cached earlier versions cannot break the new markup. **When changing the markup and CSS/JS together, create fresh versioned asset filenames and update the HTML references in the same commit.** Keep the canonical styles.css and app.js files synchronized. This prevents the kind of partial update where the new HTML renders with the prior design's CSS on GitHub Pages.

Files:
- index.html — semantic website structure and content.
- styles.css — complete responsive design system, typography, section layouts and animations.
- app.js — accessible menu, scroll progress, section reveals, active navigation, animated process path, and demo form validation.
- assets/Logo.png — client's logo (existing repository asset).
- assets/highway.svg and assets/ridge.svg — older illustrative assets retained for possible future reuse.



## v8: header truck and meaningful affordances

A compact inline-SVG semi-truck runs left-to-right across a dedicated 31–36px road strip **above** the sticky logo/navigation row and repeats smoothly. The implementation is just HTML/CSS (no GIF, canvas, external asset, libraries or JavaScript). Wheels animate while driving. The strip reserves its own height so the truck cannot obscure the client's logo or navigation on phones. On reduced-motion systems, the truck is parked instead.

Only interactive call-to-action buttons and the circular back-to-top control use arrow glyphs. Service cards, audience items, process numbers, editorial callouts and other static content no longer suggest link behavior; service-card hover lift and zoom were removed. Basic text links remain identifiable by underline, not icon clutter. Main consultation CTAs remain in accordance with the client brief.

The styled page uses styles.mccg-v8.css to avoid browsers mixing old and new assets. The JavaScript remains app.mccg-v7.js because no functional changes were needed.

## Client brief and copy approval

October 2026 client brief confirmed the business name **Motor Carrier Compliance Group LLC (MCCG)** and the desired headline **“Helping you get on the road with confidence.”** The reference expresscompliance.org is used only for organizational inspiration (services, intake, steps, FAQ); do not copy its descriptions, contact information, numbers, service catalog, credentials, or reviews.

The client requested a clean, professional, approachable, mobile-responsive transportation website with the existing MCCG logo in the header, straightforward navigation (Home / Services / About MCCG / FAQs / Contact), simple intake, clear audience identification, three-step getting-started section, and consistent **Request a Consultation** CTAs.

The v7 copy pass removed redundant header lettering and repeated road/direction/conversation slogans. The v8 pass further trims repeated text and removes decorative arrows from all non-action content, including static cards, lists and illustrations. The four service cards are *example inquiry topics*, not confirmed MCCG offerings. Final business-specific content and real contact details must still be supplied and approved by MCCG before production.

## Content that still requires MCCG approval

**Do not publish this demo as a finished company website without reviewing its contents.**

- Actual service names, descriptions, and scope. The four service cards are **design placeholders**, not advertised products or services.
- Phone number, email/contact details, and approved location information.
- MCCG's exact credentials, licensing, affiliations, endorsements, and verified testimonials, if any.
- Official business FAQs and approved answers.
- Final copy and imagery approval.

No statistics, endorsements, customer stories, credentials, guarantees, or regulatory claims were invented for this demo.

## IMPORTANT: the contact form does NOT send messages

The form is deliberately nonfunctional as a communication channel. Submission:
1. Checks the name, phone, email, and message fields.
2. Displays a validation error on invalid inputs.
3. Displays a local **demo only** notification on valid inputs.

**No data is transmitted or saved.** There is no backend, email provider, local storage, or network call in app.js. Connect an approved backend or form service and update the disclosures only when MCCG authorizes it; add spam mitigation, privacy policy, and consent handling as appropriate before launch.

## Accessibility and motion

- Semantic landmarks and labels, focus-visible styles, skip link, and accessible navigation state.
- 48px+ interactive navigation and CTA targets wherever practical.
- Responsive layout without horizontal overflow in normal viewport sizes.
- Viewport-sensitive scroll reveals, a route indicator, and the animated semi-truck; animation is disabled and the truck remains parked with prefers-reduced-motion.
- Fallback visible content when JavaScript is disabled.
- Images include descriptive alt text; decorative elements are hidden from accessibility APIs.

Accessibility and color contrast should be validated in a real browser on the production deployment, not assumed solely from CSS values.

## Image sourcing

Seven editorial photos are requested from Pexels's remote CDN (winding roads, asphalt markings, trucking details, driver hands). They are not bundled or self-hosted. Their availability and cropping depend on the external image host. Verify final rights, availability, and photography choices before production.

## Deployment readiness

The page can run on any static host (including GitHub Pages, Cloudflare Pages, or Vercel). Before launch:
- Have MCCG approve the copy and replace all placeholders.
- Connect a real contact workflow (the current demo form sends nothing).
- Confirm image and logo usage, mobile performance, accessibility, and external loading.
- Add privacy/legal content appropriate to the actual lead capture configuration.

The website remains intentionally static: lightweight code first, genuine business details before claims, polished but not over-animated.
