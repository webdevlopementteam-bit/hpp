"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
{
question: "Where can I find a hydraulic cylinders manufacturer in United States?",
answer:
"Look for a manufacturer with suitable cylinder specifications, technical documentation, application expertise, and dependable delivery options. Contact HPP to confirm its manufacturing capabilities and product availability for your requirements.",
},

{
question: "How much does a hydraulic cylinder cost in the USA?",
answer:
"Pricing depends on cylinder type, bore size, stroke length, pressure rating, materials, mounting style, and order quantity. Request a quote based on your equipment specifications for an accurate estimate.",
},

{
question: "How do I choose the right hydraulic cylinder?",
answer:
"Check the required force, operating pressure, bore diameter, stroke length, mounting configuration, duty cycle, and environmental conditions before selecting a cylinder.",
},

{
question: "What is the difference between single acting and double acting hydraulic cylinders?",
answer:
"A single acting cylinder uses hydraulic pressure for movement in one direction, while a double acting cylinder uses hydraulic pressure for both extension and retraction.",
},

{
question: "Can I get a custom hydraulic cylinder for my equipment?",
answer:
"Custom cylinders may be available depending on the supplier's capabilities. Provide the required dimensions, pressure, stroke, mounting style, and application to determine feasibility.",
},

{
question: "How do I know if my hydraulic cylinder needs replacement?",
answer:
"Fluid leakage, a bent piston rod, damaged seals, reduced force, uneven movement, or excessive drift may indicate a problem. Inspect the system and determine whether repair or replacement is appropriate.",
},

{
question: "What information is required to order a hydraulic cylinder?",
answer:
"Provide the bore, stroke, rod diameter, operating pressure, mounting type, port details, quantity, and application. Existing cylinder drawings or model numbers can help verify compatibility.",
},

{
question: "Which hydraulic cylinders are used in industrial machinery?",
answer:
"Depending on the application, industrial machinery may use tie-rod, welded, single acting, or double acting cylinders. Selection depends on load, pressure, mounting, and operating conditions.",
},

{
question: "How can I extend the service life of a hydraulic cylinder?",
answer:
"Follow recommended maintenance procedures, keep hydraulic fluid clean, inspect seals and rods, monitor leakage, and operate within the specified pressure and load limits.",
},

