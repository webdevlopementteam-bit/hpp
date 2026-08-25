export const dynamic = "force-static";

const BASE_URL = "https://www.aircooledoilcooler.com";

const corePages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/global-presence", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact-us", priority: 0.7, changeFrequency: "monthly" },
];

const productPages = [
  "/hydraulic-power-pack",
  "/hydraulic-cylinder",
  "/pneumatic-cylinder",
  "/air-cooled-oil-cooler",
  "/water-cooled-oil-cooler",
  "/worm-gear-screw-jack",
  "/industrial-hydraulic-jack",
  "/hydro-tester-machine",
  "/hydraulic-press",
  "/hydraulic-paper-mill-system",
  "/hydraulic-rotary-unions",
];

const regionalLandingPages = [
  "/iso-certified-air-cooled-oil-cooler-manufacturer-in-germany",
  "/custom-water-cooled-hydraulic-oil-cooler-supplier-germany",
  "/custom-mechanical-screw-jack-supplier-germany",
  "/custom-hydraulic-cylinder-manufacturer-in-sweden",
  "/custom-hydraulic-power-pack-manufacturer-in-sweden",
  "/industrial-hydraulic-equipment-manufacturer-denmark",
  "/industrial-air-cooled-oil-cooler-exporters-in-denmark",
  "/air-cooled-oil-cooler-manufacturer-in-oman",
  "/hydraulic-cylinders-manufacturer-in-oman",
  "/hydraulic-power-pack-suppliers-in-oman",
  "/water-cooled-oil-coolers-manufacturer-in-oman",
  "/worm-gear-screw-jack-manufacturer-in-oman",
  "/hydraulic-jack-suppliers-in-oman",
  "/hydraulic-cylinder-supplier-germany",
];

export default function sitemap() {
  const now = new Date();

  return [
    ...corePages.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...productPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...regionalLandingPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
