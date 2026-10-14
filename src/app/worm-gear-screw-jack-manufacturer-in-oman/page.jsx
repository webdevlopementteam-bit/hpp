"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a worm gear screw jack?",
    answer:
      "A worm gear screw jack is a mechanical actuator that converts rotary input into controlled linear movement for lifting, lowering, positioning, or aligning loads.",
  },
  {
    question: "Where are worm gear screw jacks used?",
    answer:
      "They are commonly used in steel plants, conveyors, aircraft maintenance systems, stage equipment, lifting platforms, industrial machinery, automation systems, and material handling applications.",
  },
  {
    question: "What are the main benefits of worm gear screw jacks?",
    answer:
      "They provide controlled linear movement, accurate positioning, reliable load holding, and flexible installation options for various industrial lifting applications.",
  },
  {
    question: "Can worm gear screw jacks be used for heavy loads?",
    answer:
      "Yes. Properly selected and designed screw jacks can be used for heavy-duty lifting and positioning applications. The required load capacity should be considered before selecting a suitable model.",
  },
  {
    question: "What types of screw jack configurations are available?",
    answer:
      "Common configurations include upright, inverted, and double jack arrangements. The suitable configuration depends on the machine design, mounting position, and lifting requirements.",
  },
  {
    question: "Can screw jacks be operated with a motor?",
    answer:
      "Yes. Screw jacks can be operated using manual, motorized, or servo-driven input systems depending on the required speed, control, and automation level.",
  },
  {
    question: "Can HPP provide customized screw jacks?",
    answer:
      "Yes. Hydraulic and Pneumatic Products (HPP) can provide screw jack solutions according to specific application requirements such as load, travel, mounting arrangement, input type, and operating conditions.",
  },
  {
    question: "How do worm gear screw jacks provide load holding?",
    answer:
      "The worm gear and screw mechanism can provide controlled movement and load-holding characteristics. The actual load-holding capability depends on the screw jack design, load, configuration, and operating conditions.",
  },
  {
    question: "How do I choose the right worm gear screw jack?",
    answer:
      "Selection depends on factors such as load capacity, lifting speed, travel length, mounting arrangement, input method, duty cycle, and required positioning accuracy.",
  },
  {
    question: "How can I find a reliable Worm Gear Screw Jack Manufacturer in Oman?",
    answer:
      "Choose a manufacturer that offers suitable load capacities, reliable construction, different configurations, customization options, and technical support. Hydraulic and Pneumatic Products (HPP) provides screw jack solutions for various industrial lifting and positioning applications.",
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

const contentApplications = [
  "Steel plants",
  "Conveyors",
  "Industrial machinery",
  "Aircraft maintenance systems",
  "Stage equipment",
  "Material handling systems",
  "Lifting platforms",
  "Positioning systems",
  "Automation equipment",
  "Heavy-duty machinery",
];

const contentKeyFeatures = [
  "Accurate linear movement",
  "Reliable load holding",
  "High-strength worm gear mechanism",
  "Compact and robust construction",
  "Low maintenance requirements",
  "Multiple mounting configurations",
  "Manual and motorized input options",
  "Suitable for heavy-duty applications",
  "Customized solutions available",
];

const products = [
  {
    name: "Worm Gear Screw Jack",
    image: "1.webp",
    alt: "HPP worm gear screw jacks with dual lifting screws and gearbox base, set of three",
  },
  {
    name: "Motorized Worm Gear Screw Jack",
    image: "2.webp",
    alt: "HPP motorized worm gear screw jack with mounted electric motor drive",
  },
  {
    name: "Upright Worm Gear Screw Jack",
    image: "3.webp",
    alt: "HPP upright worm gear screw jack with flange base mount",
  },
];

export default function WormGearScrewJackPage() {
  const title = "Worm Gear Screw Jack";

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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            Worm Gear Screw Jack Manufacturer
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
              src="/products/worm-gear-screw-jack/main.webp"
              alt="HPP Worm Gear Screw Jack - mechanical lifting actuator"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Worm Gear Screw Jack Manufacturer in Oman
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              As a{" "}
              <Link
                href="/worm-gear-screw-jack"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Worm Gear Screw Jack Manufacturer in Oman
              </Link>
              , we provide
              robust mechanical actuators designed for accurate lifting,
              positioning, and alignment of heavy loads. Our worm gear
              screw jacks convert rotary motion into controlled linear
              motion and are widely used in steel plants, conveyors,
              aircraft maintenance systems, and stage equipment. Built
              with high-strength worm gears, anti-backlash options, and
              reliable load-holding capabilities, our screw jacks are
              available in upright, inverted, and double jack
              configurations. With manual, motorized, and servo-driven
              input options, they offer excellent versatility, precise
              movement, and reliable performance for various industrial
              applications.
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
                    alt={product.alt}
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
          Worm Gear Screw Jack Manufacturer in Oman
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            Hydraulic and Pneumatic Products (HPP) is a reliable Worm Gear
            Screw Jack Manufacturer in Oman, offering robust mechanical
            lifting solutions for accurate positioning, lifting, lowering,
            and alignment of heavy loads. Our worm gear screw jacks are
            designed for industrial applications where controlled linear
            movement, reliable load holding, and precise positioning are
            required.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Reliable Worm Gear Screw Jacks for Industrial Applications
          </h4>
          <p>
            A worm gear screw jack converts rotary motion into linear
            movement through a worm gear mechanism and screw assembly.
            This allows heavy loads to be lifted, lowered, positioned, or
            aligned with controlled movement. These screw jacks are
            suitable for applications where accuracy, stability, and
            dependable mechanical operation are important.
          </p>
          <p>
            HPP provides worm gear screw jacks in different configurations
            to meet the requirements of various machines and industrial
            systems. Their compact construction also makes them suitable
            for installations where controlled lifting movement is
            required within limited space.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Applications of Worm Gear Screw Jacks
          </h4>
          <p>
            Worm gear screw jacks are used across industries for lifting
            and positioning applications. HPP screw jacks are suitable
            for:
          </p>
          <ul className="space-y-2">
            {contentApplications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            They can be used individually or as part of synchronized
            lifting systems where multiple points need to move together.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Key Features of HPP Screw Jacks
          </h4>
          <p>
            HPP worm gear screw jacks are designed with strong mechanical
            components to provide reliable performance under demanding
            working conditions. High-strength worm gears help provide
            smooth power transmission, while suitable configurations can
            offer reliable load holding and controlled movement.
          </p>
          <p>Key features include:</p>
          <ul className="space-y-2">
            {contentKeyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Different Screw Jack Configurations
          </h4>
          <p>
            Depending on the machine layout and lifting requirements,
            screw jacks can be installed in different configurations.
            Upright and inverted arrangements can be selected according
            to the available mounting position and direction of movement.
            Double jack arrangements can also be used where synchronized
            lifting or positioning is required.
          </p>
          <p>
            HPP can help select a suitable screw jack configuration
            according to load capacity, travel length, speed, mounting
            arrangement, and operating conditions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Manual, Motorized and Servo-Driven Options
          </h4>
          <p>
            Different applications require different methods of
            operation. Manual input can be suitable for simple lifting
            and positioning tasks, while motorized systems can provide
            powered movement for industrial equipment. Servo-driven
            arrangements can be considered where greater control and
            accurate positioning are required.
          </p>
          <p>
            The appropriate input method depends on the required lifting
            speed, operating frequency, load, and level of automation.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose HPP?
          </h4>
          <p>
            Hydraulic and Pneumatic Products (HPP) focuses on providing
            dependable mechanical and hydraulic solutions for industrial
            applications. Our screw jack solutions are designed with
            attention to strength, accuracy, durability, and application
            requirements.
          </p>
          <p>
            If you need a{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-[#f35a3b] hover:underline"
            >
              Worm Gear Screw Jack Manufacturer in Oman
            </Link>
            , HPP
            can provide reliable screw jack solutions for lifting,
            positioning, alignment, and other industrial applications.
            Standard and application-specific configurations can be
            selected according to your equipment and operating
            requirements.
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