{
question: "Does HPP supply hydraulic cylinders to customers in the United States?",
answer:
"Contact Hydraulic and Pneumatic Products (HPP) to confirm current product availability, shipping options, lead times, and technical support for US customers.",
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

const cylinderTypes = [
  {
    title: "Single Acting Hydraulic Cylinders",
    text: "Single acting cylinders use hydraulic pressure to move the piston in one direction, with gravity, a spring, or an external force providing the return movement. They are suitable for applications where powered movement is required primarily in one direction.",
  },
  {
    title: "Double Acting Hydraulic Cylinders",
    text: "Double acting cylinders use hydraulic pressure to extend and retract the piston. They are commonly used in machinery that requires controlled movement in both directions, including industrial presses and material handling equipment.",
  },
  {
    title: "Tie-Rod Hydraulic Cylinders",
    text: "Tie-rod cylinders use external rods to hold the cylinder assembly together. Depending on their design and pressure rating, they are commonly found in industrial manufacturing equipment and hydraulic systems.",
  },
  {
    title: "Welded Hydraulic Cylinders",
    text: "Welded cylinders feature a welded construction and are frequently considered for mobile equipment and demanding operating environments where compact dimensions and application-specific designs are important.",
  },
];

const selectionSteps = [
  {
    title: "1. Bore Diameter and Stroke Length",
    text: "The bore diameter affects the force a cylinder can generate at a given pressure. Stroke length determines how far the piston rod travels. Both dimensions must match the machine's operating requirements.",
  },
  {
    title: "2. Operating Pressure and Required Force",
    text: "Confirm the system's working pressure and the force required to move the load. The cylinder's rated pressure and design must be suitable for the application.",
  },
  {
    title: "3. Mounting Style and Overall Dimensions",
    text: "Check whether the equipment requires clevis, flange, trunnion, or another mounting arrangement. Also verify the closed length, extended length, rod diameter, and connection locations.",
  },
  {
    title: "4. Operating Environment",
    text: "Temperature, moisture, dust, corrosion exposure, and duty cycle can influence material and seal selection. Equipment used outdoors may require different considerations from machinery operating inside a controlled manufacturing facility.",
  },
  {
    title: "5. Replacement Compatibility",
    text: "When replacing an existing cylinder, compare its model number, dimensions, ports, mounting points, pressure rating, and stroke. A cylinder that looks similar may not be a suitable direct replacement.",
  },
];

const applications = [
  {
    title: "Manufacturing equipment",
    text: "Provides linear motion for production machinery and automated processes.",
  },
  {
    title: "Construction machinery",
    text: "Supports lifting, positioning, and movement in compatible equipment.",
  },
  {
    title: "Agricultural equipment",
    text: "Powers selected lifting and adjustment mechanisms.",
  },
  {
    title: "Material handling systems",
    text: "Supports movement and positioning in suitable hydraulic applications.",
  },
  {
    title: "Hydraulic presses",
    text: "Generates controlled force for pressing and forming operations.",
  },
  {
    title: "Industrial automation",
    text: "Provides linear actuation where hydraulic power is appropriate.",
  },
];

export default function HydraulicCylinderPage() {
  const title = "Hydraulic Cylinders Manufacturer in United States";

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
                Looking for reliable hydraulic cylinders for your industrial
                equipment, manufacturing operations, or mobile machinery?
                Choosing the right hydraulic cylinder is essential for
                achieving consistent force, smooth movement, and dependable
                equipment performance. As a business searching for a
                Hydraulic Cylinders Manufacturer in United States, you need
                products that match your application's pressure
                requirements, dimensions, operating conditions, and service
                expectations.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) provides a point of
                contact for businesses exploring hydraulic and pneumatic
                product solutions. Whether you are evaluating cylinders for
                new equipment, planning a replacement, or addressing
                performance issues, understanding your technical
                requirements can help you identify the right solution for
                your application.
              </p>
              <p>
                Need help with your hydraulic cylinder requirements? Contact
                HPP to discuss your application and confirm available
                product options.
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
              What Are Hydraulic Cylinders and How Do They Work?
            </h2>
            <div className="space-y-6">
              <p>
                Hydraulic cylinders convert hydraulic fluid pressure into
                linear force and motion. They use pressurized fluid to move
                a piston inside a cylinder barrel, extending or retracting a
                rod to lift, push, pull, press, or position a load.
              </p>
              <p>
                These components are widely used in industrial machinery,
                construction equipment, material handling systems,
                agricultural machinery, and manufacturing operations.
              </p>
              <p>
                The right hydraulic cylinder helps equipment perform its
                intended task safely and efficiently. However, selecting a
                cylinder based only on its physical size can lead to
                performance issues. Bore diameter, stroke length, operating
                pressure, mounting style, and load requirements must all be
                considered before making a purchasing decision.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Types of Hydraulic Cylinders for Industrial Applications
            </h2>
            <p className="mb-6">
              Different machines require different cylinder configurations.
              Understanding the available options helps buyers narrow down
              their choices.
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
              The best cylinder type depends on the equipment, load, duty
              cycle, mounting arrangement, and operating environment.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              How to Choose the Right Hydraulic Cylinder
            </h2>
            <p className="mb-6">
              Selecting the correct hydraulic cylinder can help reduce
              compatibility problems, unnecessary downtime, and premature
              component wear. Before requesting a quote, evaluate these
              important factors.
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
              Applications of Industrial Hydraulic Cylinders
            </h2>
            <p className="mb-6">
              Hydraulic cylinders support a wide range of industrial and
              commercial operations across the United States.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              {applications.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              For every application, cylinder selection should be based on
              engineering requirements, equipment compatibility, and
              applicable safety standards.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Consider Hydraulic and Pneumatic Products (HPP)?
            </h2>
            <div className="space-y-6">
              <p>
                When sourcing hydraulic cylinders, industrial buyers need
                clear technical information, application compatibility, and
                reliable communication throughout the purchasing process.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) is a contact point
                for businesses exploring hydraulic and pneumatic products.
                Buyers can discuss their equipment requirements and confirm
                whether HPP offers a suitable cylinder for their
                application.
              </p>
              <p>
                Before purchasing, verify the available cylinder types,
                technical specifications, customization options, warranty
                terms, delivery timelines, and support services. For
                US-based projects, it is also important to confirm shipping
                arrangements, lead times, and any documentation required for
                your equipment.
              </p>
              <p>
                Providing accurate specifications at the beginning can help
                simplify product evaluation and reduce delays during
                procurement.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Request a Hydraulic Cylinder Quote
            </h2>
            <div className="space-y-6">
              <p>
                Need a hydraulic cylinder for new machinery, an industrial
                project, or a replacement application? Start by identifying
                the force, movement, pressure, and installation requirements
                of your equipment.
              </p>
              <p>
                Contact Hydraulic and Pneumatic Products (HPP) to discuss
                your application and confirm suitable available options.
              </p>
              <p>
                For a more accurate inquiry, share the cylinder bore, stroke
                length, working pressure, mounting style, required
                quantity, and equipment details. If you are replacing an
                existing cylinder, include its model number or technical
                drawing whenever possible.
              </p>
              <p>
                Request a Quote Today to discuss your hydraulic cylinder
                requirements with HPP and take the next step toward finding
                a solution suited to your application.
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
