"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How does a water cooled oil cooler work?",
    answer:
      "A water cooled oil cooler works as a heat exchanger where circulating water absorbs heat from hot oil, cooling it efficiently to maintain a consistent temperature even under heavy operating loads.",
  },
  {
    question: "What is the difference between a water cooled and air cooled oil cooler?",
    answer:
      "A water cooled oil cooler uses circulating water for faster, more efficient heat dissipation in heavy-duty continuous operations, while an air cooled oil cooler uses ambient air and fans, making it better suited for locations with limited water access.",
  },
  {
    question: "What flow rate and heat rejection capacity should I choose for a water cooled oil cooler?",
    answer:
      "The right flow rate and heat rejection capacity depend on your system's cooling load, typically ranging from 3 to 700 litres flow and up to 150,000 Kcal/h heat rejection for heavy industrial applications.",
  },
  {
    question: "Where are water cooled oil coolers commonly used?",
    answer:
      "Water cooled oil coolers are commonly used in hydraulic power packs, test benches, turbines, power plants, and offline cooling systems where consistent, high-capacity thermal control is required.",
  },
  {
    question: "What causes reduced efficiency in a water cooled oil cooler?",
    answer:
      "Reduced efficiency in a water cooled oil cooler is usually caused by scaling or fouling inside the heat exchanger tubes, insufficient water flow, or contaminated oil restricting proper heat transfer.",
  },
  {
    question: "Who is the best water cooled oil cooler manufacturer in India?",
    answer:
      "HPP is a leading water cooled oil cooler manufacturer in India, offering heat exchangers with flow handling up to 700 litres and heat rejection up to 150,000 Kcal/h for demanding industrial applications.",
  },
  {
    question: "Which company supplies water cooled oil coolers for power plants?",
    answer:
      "HPP supplies water cooled oil coolers and heat exchangers specifically engineered for power plants, ensuring reliable thermal management under continuous high-load operating conditions.",
  },
  {
    question: "Who is a reliable water cooled oil cooler supplier for turbines?",
    answer:
      "HPP is a reliable water cooled oil cooler supplier for turbines, providing precision-engineered coolers designed to handle high heat rejection and maintain stable operating temperatures.",
  },
  {
    question: "Which manufacturer offers custom water cooled oil coolers for hydraulic power packs?",
    answer:
      "HPP manufactures custom water cooled oil coolers for hydraulic power packs, available in a wide range of diameters and lengths to match specific system flow and cooling requirements.",
  },
  {
    question: "Where can I find a trusted water cooled oil cooler supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted water cooled oil cooler supplier serving industries across India with custom engineering, manufacturing, and after-sales support.",
  },
];

const features = [
  "Efficient heat transfer",
  "Consistent oil temperature control",
  "Heavy-duty industrial construction",
  "Long service life",
  "Custom sizes for demanding applications",
];

const contentApplications = [
  "Hydraulic power packs",
  "Hydraulic systems",
  "Test benches",
  "Turbines",
  "Transmission systems",
  "Engine oil systems",
  "Offline oil cooling systems",
  "Power plant applications",
];

const contentKeyFeatures = [
  "Efficient heat transfer",
  "Consistent oil temperature control",
  "Heavy-duty construction",
  "Long service life",
  "Different size and capacity options",
  "Custom configurations for demanding applications",
  "Suitable for continuous industrial operation",
];

const specs = [
  "Flow Handling 3Ltr to 700Ltr",
  "Heat Rejection up to 150000 Kcal/h",
  "Dia 80mm to 750mm",
  "Length 300mm to 10000mm",
];

const products = [
  {
    name: "Water Cooler for Hydraulic Power Pack",
    image: "1.webp",
    alt: "HPP water cooled heat exchanger, compact model with dual end flanges",
  },
  {
    name: "Water Cooler for Hydraulic Power Pack",
    image: "2.webp",
    alt: "HPP water cooled heat exchanger, slim elongated model with dual end flanges",
  },
  {
    name: "Water Cooler for Test Bench",
    image: "3.webp",
    alt: "HPP water cooled oil cooler for hydraulic test bench applications",
  },
  {
    name: "Water Cooler for Turbine",
    image: "4.webp",
    alt: "HPP water cooled oil cooler engineered for turbine cooling applications",
  },
  {
    name: "Water Cooled Oil Cooler - Offline Cooling",
    image: "5.webp",
    alt: "HPP water cooled oil cooler for offline cooling system applications",
  },
  {
    name: "Heat Exchanger for Power Plants",
    image: "6.webp",
    alt: "HPP water cooled heat exchanger engineered for power plant applications",
  },
];

