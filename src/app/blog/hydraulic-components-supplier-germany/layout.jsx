const PATH = "/blog/hydraulic-components-supplier-germany";
const TITLE = "Top Custom Hydraulic Cylinders & Oil Coolers Germany | HPP";
const DESCRIPTION =
  "Sourcing custom hydraulic cylinders, air & water cooled oil coolers and screw jacks for Germany? 2027 buyer guide + free RFQ checklist for OEMs.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "ISO Certified Air Cooled Oil Cooler Manufacturer in Germany",
    "Custom Water Cooled Hydraulic Oil Cooler Supplier Germany",
    "OEM Hydraulic Oil Cooling System Supplier Germany",
    "Custom Hydraulic Cylinder Manufacturers in Germany",
    "Heavy Duty Hydraulic Cylinder Supplier in Germany",
    "ISO Approved Hydraulic Cylinder Manufacturers Germany",
    "Hydraulic Cylinder Oem Supplier Germany",
    "Custom Mechanical Screw Jack Supplier Germany",
    "Industrial Worm Gear Lifting Jack Germany",
  ],
  alternates: {
    canonical: PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "article",
  },
};

export default function BlogPostLayout({ children }) {
  return children;
}
