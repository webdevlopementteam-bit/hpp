"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "1.png",
    alt: "HPP hydraulic power pack for rolling mill industry with valve bank and pressure gauges",
  },
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "2.png",
    alt: "HPP hydraulic power pack for rolling mill industry with external motor frame and oil cooler",
  },
  { name: "Hydraulic Power Pack for Hydro Testers - Single Tube", image: "3.png" },
  { name: "Hydraulic Power Pack for Hydro Testers - Triple Tube", image: "4.png" },
  { name: "Hydraulic Power Pack for Ingot Cutting Machine", image: "5.png" },
  { name: "Hydraulic Power Pack for Straightening Machine", image: "6.png" },
  { name: "Hydraulic Power Pack For Hydro Tester", image: "7.png" },
  { name: "Hydraulic Power Pack for Injection Moulding Machine", image: "8.png" },
  { name: "Hydraulic Power Pack for Push Pointer", image: "9.png" },
  { name: "Hydraulic Power Pack for Sugar Mill Industry", image: "10.png" },
  { name: "Hydraulic Power Pack for CNC Clamp/De-Clamp", image: "11.png" },
  { name: "Hydraulic Power Pack for Hydraulic Press", image: "12.png" },
];

const keyFeatures = [
  "Modular design – simplifies servicing, upgrades, and future capacity adjustments",
  "Ease of maintenance – reduces downtime and lowers long-term operating costs",
  "Low noise levels – suited for indoor manufacturing environments with strict workplace noise standards",
  "Reliable pressure control – ensures consistent performance across varying load conditions",
];

const applications = [
  "Industrial presses for metal forming and manufacturing",
  "Injection molding machines for plastics and component production",
  "Material-handling equipment used in warehousing and logistics",
  "Lifting systems for construction, mining, and heavy industry",
  "Mobile hydraulic applications for forestry and off-road equipment",
];

const faqs = [
  {
    question: "What is the difference between a standard and a custom hydraulic power pack?",
    answer:
      "A standard hydraulic power pack offers fixed specifications, while a custom hydraulic power pack is engineered around a specific application's flow rate, pressure, tank capacity, and motor requirements to match exact machinery needs.",
  },
  {
    question: "How does cold climate affect hydraulic power pack performance?",
    answer:
      "Cold climate can increase oil viscosity and stiffen seals, which can reduce hydraulic efficiency and increase wear if the power pack isn't engineered with cold-tolerant components suited for consistent outdoor performance.",
  },
  {
    question: "What is a modular hydraulic power pack design and why does it matter?",
    answer:
      "A modular hydraulic power pack design allows individual components to be serviced, upgraded, or replaced independently, reducing maintenance time and simplifying future capacity adjustments as operational needs change.",
  },
  {
    question: "Should I choose a mobile or stationary hydraulic power pack for my application?",
    answer:
      "The choice depends on the application. Mobile hydraulic power packs suit equipment operating in remote or changing locations, such as forestry or mining machinery, while stationary units suit fixed manufacturing setups requiring continuous hydraulic power.",
  },
  {
    question: "What should be checked before importing a custom hydraulic power pack for industrial use?",
    answer:
      "Before importing a custom hydraulic power pack, buyers should check flow rate, pressure rating, tank and motor capacity, noise level specifications, and the manufacturer's testing and quality control process.",
  },
  {
    question: "Who is a Custom Hydraulic Power Pack Manufacturer in Sweden?",
    answer:
      "HPP is a Custom Hydraulic Power Pack Manufacturer serving Sweden, engineering standard and custom configurations for presses, injection molding, material handling, and lifting applications.",
  },
  {
    question: "Which company supplies hydraulic power packs for Swedish forestry and mining equipment?",
    answer:
      "HPP supplies hydraulic power packs suited for Swedish forestry and mining equipment, offering mobile, cold-tolerant units engineered for demanding outdoor operating conditions.",
  },
  {
    question: "Who provides low-noise hydraulic power packs for Swedish manufacturing facilities?",
    answer:
      "HPP provides low-noise hydraulic power packs for Swedish manufacturing facilities, designed to meet strict workplace noise standards while maintaining reliable pressure control.",
  },
  {
    question: "Which manufacturer offers modular hydraulic power pack designs for Sweden?",
    answer:
      "HPP offers modular hydraulic power pack designs for Sweden, simplifying servicing, upgrades, and long-term maintenance for industrial hydraulic systems.",
  },
  {
    question: "Where can Swedish buyers source a reliable custom hydraulic power pack manufacturer?",
    answer:
      "Swedish buyers can source a reliable custom hydraulic power pack manufacturer through HPP, which provides tailored engineering, rigorous testing, and export-ready logistics support for delivery across Sweden and the Nordic region.",
  },
];

