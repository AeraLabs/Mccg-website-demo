# MCCG — The Road Ahead, Made Clearer

A responsive editorial website concept for **Motor Carrier Compliance Group LLC (MCCG)**. This redesign replaces the original v4 light template with a distinctive, road-inspired visual system while keeping all unconfirmed business details explicitly marked as placeholders.

## Design direction

- Deep ink and evergreen palette with mint accents, cream-white surfaces, and editorial trucking photography.
- A sculpted, split hero; prominent typographic contrast; intentional white space; restrained motion.
- A sticky frosted navigation, working mobile drawer, active section links, and scroll progress indicator.
- Curated service placeholders, dedicated audience panel, three-step process, honest values, and a final contact CTA.
- A readable contact form with focused states, accessible validation, and clear demo-only disclosure.
- Desktop, tablet, and phone layouts; keyboard-accessible interaction and reduced-motion support.

## Preview

Open **index.html** in any modern browser, or serve this folder using any static file host. The site has no build step, package manager, runtime dependency, API keys, database, or analytics script.

### GitHub Pages / mobile caching

Production HTML deliberately references **styles.mccg-v6.css** and **app.mccg-v6.js**. These are copied from styles.css and app.js, respectively, with distinct filenames so cached earlier versions cannot break the new markup. **When changing the markup and CSS/JS together, create fresh versioned asset filenames and update the HTML references in the same commit.** Keep the canonical styles.css and app.js files synchronized. This prevents the kind of partial update where the new HTML renders with the prior design's CSS on GitHub Pages.

Files:
- index.html — semantic website structure and content.
- styles.css — complete responsive design system, typography, section layouts and animations.
- app.js — accessible menu, scroll progress, section reveals, active navigation, animated process path, and demo form validation.
- assets/Logo.png — client's logo (existing repository asset).
- assets/highway.svg and assets/ridge.svg — older illustrative assets retained for possible future reuse.

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
- Viewport-sensitive scroll reveals and a route indicator, both reduced or disabled with prefers-reduced-motion.
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
