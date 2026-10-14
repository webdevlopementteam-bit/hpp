"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const categories = [
  {
    label: "Hydraulic Power Pack",
    href: "/hydraulic-power-pack",
    image: "/products/hydraulic-power-pack/main.webp",
  },
  {
    label: "Hydraulic Cylinder",
    href: "/hydraulic-cylinder",
    image: "/products/hydraulic-cylinder/main.webp",
  },
  {
    label: "Water-Cooled Hydraulic Oil Cooler",
    href: "/water-cooled-oil-cooler",
    image: "/products/water-cooled-oil-cooler/main.webp",
  },
  {
    label: "Industrial Hydraulic Jack",
    href: "/industrial-hydraulic-jack",
    image: "/products/industrial-hydraulic-jack/main.webp",
  },
  {
    label: "Hydraulic Press",
    href: "/hydraulic-press",
    image: "/products/hydraulic-press/main.webp",
  },
  {
    label: "Hydraulic Paper Mill System",
    href: "/hydraulic-paper-mill-system",
    image: "/products/hydraulic-paper-mill-system/main.webp",
  },
  {
    label: "Hydraulic Rotary Unions",
    href: "/hydraulic-rotary-unions",
    image: "/products/hydraulic-rotary-unions/main.webp",
  },
];

const applicationRequirements = [
  "A compact single-acting cylinder for mobile equipment",
  "A heavy-duty double-acting cylinder for continuous high-pressure industrial presses",
  "Corrosion-resistant cylinders built for offshore or marine exposure",
  "Cold-climate rated seals suited to Denmark's seasonal temperature range",
];

const productRange = [
  "Hydraulic Power Pack",
  "Hydraulic Cylinder",
  "Water-Cooled Hydraulic Oil Cooler",
  "Industrial Hydraulic Jack",
  "Hydraulic Press",
  "Hydraulic Paper Mill System",
  "Hydraulic Rotary Unions",
];

const faqs = [
  {
    question: "What types of hydraulic products does HPP manufacture?",
    answer:
      "HPP manufactures hydraulic power packs, hydraulic cylinders, water-cooled oil coolers, industrial hydraulic jacks, hydraulic presses, hydraulic paper mill systems, and hydraulic rotary unions for industrial applications.",
  },
  {
    question: "How do I choose the right hydraulic product for my application?",
    answer:
      "Choosing the right hydraulic product depends on factors such as required pressure, flow rate, load capacity, operating environment, and the specific machinery or process it needs to support.",
  },
  {
    question: "Why is regular maintenance important for hydraulic equipment?",
    answer:
      "Regular maintenance is important for hydraulic equipment because it prevents oil contamination, seal wear, and overheating, all of which can lead to reduced performance, leaks, or unexpected system failure.",
  },
  {
    question: "What causes reduced efficiency in hydraulic systems over time?",
    answer:
      "Reduced efficiency in hydraulic systems is commonly caused by worn seals, oil degradation, air trapped in the system, or insufficient cooling leading to overheating during continuous operation.",
  },
  {
    question: "How can I extend the service life of hydraulic equipment?",
    answer:
      "Extending the service life of hydraulic equipment involves regular oil analysis and changes, timely seal replacement, proper cooling system maintenance, and avoiding operation beyond rated pressure and load limits.",
  },
  {
    question: "Who is a reliable hydraulic products manufacturer in India?",
    answer:
      "HPP is a reliable hydraulic products manufacturer in India, offering a complete range including power packs, cylinders, oil coolers, jacks, presses, and rotary unions for various industrial applications.",
  },
  {
    question: "Which company supplies custom hydraulic equipment for industrial applications?",
    answer:
      "HPP supplies custom hydraulic equipment for industrial applications, engineering products to match specific pressure, flow, and load requirements across different industries.",
  },
  {
    question: "Who is a trusted hydraulic equipment supplier for heavy industries?",
    answer:
      "HPP is a trusted hydraulic equipment supplier for heavy industries, delivering durable, precision-engineered products used by clients including BHEL, ISGEC, and Jindal.",
  },
  {
    question: "Which manufacturer offers a complete range of hydraulic products under one supplier?",
    answer:
      "HPP offers a complete range of hydraulic products under one supplier, simplifying procurement for industries that need multiple compatible hydraulic components for a single system.",
  },
  {
    question: "Where can I find a hydraulic products manufacturer that also exports internationally?",
    answer:
      "HPP, based in New Delhi, India, is a hydraulic products manufacturer that also exports internationally, serving clients across the EU, GCC, and Nordic regions in addition to India.",
  },
];

