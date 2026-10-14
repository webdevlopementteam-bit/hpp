"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
{
question: "How do I find custom hydraulic cylinder manufacturers in Germany?",
answer:
"Compare suppliers based on engineering capabilities, technical specifications, application experience, quality documentation, and delivery options. Confirm whether the supplier manufactures custom cylinders or sources them from other manufacturers.",
},

{
question: "How much does a custom hydraulic cylinder cost in Germany?",
answer:
"The cost depends on bore diameter, stroke length, pressure rating, materials, mounting design, seals, and order quantity. A technical drawing and application details can help a supplier prepare a more accurate quotation.",
},

{
question: "Can hydraulic cylinders be manufactured to custom dimensions?",
answer:
"Yes, custom dimensions may be possible depending on the manufacturer's capabilities. Bore size, rod diameter, stroke length, mounting style, and port configuration should be confirmed before ordering.",
},

{
question: "What information is required for a custom hydraulic cylinder quote?",
answer:
"Provide the required force, bore, stroke, operating pressure, mounting dimensions, fluid type, operating temperature, quantity, and delivery location. Technical drawings are particularly useful.",
},

{
question: "What is the difference between standard and custom hydraulic cylinders?",
answer:
"Standard cylinders use predefined specifications and dimensions. Custom cylinders are designed or configured to meet particular requirements that standard models may not satisfy.",
},

{
question: "Which hydraulic cylinder is best for industrial machinery?",
answer:
"The right choice depends on the required force, movement, working pressure, duty cycle, installation space, and environment. Single acting, double acting, tie-rod, and welded cylinders serve different applications.",
},

{
question: "Can I replace an existing hydraulic cylinder with a custom model?",
answer:
"Yes, provided the replacement is properly engineered for the equipment. Verify dimensions, mounting points, pressure rating, stroke, connections, and hydraulic compatibility before installation.",
},

{
question: "How long does it take to get a custom hydraulic cylinder?",
answer:
"Lead time varies with design complexity, material availability, production capacity, testing requirements, and shipping arrangements. Request a confirmed delivery estimate before placing an order.",
},

{
question: "What causes hydraulic cylinder leakage or performance problems?",
answer:
"Common causes include worn seals, damaged piston rods, contamination, incorrect installation, excessive pressure, and component wear. Inspection can help determine whether repair or replacement is appropriate.",
},

{
question: "Can HPP supply custom hydraulic cylinders to Germany?",
answer:
"Contact Hydraulic and Pneumatic Products (HPP) to confirm available products, customization capabilities, shipping to Germany, technical documentation, and delivery timelines for your project.",
},
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};


const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const products = [
  { name: "Hydraulic Cylinder - Front Trunnion", image: "1.webp" },
  { name: "Hydraulic Cylinder - Front Flange Mounting", image: "2.webp" },
  { name: "Hydraulic Cylinder - Rear Clevis (Double Eye)", image: "3.webp" },
  { name: "Hydraulic Cylinder - Customize", image: "4.webp" },
  { name: "Hydraulic Cylinder -for Hydraulic Press", image: "5.webp" },
  { name: "Hydraulic Cylinder -Welded Design Round Flange", image: "6.webp" },
];

const buyerChallenges = [
  {
    title: "Equipment compatibility",
    text: "Match the mounting arrangement, dimensions, and movement requirements of existing machinery.",
  },
  {
    title: "Application-specific performance",
    text: "Select the required bore, stroke, and pressure rating for the intended load.",
  },
  {
    title: "Replacement requirements",
    text: "Find a suitable option when an original cylinder is discontinued or difficult to source.",
  },
  {
    title: "Space limitations",
    text: "Account for restricted installation areas and machine design constraints.",
  },
  {
    title: "Operational reliability",
    text: "Select suitable seals, materials, and components for the working environment.",
  },
];

