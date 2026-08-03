"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How does an air cooled oil cooler work?",
    answer:
      "An air cooled oil cooler uses finned tubes and a fan to pass ambient air over hot hydraulic oil, transferring heat from the oil to the air and lowering oil temperature without needing a water source.",
  },
  {
    question: "What is the ideal oil flow rate for an air cooled oil cooler?",
    answer:
      "The ideal oil flow rate depends on the system's cooling load, typically ranging from 1-22 LPM for compact units to 30-280 LPM for high-capacity industrial models handling heavier heat loads.",
  },
  {
    question: "Can an air cooled oil cooler work without a coolant tank?",
    answer:
      "Yes, many air cooled oil cooler models operate without a separate coolant tank, as the hydraulic oil itself acts as both lubricant and heat-transfer medium during the cooling process.",
  },
  {
    question: "What fan size is needed for effective oil cooling?",
    answer:
      "Fan size depends on the required cooling capacity — smaller units use 6-inch fans for lower oil flow (up to 22 LPM), while high-capacity coolers use 14 to 18-inch fans to handle oil flows above 200 LPM.",
  },
  {
    question: "Are air cooled oil coolers suitable for mobile equipment?",
    answer:
      "Yes, air cooled oil coolers with hydraulic motor-driven fans are commonly used in mobile equipment, stone crushers, and moving vehicles since they don't require a fixed water supply.",
  },
  {
    question: "Who is the best air cooled oil cooler manufacturer in India?",
    answer:
      "HPP is a leading air cooled oil cooler manufacturer in India, offering a wide range of models from compact 6-inch fan units to high-capacity 18-inch fan coolers for industrial, mobile, and heavy-duty applications.",
  },
  {
    question: "Which company supplies air cooled oil coolers for stone crusher machines?",
    answer:
      "HPP supplies air cooled oil coolers specifically designed for stone crusher machines, engineered to handle high heat loads and continuous operation in demanding crushing applications.",
  },
  {
    question: "Who is a trusted air cooled oil cooler supplier for cement plants?",
    answer:
      "HPP is a trusted air cooled oil cooler supplier for cement plants, providing offline cooling systems built for high ambient temperature and continuous industrial operation.",
  },
  {
    question: "Which manufacturer offers air cooled oil coolers in AC and DC power options?",
    answer:
      "HPP manufactures air cooled oil coolers available in both AC and DC power configurations, including 12V and 24V options, to suit different industrial and mobile power requirements.",
  },
  {
    question: "Where can I find a reliable air cooled oil cooler supplier near me in India?",
    answer:
      "HPP, based in New Delhi, is a reliable air cooled oil cooler supplier serving industries across India with a wide product range, custom solutions, and dedicated after-sales support.",
  },
];

const featuredProducts = [
  { name: "Offline Cooling System for Cement Plant", image: "1.png" },
  { name: "Offline Cooling System for Automobile Industry", image: "2.png" },
  { name: "Offline Cooling System for Gearbox", image: "3.png" },
  {
    name: "Air-Cooled Oil Cooler with Hydraulic Motor for Moving Vehicles",
    image: "4.png",
  },
  {
    name: "Air-Cooled Oil Cooler for Stone Crusher Machines",
    image: "5.png",
  },
  {
    name: "Air Cooled Oil Cooler for Stone Crushers Machines",
    image: "6.png",
  },
];

