"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "Who are the best Hydraulic Jack Suppliers in Oman?",
    answer:
      "HPP is among the trusted Hydraulic Jack Suppliers in Oman, providing durable, heavy-duty hydraulic jacks for construction, automotive, oil & gas, manufacturing, and industrial lifting applications.",
  },
  {
    question: "Where can I buy industrial hydraulic jacks in Oman?",
    answer:
      "You can purchase high-quality industrial hydraulic jacks from HPP, offering reliable lifting equipment with excellent performance, competitive pricing, and timely delivery across Oman.",
  },
  {
    question: "What industries use hydraulic jacks in Oman?",
    answer:
      "Hydraulic jacks are widely used in the oil & gas industry, automotive workshops, construction companies, manufacturing plants, mining operations, marine engineering, and infrastructure projects throughout Oman.",
  },
  {
    question: "Why choose HPP for hydraulic jacks in Oman?",
    answer:
      "HPP offers premium-quality hydraulic jacks, robust engineering, durable construction, competitive pricing, expert support, and dependable delivery, making it a preferred supplier for industrial businesses in Oman.",
  },
  {
    question: "Does HPP supply hydraulic jacks across Oman?",
    answer:
      "Yes. HPP supplies hydraulic jacks to customers across Oman, serving businesses in Muscat, Sohar, Salalah, Nizwa, Duqm, Sur, and other industrial regions.",
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

const solutionHighlights = [
  "High lifting capacity",
  "Heavy-duty steel construction",
  "Leak-resistant hydraulic system",
  "Smooth lifting and lowering operation",
  "Corrosion-resistant finish",
  "Long operational life",
  "Low maintenance requirements",
  "Enhanced workplace safety",
];

const industriesServed = [
  "Oil & Gas",
  "Construction Companies",
  "Automotive Service Centers",
  "Manufacturing Plants",
  "Heavy Equipment Maintenance",
  "Mining Industry",
  "Marine & Shipyards",
  "Infrastructure Projects",
  "Logistics & Warehousing",
  "Industrial Engineering Companies",
];

const whyChooseUs = [
  {
    title: "Superior Quality",
    description:
      "Every hydraulic jack is manufactured using premium-grade components that comply with international quality standards.",
  },
  {
    title: "Wide Product Range",
    description:
      "We supply various hydraulic lifting solutions suitable for different industrial applications and lifting capacities.",
  },
  {
    title: "Durable Performance",
    description:
      "Our hydraulic jacks are built for continuous heavy-duty operation while maintaining excellent lifting efficiency.",
  },
  {
    title: "Competitive Pricing",
    description:
      "HPP offers cost-effective hydraulic lifting solutions without compromising product quality.",
  },
  {
    title: "Fast Delivery",
    description:
      "We ensure timely delivery of hydraulic jacks throughout Oman to minimize downtime for your operations.",
  },
  {
    title: "Technical Support",
    description:
      "Our experienced team helps customers select the right hydraulic jack based on their lifting requirements.",
  },
];

const jackApplications = [
  "Heavy machinery installation",
  "Vehicle lifting",
  "Industrial maintenance",
  "Equipment alignment",
  "Construction projects",
  "Plant shutdown maintenance",
  "Structural lifting",
  "Bridge maintenance",
  "Mining equipment servicing",
  "Marine engineering",
];

const qualityAssurance = [
  "Safe lifting operation",
  "High load stability",
  "Reliable hydraulic performance",
  "Long-lasting durability",
  "Excellent operational efficiency",
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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            Hydraulic Jack Suppliers in Oman
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
              alt="HPP Industrial Hydraulic Jack - heavy-duty hydraulic lifting jack"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Hydraulic Jack Suppliers in Oman
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <div className="space-y-4 text-lg leading-8 text-gray-600">
              <p>
                Hydraulic jacks play an essential role in lifting,
                positioning, and supporting heavy equipment across
                industries. From automotive workshops and construction
                sites to oil &amp; gas facilities, manufacturing plants,
                and logistics companies, hydraulic jacks are trusted for
                their strength, precision, and reliability. If you are
                looking for{" "}
                <Link
                  href="/industrial-hydraulic-jack"
                  className="font-semibold text-[#f35a3b] hover:underline"
                >
                  Hydraulic Jack Suppliers in Oman
                </Link>
                , choosing a
                supplier that offers premium quality products and
                dependable after-sales support is crucial.
              </p>
              <p>
                HPP is a trusted manufacturer and supplier of
                high-performance hydraulic jacks designed to meet the
                demanding requirements of industrial applications in
                Oman. Our products are manufactured using premium-grade
                materials and advanced engineering standards to ensure
                maximum durability, safety, and long service life.
              </p>
            </div>

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
        <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Hydraulic Jack Suppliers in Oman
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <h4 className="text-xl font-bold text-[#0d1b3f]">
            Premium Hydraulic Jack Solutions for Oman
          </h4>
          <p>
            At HPP, we understand that every industry has different
            lifting requirements. Whether you need hydraulic jacks for
            equipment maintenance, industrial installations, construction
            projects, or heavy machinery servicing, we provide reliable
            solutions that deliver consistent performance.
          </p>
          <p>Our hydraulic jacks are known for:</p>
          <ul className="space-y-2">
            {solutionHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Each hydraulic jack is thoroughly tested before delivery to
            ensure dependable performance even under challenging working
            conditions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Industries We Serve in Oman
          </h4>
          <p>
            HPP supplies hydraulic jacks to a wide range of industries
            across Oman, including:
          </p>
          <ul className="space-y-2">
            {industriesServed.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Our lifting equipment is designed to perform efficiently in
            demanding industrial environments.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose HPP as Your Hydraulic Jack Supplier in Oman?
          </h4>
          <p>
            Businesses across Oman trust HPP because we focus on quality,
            reliability, and customer satisfaction.
          </p>
          <div className="space-y-4">
            {whyChooseUs.map((item) => (
              <div key={item.title}>
                <p className="font-bold text-[#0d1b3f]">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Applications of Hydraulic Jacks
          </h4>
          <p>Our hydraulic jacks are widely used for:</p>
          <ul className="space-y-2">
            {jackApplications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Quality You Can Depend On
          </h4>
          <p>
            At HPP, quality is our highest priority. Every hydraulic jack
            undergoes strict quality inspection to ensure:
          </p>
          <ul className="space-y-2">
            {qualityAssurance.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Our commitment to engineering excellence has made HPP a
            preferred hydraulic equipment supplier for industrial
            customers.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Looking for Reliable Hydraulic Jack Suppliers in Oman?
          </h4>
          <p>
            If your business requires dependable hydraulic lifting
            solutions, HPP offers high-quality hydraulic jacks that
            combine strength, durability, and precision. Whether you
            require standard models or customized lifting solutions, our
            team is ready to help you find the right equipment for your
            industrial applications.
          </p>
          <p>
            Choose HPP for premium hydraulic jacks that deliver reliable
            performance, superior safety, and long-term value for
            businesses across Oman.
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
