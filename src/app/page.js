import AboutSection from "@/sections/About";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/Hero";
import ProcessSection from "@/sections/ProcesSection";
import ProjectsSection from "@/sections/ProjectSection";
import SolutionsSection from "@/sections/SolutionSection";
import StatsSection from "@/sections/StatsSection";
import TestimonialSection from "@/sections/TestimonialSection";
import TextMarquee from "@/sections/TextMarquee";
import TopProducts from "@/sections/TopProducts";
import WhyChooseSection from "@/sections/WhyChooseSection";
import GetQuoteSection from "@/sections/GetQuoteSection";
import LeadPopup from "@/components/LeadPopup";
import { homeFaqs } from "@/data/homeFaqs";

const SITE = "https://www.aircooledoilcooler.com";
const META_TITLE = "Air Cooled Oil Cooler Manufacturer in Delhi, India | HPP";
const META_DESCRIPTION =
  "HPP Delhi manufactures air cooled & water cooled oil coolers, hydraulic power packs and cylinders. 12+ years, 11,000+ installations. Get a quote today.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "HPP",
    "Air Cooled Oil Cooler Manufacturer in Delhi, India",
    "Hydraulic and Pneumatic Products",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/",
    type: "website",
    images: ["/factoryimage.webp"],
  },
};

const product = (name, description) => ({
  "@type": "Offer",
  itemOffered: {
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "HPP" },
  },
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE}/#organization`,
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
          product(
            "Air Cooled Oil Cooler",
            "Fan-driven aluminium core oil cooler for hydraulic power packs and machines. 20 to 200 LPM oil flow, 150 to 356 mm fan."
          ),
          product(
            "Water Cooled Oil Cooler",
            "Shell and tube oil cooler for high heat loads and continuous duty."
          ),
          product(
            "Hydraulic Power Pack",
            "Standard and custom hydraulic power units with integrated oil coolers on request."
          ),
          product(
            "Hydraulic Cylinder",
            "Single and double acting hydraulic cylinders for presses, lifts and industrial machines."
          ),
          product("Pneumatic Cylinder", "Air cylinders for automation lines."),
          product(
            "Worm Gear Screw Jack",
            "Mechanical screw jack for precise lifting and positioning."
          ),
          product(
            "Industrial Hydraulic Jack",
            "Heavy-duty hydraulic jack for maintenance and erection work."
          ),
          product(
            "Hydro Tester Machine",
            "Pressure testing machine for pipes, valves, cylinders and vessels."
          ),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "HPP – Air Cooled Oil Cooler Manufacturer",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: META_TITLE,
      description: META_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE}/factoryimage.webp`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      isPartOf: { "@id": `${SITE}/#webpage` },
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <TopProducts />
      <WhyChooseSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialSection />
      <ContactSection />
      <TextMarquee />
      <ProcessSection />
      <FAQSection />
      <GetQuoteSection />
      <LeadPopup />
    </>
  );
}
