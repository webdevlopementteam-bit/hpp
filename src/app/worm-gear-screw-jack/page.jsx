"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a worm gear screw jack used for?",
    answer:
      "A worm gear screw jack is used to lift, lower, position, or align heavy loads with precision by converting rotary motion from a motor or handwheel into controlled linear motion.",
  },
  {
    question: "What is the difference between upright and inverted screw jacks?",
    answer:
      "An upright screw jack has the lifting screw extending upward through the top of the gearbox, while an inverted screw jack has the screw extending downward, making it suitable for applications requiring space-saving or below-mounting configurations.",
  },
  {
    question: "Can worm gear screw jacks be synchronized for multi-point lifting?",
    answer:
      "Yes, multiple worm gear screw jacks can be synchronized using connecting shafts and a common drive source to achieve even, coordinated lifting across multiple points on large platforms or structures.",
  },
  {
    question: "What load capacity do worm gear screw jacks support?",
    answer:
      "Worm gear screw jack load capacity varies by model and gear ratio, ranging from a few hundred kilograms to several tonnes, and is selected based on the specific application's load and travel requirements.",
  },
  {
    question: "What is anti-backlash in a screw jack and why does it matter?",
    answer:
      "Anti-backlash in a screw jack minimizes play or looseness between the screw and nut, improving positioning accuracy and repeatability, which is critical for precision alignment applications.",
  },
  {
    question: "Who is the best worm gear screw jack manufacturer in India?",
    answer:
      "HPP is a leading worm gear screw jack manufacturer in India, offering upright, inverted, and double jack systems with manual, motorized, and servo-driven options for precision lifting applications.",
  },
  {
    question: "Which company supplies worm gear screw jacks for steel plants?",
    answer:
      "HPP supplies worm gear screw jacks engineered for steel plant applications, built with high-strength gears and load-holding capability to withstand heavy-duty industrial conditions.",
  },
  {
    question: "Who is a reliable worm gear screw jack supplier for conveyor systems?",
    answer:
      "HPP is a reliable worm gear screw jack supplier for conveyor systems, providing precision-engineered jacks for accurate height adjustment and alignment in material handling setups.",
  },
  {
    question: "Which manufacturer offers motorized worm gear screw jacks in India?",
    answer:
      "HPP manufactures motorized worm gear screw jacks in India, offering automated lifting solutions with servo-driven options for applications requiring precise, repeatable positioning control.",
  },
  {
    question: "Where can I find a trusted worm gear screw jack supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted worm gear screw jack supplier serving industries across India with custom engineering, manufacturing, and dedicated after-sales support.",
  },
];

const features = [
  "Accurate lifting and positioning",
  "Robust mechanical actuator design",
  "High-strength worm gear construction",
  "Load-holding capability",
  "Manual, motorized, and servo-driven options",
];

const applications = [
  "Steel plants",
  "Conveyors",
  "Aircraft maintenance systems",
  "Stage equipment",
  "Heavy-load alignment systems",
];

const products = [
  { name: "Worm Gear Screw Jack", image: "1.png" },
  { name: "Motorized Worm Gear Screw Jack", image: "2.png" },
  { name: "Upright Worm Gear Screw Jack", image: "3.png" },
];

export default function WormGearScrewJackPage() {
  const title = "Worm Gear Screw Jack";

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
              src="/products/worm-gear-screw-jack/main.png"
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
              Our Worm Gear Screw Jacks are robust mechanical actuators
              designed for accurate lifting, positioning, and aligning of
              heavy loads. These jacks convert rotary motion into linear
              motion and are widely used in steel plants, conveyors, aircraft
              maintenance systems, and stage equipment. Built with
              high-strength worm gears, anti-backlash options, and
              load-holding capabilities, our screw jacks are available in
              multiple configurations including upright, inverted, and double
              jack systems. With manual, motorized, and servo-driven input
              options, they offer exceptional versatility and reliability.
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold text-[#0d1b3f]">
              Features:
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Check size={18} className="text-[#f35a3b]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-gray-200">
          <div className="bg-[#e2582a] px-6 py-4">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Applications
            </h3>
          </div>
          {applications.map((application, index) => (
            <div
              key={application}
              className={`px-6 py-4 text-gray-700 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {application}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Worm Gear Screw Jack</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore worm gear screw jack configurations built for controlled
              lifting, positioning, and heavy-load alignment.
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
                    src={`/Worm Gear Screw Jack/${product.image}`}
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
          Worm Gear Screw Jack Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a leading worm gear screw jack manufacturer and supplier
            in India, engineering robust mechanical actuators built for
            accurate lifting, positioning, and precise alignment of heavy
            industrial loads. Our worm gear screw jacks convert rotary
            motion into controlled linear motion, delivering reliable,
            repeatable performance across a wide range of demanding
            industrial applications.
          </p>
          <p>
            Each screw jack is manufactured using high-strength worm gears,
            precision-machined components, and optional anti-backlash
            mechanisms to ensure minimal play and consistent positioning
            accuracy — even under heavy, continuous loads. Our
            load-holding capability ensures the jack maintains position
            safely without drift, which is critical for applications
            requiring sustained lifting or alignment over extended periods.
          </p>
          <p>
            We offer worm gear screw jacks in multiple configurations to
            match diverse mounting and operational requirements, including
            upright screw jacks, inverted screw jacks, and double jack
            systems for synchronized dual-point lifting. To suit different
            levels of automation and control, our jacks are available with
            manual, motorized, and servo-driven input options — giving
            industries the flexibility to choose between simple
            hand-operated systems and fully automated, precision-controlled
            lifting solutions.
          </p>
          <p>
            These worm gear screw jacks are widely used across heavy
            industries including steel plants, conveyor systems, aircraft
            maintenance equipment, and stage and theatrical equipment,
            where precise, dependable lifting and positioning is essential.
            Whether the requirement is single-point lifting for a machine
            base or synchronized multi-jack systems for large platforms,
            our screw jacks are engineered for durability, load stability,
            and long service life.
          </p>
          <p>
            Backed by an in-house R&amp;D team and stringent quality
            control processes, HPP designs and manufactures worm gear
            screw jacks tailored to specific load capacities, travel
            lengths, and mounting configurations. Every unit undergoes
            rigorous testing before dispatch to ensure it performs reliably
            in real-world industrial conditions across sectors such as
            manufacturing, construction, automation, and heavy engineering.
          </p>
          <p>
            As a trusted worm gear screw jack supplier serving clients
            across India, we combine precision engineering with responsive
            customer support, helping industries achieve safe, accurate,
            and efficient load handling for their most demanding lifting
            applications.
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
