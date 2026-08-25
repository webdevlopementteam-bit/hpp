"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const products = [
  { name: "Hydraulic Cylinder - Front Trunnion", image: "1.png" },
  { name: "Hydraulic Cylinder - Front Flange Mounting", image: "2.png" },
  { name: "Hydraulic Cylinder - Rear Clevis (Double Eye)", image: "3.png" },
  { name: "Hydraulic Cylinder - Customize", image: "4.png" },
  { name: "Hydraulic Cylinder -for Hydraulic Press", image: "5.png" },
  { name: "Hydraulic Cylinder -Welded Design Round Flange", image: "6.png" },
];

const faqs = [
  {
    question: "What does ISO approval mean for a hydraulic cylinder manufacturer?",
    answer:
      "ISO approval means the manufacturer follows internationally recognized quality management standards throughout design, production, and testing, ensuring consistent product quality, traceability, and reliability for industrial buyers.",
  },
  {
    question: "What makes a hydraulic cylinder suitable for heavy-duty industrial use?",
    answer:
      "A hydraulic cylinder suitable for heavy-duty use features high-grade chrome-plated rods, robust seals, precision-machined bore surfaces, and a design rated for sustained high-pressure cycles without premature wear or leakage.",
  },
  {
    question: "How do German buyers verify the quality of an imported hydraulic cylinder?",
    answer:
      "German buyers typically verify hydraulic cylinder quality through manufacturer ISO certification, material certificates, pressure and leak test reports, and sample inspection before committing to bulk orders.",
  },
  {
    question: "What mounting types are commonly required for hydraulic cylinders in European machinery?",
    answer:
      "European machinery commonly requires mounting types such as front trunnion, front flange, rear clevis, and welded round flange configurations, selected based on the load direction and installation space of the equipment.",
  },
  {
    question: "Why do German industries prefer ISO approved hydraulic component suppliers?",
    answer:
      "German industries prefer ISO approved suppliers because certification indicates standardized manufacturing processes, documented quality control, and consistent performance, reducing the risk of component failure in critical applications.",
  },
  {
    question: "Who is an ISO Approved Hydraulic Cylinder Manufacturer in Germany?",
    answer:
      "HPP is recognized among ISO Approved Hydraulic Cylinder Manufacturers serving Germany, offering single-acting, double-acting, and custom-engineered cylinders with documented quality control processes.",
  },
  {
    question: "Who is a Heavy Duty Hydraulic Cylinder Supplier in Germany?",
    answer:
      "HPP is a Heavy Duty Hydraulic Cylinder Supplier serving Germany, manufacturing cylinders built with high-grade chrome-plated rods and premium seals for continuous, high-pressure industrial operation.",
  },
  {
    question: "Which company supplies custom hydraulic cylinders for German construction machinery?",
    answer:
      "HPP supplies custom hydraulic cylinders for German construction machinery, offering tailored bore sizes, stroke lengths, and mounting configurations to match specific equipment requirements.",
  },
  {
    question: "Which hydraulic cylinder manufacturer supports export orders to Germany and the EU?",
    answer:
      "HPP supports export orders to Germany and the EU, including export documentation, flexible order quantities, and coordinated logistics for reliable international delivery.",
  },
  {
    question: "Who is a reliable ISO approved hydraulic cylinder supplier for German industrial automation companies?",
    answer:
      "HPP is a reliable ISO approved hydraulic cylinder supplier for German industrial automation companies, offering precision-engineered, leak-tested cylinders backed by responsive technical support and consistent lead times.",
  },
];

