"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How do I find a hydraulic oil cooler manufacturer in Denmark?",
    answer:
      "Compare suppliers based on cooling capacity, technical specifications, fluid compatibility, product documentation, and delivery options. Confirm whether the company manufactures oil coolers or supplies products from other manufacturers.",
  },
  {
    question: "How much does an industrial hydraulic oil cooler cost?",
    answer:
      "Pricing depends on cooling capacity, flow rate, operating pressure, materials, fan configuration, and quantity. Providing your system specifications can help a supplier prepare a relevant quotation.",
  },
  {
    question: "How do I choose the right hydraulic oil cooler?",
    answer:
      "Consider heat load, oil flow, operating pressure, inlet and outlet temperatures, ambient conditions, fluid compatibility, and installation space.",
  },
  {
    question: "What is the difference between air cooled and water cooled oil coolers?",
    answer:
      "Air cooled models transfer heat to surrounding air, while water cooled models use a water-based cooling circuit. The best choice depends on the required cooling performance, available utilities, and installation conditions.",
  },
  {
    question: "What causes hydraulic oil to overheat?",
    answer:
      "Common causes include excessive system load, inadequate cooling capacity, restricted airflow, incorrect oil viscosity, internal leakage, and high ambient temperatures.",
  },
  {
    question: "Can a hydraulic oil cooler improve equipment reliability?",
    answer:
      "A correctly sized cooler can help maintain suitable oil temperatures and reduce heat-related stress. Overall reliability also depends on proper installation, maintenance, and the condition of the hydraulic system.",
  },
  {
    question: "How often should a hydraulic oil cooler be cleaned?",
    answer:
      "Cleaning frequency depends on the environment and the manufacturer's recommendations. Inspect the cooling surfaces, fan, and airflow regularly, especially in dusty industrial settings.",
  },
  {
    question: "Can I replace an existing hydraulic oil cooler with another model?",
    answer:
      "Yes, if the replacement meets the required cooling capacity, pressure rating, flow requirements, connection dimensions, and fluid compatibility.",
  },
  {
    question: "What information is required to request an oil cooler quotation?",
    answer:
      "Provide the application, heat load if known, oil flow rate, operating pressure, inlet and outlet temperatures, fluid type, installation dimensions, quantity, and delivery location.",
  },
  {
    question: "Can HPP supply hydraulic oil coolers to Denmark?",
    answer:
      "Contact Hydraulic and Pneumatic Products (HPP) to confirm product availability, technical suitability, shipping to Denmark, delivery timelines, and support arrangements.",
  },
];

const coolerTypes = [
  {
    title: "Air cooled oil coolers",
    text: "Transfer heat from the oil to surrounding air, generally using a fan. They can be suitable where a separate cooling water supply is not preferred or available.",
  },
  {
    title: "Water cooled oil coolers",
    text: "Transfer heat to a water-based cooling circuit. They may be suitable for installations with appropriate cooling water infrastructure.",
  },
];

const coolingBenefits = [
  {
    title: "Control oil temperature",
    text: "Remove excess heat generated during machine operation.",
  },
  {
    title: "Protect hydraulic components",
    text: "Help reduce heat-related stress on seals, pumps, valves, and other compatible components.",
  },
  {
    title: "Support consistent performance",
    text: "Maintain suitable fluid properties within the recommended operating range.",
  },
  {
    title: "Reduce overheating-related interruptions",
    text: "Effective thermal management can help prevent certain heat-related operating problems.",
  },
  {
    title: "Manage maintenance requirements",
    text: "Regular cooler inspection and cleaning can help maintain airflow and heat transfer performance.",
  },
];

