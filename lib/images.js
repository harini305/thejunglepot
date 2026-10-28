// Original photographs from the source audit, resized to WebP by scripts/prepare-images.py.
// w/h are the source proportions; widths are the generated files (/images/<name>-<width>.webp).
// Hero photos also have AVIF versions (/images/<name>-<width>.avif), served where supported.

const IMAGES = {
  "home-hero": { w: 3936, h: 2624, widths: [1280, 1920, 2560, 3200], avif: true },
  "home-intro": { w: 2000, h: 1333, widths: [800, 1400] },
  "about-lingga": { w: 2000, h: 1851, widths: [1280, 2000], avif: true },
  "about-tradition": { w: 2000, h: 1500, widths: [800, 1400] },
  "about-community": { w: 2000, h: 1125, widths: [800, 1400] },
  "about-offering": { w: 2000, h: 1500, widths: [800, 1400] },
  "stay-hero": { w: 2000, h: 1333, widths: [1280, 2000], avif: true },
  "cottage-bedroom": { w: 2000, h: 1333, widths: [800, 1400] },
  "cottage-bathroom": { w: 2000, h: 1333, widths: [800, 1400] },
  "cottage-towels": { w: 2000, h: 1333, widths: [800, 1400] },
  "cottage-reception": { w: 1200, h: 800, widths: [800, 1200] },
  pool: { w: 2000, h: 2614, widths: [800, 1400] },
  "river-pool": { w: 2000, h: 1500, widths: [800, 1400] },
  playground: { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-hero": { w: 2000, h: 1333, widths: [1280, 2000], avif: true },
  "spa-massage": { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-hotstone": { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-footbath": { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-herbal": { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-sauna": { w: 2000, h: 1333, widths: [800, 1400] },
  "spa-jacuzzi": { w: 2000, h: 1333, widths: [800, 1400] },
  "dining-hero": { w: 6000, h: 4000, widths: [1280, 1920, 2560, 3200], avif: true },
  "dining-room": { w: 2000, h: 1333, widths: [800, 1400] },
  "dining-floating": { w: 2000, h: 2359, widths: [800, 1400] },
  "dining-spread": { w: 2000, h: 2275, widths: [800, 1400] },
  "experiences-hero": { w: 2000, h: 1125, widths: [1280, 2000], avif: true },
  "exp-yoga": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-yoga-circle": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-lingga-yoni": { w: 2000, h: 1125, widths: [800, 1400] },
  "exp-holly-place": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-arts": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-cooking": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-trekking": { w: 2000, h: 1333, widths: [800, 1400] },
  "exp-camping": { w: 2000, h: 1506, widths: [800, 1400] },
  "home-spa": { w: 2000, h: 1333, widths: [800, 1400] },
  "home-yoga": { w: 2000, h: 1333, widths: [600, 1000] },
  "home-holly": { w: 2000, h: 1333, widths: [600, 1000] },
  "home-cooking": { w: 2000, h: 1333, widths: [600, 1000] },
  "home-trekking": { w: 2000, h: 1333, widths: [600, 1000] },
  "cottage-robe": { w: 2000, h: 1333, widths: [800, 1400] },
  contact: { w: 2000, h: 1125, widths: [1280, 2000], avif: true },
};

export function imageSet(name) {
  const img = IMAGES[name];
  if (!img) throw new Error(`Unknown image: ${name}`);
  const src = (w) => `/images/${name}-${w}.webp`;
  return {
    src: src(img.widths[Math.min(1, img.widths.length - 1)]),
    srcSet: img.widths.map((w) => `${src(w)} ${w}w`).join(", "),
    avifSrcSet: img.avif ? img.widths.map((w) => `/images/${name}-${w}.avif ${w}w`).join(", ") : null,
    width: img.w,
    height: img.h,
  };
}
