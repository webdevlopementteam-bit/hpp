"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is the maximum load capacity of an industrial hydraulic jack?",
    answer:
      "Industrial hydraulic jacks are available with load capacities ranging from 5 Ton up to 1000 Ton, depending on the model and application, with working pressures reaching up to 700 Bar.",
  },
  {
    question: "What is the difference between single-acting and double-acting hydraulic jacks?",
    answer:
      "A single-acting hydraulic jack extends under hydraulic pressure but retracts using spring force or gravity, while a double-acting hydraulic jack uses hydraulic pressure for both extending and retracting, offering greater control and force in both directions.",
  },
  {
    question: "Why does a hydraulic jack fail to lift a load?",
    answer:
      "A hydraulic jack fails to lift a load due to reasons such as low hydraulic fluid level, air trapped in the system, worn seals causing internal leakage, or exceeding the jack's rated capacity.",
  },
  {
    question: "How do you maintain an industrial hydraulic jack for long service life?",
    answer:
      "Maintaining an industrial hydraulic jack involves regularly checking hydraulic fluid levels, inspecting seals for wear or leaks, keeping the jack clean from dust and debris, and storing it properly to prevent corrosion.",
  },
  {
    question: "What industries commonly use industrial hydraulic jacks?",
    answer:
      "Industrial hydraulic jacks are commonly used in construction, cement plants, steel and paper mills, railway maintenance, and heavy engineering industries for lifting, positioning, and supporting large machinery and structural components.",
  },
  {
    question: "Who is the best industrial hydraulic jack manufacturer in India?",
    answer:
      "HPP is a leading industrial hydraulic jack manufacturer in India, offering single-acting and double-acting jacks from 5 Ton to 1000 Ton capacity, built with reputed imported seals for durability and reliability.",
  },
  {
    question: "Which company supplies high-capacity hydraulic jacks for cement plants?",
    answer:
      "HPP supplies high-capacity industrial hydraulic jacks for cement plants, engineered to handle heavy loads and continuous operation with working pressures up to 700 Bar.",
  },
  {
    question: "Who is a reliable industrial hydraulic jack supplier for railway maintenance?",
    answer:
      "HPP is a reliable industrial hydraulic jack supplier for railway maintenance sites, providing durable, corrosion-resistant jacks designed for demanding field and industrial conditions.",
  },
  {
    question: "Which manufacturer offers custom industrial hydraulic jacks in India?",
    answer:
      "HPP manufactures custom industrial hydraulic jacks in India, designing jacks as per customer-specific load capacity, mounting, and operating pressure requirements for various industrial applications.",
  },
  {
    question: "Where can I find a trusted industrial hydraulic jack supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted industrial hydraulic jack supplier serving industries across India with custom engineering, manufacturing, and dedicated after-sales support.",
  },
];

const features = [
  "Easy to installation",
  "It is cost effective",
  "It is appropriate for Heavy Industries.",
  "Long Lasting",
  "Corrosion Resistant",
  "Custom compact designs.",
];

const specs = [
  "Type- Single acting / Double acting",
  "Capacity - 5Ton - 1000 Ton",
  "Working Pressure-700 Bar Max.",
  "With Reputed Imported Seals",
  "Design- As Per Customer's Requirement",
];

const products = [
  {
    name: "Hydraulic Jack 300 Ton Double Acting with Hydraulic Power Pack",
    image: "1.png",
  },
  {
    name: "Hydraulic Jack 100 Ton Single Acting With Hand pump",
    image: "2.png",
  },
  {
    name: "Hydraulic Jack - 25, 50, 100 Ton Single Acting with Hand Pump",
    image: "3.png",
  },
  {
    name: "Hydraulic Jack - 200 Ton Double Acting with Hand Pump",
    image: "4.png",
  },
  {
    name: "Hydraulic Jack - 50 Ton Single Acting with Hand Pump",
    image: "5.png",
  },
  {
    name: "Hydraulic Jack - 10 Ton Single Acting with Hand Pump",
    image: "6.png",
  },
];

export default function IndustrialHydraulicJackPage() {
  const title = "Industrial Hydraulic Jack";

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
              src="/products/industrial-hydraulic-jack/main.png"
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
              A hydraulic jack is a device that allows heavy loads by using
              force. The primary mechanism depends on the type of jack. These
              hydraulic jacks can lift heavy loads. Designs from our
              Industrial Hydraulic Jacks are used in construction sites, cement
              plants, different mills, railway sites, and many other
              industries.
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
              Our Range in Industrial Hydraulic Jack
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
              Our <span className="text-[#f35a3b]">Industrial Hydraulic Jack</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore single-acting and double-acting hydraulic jacks designed
              for heavy-duty industrial lifting applications.
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
                    src={`/Industrial Hydraulic Jack/${product.image}`}
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
          Industrial Hydraulic Jack Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a trusted industrial hydraulic jack manufacturer and
            supplier in India, engineering high-capacity jacks designed to
            lift, support, and position extremely heavy loads using
            controlled hydraulic force. Our industrial hydraulic jacks are
            built to perform reliably in the most demanding industrial
            environments, offering strength, precision, and long-term
            durability wherever heavy load handling is required.
          </p>
          <p>
            Our range covers both single-acting and double-acting hydraulic
            jacks, with lifting capacities from 5 Ton to as high as 1000
            Ton, and a maximum working pressure of 700 Bar. Each jack is
            manufactured using reputed imported seals to ensure leak-proof
            performance, smooth operation, and a longer service life even
            under continuous heavy-duty use. Designs are fully customizable
            as per customer requirements, allowing us to engineer jacks
            suited to specific load capacities, mounting configurations,
            and operating conditions.
          </p>
          <p>
            Our industrial hydraulic jacks are available in multiple
            configurations, including hand pump-operated models and jacks
            integrated with dedicated hydraulic power packs for
            higher-capacity, more controlled lifting operations. From
            compact 10-ton single-acting jacks with hand pumps to heavy
            300-ton double-acting jacks powered by hydraulic power packs,
            our product line is built to match a wide spectrum of
            industrial lifting needs.
          </p>
          <p>
            These jacks are widely used across construction sites, cement
            plants, steel and paper mills, railway maintenance sites, and
            other heavy industries where safe, accurate, and dependable
            load lifting is essential. Key features include easy
            installation, cost-effective operation, corrosion resistance,
            and long-lasting performance, making our jacks a preferred
            choice for industries handling heavy machinery, structural
            components, and large equipment.
          </p>
          <p>
            Backed by stringent quality control and an in-house R&amp;D
            team, HPP ensures every industrial hydraulic jack meets strict
            performance and safety standards before dispatch. As a
            reliable industrial hydraulic jack supplier serving clients
            across India, we combine engineering precision with responsive
            after-sales support to help industries carry out heavy lifting
            operations safely and efficiently.
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
