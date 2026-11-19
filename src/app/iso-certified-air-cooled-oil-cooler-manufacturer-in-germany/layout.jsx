import { buildPageSchema, JsonLd } from "@/lib/schema";

const PATH = "/iso-certified-air-cooled-oil-cooler-manufacturer-in-germany";
const TITLE = "ISO Certified Air Cooled Oil Cooler Manufacturer in Germany | HPP";
const DESCRIPTION =
  "Hydraulic and Pneumatic Products (HPP) is an ISO-certified air cooled oil cooler manufacturer in Germany, offering reliable, energy-efficient cooling solutions. Contact us today!";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ISO-certified air cooled oil cooler manufacturer in Germany",
    "Air-Oil Coolers for Gearboxes and Hydraulic Systems in Germany",
    "Air-cooled heat exchangers",
  ],
  alternates: {
    canonical: PATH,
  },
};

const schema = buildPageSchema({
  path: PATH,
  name: TITLE,
  description: DESCRIPTION,
  image: "/products/air-cooled-oil-cooler/main.webp",
  breadcrumb: [
    { name: "Products", path: "/products" },
    { name: "ISO Certified Air Cooled Oil Cooler", path: PATH },
  ],
  product: {
    name: "ISO Certified Air Cooled Oil Cooler",
    category: "Air-cooled heat exchangers",
    description:
      "Air cooled oil coolers and Air-Oil Coolers for Gearboxes and Hydraulic Systems by Hydraulic and Pneumatic Products (HPP), supplied to industrial customers in Germany.",
  },
});

export default function AirCooledOilCoolerLayout({ children }) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
