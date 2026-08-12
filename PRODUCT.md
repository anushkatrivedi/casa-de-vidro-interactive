# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 / pnpm — chosen by the user, matching their other projects.

## Users

Primary: prospective owners / private clients evaluating Casa de Vidro remotely, and the brokers or agents pitching it. Scene: a decision-maker on a laptop or phone, trying to feel the house and its light from a screen, with the job of deciding whether to book a private viewing. Secondary: design/architecture admirers who reach the page through the pitch.

## Product Purpose

An interactive single-page showcase that pitches Casa de Vidro ("Glass House") — presenting the home's real photography and renders beautifully so a remote viewer falls for it and takes the next step (a viewing / contact). Success means the visitor scrolls through, lingers on the imagery, and acts on the contact CTA.

## Positioning

The page is the house: photography and renders posed at full scale, letting light and the terracotta exterior carry the pitch rather than marketing language. The house itself is the product; the page's job is to stay out of its way while making it unmissable.

## Operating Context

Single scrollable page, desktop and mobile. Reads as an architectural showcase/pitch deck. Copy is being supplied by the user; until then this record treats factual claims (price, dimensions, location, year, amenities, number of rooms) as UNDECIDED and must not be invented.

## Capabilities and Constraints

- Static single page: hero, story, gallery, specs, spaces, location/setting, contact.
- Interactive presentation: scroll reveals, parallax, image carousel, full-screen lightbox. Motion respects `prefers-reduced-motion`.
- Assets on hand: renders of the exterior (2 wide, 5000px) and interiors (portrait + landscape), plus 5 real-site photos. Files live in `exterior/`, `interior space/`, `living space/`, `pool/`, `real world/`.
- UNDECIDED: property details (specs, price, year, location), exact copy, and whether the "real world" photos are the actual site. Do not fabricate.
- This model cannot view images, so captions/labels are drafted from filenames and must be verified by the user.

## Brand Commitments

- Name: Casa de Vidro.
- The exterior's primary colour is BRIGHT TERRACOTTA — this is a pinned, binding constraint.
- Visual direction pinned by the user: "Glass & light, mid-century modern" (elegant, airy, architectural), with the bright terracotta carrying the identity.
- Craft bar: the NEO MIRAI page (impeccable.style/neo-mirai) — same level of finish and ambition.

## Evidence on Hand

- `exterior/21 copy.jpg`, `exterior/22 copy.jpg` — 5000px-wide exterior renders (hero candidates).
- `interior space/*.jpg` — Den, Family Living, Living Room x3, Master Bedroom x2, Roof Top Terrace, Top Floor master bath.
- `living space/Living Room_View_1.jpg` (and Views 2–3 moved there by the user).
- `pool/Living Room_View_1.jpg`.
- `real world/*.jpeg` — 5 photos (likely the actual site/build).
- Absent: verified copy, specs, price, and captions. Nothing below is claimed as fact.

## Product Principles

- Let the architecture lead: imagery at scale, text as quiet editorial annotation.
- The terracotta exterior is the identity; glass and light are the atmosphere.
- One decisive interaction per idea; no decorative clutter.
- Pacing like a gallery: big moments, quiet rests, anchored ending.
- Never invent factual claims about the property.

## Accessibility & Inclusion

Standard web accessibility: keyboard-operable carousel/lightbox, aria labels, focus-visible states, reduced-motion support, alt text on every image (verified by the user since I cannot view them).
