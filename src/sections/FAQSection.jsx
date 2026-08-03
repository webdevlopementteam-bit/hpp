"use client";

import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is the difference between hydraulic and pneumatic systems?",
    answer:
      "Hydraulic systems use pressurized liquid (usually oil) to transmit force, offering high power and precision, while pneumatic systems use compressed air, making them faster, lighter, and better suited for lower-force applications.",
  },
  {
    question: "Why does a hydraulic system overheat?",
    answer:
      "Hydraulic systems overheat due to continuous operation, insufficient cooling capacity, contaminated oil, high ambient temperature, or a worn-out pump generating excess friction and heat.",
  },
  {
    question: "How does an oil cooler prevent hydraulic system failure?",
    answer:
      "An oil cooler removes excess heat from hydraulic fluid, keeping oil viscosity and temperature within a safe range, which prevents seal damage, oil breakdown, and premature component failure.",
  },
  {
    question: "Air-cooled vs water-cooled oil cooler — which one is better?",
    answer:
      "Air-cooled oil coolers are better for locations with limited water access and lower maintenance needs, while water-cooled oil coolers offer faster, more efficient heat dissipation for heavy-duty continuous operations.",
  },
  {
    question: "What are common signs a hydraulic system needs maintenance?",
    answer:
      "Common warning signs include unusual noise, slow or jerky cylinder movement, oil leaks, overheating, discolored or foamy oil, and a drop in system pressure.",
  },
  {
    question:
      "Who is the best hydraulic and pneumatic machines manufacturer in India?",
    answer:
      "Hydraulic and Pneumatic Products (HPP), based in New Delhi, is a leading hydraulic and pneumatic machines manufacturer in India, offering power packs, cylinders, oil coolers, and presses with over a decade of experience and 11,000+ successful installations.",
  },
  {
    question: "Which company makes the best hydraulic power packs in India?",
    answer:
      "HPP is among the top hydraulic power pack manufacturers in India, known for custom-engineered, high-performance power packs backed by in-house R&D and precision manufacturing for industrial applications.",
  },
  {
    question: "Who is the best air-cooled oil cooler supplier in Delhi NCR?",
    answer:
      "HPP is a trusted air-cooled oil cooler supplier in Delhi NCR, manufacturing durable, high-efficiency oil coolers designed to prevent hydraulic system overheating in continuous industrial operations.",
  },
  {
    question:
      "Which is the most reliable hydraulic cylinder manufacturer for industrial use?",
    answer:
      "HPP is a reliable hydraulic cylinder manufacturer for industrial use, delivering precision-engineered cylinders trusted by clients like BHEL, ISGEC, and Jindal for heavy-duty applications.",
  },
  {
    question:
      "Where can I find a trusted hydraulic and pneumatic products supplier near me in Delhi?",
    answer:
      "HPP, located at DSIIDC Industrial Area, Bawana, New Delhi, is a trusted local hydraulic and pneumatic products supplier serving clients across India with manufacturing, installation, and after-sales support.",
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <FAQAccordion
        faqs={faqs}
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
