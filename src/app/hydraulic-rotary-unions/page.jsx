"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a hydraulic rotary union used for?",
    answer:
      "A hydraulic rotary union is used to transfer hydraulic fluid, water, or air from a stationary supply line to a rotating component, commonly used in rotating tables, clamping systems, and automated machinery.",
  },
  {
    question: "What is the difference between single-passage and double-passage rotary unions?",
    answer:
      "A single-passage rotary union transfers one fluid type through a single channel, while a double-passage rotary union allows two separate fluid paths through the same rotating union, useful for applications needing simultaneous flow and return lines.",
  },
  {
    question: "What causes leakage in a hydraulic rotary union?",
    answer:
      "Leakage in a hydraulic rotary union is typically caused by worn seals, misalignment between the rotating and stationary components, or excessive operating pressure beyond the union's rated capacity.",
  },
  {
    question: "What bearing types are used in hydraulic rotary unions?",
    answer:
      "Hydraulic rotary unions commonly use standard bearings for general-purpose applications and graphite bearings for higher-temperature or specialized operating conditions requiring reduced friction and better wear resistance.",
  },
  {
    question: "Can a hydraulic rotary union handle multiple fluid types?",
    answer:
      "Yes, many hydraulic rotary unions are designed to handle multiple fluid types including water, hydraulic oil, and air, with the appropriate seal materials selected based on the specific fluid used.",
  },
  {
    question: "Who is the best hydraulic rotary union manufacturer in India?",
    answer:
      "HPP is a leading hydraulic rotary union manufacturer in India, offering single-passage, double-passage, and multi-port rotary unions engineered for rotating tables, clamping systems, and automated machinery.",
  },
  {
    question: "Which company supplies custom hydraulic rotary unions in India?",
    answer:
      "HPP supplies custom hydraulic rotary unions in India, manufacturing units tailored to specific dimensional, pressure, and fluid-handling requirements for various industrial applications.",
  },
  {
    question: "Who is a reliable hydraulic rotary union supplier for automated machinery?",
    answer:
      "HPP is a reliable hydraulic rotary union supplier for automated machinery, providing precision-engineered unions with reliable bearings for smooth, leak-free continuous rotation.",
  },
  {
    question: "Which manufacturer offers multi-port hydraulic rotary unions in India?",
    answer:
      "HPP manufactures multi-port hydraulic rotary unions in India, designed to handle multiple simultaneous fluid passages within a compact footprint for advanced rotating equipment.",
  },
  {
    question: "Where can I find a trusted hydraulic rotary union supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted hydraulic rotary union supplier serving industries across India with custom engineering and after-sales support.",
  },
];

const features = [
  "Handles Water, Oil & Air",
  "Custom Sizes",
  "Strong Build",
  "Long Lasting",
  "Flexible Design",
  "Reliable Bearings",
];

const specs = [
  "From small units up to 2 inches",
  "Water, Hydraulic oil, and air",
  "Single passage rotary unions",
  "Double passage rotary unions",
  "Standard bearings and Graphite bearings",
];

const products = [
  { name: "Rotary Union", image: "1.png" },
  { name: "Rotary Union", image: "2.png" },
  { name: "Multi Port Hydraulic Rotary Union", image: "3.png" },
  { name: "Rotary Union", image: "4.png" },
  { name: "Rotary Union", image: "5.png" },
  { name: "Rotary Union", image: "6.png" },
];

export default function HydraulicRotaryUnionsPage() {
  const title = "Hydraulic Rotary Unions";

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
              src="/products/hydraulic-rotary-unions/main.png"
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
              Hydraulic Rotary Unions from HPP are engineered for the smooth
              transmission of hydraulic fluid from a stationary source to a
              rotating component. Designed to handle high pressures and
              multiple fluid passages, our rotary unions are used in rotating
              tables, clamping systems, and automated machinery. Precision
              seals, hardened components, and compact designs ensure leak-free
              and maintenance-friendly performance. Custom models are also
              available to meet specific dimensional or operational needs.
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
              Our Range in Hydraulic Rotary Union
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
              Our <span className="text-[#f35a3b]">Hydraulic Rotary Unions</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore single passage, double passage, and multi-port rotary
              unions for hydraulic oil, water, and air transfer applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link
                key={`${product.image}-${index}`}
                href="/contact-us"
                className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-80 items-center justify-center bg-white p-6">
                  <Image
                    src={`/Hydraulic Rotary Unions/${product.image}`}
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
          Hydraulic Rotary Union Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a trusted hydraulic rotary union manufacturer and
            supplier in India, engineering precision components designed
            for the smooth transmission of hydraulic fluid, water, or air
            from a stationary source to a rotating component. Our rotary
            unions are built to handle high pressures and multiple fluid
            passages, ensuring reliable, leak-free performance in
            continuous rotating applications.
          </p>
          <p>
            Widely used in rotating tables, clamping systems, and
            automated machinery, our hydraulic rotary unions are
            engineered with precision seals, hardened components, and
            compact designs that ensure durable, maintenance-friendly
            operation even under demanding industrial conditions. This
            allows fluid to be transferred efficiently between fixed
            piping and rotating equipment without leakage or performance
            loss, which is essential for machinery that requires
            continuous rotation combined with hydraulic or pneumatic
            actuation.
          </p>
          <p>
            Our rotary union range includes small units up to 2 inches,
            available in single-passage and double-passage configurations
            to handle water, hydraulic oil, and air depending on the
            application's requirements. We also offer both standard
            bearings and graphite bearings, allowing selection based on
            load, speed, and operating environment. For applications
            requiring higher fluid handling capacity or multiple
            simultaneous fluid paths, our multi-port hydraulic rotary
            unions provide an efficient solution within a compact
            footprint.
          </p>
          <p>
            Key features of our hydraulic rotary unions include the
            ability to handle water, oil, and air, custom sizing to match
            specific dimensional or operational needs, strong construction
            for long service life, flexible design options, and reliable
            bearing systems that ensure smooth rotation over extended use.
            Custom models are also available for applications with unique
            pressure, speed, or mounting requirements.
          </p>
          <p>
            Backed by an in-house R&amp;D team and stringent quality
            control, HPP manufactures hydraulic rotary unions that deliver
            consistent, leak-free performance across industrial automation
            and rotating machinery applications. As a reliable hydraulic
            rotary union supplier serving clients across India, we combine
            precision engineering with responsive technical support for
            demanding industrial rotation applications.
          </p>
          <p>📞 +91-9871456545 | ✉️ sales2@hppgroup.in</p>
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
