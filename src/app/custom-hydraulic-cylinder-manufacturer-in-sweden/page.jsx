"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  { name: "Hydraulic Cylinder - Front Trunnion", image: "1.png" },
  { name: "Hydraulic Cylinder - Front Flange Mounting", image: "2.png" },
  { name: "Hydraulic Cylinder - Rear Clevis (Double Eye)", image: "3.png" },
  { name: "Hydraulic Cylinder - Customize", image: "4.png" },
  { name: "Hydraulic Cylinder -for Hydraulic Press", image: "5.png" },
  { name: "Hydraulic Cylinder -Welded Design Round Flange", image: "6.png" },
];

const customEngineering = [
  "Custom bore size, stroke length, and rod diameter matched to specific equipment",
  "Multiple mounting options to fit existing or new machinery platforms",
  "Application-specific pressure ratings for industrial presses, mobile hydraulics, and heavy equipment",
  "Tailored sealing solutions suited to cold-climate and outdoor operating conditions",
];

const applications = [
  "Industrial automation and manufacturing lines",
  "Construction equipment and material handling machinery",
  "Hydraulic presses for metal forming and industrial processing",
  "Mobile hydraulics, including forestry and heavy vehicle equipment",
];

const faqs = [
  {
    question: "What makes a hydraulic cylinder \"custom\" rather than standard?",
    answer:
      "A custom hydraulic cylinder is engineered around a specific application's bore size, stroke length, mounting type, and pressure requirements, rather than offering fixed specifications that may not match unique machinery needs.",
  },
  {
    question: "Why do cold-climate conditions affect hydraulic cylinder performance?",
    answer:
      "Cold-climate conditions can cause seals to stiffen and oil viscosity to change, increasing wear on seals and rod surfaces, which makes corrosion-resistant construction and cold-tolerant sealing materials important for reliable performance.",
  },
  {
    question: "What mounting types are commonly used in Swedish forestry and mining equipment?",
    answer:
      "Swedish forestry and mining equipment commonly use mounting types such as front trunnion, rear clevis, and flange mounting, selected based on the load direction and installation space of the machinery.",
  },
  {
    question: "How do I choose the right hydraulic cylinder for cold-weather outdoor equipment?",
    answer:
      "Choosing the right hydraulic cylinder for cold-weather outdoor equipment involves selecting cold-tolerant seal materials, chrome-plated corrosion-resistant rods, and a bore and stroke size matched to the equipment's specific load and travel requirements.",
  },
  {
    question: "What should be checked before importing custom hydraulic cylinders for industrial use?",
    answer:
      "Before importing custom hydraulic cylinders, buyers should check bore and rod dimensions, working pressure rating, seal material suitability for the operating climate, mounting type, and the manufacturer's quality testing process.",
  },
  {
    question: "Who is a Custom Hydraulic Cylinder Manufacturer in Sweden?",
    answer:
      "HPP is a Custom Hydraulic Cylinder Manufacturer serving Sweden, engineering single-acting, double-acting, and fully customized cylinders suited to forestry, mining, and industrial applications.",
  },
  {
    question: "Which company supplies hydraulic cylinders for Swedish forestry equipment?",
    answer:
      "HPP supplies hydraulic cylinders suited for Swedish forestry equipment, offering corrosion-resistant, custom-engineered designs built to withstand demanding outdoor operating conditions.",
  },
  {
    question: "Who provides custom hydraulic cylinders for industrial presses in Sweden?",
    answer:
      "HPP provides custom hydraulic cylinders for industrial presses in Sweden, engineering application-specific bore sizes and pressure ratings for metal forming and processing operations.",
  },
  {
    question: "Which manufacturer supports export orders for hydraulic cylinders to Sweden?",
    answer:
      "HPP supports export orders for hydraulic cylinders to Sweden, offering export documentation and coordinated logistics for reliable international delivery.",
  },
  {
    question: "Who is a reliable hydraulic cylinder supplier for Swedish mining equipment?",
    answer:
      "HPP is a reliable hydraulic cylinder supplier for Swedish mining equipment, delivering precision-engineered, corrosion-resistant cylinders built for heavy-duty, continuous operation.",
  },
];

