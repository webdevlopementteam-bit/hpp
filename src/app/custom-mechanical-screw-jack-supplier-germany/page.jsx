"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  {
    name: "Worm Gear Screw Jack",
    image: "1.png",
    alt: "HPP worm gear screw jacks with dual lifting screws and gearbox base, set of three",
  },
  {
    name: "Motorized Worm Gear Screw Jack",
    image: "2.png",
    alt: "HPP motorized worm gear screw jack with mounted electric motor drive",
  },
  {
    name: "Upright Worm Gear Screw Jack",
    image: "3.png",
    alt: "HPP upright worm gear screw jack with flange base mount",
  },
];

const configurations = [
  "Upright screw jacks – standard configuration for straightforward vertical lifting",
  "Inverted screw jacks – space-saving design suited for below-mounting applications",
  "Double jack systems – enabling synchronized dual-point lifting for large platforms and structures",
];

const faqs = [
  {
    question: "What is the difference between a standard and a custom mechanical screw jack?",
    answer:
      "A standard screw jack offers fixed specifications, while a custom mechanical screw jack is engineered around a specific application's load capacity, travel length, and mounting requirements to match exact machinery needs.",
  },
  {
    question: "How does an industrial worm gear lifting jack maintain load position without drift?",
    answer:
      "An industrial worm gear lifting jack maintains load position through its inherent load-holding capability, where the worm gear mechanism self-locks under load, preventing back-driving and unintended movement.",
  },
  {
    question: "What is anti-backlash in a worm gear screw jack and why does it matter?",
    answer:
      "Anti-backlash in a worm gear screw jack minimizes play or looseness between the screw and nut, improving positioning accuracy and repeatability, which is critical for precision alignment applications in automated systems.",
  },
  {
    question: "Can worm gear screw jacks be synchronized for multi-point lifting in large machinery?",
    answer:
      "Yes, multiple worm gear screw jacks can be synchronized using connecting shafts and a common drive source to achieve even, coordinated lifting across multiple points on large platforms or structures.",
  },
  {
    question: "What drive options are available for industrial worm gear lifting jacks?",
    answer:
      "Industrial worm gear lifting jacks are available with manual, motorized, and servo-driven input options, allowing selection based on required automation level, precision, and control complexity.",
  },
  {
    question: "Who is a Custom Mechanical Screw Jack Supplier serving Germany?",
    answer:
      "HPP is a Custom Mechanical Screw Jack Supplier serving Germany, engineering upright, inverted, and double jack systems with manual, motorized, and servo-driven options tailored to specific industrial applications.",
  },
  {
    question: "Which company manufactures industrial worm gear lifting jacks for German steel plants?",
    answer:
      "HPP manufactures industrial worm gear lifting jacks suited for German steel plants, built with high-strength gears and load-holding capability to withstand heavy-duty industrial conditions.",
  },
  {
    question: "Who supplies custom screw jacks for automated production lines in Germany?",
    answer:
      "HPP supplies custom screw jacks for automated production lines in Germany, offering servo-driven options for precise, repeatable positioning control in automated manufacturing environments.",
  },
  {
    question: "Which manufacturer offers synchronized multi-jack lifting systems for German industries?",
    answer:
      "HPP offers synchronized multi-jack lifting systems for German industries, engineering double jack configurations for coordinated dual-point lifting on large platforms and structures.",
  },
  {
    question: "Where can German buyers source a reliable industrial worm gear lifting jack supplier?",
    answer:
      "German buyers can source a reliable industrial worm gear lifting jack supplier through HPP, which provides custom engineering, rigorous testing, and export-ready logistics support for delivery across Germany and the EU.",
  },
];

