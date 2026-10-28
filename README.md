# The Jungle Pots

Website for LINGGA YOGA by The Jungle Pots, a forest retreat in Taro Village, Bali.
Built with Next.js (App Router, JavaScript), React and GSAP. Frontend only: bookings go
through WhatsApp or email.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## Structure

| Path | Contents |
|---|---|
| `app/` | Pages: home, stay, spa, dining, experiences, about, contact, 404 |
| `components/` | Header, footer, sections, framed photos, motion (GSAP) |
| `lib/` | Business details, spa treatments, menu, retreat schedule, image list |
| `public/images/` | Optimised photos (WebP, plus AVIF for hero images) |
| `scripts/prepare-images.py` | Regenerates `public/images` from the original photos |
| `docs/PHASE-2-REPORT.md` | Content decisions and open questions for the business |

## Images

Photos are original assets of The Jungle Pots, resized and compressed by
`scripts/prepare-images.py`. The script reads the originals from `docs/source-audit/`,
which is kept out of this repository because of its size (about 160 MB).

Images are served with a one-year browser cache. To change a photo, regenerate it under a
new file name so visitors receive the new version.
