"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is the difference between a water cooled and air cooled oil cooler?",
    answer:
      "A water-cooled oil cooler uses circulating water as the cooling medium, offering more stable and efficient heat transfer for heavy, continuous-duty applications, while an air-cooled oil cooler uses ambient air and a fan, making it better suited for mobile equipment or sites without a water supply.",
  },

  {
    question:
      "What flow rate and heat rejection capacity should I choose for a water cooled oil cooler?",
    answer:
      "The right flow rate and heat rejection capacity depend on your system's oil volume, operating pressure, and heat load. HPP offers models handling 3 to 700 litres of flow with heat rejection up to 150,000 Kcal/h to match a wide range of industrial applications.",
  },

  {
    question: "Where are water cooled oil coolers commonly used?",
    answer:
      "Water cooled oil coolers are commonly used in hydraulic power packs, test benches, turbines, offline cooling systems, and power plant heat exchangers — anywhere consistent oil temperature control is critical under heavy or continuous loads.",
  },

  {
    question: "What causes reduced efficiency in a water cooled oil cooler?",
    answer:
      "Reduced efficiency is usually caused by scaling or fouling inside the water circuit, insufficient water flow, worn internal components, or an undersized cooler for the system's actual heat load — regular maintenance helps prevent these issues.",
  },

  {
    question: "Who is the best water cooled oil cooler manufacturer in India?",
    answer:
      "HPP (Hydraulic & Pneumatic Products) is a leading water cooled oil cooler manufacturer in India, known for heavy-duty heat exchangers used in hydraulic power packs, test benches, turbines, and power plant applications.",
  },

  {
    question: "Which company supplies water cooled oil coolers for power plants?",
    answer:
      "HPP supplies dedicated heat exchangers engineered for power plant applications, built to handle high thermal loads reliably and support continuous, uninterrupted plant operations.",
  },

  {
    question: "Who is a reliable water cooled oil cooler supplier for turbines?",
    answer:
      "HPP is a reliable water cooled oil cooler supplier for turbine applications, offering coolers built for efficient heat dissipation under high-load, high-temperature operating conditions.",
  },

  {
    question:
      "Which manufacturer offers custom water cooled oil coolers for hydraulic power packs?",
    answer:
      "HPP offers custom-engineered water cooled oil coolers for hydraulic power packs, with flow rates, dimensions, and heat rejection capacities tailored to the specific system's operating requirements.",
  },

  {
    question:
      "Where can I find a trusted water cooled oil cooler supplier near me in India?",
    answer:
      "HPP supplies water cooled oil coolers across India with a strong presence in Delhi NCR, offering direct manufacturer support, custom design options, and fast delivery for industrial and power sector needs.",
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
  "Efficient heat transfer",
  "Consistent oil temperature control",
  "Heavy-duty industrial construction",
  "Long service life",
  "Custom sizes for demanding applications",
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
  const title = "Water Cooled Oil Cooler Manufacturer";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              src="/products/water-cooled-oil-cooler/main.webp"
              alt="HPP Water Cooled Oil Cooler - industrial hydraulic heat exchanger"
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

            <div className="space-y-4 text-lg leading-8 text-gray-600">
              <p>
                As a leading <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">water cooled oil cooler manufacturer</Link>, we design heat exchangers used to cool oil in hydraulic systems, engine oil systems, and transmission systems. Our water-cooled oil coolers use water as the cooling medium for stable, efficient temperature control across demanding industrial applications.
              </p>
              <p>
              The advantages of choosing our water cooled oil cooler range include efficient heat transfer and the ability to maintain consistent oil temperature under demanding operating conditions. By effectively cooling the oil, it helps prevent lubricant breakdown, reduced system performance, and component damage.

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
Water Cooled Oil Cooler Manufacturer & Supplier in Delhi
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
           HPP is a trusted <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">water cooled oil cooler manufacturer</Link> in Delhi, supplying high-efficiency heat exchangers to hydraulic power pack manufacturers, test bench operators, turbine equipment builders, and power plant contractors across Delhi NCR. Being a major industrial and manufacturing hub, Delhi NCR has consistent demand for reliable, heavy-duty cooling systems — and HPP's local presence allows us to serve this demand with shorter lead times and faster turnaround compared to sourcing from outside the region.
          </p>
          <p>
            As a dependable water cooled oil cooler supplier in Delhi, we work directly with OEMs, system integrators, and maintenance teams who need dependable thermal management solutions without long waiting periods. Our engineering team understands that water-cooled systems are typically chosen over air-cooled alternatives when applications demand more stable, consistent oil temperatures under heavy or continuous operating loads — and we help customers select the right flow rate, heat rejection capacity, and dimensions for their specific system. Our <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">water cooled oil cooler manufacturer</Link> range can also be adapted for OEM supply needs.

          </p>
         
  <h4 className="font-bold text-2xl">Our Water Cooled Oil Cooler Range — A Quick Overview</h4>

  <p>
    HPP manufactures water cooled oil coolers across a wide range of
    applications, each suited to different industrial requirements:
  </p>

  <ul>
    <li>
      <strong>Water Cooler for Hydraulic Power Pack</strong> — Designed to
      maintain stable oil temperature in hydraulic power units operating under
      continuous load, helping prevent lubricant breakdown and extending
      component life.
    </li>

    <li>
      <strong>Water Cooler for Test Bench</strong> — Engineered for testing
      environments where precise, consistent temperature control is essential
      to ensure accurate and repeatable test results.
    </li>

    <li>
      <strong>Water Cooler for Turbine</strong> — Built for turbine applications
      requiring efficient heat dissipation under high-load, high-temperature
      operating conditions.
    </li>

    <li>
      <strong>Water Cooled Oil Cooler – Offline Cooling</strong> — A dedicated
      offline cooling system used to cool oil independently of the main
      hydraulic circuit, commonly deployed in large industrial setups
      requiring supplementary cooling capacity.
    </li>

    <li>
      <strong>Heat Exchanger for Power Plants</strong> — Designed for power
      plant applications, these heat exchangers handle high thermal loads
      reliably, supporting continuous, uninterrupted plant operations.
    </li>
  </ul>

  <p>
    Each of these systems is manufactured with heavy-duty industrial
    construction, capable of handling flow rates from 3 to 700 litres and heat
    rejection up to 150,000 Kcal/h, in diameters from 80mm to 750mm and lengths
    from 300mm to 10,000mm — giving Delhi-based industries the flexibility to
    choose a configuration that matches their exact system requirements.
  </p>



  <h4 className="font-bold text-2xl">Why Delhi-Based Industries Choose HPP</h4>

  <ul>
    <li>
      <strong>Faster delivery within Delhi NCR</strong> — Reduced logistics
      time, which matters when equipment downtime directly impacts production.
    </li>

    <li>
      <strong>On-ground technical support</strong> — Assistance with sizing,
      selection, and installation guidance, rather than relying only on remote
      support.
    </li>

    <li>
      <strong>Wide product range</strong> — From hydraulic power pack coolers
      to power plant heat exchangers, covering most heavy-duty industrial
      cooling needs under one roof.
    </li>

    <li>
      <strong>Direct manufacturer pricing</strong> — No distributor markup,
      keeping project costs predictable for large-scale industrial buyers.
    </li>

    <li>
      <strong>Proven track record</strong> — An established supply history with
      turbine manufacturers, power plant contractors, and hydraulic system
      builders across the Delhi NCR region.
    </li>
  </ul>

  <p>
    If you're looking for a
    <strong> <Link href="/air-cooled-oil-cooler-manufacturer" className="text-[#f35a3b] hover:underline">water cooled oil cooler manufacturer</Link> in Delhi</strong> who can
    deliver reliable, custom-engineered cooling solutions for demanding
    industrial applications, HPP's manufacturing expertise, wide product
    range, and regional presence make us a dependable long-term supply
    partner.
  </p>

  <p>
    📞 <strong>+91-9871456545</strong> |
    ✉️ <a href="mailto:sales2@hppgroup.in">sales2@hppgroup.in</a>
  </p>

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