const cylinderTypes = [
  {
    title: "Single Acting Hydraulic Cylinders",
    text: "Single acting cylinders use hydraulic pressure to move in one direction. A spring, gravity, or an external force may provide the return movement. They can be suitable for applications where powered movement is needed primarily in one direction.",
  },
  {
    title: "Double Acting Hydraulic Cylinders",
    text: "Double acting cylinders use hydraulic pressure for both extension and retraction. They are commonly used in machinery requiring controlled movement in two directions.",
  },
  {
    title: "Tie-Rod Hydraulic Cylinders",
    text: "Tie-rod cylinders use external rods to secure the cylinder assembly. Depending on their specifications, they may be suitable for industrial machinery and hydraulic power systems.",
  },
  {
    title: "Welded Hydraulic Cylinders",
    text: "Welded cylinders feature a welded body construction and may be suitable for compact installations and demanding applications, including certain mobile hydraulic systems.",
  },
];

const selectionSteps = [
  {
    title: "1. Bore Diameter and Required Force",
    text: "The bore diameter affects the force generated at a given hydraulic pressure. The required force should account for the load, friction, operating conditions, and an appropriate engineering safety margin.",
  },
  {
    title: "2. Stroke Length",
    text: "Stroke length determines the distance the piston rod travels. An incorrect stroke can prevent the machine from completing its intended movement or create mechanical interference.",
  },
  {
    title: "3. Operating Pressure",
    text: "Confirm the normal working pressure, maximum expected pressure, and the cylinder's required pressure rating. The cylinder must be suitable for the hydraulic system in which it will operate.",
  },
  {
    title: "4. Mounting and Connection Details",
    text: "Provide mounting dimensions, port sizes, connection types, and the cylinder's overall length. These details are especially important when replacing an existing unit.",
  },
  {
    title: "5. Materials and Sealing Requirements",
    text: "Temperature, moisture, dust, corrosion exposure, and hydraulic fluid type can influence material and seal selection. Explain the operating environment so the supplier can evaluate suitable options.",
  },
  {
    title: "6. Drawings and Existing Cylinder Details",
    text: "A technical drawing, equipment model, or existing cylinder part number can help clarify your requirements and reduce the risk of ordering an incompatible product.",
  },
];

const applications = [
  "Industrial automation and manufacturing machinery",
  "Hydraulic presses and forming equipment",
  "Material handling and lifting systems",
  "Construction and agricultural machinery",
  "Special-purpose machines and OEM equipment",
  "Industrial maintenance and replacement projects",
];

