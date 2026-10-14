"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is an industrial hydraulic power unit used for?",
    answer:
      "An industrial hydraulic power unit supplies pressurized fluid to operate hydraulic cylinders, motors, presses, lifting systems, and other compatible industrial machinery.",
  },
  {
    question: "How do I choose an industrial hydraulic power unit supplier in Sweden?",
    answer:
      "Compare technical capabilities, product specifications, application compatibility, documentation, delivery arrangements, and support. Confirm whether the supplier can serve your location and application.",
  },
  {
    question: "How much does an industrial hydraulic power unit cost?",
    answer:
      "Pricing depends on pressure, flow rate, motor power, reservoir size, valves, controls, and customization. Provide your specifications to obtain an application-specific quotation.",
  },
  {
    question: "What information is needed to order a hydraulic power unit?",
    answer:
      "Share the required pressure, flow rate, motor power, reservoir capacity, fluid type, control requirements, operating environment, and machine details.",
  },
  {
    question: "Can a hydraulic power unit be customized for specific machinery?",
    answer:
      "Depending on the supplier's capabilities, configurations may be tailored to the required flow, pressure, reservoir, valves, controls, and installation dimensions.",
  },
  {
    question: "What is the difference between a hydraulic power unit and a hydraulic pump?",
    answer:
      "A hydraulic pump generates fluid flow, while a hydraulic power unit is a complete assembly that typically includes a pump, motor, reservoir, and supporting components.",
  },
  {
    question: "Are hydraulic power units suitable for cold environments in Sweden?",
    answer:
      "They can be suitable when designed for the expected temperatures. Hydraulic fluid viscosity, startup conditions, seals, and any required temperature-control equipment should be evaluated.",
  },
  {
    question: "How can I reduce energy consumption in a hydraulic power unit?",
    answer:
      "Correctly size the pump and motor, minimize unnecessary pressure losses, maintain clean filters, and consider variable-speed or demand-based control where appropriate.",
  },
  {
    question: "How often should an industrial hydraulic power unit be maintained?",
    answer:
      "Follow the manufacturer's maintenance schedule. Typical checks include fluid condition, filters, leaks, operating temperature, noise, and component performance.",
  },
  {
    question: "Can HPP supply hydraulic power units to Sweden?",
    answer:
      "Contact Hydraulic and Pneumatic Products (HPP) to confirm available units, technical suitability, shipping to Sweden, lead times, and support arrangements.",
  },
];

const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const products = [
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "1.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with valve bank and pressure gauges",
  },
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "2.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with external motor frame and oil cooler",
  },
  { name: "Hydraulic Power Pack for Hydro Testers - Single Tube", image: "3.webp" },
  { name: "Hydraulic Power Pack for Hydro Testers - Triple Tube", image: "4.webp" },
  { name: "Hydraulic Power Pack for Ingot Cutting Machine", image: "5.webp" },
  { name: "Hydraulic Power Pack for Straightening Machine", image: "6.webp" },
  { name: "Hydraulic Power Pack For Hydro Tester", image: "7.webp" },
  { name: "Hydraulic Power Pack for Injection Moulding Machine", image: "8.webp" },
  { name: "Hydraulic Power Pack for Push Pointer", image: "9.webp" },
  { name: "Hydraulic Power Pack for Sugar Mill Industry", image: "10.webp" },
  { name: "Hydraulic Power Pack for CNC Clamp/De-Clamp", image: "11.webp" },
  { name: "Hydraulic Power Pack for Hydraulic Press", image: "12.webp" },
];

const swedishBenefits = [
  {
    title: "Consistent machine performance",
    text: "Provides hydraulic flow and pressure suited to the application's requirements.",
  },
  {
    title: "Improved operational reliability",
    text: "Correct component selection helps reduce avoidable system problems.",
  },
  {
    title: "Energy-conscious operation",
    text: "Appropriate motor and pump sizing can help avoid unnecessary energy use.",
  },
  {
    title: "Simplified maintenance",
    text: "Accessible filters, reservoirs, and components can make routine servicing easier.",
  },
  {
    title: "Application flexibility",
    text: "Different configurations can support a range of industrial machinery and operating cycles.",
  },
];

