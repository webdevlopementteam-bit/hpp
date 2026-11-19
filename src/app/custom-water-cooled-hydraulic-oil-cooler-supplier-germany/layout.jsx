import { buildPageSchema, JsonLd } from "@/lib/schema";

const PATH = "/custom-water-cooled-hydraulic-oil-cooler-supplier-germany";
const TITLE = "Top Custom Water Cooled Hydraulic Oil Cooler Supplier Germany | HPP";
const DESCRIPTION =
  "Custom water cooled hydraulic oil cooler supplier in Germany – Hydraulic and Pneumatic Products offers precision cooling solutions: German quality, fast delivery. Get a quote!";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Custom Water Cooled Hydraulic Oil Cooler Supplier Germany","Top Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany"],
  alternates: {
    canonical: PATH,
  },
};

const schema = buildPageSchema({
  path: PATH,
  name: TITLE,
  description: DESCRIPTION,
  image: "/products/water-cooled-oil-cooler/main.webp",
  breadcrumb: [
    { name: "Products", path: "/products" },
    { name: "Custom Water Cooled Hydraulic Oil Cooler Supplier Germany", path: PATH },
  ],
  product: {
    name: "Custom Water Cooled Hydraulic Oil Cooler",
    category: "Water-cooled heat exchangers",
    description:
      "Custom water-cooled oil coolers by Hydraulic and Pneumatic Products (HPP) for hydraulic power packs, test benches, turbines, offline cooling and transmission systems in Germany. Flow capacity 3 to 700 litres, heat rejection up to 150,000 Kcal/h, diameter 80 mm to 750 mm, length 300 mm to 10,000 mm.",
  },
});

export default function CustomWaterCooledHydraulicOilCoolerSupplierGermanyLayout({
  children,
}) {
  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