export default function HydraulicCylinderPage() {
  const title = "Custom Hydraulic Cylinder Manufacturers in Germany";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              src="/products/hydraulic-cylinder/main.webp"
              alt="HPP Hydraulic Cylinder - industrial hydraulic cylinder with chrome-plated rod"
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

            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Finding the right hydraulic cylinder for specialized
                machinery can be challenging when standard sizes, mounting
                options, or stroke lengths do not meet your equipment's
                requirements. For German manufacturers, OEMs, machine
                builders, and industrial maintenance teams, a properly
                specified hydraulic cylinder can help improve equipment
                performance, support reliable operation, and reduce
                compatibility issues.
              </p>
              <p>
                If you are searching for{" "}
                <Link href="/hydraulic-cylinder-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">
                  Custom Hydraulic Cylinder Manufacturers in Germany
                </Link>
                , it is important to consider more
                than price. Dimensions, operating pressure, required force,
                materials, sealing arrangements, and working conditions all
                influence which cylinder is suitable for your application.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) provides a point of
                contact for businesses exploring hydraulic and pneumatic
                product solutions. Contact HPP to discuss your application
                and confirm whether its available products and
                customization capabilities match your requirements.
              </p>
            </div>

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
        <div className="space-y-16 text-lg leading-8 text-gray-600">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              What Are Custom Hydraulic Cylinders?
            </h2>
            <div className="space-y-6">
              <p>
                Custom hydraulic cylinders are designed or configured to
                meet the specific operating requirements of a machine or
                hydraulic system. They may differ from standard cylinders in
                bore diameter, stroke length, rod dimensions, mounting
                style, port configuration, materials, or other technical
                specifications.
              </p>
              <p>
                These cylinders are useful when an existing machine requires
                a non-standard replacement or when an equipment manufacturer
                needs a cylinder that fits a particular design.
              </p>
              <p>
                For example, a machine builder may need a specific stroke
                length to achieve the required movement, while an
                industrial plant may need a replacement cylinder that
                matches an existing mounting arrangement.
              </p>
              <p>
                The objective is to select a cylinder that meets the
                application's performance requirements while maintaining
                compatibility with the hydraulic system and equipment.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Do German Industrial Buyers Need Custom Hydraulic
              Cylinders?
            </h2>
            <div className="space-y-6">
              <p>
                Germany has a strong industrial and engineering sector,
                where machinery often operates under demanding production
                schedules and precise operating requirements. Equipment
                designers and maintenance teams may need hydraulic
                cylinders that fit specific machine configurations rather
                than relying on standard dimensions.
              </p>
              <p>
                A suitable custom cylinder can help address several common
                challenges:
              </p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {buyerChallenges.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              The final design should be based on verified technical
              requirements, not assumptions about the equipment.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Types of Custom Hydraulic Cylinders
            </h2>
            <p className="mb-6">
              Different applications require different{" "}
              <Link href="/products" className="font-semibold text-[#f35a3b] hover:underline">
                cylinder designs
              </Link>
              . The appropriate option depends on the required motion,
              available space, load, and hydraulic circuit.
            </p>
            <div className="space-y-6">
              {cylinderTypes.map((type) => (
                <div key={type.title}>
                  <h3 className="mb-2 text-xl font-bold text-[#0d1b3f]">
                    {type.title}
                  </h3>
                  <p>{type.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6">
              Custom dimensions and configurations depend on the
              manufacturer's engineering capabilities and the application's
              technical requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              How to Choose the Right Custom Hydraulic Cylinder
            </h2>
            <p className="mb-6">
              Before contacting a supplier, prepare the specifications that
              determine cylinder performance and compatibility.
            </p>
            <div className="space-y-6">
              {selectionSteps.map((step) => (
                <div key={step.title}>
                  <h3 className="mb-2 text-xl font-bold text-[#0d1b3f]">
                    {step.title}
                  </h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Applications of Custom Hydraulic Cylinders
            </h2>
            <p className="mb-6">
              Custom hydraulic cylinders may be used in a wide range of
              industrial and mobile applications, depending on their design
              and specifications.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              {applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              For each application, cylinder selection should consider load
              requirements, operating pressure, duty cycle, installation
              dimensions, and applicable safety standards.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Consider Hydraulic and Pneumatic Products (HPP)?
            </h2>
            <div className="space-y-6">
              <p>
                Choosing a hydraulic cylinder supplier involves more than
                comparing product prices. Industrial buyers need clear
                technical communication, appropriate specifications, and
                confirmation that a proposed solution fits their
                application.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) is a contact point
                for businesses looking for hydraulic and pneumatic product
                solutions. When discussing a custom cylinder requirement,
                provide your application details and technical
                specifications so the available options can be evaluated.
              </p>
              <p>
                Before placing an order, confirm HPP's customization
                capabilities, available cylinder designs, technical
                documentation, quality requirements, delivery timelines, and
                shipping arrangements to Germany.
              </p>
              <p>
                For German OEMs and industrial buyers, sharing complete
                specifications at the beginning can make product evaluation
                and procurement more efficient.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Request a Custom Hydraulic Cylinder Quote
            </h2>
            <div className="space-y-6">
              <p>
                Need a hydraulic cylinder for specialized machinery, an
                existing production line, or a replacement project? Start
                by identifying the cylinder's required force, stroke,
                pressure rating, mounting configuration, and operating
                environment.
              </p>
              <p>
                Contact{" "}
                <Link href="/contact-us" className="font-semibold text-[#f35a3b] hover:underline">
                  Hydraulic and Pneumatic Products (HPP)
                </Link>{" "}
                to discuss
                your application and confirm whether a suitable product can
                be supplied.
              </p>
              <p>
                For a more useful quotation, share your technical drawing,
                bore diameter, stroke length, operating pressure, connection
                details, required quantity, and delivery location in
                Germany.
              </p>
              <p>
                Request a Quote Today to discuss your custom hydraulic
                cylinder requirements with HPP and identify the next steps
                toward a suitable solution.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-[#e2582a] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#c94a20]"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
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
