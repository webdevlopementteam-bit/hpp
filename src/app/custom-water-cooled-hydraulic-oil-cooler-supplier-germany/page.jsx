"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  { name: "Water Cooler for Hydraulic Power Pack", image: "1.png" },
  { name: "Water Cooler for Hydraulic Power Pack", image: "2.png" },
  { name: "Water Cooler for Test Bench", image: "3.png" },
  { name: "Water Cooler for Turbine", image: "4.png" },
  { name: "Water Cooled Oil Cooler - Offline Cooling", image: "5.png" },
  { name: "Heat Exchanger for Power Plants", image: "6.png" },
];

const technicalCapabilities = [
  "Flow rates from 3 to 700 litres",
  "Heat rejection capacity up to 150,000 Kcal/h",
  "Available diameters from 80mm to 750mm",
  "Lengths ranging from 300mm to 10,000mm",
];

const applications = [
  "Hydraulic power packs requiring stable oil temperature during continuous operation",
  "Test benches where accurate thermal control supports reliable performance testing",
  "Turbines and power plant heat exchangers supporting large-scale energy infrastructure",
  "Offline cooling systems for dedicated machine cooling without disrupting the main hydraulic circuit",
  "Heavy manufacturing and industrial automation systems common across Germany's engineering sector",
];

const faqs = [
  {
    question: "What does ISO certification mean for a water cooled oil cooler manufacturer?",
    answer:
      "ISO certification means the manufacturer follows internationally recognized quality management standards across design, production, and testing, ensuring consistent product quality, traceability, and reliability for industrial buyers.",
  },
  {
    question: "How does a water cooled oil cooler work?",
    answer:
      "A water cooled oil cooler works as a heat exchanger where circulating water absorbs heat from hot oil, cooling it efficiently and maintaining a stable temperature even under heavy operating loads.",
  },
  {
    question: "What heat rejection capacity should German industries choose for heavy machinery?",
    answer:
      "The right heat rejection capacity depends on the system's cooling load, typically ranging up to 150,000 Kcal/h for heavy industrial applications such as power plants, turbines, and large hydraulic systems.",
  },
  {
    question: "Why do German industries prefer ISO certified component suppliers?",
    answer:
      "German industries prefer ISO certified suppliers because certification indicates standardized manufacturing processes, documented quality control, and consistent performance, reducing the risk of component failure in critical applications.",
  },
  {
    question: "What is the difference between water cooled and air cooled oil coolers?",
    answer:
      "Water cooled oil coolers use circulating water for faster, more efficient heat dissipation in heavy-duty continuous operations, while air cooled oil coolers use ambient air and fans, better suited for locations with limited water access.",
  },
  {
    question: "Who is an Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany?",
    answer:
      "HPP is recognized as an Custom Water Cooled Hydraulic Oil Cooler Supplier serving Germany, offering heat exchangers engineered for flow rates up to 700 litres and heat rejection up to 150,000 Kcal/h.",
  },
  {
    question: "Which company supplies water cooled oil coolers for German power plants?",
    answer:
      "HPP supplies water cooled oil coolers and heat exchangers specifically engineered for power plant applications, ensuring reliable thermal management under continuous high-load operating conditions in Germany.",
  },
  {
    question: "What should German buyers verify before importing a water cooled oil cooler?",
    answer:
      "German buyers should verify the manufacturer's ISO certification validity, request pressure and performance test reports, check material specifications, and review sample units before committing to bulk orders.",
  },
  {
    question: "Can water cooled oil coolers be customized for specific industrial applications?",
    answer:
      "Yes, ISO certified manufacturers typically offer customization in diameter, length, flow rate, and heat rejection capacity, allowing water cooled oil coolers to be matched precisely to specific application requirements.",
  },
  {
    question: "Where can German buyers source ISO certified water cooled oil coolers?",
    answer:
      "German buyers can source ISO certified water cooled oil coolers from manufacturers like HPP by requesting product specifications, certification documents, and sample testing before placing bulk or OEM supply orders.",
  },
];

