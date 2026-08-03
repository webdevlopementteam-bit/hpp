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
import Image from "next/image";

export const metadata = {
  title: "Hydraulic and Pneumatic Products (HPP)",
  description:
    "Hydraulic and Pneumatic Products (HPP) is a leading name in the engineering field, offering high-performance solutions in hydraulics and pneumatics. Visit us now!",
  keywords: ["Hydraulic and Pneumatic Products", "HPP Group"],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
  <>
  <HeroSection/>
  <AboutSection/>
  <SolutionsSection/>
  <TopProducts/>
  <ProjectsSection/>
  <StatsSection/>
  <TestimonialSection/>
  <ContactSection/>
  <TextMarquee/>
  <ProcessSection/>
  <FAQSection/>
  </>
  );
}
