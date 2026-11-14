"use client";

import FAQAccordion from "@/components/FAQAccordion";
import { homeFaqs } from "@/data/homeFaqs";


export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* FAQPage schema is included in the home page @graph (src/app/page.js) */}
      <FAQAccordion
        faqs={homeFaqs}
        includeSchema={false}
        questionAs="h3"
        heading={
          <>
            <span className="text-[#0d1b3f]">Frequently Asked</span>{" "}
            <span className="text-[#f35a3b]">Questions</span>
          </>
        }
      />
    </section>
  );
}
