"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What components make up a hydraulic paper mill system?",
    answer:
      "A hydraulic paper mill system typically includes hydraulic cylinders, a hydraulic power pack, an electric control panel, an oil cooler, and complete piping and fittings integrated for site-specific operation.",
  },
  {
    question: "What tank and motor capacity is needed for a paper mill hydraulic system?",
    answer:
      "Paper mill hydraulic systems typically require tank capacities from 30 litres to 3000 litres and motor capacities from 0.5 HP to 50 HP, depending on the size and demands of the mill machinery.",
  },
  {
    question: "Why do paper mill hydraulic systems need oil coolers?",
    answer:
      "Paper mill hydraulic systems need oil coolers because continuous, heavy-duty operation generates significant heat, and without proper cooling, oil temperature can rise beyond safe limits, damaging seals and reducing system efficiency.",
  },
  {
    question: "What working pressure do paper mill hydraulic systems operate at?",
    answer:
      "Paper mill hydraulic systems typically operate at working pressures ranging from 0 to 700 Bar, depending on the specific machinery and process requirements within the mill.",
  },
  {
    question: "What is the role of an electric control panel in a paper mill hydraulic system?",
    answer:
      "An electric control panel centralizes monitoring and control of multiple hydraulic functions in a paper mill system, allowing operators to manage pressure, flow, and equipment operation efficiently from a single point.",
  },
  {
    question: "Who is the best hydraulic paper mill system manufacturer in India?",
    answer:
      "HPP is a leading hydraulic paper mill system manufacturer in India, offering complete solutions including cylinders, power packs, control panels, and on-site piping for paper mill industries.",
  },
  {
    question: "Which company supplies hydraulic systems for paper mill industries in India?",
    answer:
      "HPP supplies complete hydraulic systems for paper mill industries in India, engineered with tank capacities up to 3000 litres and working pressures up to 700 Bar.",
  },
  {
    question: "Who is a reliable hydraulic power pack supplier for paper mills?",
    answer:
      "HPP is a reliable hydraulic power pack supplier for paper mills, offering power packs from 0.5 HP to 50 HP tailored to specific mill machinery requirements.",
  },
  {
    question: "Which manufacturer offers on-site installation for paper mill hydraulic systems?",
    answer:
      "HPP offers on-site installation for paper mill hydraulic systems, including piping, fitting, and control panel setup as part of its complete hydraulic solution package.",
  },
  {
    question: "Where can I find a trusted hydraulic paper mill system supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted hydraulic paper mill system supplier serving paper mills across India with custom engineering, manufacturing, and installation support.",
  },
];

const features = [
  "Easy to installation",
  "It is cost effective.",
  "It is appropriate for Heavy Industries.",
  "Long Lasting",
  "Corrosion resistant",
  "Custom compact designs.",
];

const specs = [
  "Tank Capacity-30 Ltr Upto 3000Ltr",
  "Motor Capacity-0.5 HP-50 HP",
  "Cooling Unit-Water Cooled Oil Coolers /Air Cooled Oil Coolers",
  "Working Pressure - 0-700 Bar",
  "With Electric Control Panel",
];

const products = [
  { name: "2-Station Electric Control Panel", image: "1.png" },
  { name: "Paper Mill System", image: "2.png" },
  { name: "5-Station Electric Control Panel", image: "3.png" },
];

export default function HydraulicPaperMillSystemPage() {
  const title = "Hydraulic Paper Mill System";

  return (
    <section>
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

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
            <Image
              src="/products/hydraulic-paper-mill-system/main.png"
              alt={title}
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              {title}
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              HPP is a leading manufacturing company offering a wide range of
              hydraulic systems for paper mill industries. We are engaged in
              manufacturing hydraulic cylinders, hydraulic power packs, control
              panels, piping, and fitting at site. Our delivered products are
              long lasting, corrosion resistant with branded components. We use
              optimum quality materials and precisely engineered systems to
              meet the requirements of various industries.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-[#0d1b3f]">
              Features:
            </h3>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="font-bold text-[#f35a3b]">&gt;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-gray-200">
          <div className="bg-[#e2582a] px-6 py-4">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Our Range in Hydraulic Systems for Paper Mills
            </h3>
          </div>
          {specs.map((spec, index) => (
            <div
              key={spec}
              className={`px-6 py-4 text-gray-700 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {spec}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Hydraulic Paper Mill System</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore hydraulic paper mill systems and electric control panels
              designed for reliable paper mill operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.image}
                href="/contact-us"
                className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-80 items-center justify-center bg-white p-6">
                  <Image
                    src={`/Hydraulic Paper Mill System/${product.image}`}
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
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Hydraulic Paper Mill System Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a leading hydraulic paper mill system manufacturer and
            supplier in India, offering a comprehensive range of hydraulic
            solutions specifically engineered for the paper mill industry.
            We manufacture hydraulic cylinders, hydraulic power packs,
            electric control panels, and complete piping and fitting
            installations at site, delivering fully integrated hydraulic
            systems built to handle the demanding, continuous operating
            conditions of paper manufacturing plants.
          </p>
          <p>
            Our hydraulic systems for paper mills are available with tank
            capacities ranging from 30 litres up to 3000 litres and motor
            capacities from 0.5 HP to 50 HP, allowing us to match the exact
            power and fluid requirements of different mill sizes and
            applications. Systems are engineered to operate at working
            pressures from 0 to 700 Bar, ensuring reliable performance
            across a wide range of paper mill machinery and processes.
          </p>
          <p>
            To prevent overheating and maintain consistent oil temperature
            during continuous operation, our paper mill hydraulic systems
            are equipped with either water-cooled or air-cooled oil
            coolers, selected based on site conditions and cooling
            requirements. Each system also includes an electric control
            panel, with configurations such as 2-station and 5-station
            panels available for centralized monitoring and control of
            multiple hydraulic functions.
          </p>
          <p>
            Built using optimum-quality, branded components and precisely
            engineered for long-lasting, corrosion-resistant performance,
            our hydraulic paper mill systems are designed to minimize
            downtime and maximize operational efficiency in heavy
            industrial environments. Custom compact designs are also
            available to suit specific site layouts and space constraints.
          </p>
          <p>
            Backed by an in-house R&amp;D team and rigorous quality
            control, HPP delivers complete, ready-to-install hydraulic
            systems for paper mills, including on-site piping and fitting
            services. As a trusted hydraulic paper mill system supplier
            serving clients across India, we combine engineering precision
            with responsive support to help paper mills achieve
            dependable, efficient hydraulic performance.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
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
