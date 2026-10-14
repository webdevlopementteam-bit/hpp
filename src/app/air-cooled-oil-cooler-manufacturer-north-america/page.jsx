"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question:
      "Where can I find an air cooled oil cooler manufacturer in North America?",
    answer:
      "Compare manufacturers and suppliers based on cooling capacity, technical specifications, application compatibility, product availability, and support. Contact HPP to confirm its available oil cooler options and North American supply capabilities.",
  },
  {
    question: "How much does an air cooled oil cooler cost?",
    answer:
      "Pricing depends on cooling capacity, flow rate, operating pressure, materials, fan configuration, and quantity. Request a quote using your equipment specifications for a more relevant estimate.",
  },
  {
    question: "How do I size an air cooled hydraulic oil cooler?",
    answer:
      "Determine the heat load, oil flow, operating temperatures, ambient temperature, and allowable pressure drop. A qualified supplier or engineer can use these details to establish the required cooling capacity.",
  },
  {
    question: "What causes hydraulic oil to overheat?",
    answer:
      "Common causes include excessive system load, restricted airflow, incorrect oil viscosity, internal leakage, high ambient temperatures, and inadequate cooling capacity.",
  },
  {
    question: "Are air cooled oil coolers suitable for industrial machinery?",
    answer:
      "Yes, they can be suitable for compatible hydraulic power units, presses, manufacturing equipment, and other industrial applications when correctly sized for the operating conditions.",
  },
  {
    question:
      "What is the difference between an air cooled and water cooled oil cooler?",
    answer:
      "Air cooled units transfer heat to ambient air, while water cooled units use water to remove heat. The best choice depends on the required cooling capacity, installation environment, utilities, and operating costs.",
  },
  {
    question: "Can I replace my existing hydraulic oil cooler with another model?",
    answer:
      "Yes, if the replacement is compatible with the circuit. Check cooling capacity, dimensions, connections, pressure rating, oil compatibility, and airflow requirements before ordering.",
  },
  {
    question: "What specifications should I provide when requesting a quote?",
    answer:
      "Share oil flow rate, operating pressure, inlet and target outlet temperatures, ambient temperature, fluid type, mounting dimensions, quantity, and delivery location.",
  },
  {
    question: "How can I improve the efficiency of an air cooled oil cooler?",
    answer:
      "Maintain clean cooling surfaces, ensure unobstructed airflow, inspect the fan, and operate within the specified flow and temperature limits. Follow the manufacturer's maintenance instructions.",
  },
  {
    question: "How do I request an air cooled oil cooler quote from HPP?",
    answer:
      "Contact Hydraulic and Pneumatic Products (HPP) with your application details and technical requirements. Confirm product availability, specifications, delivery options, and compatibility before placing your order.",
  },
];

const featuredProducts = [
  { name: "Offline Cooling System for Cement Plant", image: "1.webp" },
  { name: "Offline Cooling System for Automobile Industry", image: "2.webp" },
  { name: "Offline Cooling System for Gearbox", image: "3.webp" },
  {
    name: "Air-Cooled Oil Cooler with Hydraulic Motor for Moving Vehicles",
    image: "4.webp",
  },
  {
    name: "Air-Cooled Oil Cooler for Stone Crusher Machines",
    image: "5.webp",
  },
  {
    name: "Air Cooled Oil Cooler for Stone Crushers Machines",
    image: "6.webp",
  },
];

const coolerBenefits = [
  {
    title: "Better temperature control",
    text: "Helps keep hydraulic oil within the recommended operating range.",
  },
  {
    title: "Equipment protection",
    text: "Helps reduce heat-related stress on compatible hydraulic components.",
  },
  {
    title: "Reduced overheating risks",
    text: "Supports thermal management during demanding operating cycles.",
  },
  {
    title: "Practical installation",
    text: "Can be suitable for industrial and mobile applications where a cooling water supply is not preferred or available.",
  },
  {
    title: "Simplified routine maintenance",
    text: "Accessible cooling surfaces can be inspected and cleaned to help maintain airflow.",
  },
];