export default function CustomWaterCooledHydraulicOilCoolerSupplierGermanyPage() {
  const title = "Custom Water Cooled Hydraulic Oil Cooler Supplier Germany";

  return (
    <section>
      {/* Breadcrumb */}
      <div className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
        <Image
          src="/breadcrumb.jpg"
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#08152f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/70 via-transparent to-[#f35a3b]/20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="mb-6"
          />

          <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Products</span>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">{title}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
            <Image
              src="/products/water-cooled-oil-cooler/main.png"
              alt={title}
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
Top Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <div className="space-y-4 text-lg leading-8 text-gray-600">
              <p>
                A water-cooled oil cooler is used to cool oil in hydraulic
                systems, engine oil systems, and transmission systems. It
                consists of a heat exchanger that uses water as the cooling
                medium for stable, efficient temperature control. HPP, an{" "}
                <Link
                  href="/water-cooled-oil-cooler"
                  className="font-semibold text-[#f35a3b] hover:underline"
                >
                 Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany

                </Link>
                , also brings the same quality engineering standards to its
                water-cooled cooling solutions.
              </p>
              <p>
                The advantages of using a water-cooled oil cooler include
                efficient heat transfer and the ability to maintain
                consistent oil temperature under demanding operating
                conditions. By effectively cooling the oil, it helps
                prevent lubricant breakdown, reduced system performance,
                and component damage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Water Cooled Oil Cooler</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore water cooled oil coolers and heat exchangers engineered
              for hydraulic power packs, test benches, turbines, and power
              plant applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={`${product.name}-${index}`}
                href="/contact-us"
                className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-80 items-center justify-center bg-white p-6">
                  <Image
                    src={`/Water Cooled Oil Cooler/${product.image}`}
                    alt={product.name}
                    width={560}
                    height={480}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-gray-50 px-6 py-5">
                  <h3 className="min-h-[3rem] text-center text-base font-bold text-[#0d1b3f]">
                    {product.name}
                  </h3>
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0d1b3f]">
                      Contact Us
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2582a] text-white">
                        <ArrowUpRight size={14} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              HPP (Hydraulic and Pneumatic Products) is a Custom Water Cooled Hydraulic Oil Cooler Supplier
               serving Germany,
              engineering high-efficiency heat exchangers that use water as
              the cooling medium to maintain consistent oil temperature in
              hydraulic, engine oil, and transmission systems. As German
              industries increasingly diversify their sourcing strategies
              for critical thermal management components, HPP has
              positioned itself as a dependable, quality-certified
              manufacturing partner for the German market.
            </p>
            <p>
              By ensuring efficient heat transfer even under demanding
              operating conditions, our water-cooled oil coolers prevent
              overheating, lubricant breakdown, and premature component
              damage—issues that directly impact machine uptime and
              lifecycle costs in Germany's precision-driven manufacturing
              and heavy engineering sectors. As an ISO-certified
              manufacturer, every unit we produce follows structured,
              quality-controlled processes from raw material selection
              through final testing, ensuring consistent dimensional
              accuracy and thermal performance that German industrial
              buyers can rely on.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Technical Capabilities
            </h4>
            <p>
              Our water cooled oil cooler range is engineered to handle a
              wide spectrum of industrial cooling demands:
            </p>
            <ul className="space-y-2">
              {technicalCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              This broad range allows us to match cooling capacity
              precisely to the specific thermal load of each application,
              rather than forcing standardized sizing onto unique
              industrial requirements — an approach that aligns closely
              with German engineering expectations around precision and
              application-specific design.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Applications Suited for German Industries
            </h4>
            <p>Our water cooled oil coolers are widely used across:</p>
            <ul className="space-y-2">
              {applications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Built for Durability and Long-Term Performance
            </h4>
            <p>
              Built for durability and long-lasting performance, our
              water-cooled coolers are ideal for heavy-duty, continuous
              industrial operations where consistent thermal control is
              critical. Every unit undergoes rigorous pressure and leak
              testing before dispatch as part of our ISO-certified quality
              management process, helping minimize the risk of field
              failures and unplanned downtime for German industrial
              buyers.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why German Buyers Choose an ISO Certified Manufacturer
            </h4>
            <p>
              For German companies evaluating international manufacturing
              partners, ISO certification offers a measurable quality
              assurance framework — indicating standardized production
              processes, documented traceability, and consistent testing
              protocols. This is particularly important when sourcing
              critical thermal management components that directly affect
              machine reliability and safety. As an ISO Certified Water
              Cooled Oil Cooler Manufacturer, HPP provides German buyers
              with the documentation, testing reports, and quality
              assurance needed to evaluate supplier reliability with
              confidence.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Supporting German Industrial Supply Chains
            </h4>
            <p>
              Our manufacturing facility is equipped to handle export
              documentation, quality certification support, and
              coordinated logistics to ensure smooth, predictable delivery
              to Germany and across the EU. Whether you require a compact
              water cooled oil cooler for a single hydraulic power pack or
              a high-capacity heat exchanger for power plant-scale
              operations, our engineering team works closely with clients
              from initial specification through final delivery, ensuring
              the solution matches exact operational and thermal
              performance requirements before production begins.
            </p>
            <p>
              As industrial supply chains continue to diversify globally,
              HPP offers German businesses a reliable, ISO-certified
              alternative sourcing partnership — combining engineering
              precision, transparent communication, and consistent
              product quality for demanding industrial cooling
              applications.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion
            faqs={faqs}
            heading={
              <>
                <span className="text-[#0d1b3f]">Frequently Asked</span>{" "}
                <span className="text-[#f35a3b]">Questions</span>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