export default function CustomHydraulicPowerPackManufacturerInSwedenPage() {
  const title = "Custom Hydraulic Power Pack Manufacturer in Sweden";

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
              Hydraulic Power Pack
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
            <Image
              src="/products/hydraulic-power-pack/main.png"
              alt="HPP Hydraulic Power Pack - industrial hydraulic power unit"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Top Custom Hydraulic Power Pack Manufacturer in Sweden
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              As a leading{" "}
              <Link
                href="/hydraulic-power-pack"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Custom Hydraulic Power Pack Manufacturer in Sweden
              </Link>
              , we offer compact, efficient Hydraulic Power Packs
              designed to handle a wide range of industrial applications.
              These systems are built using high-quality components,
              ensuring maximum performance and durability. Available in
              both standard and custom configurations, our power packs
              are widely used in presses, injection molding machines,
              material-handling equipment, lifting systems, and more. Key
              features include modular design, ease of maintenance, low
              noise levels, and reliable pressure control. Whether you
              need a mobile or stationary unit, we offer optimized
              solutions tailored to your operational requirements.
            </p>
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
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Custom Hydraulic Power Pack Manufacturer in Sweden
          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              HPP (Hydraulic and Pneumatic Products) is a leading Custom
              Hydraulic Power Pack Manufacturer serving Sweden, engineering
              compact, efficient hydraulic systems designed to handle a
              wide range of industrial applications. As Sweden's
              manufacturing, forestry, mining, and material handling
              sectors continue to demand higher precision and
              application-specific engineering, HPP has positioned itself
              as a dependable manufacturing partner capable of matching
              exact Swedish operational requirements rather than offering
              generic, standardized units.
            </p>
            <p>
              Our hydraulic power packs are built using high-quality
              components, ensuring maximum performance and durability
              across demanding industrial environments — including
              Sweden's cold climate, where equipment must maintain
              consistent performance despite seasonal temperature
              fluctuations and outdoor operating conditions common in
              forestry and mining applications.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Standard and Custom Configurations
            </h4>
            <p>
              Available in both standard and custom configurations, our
              power packs are widely used in presses, injection molding
              machines, material-handling equipment, lifting systems, and
              more. As a Custom Hydraulic Power Pack Manufacturer, we work
              closely with Swedish clients during the specification stage,
              engineering each unit around exact flow rate, pressure, tank
              capacity, and motor requirements rather than expecting
              buyers to adapt their machinery to fixed catalog
              specifications. This tailored approach reduces integration
              issues and ensures the power pack performs reliably from day
              one of installation.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Key Features Built for Reliability
            </h4>
            <p>
              Key features include modular design, ease of maintenance,
              low noise levels, and reliable pressure control — qualities
              that directly support the operational priorities of Swedish
              industries, where equipment uptime and maintenance
              efficiency are critical to production continuity:
            </p>
            <ul className="space-y-2">
              {keyFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Mobile and Stationary Solutions
            </h4>
            <p>
              Whether you need a mobile or stationary unit, we offer
              optimized solutions tailored to your operational
              requirements. Mobile hydraulic power packs are particularly
              relevant for Sweden's forestry and mining sectors, where
              equipment often operates in remote outdoor locations, while
              stationary units serve manufacturing facilities requiring
              continuous, high-precision hydraulic power for presses and
              material handling systems.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Applications Across Swedish Industries
            </h4>
            <p>
              Our hydraulic power packs support a broad range of
              applications relevant to Sweden's industrial base:
            </p>
            <ul className="space-y-2">
              {applications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Engineering Support and Quality Control
            </h4>
            <p>
              Every hydraulic power pack undergoes rigorous testing before
              dispatch, ensuring consistent pressure output, leak-free
              operation, and dependable performance in real-world
              industrial conditions. Our in-house R&amp;D team
              continuously refines component design and material selection
              to improve durability, particularly for units destined for
              cold-climate or outdoor applications common across Sweden
              and the wider Nordic region.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why Swedish Buyers Choose a Custom Power Pack Manufacturer
            </h4>
            <p>
              Working with a manufacturer that specializes in custom
              hydraulic power pack design, rather than offering only
              standardized units, gives Swedish industrial buyers several
              practical advantages: systems engineered to match exact
              machinery specifications, reduced integration complications
              during installation, and long-term reliability suited to
              demanding operating environments. Our engineering team
              collaborates directly with clients from initial
              specification through final delivery, ensuring the power
              pack design aligns with both performance expectations and
              application-specific requirements before production begins.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Supporting Long-Term Supply Relationships with Sweden
            </h4>
            <p>
              As a trusted hydraulic power pack supplier serving clients
              across Sweden, we combine precision engineering with
              responsive customer support, helping industries achieve
              efficient, reliable hydraulic power for their most demanding
              applications. Our manufacturing facility is equipped to
              handle export documentation, packaging, and logistics
              coordination for smooth, predictable delivery across Sweden
              and the broader Nordic region. Whether you require a single
              custom hydraulic power pack for a specific application or
              are establishing a long-term OEM supply partnership for
              recurring industrial demand, HPP is equipped to support
              Swedish businesses with responsive engineering, competitive
              pricing, and consistent manufacturing quality.
            </p>

            <p>
              📞 +91-9871456545 | ✉️ sales2@hppgroup.in | 🌍 Serving
              industrial clients across Sweden and the Nordic region
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