const applications = [
  {
    title: "Hydraulic Power Units",
    text: "Help manage oil temperature in industrial hydraulic circuits.",
  },
  {
    title: "Manufacturing Equipment",
    text: "Support temperature control in machinery used for production and material processing.",
  },
  {
    title: "Hydraulic Presses",
    text: "Help dissipate heat generated during repeated operating cycles.",
  },
  {
    title: "Construction and Mobile Equipment",
    text: "Support cooling requirements in compatible hydraulic systems.",
  },
  {
    title: "Gearboxes and Lubrication Systems",
    text: "Help remove excess heat from suitable oil circulation applications.",
  },
  {
    title: "OEM Equipment",
    text: "Can be considered during the design of new machinery when cooling capacity, available space, and operating conditions are clearly defined.",
  },
];

const selectionSteps = [
  {
    title: "1. Determine the Required Cooling Capacity",
    text: "Estimate the heat that the cooler must remove during normal and peak operation. Do not select a cooler based on equipment horsepower alone; actual heat generation and duty cycle matter.",
  },
  {
    title: "2. Check Oil Flow and Operating Pressure",
    text: "Provide the required oil flow rate, maximum working pressure, and allowable pressure drop. These specifications help determine whether a cooler is compatible with your hydraulic circuit.",
  },
  {
    title: "3. Consider Ambient Temperature",
    text: "The highest expected ambient temperature affects the cooler's ability to transfer heat to the air. Equipment operating in hot environments may require a different cooling capacity than machinery used in climate-controlled facilities.",
  },
  {
    title: "4. Confirm Dimensions and Connections",
    text: "Check available mounting space, inlet and outlet connections, airflow clearance, and electrical requirements for fan-powered models. This is particularly important when replacing an existing cooler.",
  },
  {
    title: "5. Evaluate Maintenance and Service Requirements",
    text: "Consider access for cleaning, fan inspection, and routine servicing. In dusty industrial environments, restricted airflow can reduce cooling performance.",
  },
];

const quoteChecklist = [
  "Equipment type and application",
  "Required oil flow rate and operating pressure",
  "Oil inlet temperature and target outlet temperature",
  "Maximum ambient operating temperature",
  "Available mounting dimensions and connection details",
  "Required quantity and delivery location",
];

function ProductCard({ name, image }) {
  return (
    <Link
      href="/contact-us"
      className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-80 items-center justify-center bg-white p-6">
        <Image
          src={`/Air Cooled Oil Cooler/${image}`}
          alt={name}
          width={560}
          height={480}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-gray-50 px-6 py-5">
        <h3 className="min-h-[3rem] text-center text-base font-bold text-[#0d1b3f]">
          {name}
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
  );
}