export default function CustomHydraulicCylinderManufacturerInSwedenPage() {
  const title = "Custom Hydraulic Cylinder Manufacturer Sweden";

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
              Hydraulic Cylinder
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-md bg-gray-100 p-8 md:p-10">
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
              Custom Hydraulic Cylinder Manufacturer in Sweden
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              As a leading{" "}
              <Link
                href="/hydraulic-cylinder"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Custom Hydraulic Cylinder Manufacturer in Sweden
              </Link>
              , we manufacture a comprehensive range of Hydraulic
              Cylinders and Jacks engineered for strength, precision, and
              long service life. Our products are available in
              single-acting, double-acting and customized designs to suit
              various applications and different industries. These
              cylinders are used in industrial automation, construction
              equipment, presses, and mobile hydraulics. Each unit is
              built with high-grade seals and chrome plated rods to
              prevent rusting, leakage and ensure smooth operation under
              high pressure. With stringent quality control, our
              hydraulic cylinders deliver consistent performance even in
              the most demanding environments.
            </p>
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
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Top Custom Hydraulic Cylinder Manufacturer in Sweden
          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              HPP (Hydraulic and Pneumatic Products) is a trusted Custom
              Hydraulic Cylinder Manufacturer serving Sweden, delivering
              precision-engineered cylinders built for strength,
              durability, and consistent performance. As Sweden's
              manufacturing, forestry, mining, and heavy vehicle industries
              continue to demand higher precision and application-specific
              engineering, HPP has positioned itself as a dependable
              manufacturing partner capable of matching exact Swedish
              industrial specifications rather than offering generic,
              one-size-fits-all products.
            </p>
            <p>
              We manufacture single-acting, double-acting, and fully
              customized hydraulic cylinders — including front trunnion,
              front flange mounting, rear clevis (double eye), welded
              round flange, and press-application designs. This range of
              mounting configurations allows Swedish manufacturers to
              source cylinders tailored to specific machinery platforms,
              whether for forestry equipment, mining machinery, material
              handling systems, or industrial presses, without
              compromising on fit or performance.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Engineering Built for Demanding Swedish Conditions
            </h4>
            <p>
              Each cylinder is built with high-grade seals and
              chrome-plated rods to resist corrosion and leakage, ensuring
              smooth, reliable operation even under high pressure and
              demanding industrial conditions. This is particularly
              relevant for Sweden's operating environment, where equipment
              often faces cold temperatures, moisture, and seasonal
              variation — conditions that place additional stress on
              seals and rod surfaces. Our corrosion-resistant construction
              is designed to maintain consistent performance across these
              fluctuating conditions, reducing the risk of premature seal
              failure or rod scoring during long Swedish winters.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Custom Engineering as a Core Capability
            </h4>
            <p>
              As a Custom Hydraulic Cylinder Manufacturer, HPP works
              closely with clients during the specification stage to
              engineer cylinders around exact application requirements,
              rather than expecting Swedish buyers to adapt their
              machinery to standardized product offerings:
            </p>
            <ul className="space-y-2">
              {customEngineering.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Applications Across Swedish Industries
            </h4>
            <p>Our hydraulic cylinders are widely used across:</p>
            <ul className="space-y-2">
              {applications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These applications reflect the core sectors driving Sweden's
              industrial economy, where reliable, application-matched
              hydraulic components directly impact equipment uptime and
              operational safety.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Quality Control and Engineering Support
            </h4>
            <p>
              Backed by stringent quality control and an in-house R&amp;D
              team, HPP supplies hydraulic cylinders to industries across
              Sweden, offering custom sizing, easy installation, low
              operating cost, and long service life. Every cylinder
              undergoes pressure and leak testing before dispatch, helping
              Swedish buyers minimize the risk of field failures and
              unplanned downtime — a critical consideration for
              industries operating in remote or harsh environments where
              equipment servicing can be logistically challenging.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why Swedish Buyers Choose a Custom Hydraulic Cylinder
              Manufacturer
            </h4>
            <p>
              Working with a manufacturer that specializes in custom
              hydraulic cylinder design, rather than standardized catalog
              products, offers Swedish industrial buyers several practical
              advantages: cylinders engineered to match exact machinery
              specifications, reduced integration issues during
              installation, and long-term reliability suited to Sweden's
              specific operating conditions. Our engineering team
              collaborates directly with clients from initial
              specification through final delivery, ensuring the cylinder
              design aligns with both operational and regulatory
              expectations before production begins.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Supporting Long-Term Supply Relationships
            </h4>
            <p>
              Our manufacturing facility in India is equipped to handle
              export documentation, packaging, and logistics coordination
              for smooth, predictable delivery to Sweden and across the
              broader Nordic region. Whether you require a single custom
              hydraulic cylinder for a specific application or are
              establishing a long-term supply partnership for recurring
              industrial demand, HPP is equipped to support Swedish
              businesses with responsive engineering, competitive pricing,
              and consistent manufacturing quality.
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
