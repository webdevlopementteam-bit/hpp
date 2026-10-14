export const dynamic = "force-static";

const BASE_URL = "https://www.aircooledoilcooler.com";

const corePages = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/about-us", priority: 0.8, changeFrequency: "daily" },
  { path: "/products", priority: 0.8, changeFrequency: "daily" },
  { path: "/global-presence", priority: 0.7, changeFrequency: "daily" },
  { path: "/contact-us", priority: 0.7, changeFrequency: "daily" },
];

const productPages = [
  "/hydraulic-power-pack",
  "/hydraulic-cylinder-manufacturer",
  "/pneumatic-cylinder",
  "/air-cooled-oil-cooler-manufacturer",
  "/water-cooled-oil-cooler-manufacturer",
  "/worm-gear-screw-jack",
  "/industrial-hydraulic-jack-manufacturer",
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
  "/air-cooled-oil-cooler-manufacturer-north-america",
  "/hydraulic-cylinders-manufacturer-united-states",
  "/custom-hydraulic-cylinder-manufacturer-germany",
  "/hydraulic-power-unit-supplier-sweden",
  "/hydraulic-oil-cooler-manufacturer-denmark",
  "/custom-oil-cooling-system-supplier-denmark",
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
      changeFrequency: "daily",
      priority: 0.7,
    })),
    ...regionalLandingPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.6,
    })),
  ];
}