const applications = [
  {
    title: "Manufacturing and Production Equipment",
    text: "Hydraulic power units supply the pressure and flow needed by compatible production machinery, clamping systems, and industrial equipment.",
  },
  {
    title: "Hydraulic Presses",
    text: "Press applications require careful consideration of operating pressure, cylinder force, cycle time, and flow requirements.",
  },
  {
    title: "Material Handling Equipment",
    text: "Suitable hydraulic power units can support lifting, positioning, and movement systems used in industrial facilities.",
  },
  {
    title: "Special-Purpose Machinery",
    text: "Machine builders may require a particular combination of pump capacity, valves, reservoir size, and control components to match a machine's design.",
  },
  {
    title: "Industrial Maintenance and Replacement Projects",
    text: "When replacing an existing unit, checking the original specifications can help reduce compatibility issues and unnecessary installation changes.",
  },
];

const selectionSteps = [
  {
    title: "1. Operating Pressure",
    text: "Determine the working pressure and maximum pressure required by the hydraulic circuit. The selected components must be rated for the intended operating conditions.",
  },
  {
    title: "2. Required Flow Rate",
    text: "Flow rate affects the speed of hydraulic cylinders and motors. An undersized unit may result in slow operation, while excessive flow can increase energy use and heat generation.",
  },
  {
    title: "3. Motor and Pump Selection",
    text: "Motor power and pump displacement should match the system's pressure, flow, duty cycle, and efficiency requirements.",
  },
  {
    title: "4. Reservoir Capacity",
    text: "Tank capacity depends on system design, fluid requirements, heat management, and the operating cycle. The reservoir should be suitable for the complete hydraulic application.",
  },
  {
    title: "5. Operating Environment",
    text: "Consider ambient temperature, available installation space, noise requirements, and exposure to dust or moisture. Cold-weather applications may require additional attention to hydraulic fluid viscosity and startup procedures.",
  },
  {
    title: "6. Control and Maintenance Requirements",
    text: "Check whether the application needs directional valves, pressure controls, filtration, monitoring instruments, or specific electrical controls. Consider how easily components can be inspected and serviced.",
  },
];

const quoteChecklist = [
  "Equipment type and intended application",
  "Required operating pressure and flow rate",
  "Motor power and electrical supply requirements",
  "Reservoir capacity and hydraulic fluid type",
  "Operating temperature and installation conditions",
  "Required quantity and delivery location in Sweden",
];

