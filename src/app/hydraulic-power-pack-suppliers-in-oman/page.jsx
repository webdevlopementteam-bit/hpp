"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const applications = [
  "Hydraulic presses",
  "Injection molding machines",
  "Material handling equipment",
  "Lifting systems",
  "Industrial automation",
  "Construction machinery",
  "Manufacturing equipment",
  "Hydro testing systems",
  "Straightening machines",
  "Steel and industrial plants",
];

const keyFeatures = [
  "Compact and robust construction",
  "Reliable pressure and flow control",
  "Efficient hydraulic operation",
  "Low-noise performance",
  "Easy maintenance",
  "Standard and customized configurations",
  "Durable components",
  "Suitable for continuous industrial operation",
];

const faqs = [
  {
    question: "What is a hydraulic power pack?",
    answer:
      "A hydraulic power pack is a self-contained hydraulic system that generates and controls hydraulic pressure and flow to operate cylinders, motors, presses, lifting systems, and other hydraulic equipment.",
  },
  {
    question: "What are the main components of a hydraulic power pack?",
    answer:
      "A hydraulic power pack generally includes a hydraulic pump, electric motor, oil reservoir, valves, filters, pressure gauges, and control components.",
  },
  {
    question: "Where are hydraulic power packs commonly used?",
    answer:
      "Hydraulic power packs are used in hydraulic presses, injection molding machines, lifting equipment, material handling systems, industrial automation, construction machinery, manufacturing equipment, and other hydraulic applications.",
  },
  {
    question: "Can HPP provide customized hydraulic power packs?",
    answer:
      "Yes. Hydraulic and Pneumatic Products (HPP) can provide customized hydraulic power pack configurations according to pressure, flow rate, motor capacity, reservoir size, mounting arrangement, and specific machine requirements.",
  },
  {
    question: "How do I choose the right hydraulic power pack?",
    answer:
      "The right power pack depends on the required operating pressure, hydraulic flow rate, motor power, reservoir capacity, application, operating cycle, and available installation space.",
  },
  {
    question: "What is the difference between a mobile and stationary hydraulic power pack?",
    answer:
      "A stationary hydraulic power pack is installed at a fixed location, while a mobile unit is designed for applications where the hydraulic power source needs to move with the equipment.",
  },
  {
    question: "Are hydraulic power packs suitable for heavy-duty applications?",
    answer:
      "Yes. Properly designed hydraulic power packs can be used for high-pressure and heavy-duty industrial applications where reliable hydraulic power is required for continuous or demanding operation.",
  },
  {
    question: "How can hydraulic power pack overheating be prevented?",
    answer:
      "Regular maintenance, correct hydraulic oil levels, clean filters, suitable cooling, proper system settings, and avoiding excessive loads can help prevent hydraulic power pack overheating.",
  },
  {
    question: "What maintenance does a hydraulic power pack require?",
    answer:
      "Routine maintenance includes checking hydraulic oil levels, inspecting hoses and fittings, monitoring pressure and temperature, cleaning or replacing filters, and checking the system for leakage or component wear.",
  },
  {
    question: "How can I find reliable Hydraulic Power Pack Suppliers in Oman?",
    answer:
      "Look for a supplier that offers quality components, customized solutions, suitable technical specifications, reliable performance, proper testing, and support based on your specific industrial application. Hydraulic and Pneumatic Products (HPP) provides standard and customized hydraulic power pack solutions for different industrial requirements.",
  },
];

const products = [
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "1.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with valve bank and pressure gauges",
  },
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "2.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with external motor frame and oil cooler",
  },
  { name: "Hydraulic Power Pack for Hydro Testers - Single Tube", image: "3.webp" },
  { name: "Hydraulic Power Pack for Hydro Testers - Triple Tube", image: "4.webp" },
  { name: "Hydraulic Power Pack for Ingot Cutting Machine", image: "5.webp" },
  { name: "Hydraulic Power Pack for Straightening Machine", image: "6.webp" },
  { name: "Hydraulic Power Pack For Hydro Tester", image: "7.webp" },
  { name: "Hydraulic Power Pack for Injection Moulding Machine", image: "8.webp" },
  { name: "Hydraulic Power Pack for Push Pointer", image: "9.webp" },
  { name: "Hydraulic Power Pack for Sugar Mill Industry", image: "10.webp" },
  { name: "Hydraulic Power Pack for CNC Clamp/De-Clamp", image: "11.webp" },
  { name: "Hydraulic Power Pack for Hydraulic Press", image: "12.webp" },
];

