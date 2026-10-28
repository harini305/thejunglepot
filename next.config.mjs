/** @type {import('next').NextConfig} */
const legacy = [
  ["/about-lingga-yoga-by-the-jungle-pots", "/about"],
  ["/daily-retreat-schedule", "/experiences#schedule"],
  ["/lingga-yoni", "/experiences#lingga-yoni"],
  ["/yoga-shala-and-yoga-place-yoga", "/experiences#yoga"],
  ["/holly-place", "/experiences#holly-place"],
  ["/balinese-arts-and-culture-attractions", "/experiences#culture"],
  ["/lingga-cooking-class", "/experiences#cooking"],
  ["/lingga-camping-and-outbound", "/experiences#camping"],
  ["/lingga-trekking", "/experiences#trekking"],
  ["/lingga-sauna-spa-and-jacuzzi", "/spa"],
  ["/spa-and-sauna", "/spa"],
  ["/spa-and-sauna/jungle-pots-jacuzzi-package", "/spa#jungle-pots-jacuzzi"],
  ["/spa-and-sauna/payment", "/spa"],
  ["/spa-and-sauna/:slug", "/spa#:slug"],
  ["/lingga-cottage", "/stay"],
  ["/lingga-pool", "/stay#pool"],
  ["/lingga-romantic-river-pool", "/stay#river-pool"],
  ["/playground", "/stay#playground"],
  ["/lingga-restaurant-and-bar/breakfast-start-fresh-start-here", "/dining#breakfast"],
  ["/lingga-restaurant-and-bar/starter---small-plates-big-flavors", "/dining#starter"],
  ["/lingga-restaurant-and-bar/salad---fresh-from-the-garden", "/dining#salad"],
  ["/lingga-restaurant-and-bar/main-course---nature-on-a-plate", "/dining#main-course"],
  ["/lingga-restaurant-and-bar/dessert---a-sweet-ending-naturally", "/dining#dessert"],
  ["/lingga-restaurant-and-bar/drink---cocktail", "/dining#cocktails"],
  ["/lingga-restaurant-and-bar", "/dining"],
  ["/contact-us", "/contact"],
  ["/frequently-asked-questions", "/contact#faq"],
  ["/terms-and-conditions", "/contact#good-to-know"],
  ["/page-not-found", "/"],
];

// Static photos and the PDF menu are cached by browsers for a year, so repeat visits
// make no further requests to the CDN for them. To change a photo, regenerate it under
// a new file name (scripts/prepare-images.py) so visitors receive the new version.
const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      { source: "/images/:path*", headers: longCache },
      { source: "/fnb-pricelist.pdf", headers: longCache },
    ];
  },
};

export default nextConfig;
