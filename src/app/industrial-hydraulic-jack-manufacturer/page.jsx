"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question:
      "What is the difference between single-acting and double-acting hydraulic jacks?",
    answer:
      "A single-acting hydraulic jack uses hydraulic pressure to lift the load, but relies on spring force or gravity to retract, while a double-acting hydraulic jack uses hydraulic pressure for both lifting and lowering, offering more controlled operation for heavier or more precise applications.",
  },

  {
    question: "Why does a hydraulic jack fail to lift a load?",
    answer:
      "A hydraulic jack may fail to lift a load due to low hydraulic fluid levels, air trapped in the system, worn or damaged seals, an overloaded capacity beyond its rated limit, or a faulty pump mechanism — regular maintenance helps prevent most of these issues.",
  },

  {
    question:
      "How do you maintain an industrial hydraulic jack for long service life?",
    answer:
      "Maintaining an industrial hydraulic jack involves regularly checking hydraulic fluid levels, inspecting seals for wear or leakage, keeping the jack clean from dust and debris, avoiding overloading beyond rated capacity, and storing it properly when not in use.",
  },

  {
    question: "What industries commonly use industrial hydraulic jacks?",
    answer:
      "Industrial hydraulic jacks are commonly used in construction sites, cement plants, steel and paper mills, railway maintenance operations, and other heavy industries where safe and accurate lifting of large loads is required.",
  },

  {
    question: "Who is the best industrial hydraulic jack manufacturer in India?",
    answer:
      "HPP (Hydraulic & Pneumatic Products) is a leading industrial hydraulic jack manufacturer in India, offering single-acting and double-acting jacks with capacities from 5 Ton to 1000 Ton, built for reliable performance across heavy industries.",
  },

  {
    question:
      "Which company supplies high-capacity hydraulic jacks for cement plants?",
    answer:
      "HPP supplies high-capacity industrial hydraulic jacks suited for cement plant operations, engineered to handle heavy structural and equipment lifting with reliable, leak-proof performance under continuous industrial use.",
  },

  {
    question:
      "Who is a reliable industrial hydraulic jack supplier for railway maintenance?",
    answer:
      "HPP is a reliable industrial hydraulic jack supplier for railway maintenance applications, offering rugged jacks designed for safe, accurate lifting during track and equipment maintenance work.",
  },

  {
    question:
      "Which manufacturer offers custom industrial hydraulic jacks in India?",
    answer:
      "HPP offers fully customized industrial hydraulic jacks in India, engineered as per customer requirements to match specific load capacities, mounting configurations, and operating conditions.",
  },

  {
    question:
      "Where can I find a trusted industrial hydraulic jack supplier near me in India?",
    answer:
      "HPP supplies industrial hydraulic jacks across India with a strong presence in Delhi NCR, offering direct manufacturer support, custom design options, and fast delivery for construction, cement, mill, and railway applications.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

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
  const title = "Industrial Hydraulic Jack Manufacturer";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              alt="HPP Industrial Hydraulic Jack - heavy-duty hydraulic lifting jack"
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
             As a leading <Link href="/hydraulic-press" className="font-semibold text-[#f35a3b] hover:underline">industrial hydraulic jack manufacturer</Link>, we design jacks that lift and support heavy loads using controlled hydraulic force. The primary lifting mechanism depends on the type of jack, but each one is engineered to handle demanding load requirements safely. Designs from our industrial hydraulic jacks are used in construction sites, cement plants, different mills, railway sites, and many other heavy industries

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
        <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
 Industrial Hydraulic Jack Manufacturer & Supplier in Delhi
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
           HPP is a trusted <Link href="/hydraulic-press" className="font-semibold text-[#f35a3b] hover:underline">industrial hydraulic jack manufacturer</Link> in Delhi, supplying high-capacity jacks to construction companies, cement plants, steel and paper mills, and railway maintenance contractors across Delhi NCR. As one of North India's busiest industrial and infrastructure hubs, Delhi NCR sees continuous demand for dependable heavy-lifting equipment, and HPP's regional presence allows us to deliver faster turnaround and more responsive support compared to sourcing from outside the region.

          </p>
          <p>
           As a reliable industrial hydraulic jack supplier in Delhi, we work directly with contractors, fabricators, and maintenance teams who need jacks they can depend on for safe, accurate load handling. Our team helps customers choose the right configuration based on load capacity, whether single-acting or double-acting operation is needed, and whether a hand pump or an integrated hydraulic power pack is better suited to the application — ensuring the final solution matches real site conditions, not just a catalog specification. Our <Link href="/hydraulic-press" className="font-semibold text-[#f35a3b] hover:underline">industrial hydraulic jack manufacturer</Link> capabilities also support heavy lifting equipment requirements.

          </p>
         
  <h4 className="font-bold text-2xl">Our Industrial Hydraulic Jack Range — A Quick Overview</h4>

  <p>
    HPP manufactures industrial hydraulic jacks across a wide range of
    capacities and configurations, suited to different lifting requirements:
  </p>

  <ul>
    <li>
      <strong>10 Ton Single Acting with Hand Pump</strong> — A compact,
      manually operated jack ideal for lighter lifting tasks, maintenance work,
      and applications where portability matters.
    </li>

    <li>
      <strong>25, 50, 100 Ton Single Acting with Hand Pump</strong> — A
      mid-to-heavy capacity range designed for structural lifting, equipment
      positioning, and general heavy-industry use.
    </li>

    <li>
      <strong>50 Ton Single Acting with Hand Pump</strong> — Suited for
      consistent, moderate-to-heavy load lifting where manual hand pump control
      is preferred.
    </li>

    <li>
      <strong>100 Ton Single Acting with Hand Pump</strong> — Built for
      higher-capacity lifting tasks that still rely on manual hand pump
      operation for precise control.
    </li>

    <li>
      <strong>200 Ton Double Acting with Hand Pump</strong> — A double-acting
      design offering controlled lifting and lowering, suited for heavier
      structural and industrial applications.
    </li>

    <li>
      <strong>300 Ton Double Acting with Hydraulic Power Pack</strong> — Our
      highest-capacity configuration, integrated with a hydraulic power pack for
      powered, controlled lifting of extremely heavy loads in demanding
      industrial environments.
    </li>
  </ul>

  <p>
    All jacks in our range — from 5 Ton up to 1000 Ton capacity — are
    manufactured using reputed imported seals for leak-proof performance, with
    a maximum working pressure of up to 700 Bar. Designs can also be fully
    customized as per specific customer requirements, covering unique load
    capacities, mounting needs, and operating conditions common across Delhi
    NCR's diverse industrial base.
  </p>



  <h4 className="font-bold text-2xl">Why Delhi-Based Industries Choose HPP</h4>

  <ul>
    <li>
      <strong>Faster delivery within Delhi NCR</strong> — Reduced logistics
      time, which matters directly for construction and maintenance schedules
      where downtime is costly.
    </li>

    <li>
      <strong>On-ground technical support</strong> — Guidance on selecting the
      right capacity, acting type, and pump configuration for the specific
      application.
    </li>

    <li>
      <strong>Wide product range</strong> — From compact 10-ton hand pump jacks
      to 300-ton power pack-driven systems, covering a broad spectrum of
      industrial lifting needs.
    </li>

    <li>
      <strong>Direct manufacturer pricing</strong> — No distributor markup,
      keeping costs predictable for large infrastructure and industrial
      projects.
    </li>

    <li>
      <strong>Proven track record</strong> — An established supply history with
      construction sites, cement plants, mills, and railway maintenance
      operations across the Delhi NCR region.
    </li>
  </ul>

  <p>
    If you're looking for an
    <strong> <Link href="/hydraulic-press" className="text-[#f35a3b] hover:underline">industrial hydraulic jack manufacturer</Link> in Delhi</strong> who can
    supply both standard and custom-engineered jacks with reliable after-sales
    support, HPP's manufacturing precision, wide capacity range, and regional
    presence make us a dependable choice for heavy-lifting equipment needs.
  </p>

  <p>
    📞 <strong>+91-9871456545</strong> |
    ✉️ <a href="mailto:sales2@hppgroup.in">sales2@hppgroup.in</a>
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