export default function IndustrialHydraulicEquipmentManufacturerDenmarkPage() {
  const title = "Industrial Hydraulic Equipment Manufacturer in Denmark";

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
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">Products</span>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Top Industrial Hydraulic Equipment Manufacturer in Denmark
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our range of hydraulic products engineered for
            reliability across industrial, marine, and offshore
            applications in Denmark.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
                <Image
                  src={category.image}
                  alt={`${category.label} - HPP product category`}
                  width={500}
                  height={420}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-50 px-6 py-5">
                <h3 className="text-center text-base font-bold text-[#0d1b3f]">
                  {category.label}
                </h3>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0d1b3f]">
                    View Products
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

      {/* Content */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Industrial Hydraulic Equipment Manufacturer Denmark | OEM
            Hydraulic System Suppliers in Denmark
          </h3>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              Danish manufacturers and machine builders operate in an
              environment where precision, sustainability, and long-term
              equipment reliability aren't optional extras — they're
              baseline expectations. HPP (Hydraulic and Pneumatic
              Products) has built its manufacturing approach around
              exactly these priorities, positioning itself as an{" "}
              <Link
                href="/products"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Industrial Hydraulic Equipment Manufacturer Denmark
              </Link>{" "}
              businesses can rely on for consistent, application-matched
              hydraulic solutions rather than generic, off-the-shelf
              components.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Understanding What Danish Buyers Actually Need
            </h4>
            <p>
              Denmark's industrial base spans manufacturing, maritime,
              wind energy, and heavy machinery — sectors where equipment
              often operates continuously, sometimes offshore, and always
              under strict performance expectations. This means Danish
              buyers typically aren't looking for the cheapest hydraulic
              component; they're looking for a supplier who understands
              their application, documents quality consistently, and
              communicates clearly throughout the sourcing process. HPP's
              manufacturing philosophy is built around this reality,
              treating every order — whether a single custom cylinder or
              a recurring OEM supply agreement — with the same
              engineering rigor.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              OEM Partnership, Not Just Component Supply
            </h4>
            <p>
              As one of the trusted OEM hydraulic system suppliers in
              Denmark, HPP works directly with original equipment
              manufacturers from the design stage forward. Rather than
              simply fulfilling a specification sheet, our engineering
              team collaborates with Danish OEMs to understand how a
              hydraulic power pack, cylinder, or valve assembly will
              actually function within the target machinery — its load
              cycles, environmental exposure, and expected service life.
              This close-loop process reduces integration problems after
              delivery and shortens the path from prototype to production
              for Danish manufacturers developing new equipment platforms.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Customized Hydraulic Cylinder Solutions Built Around Real
              Applications
            </h4>
            <p>
              A core part of our offering is customized hydraulic cylinder
              solutions in Denmark, engineered around the specific load,
              stroke, mounting, and pressure requirements of each
              application rather than forcing standardized designs onto
              unique machinery needs. Whether a Danish manufacturer
              requires:
            </p>
            <ul className="space-y-2">
              {applicationRequirements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Our engineering team designs and manufactures cylinders
              using high-grade chrome-plated rods and premium seals to
              prevent corrosion and leakage, ensuring smooth, dependable
              operation even in demanding environments — a particularly
              important consideration given the offshore, marine, and
              cold-climate conditions common across Denmark and the
              broader Scandinavian region.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              One Supplier, Full Hydraulic Component Range
            </h4>
            <p>
              Beyond cylinders, HPP operates as a comprehensive{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Hydraulic Component Distributor Denmark
              </Link>{" "}
              businesses can consolidate
              their sourcing through, rather than managing separate vendor
              relationships for every component type. Our product range
              includes:
            </p>
            <ul className="space-y-2">
              {productRange.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              This breadth matters practically — it simplifies
              procurement, reduces lead times when components need to
              work together as a system, and lowers the administrative
              overhead of managing multiple supplier relationships for a
              single machine build.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Quality Documentation Danish Buyers Can Rely On
            </h4>
            <p>
              Every hydraulic component undergoes stringent quality
              control, including pressure testing and leak validation,
              before dispatch. Danish businesses evaluating an overseas
              supplier for the first time typically want more than a
              verbal assurance of quality — they want documentation, test
              reports, and a track record they can review before
              committing to larger orders. HPP's quality process is
              structured specifically to provide that transparency,
              supported by an in-house R&amp;D team that continuously
              refines product design and material durability.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Why Danish Companies Are Diversifying Their Hydraulic
              Sourcing
            </h4>
            <p>
              For Danish businesses evaluating international hydraulic
              equipment partners, working with an experienced offshore
              manufacturer offers genuine practical advantages:
              competitive manufacturing costs without compromising build
              quality, flexible production capacity for both prototype
              development and bulk industrial orders, and engineering
              collaboration that respects European technical standards.
              HPP's facility in New Delhi, India, is equipped to manage
              export documentation, quality certification support, and
              coordinated logistics — ensuring smooth, predictable
              delivery timelines to Denmark and the broader EU and Nordic
              region.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              Industries We Support Across Denmark
            </h4>
            <p>
              Our hydraulic equipment and components serve sectors central
              to Denmark's industrial economy, including industrial
              automation, construction and material handling equipment,
              marine and offshore machinery, renewable energy
              infrastructure, and general manufacturing presses —
              industries where component failure directly impacts
              operational uptime and safety, and where dependable
              hydraulic performance isn't negotiable.
            </p>

            <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
              A Long-Term Sourcing Partner, Not a One-Time Vendor
            </h4>
            <p>
              As global supply chains continue to diversify and Danish
              manufacturers seek dependable alternatives to traditional
              regional suppliers, HPP offers a genuine long-term
              partnership model built on transparent communication,
              engineering responsiveness, and consistent product quality.
              We work closely with each client from initial specification
              through final delivery, ensuring hydraulic solutions are
              engineered correctly the first time — reducing the risk of
              costly redesigns or field failures down the line.
            </p>
            <p>
              Whether you're an OEM seeking a long-term hydraulic
              component supply partnership, an industrial buyer sourcing
              customized hydraulic cylinder solutions, or a Danish
              distributor looking to diversify your hydraulic equipment
              sourcing, HPP is equipped to support your requirements with
              responsive engineering, competitive pricing, and
              manufacturing quality built for demanding industrial
              environments.
            </p>

            <p>
              📞 +91-9871456545 | ✉️ sales2@hppgroup.in | 🌍 Serving
              industrial clients across Denmark and the Nordic region
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