export default function HydraulicCylinderSupplierGermanyPage() {
  const title = "ISO Approved Hydraulic Cylinder Manufacturer & Supplier in Germany";

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
              ISO Approved Heavy-Duty Hydraulic Cylinder Manufacturer &amp;
              Supplier in Germany
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              We manufacture a comprehensive range of Hydraulic Cylinders
              and Jacks engineered for strength, precision, and long
              service life, backed by the same quality discipline German
              buyers expect from{" "}
              <Link
                href="/hydraulic-cylinder"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                ISO Approved Hydraulic Cylinder Manufacturers Germany
              </Link>{" "}
              relies on. Our products are available
              in single-acting, double-acting and customized designs to
              suit various applications and different industries. These
              cylinders are used in industrial automation, construction
              equipment, presses, and mobile hydraulics. Each unit is
              built with high-grade seals and chrome plated rods to
              prevent rusting, leakage and ensure smooth operation under
              high pressure — a standard our clients count on us for as a
              Heavy Duty Hydraulic Cylinder Supplier in Germany. With
              stringent quality control, our hydraulic cylinders deliver
              consistent performance even in the most demanding
              environments.
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
            ISO Approved Hydraulic Cylinder Manufacturers Germany | Heavy
            Duty Hydraulic Cylinder Supplier in Germany
          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              When German engineers and procurement teams evaluate an
              overseas hydraulic component supplier, documented quality
              and consistent performance matter as much as the product
              itself. HPP (Hydraulic and Pneumatic Products) is recognized
              among ISO Approved Hydraulic Cylinder Manufacturers Germany
              businesses turn to for critical machinery components, and
              operates as a trusted Heavy Duty Hydraulic Cylinder Supplier
              in Germany, delivering precision-engineered cylinders built
              to meet the strict performance expectations of German
              industrial buyers.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Engineering Standards German Buyers Expect
            </h4>
            <p>
              As an ISO Approved manufacturer, HPP follows structured,
              documented quality management processes across every stage
              of production — from raw material selection through final
              pressure and leak testing. This structured approach gives
              German buyers the traceability and consistency they
              typically require before integrating a component into
              critical machinery systems, whether for a single prototype
              order or a recurring OEM supply agreement.
            </p>
            <p>
              We manufacture a comprehensive range of hydraulic cylinders
              engineered for strength, precision, and long service life,
              available in single-acting, double-acting, and fully
              customized designs to suit various applications and
              industries. Rather than offering fixed, generic
              specifications, our engineering team works directly with
              German clients to match bore size, stroke length, rod
              diameter, and mounting configuration to the exact
              requirements of the target machinery — an approach that
              aligns closely with how German manufacturers typically
              specify components.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Built for Heavy-Duty, Continuous Operation
            </h4>
            <p>
              As a{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Heavy Duty Hydraulic Cylinder Supplier in Germany
              </Link>
              , we
              understand that reliability isn't optional in continuous
              industrial operation. Our hydraulic cylinders are used
              across industrial automation, construction equipment,
              hydraulic presses, and mobile hydraulics — sectors where
              German manufacturing demands consistent, repeatable
              performance cycle after cycle, with minimal tolerance for
              unplanned downtime.
            </p>
            <p>
              Each unit is built with high-grade seals and chrome-plated
              rods to prevent rusting and leakage, ensuring smooth
              operation under high pressure even across varying
              temperature and humidity conditions — a common
              consideration for German buyers sourcing components used in
              outdoor, industrial, or seasonal-climate environments. This
              corrosion-resistant construction is central to how we
              approach long-term reliability, reducing the risk of
              premature seal failure or rod scoring during sustained
              high-pressure cycles.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Mounting Configurations for German Machinery Platforms
            </h4>
            <p>
              We manufacture cylinders in multiple mounting configurations
              — including front trunnion, front flange, rear clevis
              (double eye), and welded round flange designs — widely used
              across German heavy machinery, presses, and mobile
              hydraulic equipment. This range allows German manufacturers
              to source cylinders that integrate directly into existing
              machinery platforms without requiring costly redesign or
              retrofitting.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Quality Control Backed by Documentation
            </h4>
            <p>
              With stringent quality control, our hydraulic cylinders
              deliver consistent performance even in the most demanding
              environments. Every cylinder undergoes pressure validation
              and leak testing before dispatch, and as an ISO Approved
              manufacturer, we provide the documentation and test reports
              German buyers commonly request during supplier evaluation —
              helping reduce the uncertainty often associated with
              sourcing critical components from an overseas manufacturer.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why German Industrial Buyers Choose HPP
            </h4>
            <p>
              For German companies evaluating international hydraulic
              cylinder suppliers, working with an ISO Approved,
              heavy-duty focused manufacturer offers practical advantages:
              competitive manufacturing costs without compromising build
              quality, flexible production capacity for both prototype
              development and bulk industrial orders, and genuine
              engineering collaboration that respects European technical
              standards. Our facility is equipped to manage export
              documentation, quality certification support, and
              coordinated logistics to ensure smooth, predictable
              delivery timelines to Germany and across the EU.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              A Long-Term Hydraulic Component Partner
            </h4>
            <p>
              As global supply chains continue to diversify, German
              manufacturers increasingly seek dependable alternatives to
              traditional regional suppliers without compromising on
              documented quality assurance. HPP offers exactly that
              combination — ISO Approved manufacturing discipline paired
              with heavy-duty engineering capability, backed by
              transparent communication and consistent lead times. We
              work closely with clients from initial specification
              through final delivery, ensuring hydraulic cylinder design
              matches exact operational and regulatory expectations
              before production begins.
            </p>
            <p>
              Whether you're sourcing a single heavy duty hydraulic
              cylinder for a specific application or establishing a
              long-term OEM supply partnership for recurring industrial
              demand, HPP is equipped to support German businesses with
              responsive engineering, competitive pricing, and dependable
              manufacturing quality.
            </p>

            <p>
              📞 +91-9871456545 | ✉️ sales2@hppgroup.in | 🌍 Serving
              industrial clients across Germany and the EU
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