export default function CustomMechanicalScrewJackSupplierGermanyPage() {
  const title =
    "Industrial Worm Gear Lifting Jack & Custom Mechanical Screw Jack Supplier Germany";

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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Products</span>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">
              Worm Gear Screw Jack
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
            <Image
              src="/products/worm-gear-screw-jack/main.png"
              alt="HPP Worm Gear Screw Jack - mechanical lifting actuator"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Top Industrial Worm Gear Lifting Jack &amp; Custom Mechanical
              Screw Jack Supplier Germany
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              As a leading{" "}
              <Link
                href="/worm-gear-screw-jack"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Custom Mechanical Screw Jack Supplier Germany
              </Link>
              , our Worm Gear Screw Jacks are robust mechanical actuators
              designed for accurate lifting, positioning, and aligning of
              heavy loads. These jacks convert rotary motion into linear
              motion and are widely used in steel plants, conveyors,
              aircraft maintenance systems, and stage equipment. Built with
              high-strength worm gears, anti-backlash options, and
              load-holding capabilities, our screw jacks are available in
              multiple configurations including upright, inverted, and
              double jack systems. With manual, motorized, and
              servo-driven input options, they offer exceptional
              versatility and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Products grid */}
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
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Custom Mechanical Screw Jack Supplier Germany | Industrial Worm
            Gear Lifting Jack Germany
          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              HPP (Hydraulic and Pneumatic Products) is a leading Custom
              Mechanical Screw Jack Supplier serving Germany, engineering
              robust mechanical actuators built for accurate lifting,
              positioning, and precise alignment of heavy industrial
              loads. As Germany's manufacturing, automotive, and heavy
              engineering sectors continue to demand higher precision and
              application-specific engineering, HPP has positioned itself
              as a dependable manufacturing partner capable of matching
              exact German industrial specifications rather than offering
              generic, standardized products.
            </p>
            <p>
              Our worm gear screw jacks convert rotary motion into
              controlled linear motion, delivering reliable, repeatable
              performance across a wide range of demanding industrial
              applications. As a trusted Industrial Worm Gear Lifting Jack
              supplier, we understand that German engineering standards
              place strong emphasis on dimensional accuracy, load
              stability, and long-term operational reliability —
              priorities that are built directly into our design and
              manufacturing process.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Precision Engineering for German Industrial Standards
            </h4>
            <p>
              Each screw jack is manufactured using high-strength worm
              gears, precision-machined components, and optional
              anti-backlash mechanisms to ensure minimal play and
              consistent positioning accuracy, even under heavy,
              continuous loads. Our load-holding capability ensures the
              jack maintains position safely without drift, which is
              critical for applications requiring sustained lifting or
              alignment over extended periods — a requirement frequently
              specified by German machine builders working on precision
              assembly lines, testing rigs, and structural positioning
              systems.
            </p>
            <p>
              As a Custom Mechanical Screw Jack Supplier, we work closely
              with German clients during the specification stage,
              engineering each jack around exact load, travel, and
              mounting requirements rather than expecting buyers to adapt
              their machinery to fixed catalog specifications.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Configurations Built for Flexible Integration
            </h4>
            <p>
              We offer worm gear screw jacks in multiple configurations to
              match diverse mounting and operational requirements:
            </p>
            <ul className="space-y-2">
              {configurations.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              To suit different levels of automation and control, our
              jacks are available with manual, motorized, and
              servo-driven input options, giving German industries the
              flexibility to choose between simple hand-operated systems
              and fully automated, precision-controlled lifting solutions
              — an important consideration as more German manufacturing
              facilities move toward automated production environments.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Applications Across German Industries
            </h4>
            <p>
              These worm gear screw jacks are widely used across heavy
              industries including steel plants, conveyor systems,
              aircraft maintenance equipment, and stage and theatrical
              equipment, where precise, dependable lifting and positioning
              is essential. Whether the requirement is single-point
              lifting for a machine base or synchronized multi-jack
              systems for large platforms, our screw jacks are engineered
              for durability, load stability, and long service life —
              meeting the operational demands common across Germany's
              automotive manufacturing, industrial automation, and heavy
              machinery sectors.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Quality Control and Engineering Support
            </h4>
            <p>
              Backed by an in-house R&amp;D team and stringent quality
              control processes, HPP designs and manufactures worm gear
              screw jacks tailored to specific load capacities, travel
              lengths, and mounting configurations. Every unit undergoes
              rigorous testing before dispatch to ensure it performs
              reliably in real-world industrial conditions across sectors
              such as manufacturing, construction, automation, and heavy
              engineering. This testing protocol is particularly important
              for German buyers, who typically require documented quality
              assurance before integrating components into critical
              machinery systems.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why German Buyers Choose a Custom Screw Jack Supplier
            </h4>
            <p>
              Working with a manufacturer that specializes in custom
              mechanical screw jack design, rather than offering only
              standardized products, gives German industrial buyers
              several practical advantages: jacks engineered to match
              exact machinery specifications, reduced integration
              complications during installation, and long-term
              reliability suited to demanding continuous-use environments.
              Our engineering team collaborates directly with clients
              from initial specification through final delivery, ensuring
              the jack design aligns with both operational performance
              expectations and application-specific requirements before
              production begins.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Supporting Long-Term Supply Relationships with Germany
            </h4>
            <p>
              As a trusted worm gear screw jack supplier serving clients
              across Germany, we combine precision engineering with
              responsive customer support, helping industries achieve
              safe, accurate, and efficient load handling for their most
              demanding lifting applications. Our manufacturing facility
              is equipped to handle export documentation, packaging, and
              logistics coordination for smooth, predictable delivery
              across Germany and the broader EU. Whether you require a
              single custom screw jack for a specific application or are
              establishing a long-term OEM supply partnership for
              recurring industrial demand, HPP is equipped to support
              German businesses with responsive engineering, competitive
              pricing, and consistent manufacturing quality.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-6 py-16 md:py-20">
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