const applications = [
  {
    title: "Manufacturing and Production Machinery",
    text: "Production equipment can generate heat during repeated operating cycles. A suitable cooler helps manage oil temperature in compatible hydraulic systems.",
  },
  {
    title: "Hydraulic Power Units",
    text: "Hydraulic power units supply pressurized fluid to machinery and can require additional cooling when their heat generation exceeds the system's natural heat dissipation capacity.",
  },
  {
    title: "Hydraulic Presses",
    text: "Press applications may require cooling based on operating pressure, cycle frequency, heat load, and production requirements.",
  },
  {
    title: "Construction and Mobile Equipment",
    text: "Compatible hydraulic oil coolers can support temperature management in machinery operating under variable loads and environmental conditions.",
  },
  {
    title: "Industrial Gearboxes and Lubrication Systems",
    text: "Some oil coolers are designed for compatible lubrication circuits and gearboxes. Fluid type, viscosity, pressure, and cooling requirements must be checked before selection.",
  },
];

const selectionSteps = [
  {
    title: "1. Cooling Capacity",
    text: "Determine the amount of heat that must be removed during normal and peak operation. Cooler capacity should be based on the actual heat load rather than equipment horsepower alone.",
  },
  {
    title: "2. Oil Flow Rate and Pressure Drop",
    text: "Check the required flow rate, maximum working pressure, and allowable pressure drop. These values help establish compatibility with your hydraulic circuit.",
  },
  {
    title: "3. Operating and Ambient Temperature",
    text: "Consider the oil inlet temperature, target outlet temperature, and expected ambient temperature. These factors influence how effectively the cooler can transfer heat.",
  },
  {
    title: "4. Installation Space and Airflow",
    text: "Confirm the mounting dimensions, connection positions, fan requirements, and clearance for airflow. Restricted airflow can reduce cooling performance.",
  },
  {
    title: "5. Fluid Compatibility and Maintenance",
    text: "Verify compatibility with the hydraulic fluid and operating conditions. Consider access for cleaning, inspection, and routine servicing.",
  },
];

const quoteChecklist = [
  "Equipment type and application",
  "Oil type and required flow rate",
  "Operating pressure and pressure-drop limits",
  "Oil inlet and target outlet temperatures",
  "Maximum ambient temperature",
  "Installation dimensions and required quantity",
  "Delivery location in Denmark",
];

const modelSections = [
  {
    title: "HPP-L-608",
    images: ["7.webp", "8.webp", "9.webp"],
  },
  {
    title: "HPP-W-0608",
    images: ["10.webp", "11.webp", "12.webp"],
  },
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

function ModelSection({ title, description, images }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mx-auto mb-8 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-28 bg-gray-300" />
        {description && (
          <p className="mt-8 text-lg leading-8 text-gray-600">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ProductCard key={`${title}-${image}`} name={title} image={image} />
        ))}
      </div>
    </div>
  );
}