export default function AirCooledOilCoolerPage() {
  const title = "Air Cooled Oil Cooler Manufacturer in North America";

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
              src="/products/air-cooled-oil-cooler/main.webp"
              alt="HPP Air Cooled Oil Cooler - industrial hydraulic oil cooling unit"
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
                Looking for an{" "}
                <Link href="/products" className="font-semibold text-[#f35a3b] hover:underline">
                  air cooled oil cooler for your industrial or hydraulic system
                </Link>
                ? Choosing the right cooler can help control
                oil temperature, protect critical components, and reduce
                unexpected equipment downtime. For manufacturers, maintenance
                teams, OEMs, and industrial equipment buyers across North
                America, the right cooling solution starts with
                understanding the machine's heat load, operating conditions,
                and performance requirements.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) supports businesses
                exploring hydraulic and pneumatic product solutions. If you
                are sourcing an air cooled oil cooler for new equipment, an
                existing hydraulic system, or a replacement project,
                understanding your technical requirements can help you
                identify a suitable solution for your application.
              </p>
              <p>
                Need help identifying the right oil cooler? Contact HPP to
                discuss your application and confirm available product
                options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Air Cooled Oil Cooler</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore offline cooling systems and air cooled oil coolers
              engineered for hydraulic power units and industrial machines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.image} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="space-y-16 text-lg leading-8 text-gray-600">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Find the Right Air Cooled Oil Cooler for Your Application
            </h2>
            <div className="space-y-6">
              <p>
                Hydraulic systems generate heat as pumps, valves, cylinders,
                and other components operate. When heat builds up faster
                than the system can dissipate it, oil temperature can rise
                beyond the recommended operating range. This may affect
                fluid viscosity, component performance, seals, and overall
                equipment reliability.
              </p>
              <p>
                An{" "}
                <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">
                  air cooled oil cooler
                </Link>{" "}
                removes excess heat by transferring
                it from the oil to the surrounding air. Depending on its
                design and cooling capacity, it can help maintain more
                consistent operating temperatures without requiring a
                separate water-cooling supply.
              </p>
              <p>
                For North American industrial operations, selecting the
                right cooler means looking beyond the purchase price.
                Cooling capacity, airflow, pressure drop, installation
                space, and maintenance requirements all influence long-term
                performance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Choose an Air Cooled Hydraulic Oil Cooler?
            </h2>
            <p className="mb-6">
              An appropriately sized air cooled hydraulic oil cooler can
              support reliable equipment operation in applications where
              effective thermal management is essential.
            </p>
            <ul className="list-disc space-y-3 pl-6">
              {coolerBenefits.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Actual performance depends on system design, ambient
              temperature, cooler specifications, and operating conditions.
              An oil cooler also cannot resolve every overheating problem,
              so the underlying cause should be assessed before selecting a
              replacement.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Air Cooled Oil Cooler Applications
            </h2>
            <p className="mb-6">
              The right cooler depends on the equipment, fluid, heat load,
              and operating environment. Air cooled oil coolers may be used
              in a variety of compatible applications, including:
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
              Before ordering, confirm that the cooler is suitable for the
              specific fluid and circuit in which it will be installed.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              How to Select the Right Industrial Oil Cooler
            </h2>
            <p className="mb-6">
              Choosing an undersized cooler can leave a system running too
              hot, while an unsuitable design can create installation or
              pressure-drop problems. Use these factors to narrow down your
              options.
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
            <p className="mt-6">
              Not sure which specifications you need? Share your equipment
              details with HPP to discuss the application and confirm which
              available options may be suitable.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Work With Hydraulic and Pneumatic Products (HPP)?
            </h2>
            <div className="space-y-6">
              <p>
                Selecting an industrial oil cooler is a technical purchasing
                decision. Buyers need to understand whether a product meets
                their cooling requirements, fits their equipment, and can be
                supplied within their project timeline.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) is a contact point
                for businesses exploring hydraulic and pneumatic products.
                When discussing your requirements, provide your application
                details, operating temperatures, oil flow, pressure, and
                installation dimensions to help establish the appropriate
                product specifications.
              </p>
              <p>
                Before placing an order, confirm the available cooler
                models, technical documentation, compatibility, warranty
                terms, shipping options, and support services directly with
                HPP.
              </p>
              <p>
                Whether you are planning a new installation or evaluating a
                replacement, clear technical requirements can help make the
                purchasing process more efficient.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Request an Air Cooled Oil Cooler Quote
            </h2>
            <div className="space-y-6">
              <p>
                Need an air cooled oil cooler for your hydraulic equipment
                or industrial application? Start by identifying your
                system's cooling requirements rather than choosing a unit
                based on size or price alone.
              </p>
              <p>
                Contact{" "}
                <Link href="/contact-us" className="font-semibold text-[#f35a3b] hover:underline">
                  Hydraulic and Pneumatic Products (HPP)
                </Link>{" "}
                to discuss
                your application and request information about suitable
                available products.
              </p>
              <p>To help assess your requirements, include:</p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {quoteChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              Request a Quote Today and take the next step toward finding an
              air cooled oil cooler that meets your application's technical
              requirements.
            </p>
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
