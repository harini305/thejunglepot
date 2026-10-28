# Phase 2 report: The Jungle Pots frontend rebuild

Local Next.js (App Router, JavaScript) rebuild using GSAP + ScrollTrigger and plain CSS / CSS Modules. Frontend only: no backend, payments, booking engine, analytics, or deployment. Nothing was committed, pushed, or deployed.

Run it: `npm install`, then `npm run dev` (or `npm run build && npm start`).

## Pages

| Route | What it holds | Original pages folded in |
|---|---|---|
| `/` | Hero, introduction, cottage summary, 4 featured spa prices, experience highlights, dining preview | Home |
| `/stay` | Lingga Cottage, check-in facts, inclusions, pool, romantic river pool, playground | Lingga Cottage, Pool, Romantic River Pool, Playground |
| `/spa` | All 17 treatments in 4 groups with prices, duration and WhatsApp booking for each | Spa listing + 17 treatment detail pages |
| `/dining` | Full 90-item menu in Food/Drinks tabs, plus the PDF download | Restaurant page + 6 category pages |
| `/experiences` | Yoga, Lingga Yoni, Holly Place, arts and culture, cooking, trekking, camping, weekly schedule | 8 service pages + Daily Retreat Schedule |
| `/about` | Origin story, community, philosophy, mission | About |
| `/contact` | Direct contacts, WhatsApp/email enquiry composer, FAQ, guest guidelines | Contact, FAQ, Terms (non-payment clauses) |
| 404 | Real 404 status | Soft-404 page |

All 29 legacy URLs redirect permanently to the matching page or anchor (`next.config.mjs`). `?subject=` on the old contact URLs is kept and pre-selects the enquiry topic.

**Blog:** not built and not linked. The original returned HTTP 500 and has no recoverable posts. `/blog/` returns the 404 page until real articles exist.

## Content decisions pending owner confirmation

Nothing below is shown as settled fact on the site.

| Topic | What the site does now | Question for the owner |
|---|---|---|
| 10% online spa deposit, "secure online payment" | Not mentioned. Bookings are described as confirmed by the team over WhatsApp, Instagram, or email | Is online deposit payment planned? What should the payment and cancellation wording be? |
| Cottage deposit vs "payment on arrival" | Not mentioned | Do cottage bookings take a deposit? |
| Opening hours (8am–6pm site-wide vs 9.30am–6pm restaurant) | No hours shown anywhere | Correct venue, kitchen, and restaurant hours? |
| Sauna 20K / Jacuzzi 300K | Shown as "Price on request" | Confirm both prices |
| Infinity-edge pool | Claim removed | Confirm |
| River pool candlelight/petals/champagne | Claim removed | Confirm services and pricing |
| "Private sauna in select units" | Claim removed | Which units? |
| Glamping, "riverside rooms", farm-to-table, sunrise yoga | Not used | Confirm or drop |
| Vegan dishes (restaurant and cooking class) | Not claimed | Which items are vegetarian/vegan? |
| "7-metre" Lingga Yoni, "70% preserved forest" | Figures removed | Confirm |
| Cooking class: 1-hour slot vs "2–3 hours" | Shows the timetable slot only (Wed 11:00, Rp 450K) | Which duration is correct? |
| "Visit Kunang" | "Price on request" | Price and description? |
| Hot Tea 35K vs Ice Tea 15K | Shown as published | Confirm |
| Room types, rates, capacity | Not available | Provide if they exist |

## Spelling

- **Corrected in visible copy:** Brathe → Breathe, Acommodations → Accommodations, Furification → Purification, Village Tracking → Trekking, Ice Batch → Ice Bath, plus menu names (Quesadillas, Caesar, Hawaiian, Espresso, Caffè Latte, Pork Ribs, The Great Jungle Pot's).
- **Kept as published:** "Holly Place" (the owner needs to confirm "Holy" first, because the URL is affected), "Kuangen", and "Sasuka".

## Forms and analytics

- **Forms:** there is no form backend. The enquiry form builds a message and opens WhatsApp (`wa.me/6281353999958`) or the visitor's email app, and the page says so. The original `POST /contact-us/send` was never verified and is not used.
- **Analytics:** none installed. The two GA4 IDs, GTM, and the Meta Pixel are not included until the owner confirms which to keep and whether a consent banner is needed.

## Assets

- **Source:** 41 original photographs from `docs/source-audit/assets-original`, plus 3 dish cut-outs, the logo, favicons, and the original PDF menu. No stock, AI, or external images.
- **Processing:** resized to WebP in 2–3 widths by `scripts/prepare-images.py`. Total 9.6 MB, of which each visitor loads only the sizes their screen needs. Re-run the script after changing a selection.
- **Missing backgrounds:** `bg-1.jpg` and `bg-3.png` are missing from the server and were not replaced. Brand colours are used instead.
- **Food photos:** used as general food imagery without dish names, because the audit found they don't match their item names.
