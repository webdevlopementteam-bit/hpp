"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a hydraulic press used for?",
    answer:
      "A hydraulic press is used to generate compressive force for operations such as forging, clinching, moulding, blanking, punching, and deep drawing in metalworking and manufacturing industries.",
  },
  {
    question: "What is the difference between a four-column and C-type hydraulic press?",
    answer:
      "A four-column hydraulic press offers balanced support across four pillars for high-tonnage, precision pressing, while a C-type (single-column) hydraulic press has an open-front design, making it more compact and better suited for smaller parts and easier loading.",
  },
  {
    question: "How much tonnage does an industrial hydraulic press require?",
    answer:
      "The required tonnage of a hydraulic press depends on the material, thickness, and type of forming operation, ranging from a few tons for light pressing to several hundred tons for heavy forging and deep drawing.",
  },
  {
    question: "What causes a hydraulic press to lose pressing force?",
    answer:
      "A hydraulic press loses pressing force due to worn seals, internal oil leakage, insufficient pump output, or air trapped in the hydraulic system affecting cylinder performance.",
  },
  {
    question: "Can hydraulic presses be customized for specific industrial applications?",
    answer:
      "Yes, hydraulic presses can be customized in terms of tonnage, stroke length, table size, and configuration (four-column, C-type, horizontal, or universal) to match specific production and space requirements.",
  },
];

const features = [
  "Easy to installation",
  "It is cost effective.",
  "It is appropriate for Heavy Industries.",
  "Long Lasting",
  "Corrosion Resistant",
  "Custom compact designs.",
];

const specs = [
  "Four-column hydraulic press",
  "Single column hydraulic press (C type)",
  "Horizontal hydraulic press",
  "Universal hydraulic press",
];

const products = [
  { name: "Hydraulic Press for LPG Cylinder Crushing", image: "1.webp" },
  { name: "Hydraulic Press H-Type - 100 Ton", image: "2.webp" },
  { name: "Hydraulic Press for Automobiles", image: "3.webp" },
];

export default function HydraulicPressPage() {
  const title = "Hydraulic Press";

  return (
    <section>
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

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
            <Image
              src="/products/hydraulic-press/main.webp"
              alt="HPP Hydraulic Press - industrial hydraulic press machine"
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
              A hydraulic press is a device using a hydraulic cylinder and
              hydraulic power pack to generate a compressive force for pressing
              something. Hydraulic presses are commonly used for forging,
              clinching, moulding, blanking, punching, deep drawing, and metal
              forming operations.
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

            <div className="mt-8 overflow-hidden rounded-sm border border-gray-200">
              <div className="bg-[#e2582a] px-6 py-4">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                  Our Range in Hydraulic Press
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
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Hydraulic Press</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore hydraulic presses engineered for controlled force,
              repeatable pressing, and heavy-duty industrial operations.
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
                    src={`/Hydraulic Press/${product.image}`}
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
          Hydraulic Press Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a leading hydraulic press manufacturer and supplier in
            India, engineering machines that use a hydraulic cylinder and
            hydraulic power pack to generate powerful, controlled
            compressive force for a wide range of industrial pressing
            operations. Our hydraulic presses are built for strength,
            precision, and long-term durability, making them suitable for
            both heavy industrial use and specialized manufacturing
            applications.
          </p>
          <p>
            We manufacture hydraulic presses commonly used for forging,
            clinching, moulding, blanking, punching, deep drawing, and
            metal forming operations, delivering consistent force output
            and reliable repeatability across production cycles. Our
            product range includes four-column hydraulic presses for
            balanced, high-tonnage pressing, single-column C-type
            hydraulic presses for compact, space-saving operations,
            horizontal hydraulic presses for specific alignment and
            pressing tasks, and universal hydraulic presses designed for
            multi-purpose industrial use.
          </p>
          <p>
            Each hydraulic press is engineered using high-quality,
            corrosion-resistant materials and precision components to
            ensure long-lasting performance even under continuous,
            heavy-duty operation. Our presses are used across diverse
            applications, including LPG cylinder crushing, automobile
            component pressing, and general industrial forming operations,
            with tonnage and configuration customized to match specific
            production requirements.
          </p>
          <p>
            Key features of our hydraulic presses include easy
            installation, cost-effective operation, suitability for heavy
            industries, corrosion resistance, and the option for custom
            compact designs tailored to available floor space and
            production needs. Whether the requirement is a standard H-type
            press or a fully customized configuration, our engineering
            team designs solutions that align with the exact force, speed,
            and stroke requirements of the application.
          </p>
          <p>
            Backed by an in-house R&amp;D team and stringent quality
            control, HPP ensures every hydraulic press meets rigorous
            performance and safety standards before dispatch. As a trusted
            hydraulic press supplier serving industries across India, we
            combine precision engineering with responsive customer support
            to help manufacturers achieve efficient, reliable pressing
            operations.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion
            faqs={faqs}
            includeSchema={false}
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