export default function HydraulicPowerPackPage() {
  const title = "Industrial Hydraulic Power Unit Supplier Sweden";

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
              src="/products/hydraulic-power-pack/main.webp"
              alt="HPP Hydraulic Power Pack - industrial hydraulic power unit"
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
                Looking for an industrial hydraulic power unit for your
                machinery or production facility? Choosing the right
                hydraulic power unit can help improve machine performance,
                maintain consistent operating pressure, and reduce
                unnecessary downtime. For industrial businesses in Sweden,
                selecting a suitable system means considering equipment
                requirements, energy consumption, operating conditions, and
                long-term maintenance.
              </p>
              <p>
                If you are searching for an Industrial Hydraulic Power Unit
                Supplier Sweden, Hydraulic and Pneumatic Products (HPP) can
                be a point of contact for discussing hydraulic product
                requirements and available solutions. Whether you need a
                power unit for new machinery, an existing production line,
                or a replacement project, understanding your technical needs
                is the first step toward making the right purchasing
                decision.
              </p>
              <p>
                Need a hydraulic power unit for your application? Contact
                HPP to discuss your requirements and confirm available
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
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="space-y-16 text-lg leading-8 text-gray-600">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              What Is an Industrial Hydraulic Power Unit?
            </h2>
            <div className="space-y-6">
              <p>
                An industrial hydraulic power unit, also known as a
                hydraulic power pack, supplies pressurized hydraulic fluid
                to operate machinery and hydraulic components. A typical
                unit includes an electric motor, hydraulic pump, reservoir,
                valves, filters, and other components selected according
                to the system design.
              </p>
              <p>
                The pump converts mechanical energy into hydraulic flow,
                while the valves regulate pressure and direct fluid to the
                required components. The reservoir stores hydraulic fluid
                and supports the system's operation.
              </p>
              <p>
                Depending on its configuration, a hydraulic power unit can
                operate hydraulic cylinders, motors, presses, lifting
                equipment, and other compatible machinery.
              </p>
              <p>
                The correct unit must deliver the required flow and
                pressure without exceeding the operating limits of the
                connected equipment.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Do Swedish Industries Need the Right Hydraulic Power Unit?
            </h2>
            <div className="space-y-6">
              <p>
                Industrial equipment often operates under demanding
                production schedules. An unsuitable hydraulic power unit
                may cause slow machine movement, excessive heat,
                inconsistent pressure, or unnecessary energy consumption.
              </p>
              <p>
                A properly selected unit can help businesses address these
                challenges.
              </p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {swedishBenefits.map((item) => (
                <li key={item.title}>
                  <span className="font-bold text-[#0d1b3f]">
                    {item.title}:
                  </span>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-6">
              <p>
                Actual performance depends on system design, component
                quality, installation, maintenance, and operating
                conditions.
              </p>
              <p>
                For facilities in Sweden, it is also important to consider
                the installation environment. Equipment operating in cold
                areas or unheated facilities may require appropriate fluid
                selection, temperature management, and cold-start
                considerations.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Applications of Industrial Hydraulic Power Units
            </h2>
            <p className="mb-6">
              Hydraulic power units are used across different industrial
              sectors, depending on their capacity and configuration.
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
              How to Choose the Right Hydraulic Power Unit
            </h2>
            <p className="mb-6">
              Before contacting a supplier, identify the technical
              requirements of your machinery.
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
              Providing these details helps a supplier evaluate which
              available hydraulic power unit may suit your application.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Why Consider Hydraulic and Pneumatic Products (HPP)?
            </h2>
            <div className="space-y-6">
              <p>
                Selecting an industrial hydraulic power unit involves more
                than comparing prices. Buyers need to understand product
                specifications, compatibility, delivery arrangements, and
                the supplier's ability to meet the project's requirements.
              </p>
              <p>
                Hydraulic and Pneumatic Products (HPP) is a contact point
                for businesses exploring hydraulic and pneumatic products.
                When discussing your requirements, share your machine
                specifications, operating pressure, required flow, motor
                requirements, and installation conditions.
              </p>
              <p>
                Before purchasing, confirm the available hydraulic power
                unit configurations, technical documentation, customization
                capabilities, warranty terms, delivery timelines, and
                shipping options to Sweden.
              </p>
              <p>
                For Swedish industrial buyers, clear technical information
                can help simplify procurement and reduce the risk of
                selecting an unsuitable unit.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Request an Industrial Hydraulic Power Unit Quote
            </h2>
            <div className="space-y-6">
              <p>
                Need a hydraulic power unit for industrial machinery, a new
                equipment installation, or a replacement project? Start by
                identifying the pressure, flow, motor power, reservoir
                capacity, and control requirements of your application.
              </p>
              <p>
                Contact Hydraulic and Pneumatic Products (HPP) to discuss
                your needs and confirm suitable available options.
              </p>
              <p>To help evaluate your request, provide:</p>
            </div>
            <ul className="list-disc space-y-3 pl-6">
              {quoteChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              Request a Quote Today to discuss your industrial hydraulic
              power unit requirements with HPP and take the next step
              toward finding a solution suited to your machinery.
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
