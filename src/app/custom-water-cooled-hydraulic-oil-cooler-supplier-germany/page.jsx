"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  {
    name: "Water Cooler for Hydraulic Power Pack",
    image: "1.webp",
    alt: "HPP water cooled heat exchanger, compact model with dual end flanges",
  },
  {
    name: "Water Cooler for Hydraulic Power Pack",
    image: "2.webp",
    alt: "HPP water cooled heat exchanger, slim elongated model with dual end flanges",
  },
  {
    name: "Water Cooler for Test Bench",
    image: "3.webp",
    alt: "HPP water cooled oil cooler for hydraulic test bench applications",
  },
  {
    name: "Water Cooler for Turbine",
    image: "4.webp",
    alt: "HPP water cooled oil cooler engineered for turbine cooling applications",
  },
  {
    name: "Water Cooled Oil Cooler - Offline Cooling",
    image: "5.webp",
    alt: "HPP water cooled oil cooler for offline cooling system applications",
  },
  {
    name: "Heat Exchanger for Power Plants",
    image: "6.webp",
    alt: "HPP water cooled heat exchanger engineered for power plant applications",
  },
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
          src="/breadcrumb.webp"
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#08152f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/70 via-transparent to-[#f35a3b]/20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.webp"
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
              src="/products/water-cooled-oil-cooler/main.webp"
              alt="HPP Water Cooled Oil Cooler - industrial hydraulic heat exchanger"
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
                  href="/water-cooled-oil-cooler-manufacturer"
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
                    alt={product.alt}
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
      <div className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-6 text-lg leading-8 text-gray-600">
          <p>
            In industrial environments, excessive oil temperature can affect
            machine efficiency, reduce lubricant life, and increase equipment
            maintenance requirements. HPP offers application-specific{" "}
            <strong className="text-[#0d1b3f]">water-cooled oil cooler</strong>{" "}
            solutions that help remove excess heat and maintain reliable
            equipment performance. Our focus on product quality, engineering
            precision, and customised cooling requirements makes us a
            dependable sourcing partner for industrial businesses in Germany.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Custom Water Cooled Oil Coolers for Industrial Applications
          </h2>
          <p>
            Different industrial machines have different cooling requirements.
            Factors such as operating pressure, oil flow, heat generation, and
            available installation space play an important role in selecting
            the right oil cooler.
          </p>
          <p>
            HPP provides custom water-cooled oil cooler solutions designed to
            meet specific application requirements. By using water as the
            cooling medium, these heat exchangers transfer excess heat from oil
            to water, helping maintain the required operating temperature.
          </p>
          <p>
            Our solutions are suitable for applications where consistent
            thermal management is essential, including hydraulic power packs,
            industrial machinery, turbines, and transmission systems.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Technical Specifications of Water Cooled Oil Coolers
          </h2>
          <p>
            HPP offers a range of{" "}
            <Link
              href="/products"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              water-cooled oil coolers
            </Link>{" "}
            to support different industrial cooling requirements. Our
            available technical specifications include:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl border-collapse text-left text-base">
              <thead>
                <tr className="bg-[#0d1b3f] text-white">
                  <th className="px-4 py-3 font-bold">Technical Parameter</th>
                  <th className="px-4 py-3 font-bold">Available Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Flow Capacity", "3 to 700 litres"],
                  ["Heat Rejection Capacity", "Up to 150,000 Kcal/h"],
                  ["Available Diameter", "80 mm to 750 mm"],
                  ["Available Length", "300 mm to 10,000 mm"],
                ].map(([param, range]) => (
                  <tr key={param} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-[#0d1b3f]">{param}</td>
                    <td className="px-4 py-3">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            These specifications provide flexibility when selecting cooling
            equipment for different industrial applications. Our team can help
            identify a suitable configuration based on the required heat
            rejection capacity, operating conditions, and installation
            requirements.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Applications Across German Industries
          </h2>
          <p>
            Water-cooled oil coolers play an important role in industrial
            operations where effective heat management is necessary for
            consistent machine performance.
          </p>
          <p>HPP cooling solutions are suitable for various applications, including:</p>
          <ul className="list-disc space-y-2 pl-6">
            {[
              ["Hydraulic Power Packs:", "Help maintain stable hydraulic oil temperatures during continuous machine operation."],
              ["Industrial Test Benches:", "Support temperature control during equipment testing and performance evaluation."],
              ["Turbines and Power Plants:", "Provide oil cooling for equipment operating under demanding industrial conditions."],
              ["Offline Cooling Systems:", "Help cool hydraulic oil independently without interrupting the main hydraulic circuit."],
              ["Heavy Engineering Machinery:", "Support reliable operation by managing excess heat in industrial equipment."],
              ["Transmission Systems:", "Help maintain suitable oil temperatures for efficient equipment operation."],
            ].map(([label, text]) => (
              <li key={label}>
                <strong className="text-[#0d1b3f]">{label}</strong> {text}
              </li>
            ))}
          </ul>
          <p>
            Our water-cooled oil coolers can be selected according to the
            specific thermal and operational requirements of each application.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Quality, Durability and Reliable Performance
          </h2>
          <p>
            Industrial cooling equipment must deliver consistent performance
            under demanding operating conditions. HPP focuses on
            quality-oriented manufacturing and product reliability to meet
            different industrial requirements.
          </p>
          <p>
            Our water-cooled oil coolers are designed for long-term industrial
            use and effective heat transfer. Quality checks, including pressure
            and leakage testing, help evaluate product performance and
            reliability before dispatch.
          </p>
          <p>
            As an ISO-certified company, HPP follows a quality-focused approach
            to its products and processes. We aim to provide dependable cooling
            solutions that help industrial customers manage equipment
            temperatures and reduce the risk of overheating-related maintenance
            issues.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Why Choose HPP as Your Water Cooled Oil Cooler Supplier in Germany?
          </h2>
          <p>
            Selecting the right supplier is important when sourcing industrial
            heat exchangers. German industrial buyers need products that meet
            their technical requirements and offer dependable performance.
          </p>
          <p>
            Here is why businesses can consider{" "}
            <Link
              href="/about-us"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              Hydraulic and Pneumatic Products (HPP)
            </Link>
            :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {[
              ["Custom Cooling Solutions:", "Options based on specific industrial applications and cooling requirements."],
              ["Wide Technical Range:", "Multiple diameter, length, and heat rejection capacity options."],
              ["ISO-Certified Quality:", "A structured approach to quality management and product consistency."],
              ["Industrial Applications:", "Solutions for hydraulic systems, turbines, power packs, and machinery."],
              ["Technical Assistance:", "Support in identifying suitable cooling equipment for different applications."],
              ["International Supply:", "Support for industrial customers looking for cooling equipment in Germany and other international markets."],
            ].map(([label, text]) => (
              <li key={label}>
                <strong className="text-[#0d1b3f]">{label}</strong> {text}
              </li>
            ))}
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Contact HPP for Custom Water Cooled Oil Cooler Solutions
          </h2>
          <p>
            Looking for a dependable{" "}
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              Custom Water Cooled Hydraulic Oil Cooler Supplier in Germany
            </Link>
            ? Hydraulic and Pneumatic Products (HPP) offers industrial cooling
            solutions designed around your equipment and application
            requirements.
          </p>
          <p>
            Whether you need a water-cooled oil cooler for a hydraulic power
            pack, industrial test bench, turbine, or heavy-duty machinery, our
            team can help you identify a suitable solution.
          </p>
          <p>
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              Contact HPP today
            </Link>{" "}
            to discuss your technical requirements, explore available cooling
            options, and request a quotation for your industrial oil cooling
            application in Germany.
          </p>
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
