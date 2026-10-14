"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a pneumatic cylinder?",
    answer:
      "A pneumatic cylinder is a mechanical actuator that uses compressed air to produce linear motion, converting the energy of compressed air into a push or pull force for automation, packaging, and assembly applications.",
  },
  {
    question: "What is the difference between pneumatic and hydraulic cylinders?",
    answer:
      "Pneumatic cylinders use compressed air and are lighter, faster, and better suited to lower-force, high-speed applications, while hydraulic cylinders use pressurized oil to deliver much higher force for heavy-duty, high-load operations.",
  },
  {
    question: "What bore sizes does HPP supply in pneumatic cylinders?",
    answer:
      "HPP supplies pneumatic cylinders in bore sizes ranging from 32mm to 600mm, with stroke lengths from 5mm to 8000mm, to suit a wide range of industrial applications.",
  },
  {
    question: "Are HPP pneumatic cylinders ISO standard?",
    answer:
      "Yes, HPP manufactures ISO-standard pneumatic cylinders, built with reputed imported seals and available in tie rod, welded, and mobile designs to meet international quality benchmarks.",
  },
  {
    question: "Can I use HPP pneumatic cylinders in food processing?",
    answer:
      "HPP pneumatic cylinders can be customized with food-safe materials and coatings for food processing environments — contact our team to discuss the specific hygiene and material requirements for your application.",
  },
  {
    question: "What operating pressure do HPP pneumatic cylinders support?",
    answer:
      "HPP pneumatic cylinders are designed to operate at pressures ranging from 5 to 35 Bar maximum, offering reliable performance across single-acting and double-acting configurations.",
  },
];

const applications = [
  "Hydraulic presses and stamping machines",
  "Paper mill press section",
  "Steel plant tilting and clamping mechanisms",
  "Construction crane and hoist systems",
  "Automation and robotic clamping fixtures",
  "Agricultural machinery and tractors",
  "Dock levellers and industrial lifts",
  "Mining and drilling equipment",
];

const features = [
  "It is cost effective",
  "Long Lasting",
  "Corrosion Resistant",
  "Custom compact designs.",
];

const specs = [
  "Type- Single acting / Double acting",
  "Bore size- 32mm - 600mm",
  "Stroke Length-5mm - 8000mm",
  "Working Pressure- 5 to 35 Bar Max.",
  "With reputed imported seals",
  "Design- Tie Rod, Welded, Mobile Design etc",
  "Mounting Type- front flange, rear flange, eye mounting, etc.",
];

const products = [
  { name: "Pneumatic Cylinder - Rear Flange with Fork", image: "1.webp" },
  { name: "Pneumatic Cylinder - Rear Clevis", image: "2.webp" },
  { name: "Pneumatic Cylinder - Tie Rod Design with Clevis", image: "3.webp" },
  { name: "Pneumatic Cylinder - Center Trunnion with Clevis", image: "4.webp" },
  { name: "Pneumatic Cylinder - Rear Clevis with Eye", image: "5.webp" },
  { name: "Pneumatic Cylinder - Rear Clevis with Eye Welded Design", image: "6.webp" },
];

export default function PneumaticCylinderPage() {
  const title = "Pneumatic Cylinder";

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
          <div className="overflow-hidden rounded-md bg-gray-100 p-10">
            <Image
              src="/products/pneumatic-cylinder/main.webp"
              alt="HPP Pneumatic Cylinder - industrial pneumatic actuator"
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
              Our <span className="font-semibold text-[#f35a3b]">Pneumatic Cylinders</span> are
              corrosion-resistant, and work efficient. They are ideal for
              automation processes, packaging machinery, and assembly lines.
              We offer ISO-standard cylinders in various bore sizes and
              stroke lengths. These cylinders are designed for fast cycling
              and low maintenance. We are delivering in MS and aluminum
              bodies, chrome plated rods, and durable seals. With both
              compact and heavy-duty versions available, our pneumatic
              cylinders provide excellent control and repeatability in
              high-speed operations.
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

        {/* Range table */}
        <div className="mt-16 overflow-hidden rounded-sm border border-gray-200">
          <div className="bg-[#e2582a] px-6 py-4">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Our Range in Pneumatic Cylinder
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

      {/* Products grid */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Pneumatic Cylinder</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our range of pneumatic cylinders built with different
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
                    src={`/products/pneumatic-cylinder/${product.image}`}
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

      {/* Applications & Industries */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-8 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Applications &amp; Industries
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {applications.map((application) => (
            <li
              key={application}
              className="flex items-start gap-3 text-lg text-gray-700"
            >
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f35a3b]/10">
                <Check size={14} className="text-[#f35a3b]" />
              </span>
              {application}
            </li>
          ))}
        </ul>
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