export default function AirCooledOilCoolerPage() {
  const title = "Hydraulic Oil Cooler Manufacturer Denmark";

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
                Is your hydraulic equipment running hotter than expected?
                Excessive oil temperature can affect hydraulic fluid
                performance, increase component wear, and lead to unplanned
                maintenance. Choosing the right hydraulic oil cooler helps
                industrial businesses manage heat and maintain reliable
                equipment operation.
              </p>
              <p>
                For companies searching for a{" "}
                <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">
                  Hydraulic Oil Cooler Manufacturer Denmark
                </Link>
                , the right solution should match the
                machine's cooling requirements, oil flow, operating
                pressure, ambient temperature, and installation space.
                Whether you operate manufacturing machinery, hydraulic power
                units, or mobile equipment, selecting a suitable cooler can
                help improve thermal management and support consistent
                performance.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) is a contact point
                for businesses exploring hydraulic and pneumatic product
                solutions. Contact HPP to discuss your application and
                confirm available oil cooler options for your requirements.
              </p>
              <p>
                Looking for a suitable hydraulic oil cooler? Share your
                equipment specifications to help identify the right product
                for your application.
              </p>
            </div>
          </div>
        </div>
      </div>

      {modelSections.map((section, index) => (
        <div
          key={section.title}
          className={index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}
        >
          <ModelSection {...section} />
        </div>
      ))}

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="space-y-16 text-lg leading-8 text-gray-600">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              What Is a Hydraulic Oil Cooler?
            </h2>
            <div className="space-y-6">
              <p>
                A hydraulic oil cooler is a heat exchanger that removes
                excess heat from hydraulic fluid before it circulates
                through the system again. Hydraulic pumps, valves, motors,
                and cylinders generate heat during operation, particularly
                under heavy loads or continuous working cycles.
              </p>
              <p>
                An appropriately sized oil cooler helps maintain the fluid
                within its recommended operating temperature range. This
                supports suitable oil viscosity and helps protect seals,
                pumps, and other hydraulic components from excessive heat.
              </p>
              <p>
                Two common options are{" "}
                <Link href="/products" className="font-semibold text-[#f35a3b] hover:underline">
                  air cooled and water cooled oil coolers
                </Link>
                .
              </p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {coolerTypes.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              The right option depends on the system's heat load, operating
              environment, available utilities, and maintenance
              requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Do Industrial Systems Need Hydraulic Oil Cooling?
            </h2>
            <div className="space-y-6">
              <p>
                Excessive heat can reduce hydraulic system efficiency and
                contribute to premature component wear. For Danish
                industrial businesses, maintaining appropriate oil
                temperatures can be particularly important in equipment
                operating for extended periods or under demanding
                production conditions.
              </p>
              <p>
                A properly selected hydraulic oil cooler can help
                businesses:
              </p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {coolingBenefits.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Actual results depend on equipment design, operating
              conditions, cooler sizing, and maintenance. An oil cooler
              should not be treated as a substitute for diagnosing
              underlying hydraulic system problems.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Applications of Industrial Hydraulic Oil Coolers
            </h2>
            <p className="mb-6">
              Hydraulic oil coolers are used across several industries,
              depending on their design, cooling capacity, and fluid
              compatibility.
            </p>
            <div className="space-y-6">
              {applications.map((item) => (
                <div key={item.title}>
                  <h3 className="mb-2 text-xl font-bold text-[#0d1b3f]">
                    {item.title}
                  </h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              How to Choose the Right Hydraulic Oil Cooler
            </h2>
            <p className="mb-6">
              Choosing a cooler based only on its size or price can lead to
              inadequate cooling or unnecessary operating costs. Evaluate
              these factors before requesting a quotation.
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
              For installations in Denmark, also consider the equipment's
              expected temperature range, indoor or outdoor location,
              moisture exposure, and seasonal operating conditions.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Consider Hydraulic and Pneumatic Products (HPP)?
            </h2>
            <div className="space-y-6">
              <p>
                When sourcing an oil cooler, industrial buyers need clear
                technical information and confidence that the selected
                product matches their equipment requirements.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) provides a contact
                point for businesses exploring hydraulic and pneumatic
                products. Before purchasing, confirm the available oil
                cooler models, cooling capacity, technical specifications,
                compatibility, warranty terms, and delivery arrangements.
              </p>
              <p>
                If you are sourcing for a new machine, upgrading an
                existing hydraulic system, or replacing an older cooler,
                sharing accurate specifications can help simplify the
                selection process.
              </p>
              <p>
                For buyers in Denmark, it is also important to confirm
                shipping availability, delivery timelines, technical
                documentation, and support options before placing an
                order.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Request a Hydraulic Oil Cooler Quote
            </h2>
            <div className="space-y-6">
              <p>
                Need a hydraulic oil cooler for your industrial equipment
                or hydraulic power unit? Start by identifying your system's
                heat load, flow rate, operating pressure, and target oil
                temperature.
              </p>
              <p>
                Contact{" "}
                <Link href="/contact-us" className="font-semibold text-[#f35a3b] hover:underline">
                  Hydraulic and Pneumatic Products (HPP)
                </Link>{" "}
                to discuss
                your application and confirm which available products may
                meet your requirements.
              </p>
              <p>For a more useful quotation, provide:</p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {quoteChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              Request a Quote Today to discuss your hydraulic oil cooling
              requirements with HPP and take the next step toward finding a
              suitable solution.
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
