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
import { homeFaqs } from "@/data/homeFaqs";
import {
  SITE,
  ORG_ID,
  WEBSITE_ID,
  organizationSchema,
  websiteSchema,
  JsonLd,
} from "@/lib/schema";

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

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: META_TITLE,
      description: META_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
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
      <JsonLd data={schema} />
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
    </>
  );
}
