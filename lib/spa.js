// 17 treatments from docs/source-audit/content/spa-treatments.json.
// Prices are IDR thousands per person. Descriptions are lightly edited for grammar
// without changing their meaning. Sauna and jacuzzi prices are withheld until the
// owner confirms them (08 · A6): the audited "20K" sauna price looks like a typo.

export const SPA_GROUPS = [
  {
    id: "massages",
    title: "Massages",
    items: [
      { slug: "jungle-pots-balinese-massage", name: "Balinese Massage", mins: 60, price: "260K", text: "Traditional massage to reduce muscle tension and increase blood flow through the body. Aids recovery after tiring physical activity." },
      { slug: "jungle-pots-foot-and-shoulder-massage", name: "Foot and Shoulder Massage", mins: 60, price: "250K", text: "Relaxes the muscles and relieves soreness." },
      { slug: "jungle-pots-back-and-shoulder-massage", name: "Back and Shoulder Massage", mins: 60, price: "250K", text: "Supports smooth blood circulation, balances the body’s energy flow and relaxes muscle tension." },
      { slug: "jungle-pots-slimming-body-massage", name: "Slimming Body Massage", mins: 60, price: "260K", text: "A faster, deep-pressure massage technique." },
      { slug: "jungle-pots-hot-stone", name: "Hot Stone", mins: 90, price: "390K", text: "Massage with warmed stones for deep relaxation; can help relieve pain and stiffness." },
      { slug: "jungle-pots-aromatherapy-massage", name: "Aromatherapy Massage", mins: 90, price: "450K", text: "Alternates gentle and firmer pressure using a particular blend of essential oils." },
      { slug: "deeptissue-massage", name: "Deep Tissue Massage", mins: 90, price: "390K", text: "Uses elbow techniques to relax stiff muscles after activity." },
    ],
  },
  {
    id: "packages",
    title: "Packages",
    items: [
      { slug: "jungle-pots-package", name: "Jungle Pots Package", mins: 120, price: "550K", text: "Foot bath, Balinese massage, herbal body wrap, face and head massage." },
      { slug: "jungle-pots-bamboo-package", name: "Bamboo Package", mins: 120, price: "600K", text: "Foot bath, Balinese massage, sauna, body scrub, body mask, face and head massage." },
      { slug: "jungle-pots-nira-package", name: "Nira Package", mins: 120, price: "400K", text: "Foot bath, Balinese massage, face and head massage, herbal pouch, sauna with body mask." },
      { slug: "jungle-pots-slimming-package", name: "Slimming Package", mins: 120, price: "350K", text: "Foot bath, slimming massage, sauna, scrub, body mask, face and head massage." },
    ],
  },
  {
    id: "facial-and-nails",
    title: "Facial & nails",
    items: [
      { slug: "jungle-pots-natural-facial", name: "Natural Facial", mins: 60, price: "320K", text: "Cleanses dirt, pollutants and dead skin with natural products." },
      { slug: "jungle-pots-facial", name: "Facial", mins: 60, price: "280K", text: "Cleanser, scrub, massage, mask and moisturiser." },
      { slug: "jungle-pots-pedicure", name: "Pedicure", mins: 60, price: "250K" },
      { slug: "jungle-pots-manicure", name: "Manicure", mins: 60, price: "230K" },
    ],
  },
  {
    id: "sauna-and-jacuzzi",
    title: "Sauna & jacuzzi",
    items: [
      { slug: "jungle-pots-sauna-package", name: "Sauna", mins: 30, price: null, text: "Sauna only." },
      { slug: "jungle-pots-jacuzzi", name: "Jacuzzi", mins: 30, price: null, text: "Jacuzzi only." },
    ],
  },
];

export const SPA_COUNT = SPA_GROUPS.reduce((n, g) => n + g.items.length, 0);
