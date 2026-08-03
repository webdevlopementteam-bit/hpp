"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question:
      "What is the difference between a single-acting and double-acting hydraulic cylinder?",
    answer:
      "A single-acting hydraulic cylinder moves in one direction using hydraulic pressure and returns via spring or gravity, while a double-acting hydraulic cylinder uses hydraulic pressure for both extend and retract strokes, offering more controlled force in both directions.",
  },
  {
    question: "Why does a hydraulic cylinder leak oil?",
    answer:
      "A hydraulic cylinder leaks oil mainly due to worn or damaged seals, scored piston rods, misalignment, or excessive operating pressure beyond the cylinder's rated capacity.",
  },
  {
    question: "How do you choose the right hydraulic cylinder for an application?",
    answer:
      "Choosing the right hydraulic cylinder depends on required bore size, stroke length, operating pressure, mounting style (trunnion, flange, clevis), and the load and speed demands of the machine.",
  },
  {
    question: "What causes a hydraulic cylinder rod to bend or fail?",
    answer:
      "A hydraulic cylinder rod bends or fails due to side loading, misalignment, exceeding the rod's buckling limit, or using an undersized rod for the application's load requirements.",
  },
  {
    question: "How long do chrome-plated hydraulic cylinder rods last?",
    answer:
      "Chrome-plated hydraulic cylinder rods typically last several years under normal conditions, as the chrome layer resists corrosion and scoring, though lifespan depends on operating environment, load, and maintenance.",
  },
  {
    question: "Who is the best hydraulic cylinder manufacturer in India?",
    answer:
      "HPP is a leading hydraulic cylinder manufacturer in India, offering single-acting, double-acting, and custom-engineered cylinders with high-grade seals and chrome-plated rods, trusted by industrial clients including BHEL, ISGEC, and Jindal.",
  },
  {
    question: "Which company supplies custom hydraulic cylinders in India?",
    answer:
      "HPP supplies custom hydraulic cylinders in India, manufacturing tailored designs such as front trunnion, flange mounting, and rear clevis configurations to match specific industrial and mobile hydraulic applications.",
  },
  {
    question: "Who is a reliable hydraulic cylinder supplier for construction equipment?",
    answer:
      "HPP is a reliable hydraulic cylinder supplier for construction equipment, delivering corrosion-resistant, high-pressure cylinders engineered for long service life in heavy-duty construction machinery.",
  },
  {
    question: "Which hydraulic cylinder manufacturer offers cylinders for hydraulic presses?",
    answer:
      "HPP manufactures hydraulic cylinders specifically designed for hydraulic press applications, built for high-force output, durability, and precision under continuous industrial use.",
  },
  {
    question: "Where can I find a trusted hydraulic cylinder supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted hydraulic cylinder supplier serving industries across India with manufacturing, custom design, and after-sales support.",
  },
];

const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const products = [
  { name: "Hydraulic Cylinder - Front Trunnion", image: "1.png" },
  { name: "Hydraulic Cylinder - Front Flange Mounting", image: "2.png" },
  { name: "Hydraulic Cylinder - Rear Clevis (Double Eye)", image: "3.png" },
  { name: "Hydraulic Cylinder - Customize", image: "4.png" },
  { name: "Hydraulic Cylinder -for Hydraulic Press", image: "5.png" },
  { name: "Hydraulic Cylinder -Welded Design Round Flange", image: "6.png" },
];

export default function HydraulicCylinderPage() {
  const title = "Hydraulic Cylinder";

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
          <div className="overflow-hidden rounded-md bg-gray-100 p-10">
            <Image
              src="/products/hydraulic-cylinder/main.png"
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
              We manufacture a comprehensive range of Hydraulic Cylinders and
              Jacks engineered for strength, precision, and long service
              life. Our products are available in single-acting,
              double-acting and customized designs to suit various
              applications and different industries. These cylinders are
              used in industrial automation, construction equipment,
              presses, and mobile hydraulics. Each unit is built with
              high-grade seals and chrome plated rods to prevent rusting,
              leakage and ensure smooth operation under high pressure. With
              stringent quality control, our hydraulic cylinders deliver
              consistent performance even in the most demanding
              environments.
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
              Our <span className="text-[#f35a3b]">Hydraulic Cylinder</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our range of hydraulic cylinders built with different
              mounting and end designs to suit your application.
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
                    src={`/products/hydraulic-cylinder/${product.image}`}
                    alt={product.name}
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
        <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Hydraulic Cylinder Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a trusted hydraulic cylinder manufacturer and supplier in
            India, delivering precision-engineered cylinders built for
            strength, durability, and consistent performance. We manufacture
            single-acting, double-acting, and fully customized hydraulic
            cylinders — including front trunnion, front flange mounting,
            rear clevis (double eye), welded round flange, and
            press-application designs.
          </p>
          <p>
            Each cylinder is built with high-grade seals and chrome-plated
            rods to resist corrosion and leakage, ensuring smooth, reliable
            operation even under high pressure and demanding industrial
            conditions. Our hydraulic cylinders are widely used across
            industrial automation, construction equipment, hydraulic
            presses, and mobile hydraulics.
          </p>
          <p>
            Backed by stringent quality control and an in-house R&amp;D
            team, HPP supplies hydraulic cylinders to industries across
            India, offering custom sizing, easy installation, low operating
            cost, and long service life.
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