export default function HydraulicPowerPackPage() {
  const title = "Hydraulic Power Pack";

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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            Hydraulic Power Pack Suppliers in Oman
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
          <div className="overflow-hidden rounded-md bg-gray-100 p-10">
            <Image
              src="/products/hydraulic-power-pack/main.webp"
              alt="HPP Hydraulic Power Pack - industrial hydraulic power unit"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Top Hydraulic Power Pack Suppliers in Oman
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              Our{" "}
              <Link
                href="/hydraulic-power-pack"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Hydraulic Power Pack Suppliers in Oman
              </Link>{" "}
              offer compact,
              efficient, and reliable hydraulic power packs designed for a
              wide range of industrial applications. These systems are
              manufactured using quality components to provide consistent
              performance, durability, and reliable operation. Available
              in standard and customized configurations, our hydraulic
              power packs are commonly used in presses, injection molding
              machines, material handling equipment, lifting systems, and
              other industrial machinery. Key features include a modular
              design, easy maintenance, low noise operation, and accurate
              pressure control. Whether you need a mobile or stationary
              hydraulic power pack, we provide practical solutions
              tailored to your specific operational requirements.
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
                  <span className="text-[#f35a3b]">&gt;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Hydraulic Power Pack</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our range of custom-built hydraulic power packs
              engineered for specific industrial applications.
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
                    src={`/products/hydraulic-power-pack/${product.image}`}
                    alt={product.alt || product.name}
                    width={560}
                    height={480}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-gray-50 px-6 py-5">
                  <h3 className="text-center text-base font-bold text-[#0d1b3f]">
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
          Hydraulic Power Pack Suppliers in Oman
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            Hydraulic and Pneumatic Products (HPP) is a reliable name
            offering hydraulic power pack solutions for industries looking
            for efficient, durable, and application-specific hydraulic
            systems. As{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-[#f35a3b] hover:underline"
            >
              Hydraulic Power Pack Suppliers in Oman
            </Link>
            , HPP
            provides standard and customized power packs designed to
            deliver stable hydraulic pressure, smooth operation, and
            dependable performance across different industrial
            applications.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Reliable Hydraulic Power Packs for Industrial Applications
          </h4>
          <p>
            A hydraulic power pack is a compact, self-contained system
            used to generate and control hydraulic power for operating
            cylinders, hydraulic motors, presses, lifting equipment, and
            other machinery. A typical power pack consists of a hydraulic
            pump, electric motor, oil reservoir, valves, filters, pressure
            gauges, and control components.
          </p>
          <p>
            HPP designs hydraulic power packs with a focus on efficient
            operation, reliable pressure control, easy maintenance, and
            long service life. These systems can be configured according
            to the requirements of different machines and operating
            conditions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Standard and Customized Hydraulic Power Packs
          </h4>
          <p>
            Different machines require different hydraulic pressure, flow
            rates, motor capacities, reservoir sizes, and control
            arrangements. HPP offers both standard and customized
            hydraulic power pack configurations to meet these varying
            requirements.
          </p>
          <p>
            Customized units can be developed according to application
            needs, available installation space, mounting arrangement,
            operating pressure, flow requirements, and machine
            specifications. This makes HPP a practical choice for
            industries that require hydraulic power packs designed around
            their specific equipment.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Applications of Hydraulic Power Packs
          </h4>
          <p>
            Hydraulic power packs are widely used because they can
            provide controlled hydraulic power from a compact system. HPP
            hydraulic power packs are suitable for a variety of
            industrial applications, including:
          </p>
          <ul className="space-y-2">
            {applications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            A properly selected power pack helps provide consistent
            hydraulic performance and controlled machine movement.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Key Features of HPP Hydraulic Power Packs
          </h4>
          <p>
            HPP hydraulic power packs are built using quality components
            selected according to the application and operating
            requirements. Their compact construction makes them suitable
            for installations where space is limited, while their modular
            design allows easier access for maintenance and servicing.
          </p>
          <p>Key features include:</p>
          <ul className="space-y-2">
            {keyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            These features help support dependable machine performance
            while reducing unnecessary maintenance and operational
            interruptions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose HPP for Hydraulic Power Packs?
          </h4>
          <p>
            Choosing the right hydraulic power pack is important for
            maintaining machine efficiency and reliable operation.
            Hydraulic and Pneumatic Products (HPP) focuses on quality
            components, practical system design, and application-based
            hydraulic solutions.
          </p>
          <p>
            Whether you need a standard hydraulic power pack or a
            customized unit for a specific machine, HPP can provide a
            configuration based on your technical requirements. The
            company aims to supply dependable hydraulic solutions that
            offer efficient operation, durability, and long-term value
            for customers and industries in Oman.
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