export default function WaterCooledOilCoolerPage() {
  const title = "Water Cooled Oil Cooler";

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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            Water Cooled Oil Coolers Manufacturer in Oman
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
              src="/products/water-cooled-oil-cooler/main.webp"
              alt="HPP Water Cooled Oil Cooler - industrial hydraulic heat exchanger"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Top Water Cooled Oil Coolers Manufacturer in Oman
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <div className="space-y-4 text-lg leading-8 text-gray-600">
              <p>
                As a{" "}
                <Link
                  href="/water-cooled-oil-cooler"
                  className="font-semibold text-[#f35a3b] hover:underline"
                >
                  Water Cooled Oil Coolers Manufacturer in Oman
                </Link>
                , we
                provide efficient cooling solutions for hydraulic systems,
                engine oil systems, and transmission systems. A
                water-cooled oil cooler uses a heat exchanger with water
                as the cooling medium to provide stable and efficient
                temperature control.
              </p>
              <p>
                The advantages of using a water-cooled oil cooler include
                efficient heat transfer and the ability to maintain a
                consistent oil temperature under demanding operating
                conditions. By effectively cooling the oil, our
                water-cooled oil coolers help prevent lubricant breakdown,
                reduced system performance, and potential component
                damage.
              </p>
            </div>

            <h3 className="mt-8 mb-3 text-xl font-bold text-[#0d1b3f]">
              Features:
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Check size={18} className="text-[#f35a3b]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-sm border border-gray-200">
          <div className="bg-[#e2582a] px-6 py-4">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Our Range in Water Cooled Oil Cooler
            </h3>
          </div>
          {specs.map((spec, index) => (
            <div
              key={spec}
              className={`px-6 py-4 text-gray-700 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {spec}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Water Cooled Oil Cooler</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore water cooled oil coolers and heat exchangers engineered
              for hydraulic power packs, test benches, turbines, and power
              plant applications.
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
                    src={`/Water Cooled Oil Cooler/${product.image}`}
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
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Water Cooled Oil Coolers Manufacturer in Oman
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            Hydraulic and Pneumatic Products (HPP) is a trusted Water
            Cooled Oil Coolers Manufacturer in Oman, providing efficient
            and durable cooling solutions for hydraulic systems, engine
            oil systems, transmission systems, and other industrial
            applications. Our water-cooled oil coolers are designed to
            maintain consistent oil temperature, improve heat transfer,
            and support reliable equipment performance even under
            demanding operating conditions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Reliable Water Cooled Oil Coolers for Industrial Applications
          </h4>
          <p>
            A water-cooled oil cooler is a heat exchanger that uses water
            as the cooling medium to remove excess heat from oil.
            Maintaining the correct oil temperature is important for
            hydraulic and mechanical systems because excessive heat can
            affect lubricant quality, reduce system efficiency, and
            increase component wear.
          </p>
          <p>
            HPP manufactures water-cooled oil coolers designed for
            efficient thermal performance and long-term industrial use.
            Our coolers are suitable for applications where stable
            temperature control and continuous operation are required.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Water Cooled Oil Cooler Range
          </h4>
          <p>
            HPP offers water-cooled oil coolers in different sizes and
            capacities to meet varying application requirements. Our
            range can handle flow rates from 3 to 700 litres and heat
            rejection capacity of up to 150,000 Kcal/h. Available sizes
            include diameters from 80 mm to 750 mm and lengths from 300
            mm to 10,000 mm, depending on the application and
            configuration.
          </p>
          <p>
            These options make our coolers suitable for both standard
            industrial requirements and larger heavy-duty cooling
            applications.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Applications of Water Cooled Oil Coolers
          </h4>
          <p>
            Our water-cooled oil coolers are used in various industrial
            systems where effective oil temperature control is required.
            Common applications include:
          </p>
          <ul className="space-y-2">
            {contentApplications.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            By removing excess heat from the oil, these cooling systems
            help maintain stable operating conditions and support the
            efficient performance of connected equipment.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Key Features of HPP Water Cooled Oil Coolers
          </h4>
          <p>
            HPP water-cooled oil coolers are engineered with a focus on
            efficient heat transfer, durability, and consistent
            temperature control. Their heavy-duty construction makes them
            suitable for demanding industrial environments and continuous
            operation.
          </p>
          <p>Key features include:</p>
          <ul className="space-y-2">
            {contentKeyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Customized Cooling Solutions from HPP
          </h4>
          <p>
            Different machines and hydraulic systems have different
            cooling requirements. Factors such as oil flow, heat load,
            operating temperature, available space, and cooling water
            conditions need to be considered when selecting an oil
            cooler.
          </p>
          <p>
            Hydraulic and Pneumatic Products (HPP) can provide
            water-cooled oil cooler solutions according to specific
            application requirements. This allows customers to select a
            suitable cooling capacity, size, and configuration for their
            equipment.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose HPP?
          </h4>
          <p>
            Choosing the right oil cooler can help maintain oil
            temperature and protect hydraulic and mechanical components
            from excessive heat. HPP focuses on reliable engineering,
            suitable configurations, durable construction, and efficient
            heat transfer to provide practical cooling solutions for
            industrial applications.
          </p>
          <p>
            If you need a dependable{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-[#f35a3b] hover:underline"
            >
              Water Cooled Oil Coolers Manufacturer in Oman
            </Link>
            , HPP can provide standard and customized cooling
            solutions designed for hydraulic power packs, turbines, test
            benches, power plants, and other demanding industrial
            systems.
          </p>
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