const modelSections = [
  {
    title: "HPP-L-608",
    description:
      "Our HPP-L-608 model helps protect hydraulic and electronic components from overheating. It is suitable for compact drain-line cooling, easy operation, and dependable performance in continuous-duty applications.",
    images: ["7.png", "8.jpg", "9.jpg"],
  },
  {
    title: "HPP-W-0608",
    description:
      "HPP-W-0608 is a D-cup cooler model designed for efficient oil cooling with compact fitment, dependable airflow, and simple installation for hydraulic systems.",
    images: ["10.jpg", "11.jpg", "12.png"],
  },
  {
    title: "HPP-W-0608-F2",
    description:
      "HPP-W-0608-F2 is a demanding cooling model built for improved heat dissipation, variable operating conditions, and reduced maintenance effort.",
    images: ["13.jpg", "14.jpg", "15.jpg"],
  },
  {
    title: "HPP-H-0608",
    description:
      "HPP-H-0608 is an efficient D-cup cooling model for hydraulic circuits that require compact cooling support and reliable thermal control.",
    images: ["16.jpg", "17.jpg", "18.jpg"],
  },
  {
    title: "HPP-H-0608-F2",
    description:
      "HPP-H-0608-F2 is designed for demanding oil-cooling applications where steady performance, strong construction, and easy serviceability are required.",
    images: ["19.jpg", "20.jpg", "21.jpg"],
  },
  {
    title: "HPP-H-1012,1P,3P&D12V&D24V",
    description:
      "This model range is suitable for hydraulic systems that need efficient D-cup cooling across AC, DC, single-phase, and three-phase power options.",
    images: ["22.jpg", "23.jpg", "24.jpg"],
  },
  {
    title: "HPP-H-1215-1P,3P,D12V & D24V",
    description:
      "HPP-H-1215 models are designed for higher cooling demand while maintaining compact installation and dependable operation.",
    images: ["25.jpg", "26.jpg", "27.jpg"],
  },
  
];

function ProductCard({ name, image }) {
  return (
    <Link
      href="/contact-us"
      className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-80 items-center justify-center bg-white p-6">
        <Image
          src={`/Air Cooled Oil Cooler/${image}`}
          alt={name}
          width={560}
          height={480}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-gray-50 px-6 py-5">
        <h3 className="min-h-[3rem] text-center text-base font-bold text-[#0d1b3f]">
          {name}
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
  );
}

function ModelSection({ title, description, images }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mx-auto mb-8 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-28 bg-gray-300" />
        <p className="mt-8 text-lg leading-8 text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ProductCard key={`${title}-${image}`} name={title} image={image} />
        ))}
      </div>
    </div>
  );
}

export default function AirCooledOilCoolerPage() {
  const title = "Air Cooled Oil Cooler";

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
              src="/products/air-cooled-oil-cooler/main.png"
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
              HPP Air-Cooled Oil Coolers are one of the most selling products.
              They are essential for maintaining the ideal temperature in
              hydraulic systems, extending component life, and reducing system
              downtime. Our coolers are built with high-efficiency finned tubes
              and electric or hydraulic-driven fans. They are easy to install
              and ideal for mobile equipment, compressors, and power units
              operating in high ambient temperature conditions. Designed for
              optimal heat dissipation and minimal energy consumption, our air
              coolers meet the cooling demands of various hydraulic circuits.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Air Cooled Oil Cooler</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore offline cooling systems and air cooled oil coolers
              engineered for hydraulic power units and industrial machines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.image} {...product} />
            ))}
          </div>
        </div>
      </div>

      {modelSections.map((section, index) => (
        <div
          key={section.title}
          className={index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}
        >
          <ModelSection {...section} />
        </div>
      ))}

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Air Cooled Oil Cooler Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a leading air cooled oil cooler manufacturer and supplier
            in India, offering high-efficiency cooling solutions to maintain
            optimal oil temperature in hydraulic systems. Built with
            high-efficiency finned tubes and electric or hydraulic-driven
            fans, our air-cooled oil coolers ensure reliable heat
            dissipation, extended component life, and reduced system
            downtime.
          </p>
          <p>
            Our range covers multiple models — from compact units like
            HPP-L-608 and HPP-W-0608 (oil flow 1-22 LPM) to high-capacity
            coolers like HPP-H-1490 and HPP-H-1890 (oil flow up to 280 LPM,
            fan sizes up to 18 inches) — available in AC/DC, single-phase,
            and three-phase configurations to suit different industrial
            loads.
          </p>
          <p>
            These coolers are ideal for mobile equipment, compressors,
            gearboxes, stone crushers, cement plants, and power units
            operating in high ambient temperature conditions, with easy
            installation and minimal energy consumption.
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
