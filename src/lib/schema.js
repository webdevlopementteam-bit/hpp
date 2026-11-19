// Shared JSON-LD building blocks (Organization, WebSite, WebPage, Breadcrumb, Product).

export const SITE = "https://www.aircooledoilcooler.com";
export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;

const offer = (name, description) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "HPP" },
  },
});

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: "Hydraulic & Pneumatic Products (HPP)",
  alternateName: ["HPP", "HPP Group"],
  url: `${SITE}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/logo.webp`,
  },
  image: `${SITE}/factoryimage.webp`,
  description:
    "Manufacturer of air cooled oil coolers, water cooled oil coolers, hydraulic power packs, hydraulic cylinders and pneumatic cylinders in Delhi, India.",
  telephone: "+91-9871456545",
  email: "sales2@hppgroup.in",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. L-132, Sector-5, DSIIDC Industrial Area, Bawana",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110039",
    addressCountry: "IN",
  },
  // TODO: add "geo" (latitude/longitude), "hasMap" (Google Maps link) and
  // "sameAs" (IndiaMART, TradeIndia, LinkedIn, Google Business Profile URLs)
  // once the real values are available — placeholders are not valid schema.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9871456545",
      email: "sales2@hppgroup.in",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Sonipat" },
  ],
  knowsAbout: [
    "Air cooled oil cooler",
    "Water cooled oil cooler",
    "Hydraulic oil cooler",
    "Hydraulic power pack",
    "Hydraulic cylinder",
    "Pneumatic cylinder",
    "Industrial heat exchanger",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hydraulic and Pneumatic Products",
    itemListElement: [
      offer(
        "Air Cooled Oil Cooler",
        "Fan-driven aluminium core oil cooler for hydraulic power packs and machines. 20 to 200 LPM oil flow, 150 to 356 mm fan."
      ),
      offer(
        "Water Cooled Oil Cooler",
        "Shell and tube oil cooler for high heat loads and continuous duty."
      ),
      offer(
        "Hydraulic Power Pack",
        "Standard and custom hydraulic power units with integrated oil coolers on request."
      ),
      offer(
        "Hydraulic Cylinder",
        "Single and double acting hydraulic cylinders for presses, lifts and industrial machines."
      ),
      offer("Pneumatic Cylinder", "Air cylinders for automation lines."),
      offer(
        "Worm Gear Screw Jack",
        "Mechanical screw jack for precise lifting and positioning."
      ),
      offer(
        "Industrial Hydraulic Jack",
        "Heavy-duty hydraulic jack for maintenance and erection work."
      ),
      offer(
        "Hydro Tester Machine",
        "Pressure testing machine for pipes, valves, cylinders and vessels."
      ),
    ],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE}/`,
  name: "HPP – Air Cooled Oil Cooler Manufacturer",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

/**
 * Full @graph for an inner product/landing page:
 * Organization + WebSite + WebPage + BreadcrumbList (+ Product when given).
 * FAQPage schema is rendered separately by FAQAccordion on the page.
 */
export function buildPageSchema({ path, name, description, image, breadcrumb, product }) {
  const url = `${SITE}${path}`;
  const imageUrl = image ? `${SITE}${encodeURI(image)}` : undefined;

  const graph = [
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(imageUrl && {
        primaryImageOfPage: { "@type": "ImageObject", url: imageUrl },
      }),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { name: "Home", path: "/" },
        ...breadcrumb,
      ].map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE}${item.path}`,
      })),
    },
  ];

  if (product) {
    graph.push({
      "@type": "Product",
      "@id": `${url}#product`,
      name: product.name,
      description: product.description,
      ...(imageUrl && { image: imageUrl }),
      brand: { "@type": "Brand", name: "HPP" },
      manufacturer: { "@id": ORG_ID },
      category: product.category,
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
