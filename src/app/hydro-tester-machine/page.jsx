"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is a hydro tester machine used for?",
    answer:
      "A hydro tester machine, also known as a hydraulic intensifier, is used to boost hydraulic fluid pressure for high-pressure testing of pipelines and pressure vessels, as well as tasks like punching, pressing, and bursting.",
  },
  {
    question: "How does a hydraulic intensifier increase pressure?",
    answer:
      "A hydraulic intensifier increases pressure by taking in fluid at lower pressure over a larger piston area and pushing it out at higher pressure through a smaller piston area, based on Pascal's Law.",
  },
  {
    question: "What is a deaerating valve and why is it needed in hydro testing?",
    answer:
      "A deaerating valve removes trapped air or gas from liquid systems before or during hydro testing, preventing inaccurate pressure readings, noise, blockages, and potential equipment damage.",
  },
  {
    question: "What is the role of a filling valve in hydro testing?",
    answer:
      "A filling valve ensures safe, controlled entry of water or fluid into a pipeline or pressure vessel during hydro testing, preventing air pockets and sudden pressure surges.",
  },
  {
    question: "Why use a hydraulic intensifier instead of a high-pressure pump?",
    answer:
      "A hydraulic intensifier boosts pressure using existing lower-pressure fluid, avoiding the cost and space requirements of installing a large, dedicated high-pressure pump.",
  },
  {
    question: "Who is the best hydro tester machine manufacturer in India?",
    answer:
      "HPP is a leading hydro tester machine manufacturer in India, offering hydraulic intensifiers along with deaerating and filling valves engineered for accurate, safe high-pressure testing.",
  },
  {
    question: "Which company supplies hydraulic intensifiers for pressure vessel testing?",
    answer:
      "HPP supplies hydraulic intensifiers and complete hydro tester systems for pressure vessel and pipeline testing, built for reliable, leak-proof high-pressure performance.",
  },
  {
    question: "Who is a reliable hydro tester machine supplier for the metalworking industry?",
    answer:
      "HPP is a reliable hydro tester machine supplier for metalworking and manufacturing industries, providing intensifiers suited for punching, pressing, and bursting applications.",
  },
  {
    question: "Which manufacturer offers deaerating and filling valves for hydro testing systems?",
    answer:
      "HPP manufactures deaerating and filling valves as part of its hydro tester machine range, available in manual and automatic types for pipeline and pressure vessel testing.",
  },
  {
    question: "Where can I find a trusted hydro tester machine supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted hydro tester machine supplier serving industries across India with custom engineering and after-sales support.",
  },
];

const features = [
  "Converts low pressure into high pressure.",
  "Works using Pascal's Law (pressure is transmitted equally in all directions)",
  "Saves cost by avoiding the need for large pumps.",
  "Common in industries like metalwork, manufacturing, and automotive.",
];

const products = [
  {
    name: "Deaerating Valve",
    image: "1.webp",
    alt: "HPP deaerating valve for hydro tester machine, black flanged body with side inlet",
    description:
      "Removes trapped air or gas from liquid systems like water or oil pipelines, preventing noise, blockages, and damage. Common in heating, hydraulic, and water supply systems.",
    features: [
      "Eliminates air to ensure smooth flow",
      "Boosts system efficiency",
      "Protects pumps and machinery",
      "Available in manual or automatic types",
    ],
  },
  {
    name: "Filling Valve",
    image: "2.webp",
    alt: "HPP filling valve for hydro tester machine, black cube-body valve with cylindrical top",
    description:
      "Our Filling Valve ensures safe and efficient water or fluid entry during hydro testing. It prevents air pockets and pressure surges, making it ideal for pipelines, pressure vessels, and industrial fluid systems.",
    features: [
      "Smooth, controlled fluid filling",
      "Prevents air lock / Handles high pressure",
      "Leak-proof & corrosion-resistant design",
    ],
  },
  {
    name: "Intensifier",
    image: "3.webp",
    alt: "HPP hydraulic intensifier for hydro tester machine, tripod-mounted blue cylinder",
    description:
      "The intensifier boosts hydraulic pressure where extra force is required for testing, punching, pressing, or bursting applications without installing a large high-pressure pump.",
    features: [
      "Boosts low pressure to high pressure",
      "Compact high-force solution",
      "Reliable for demanding hydro testing",
      "Suitable for industrial pressure applications",
    ],
  },
];

export default function HydroTesterMachinePage() {
  const title = "Hydro Tester Machine";

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
              src="/products/hydro-tester-machine/main.webp"
              alt="HPP Hydro Tester Machine - hydraulic intensifier for pressure testing"
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
                A HPP hydraulic intensifier is a device used to boost the
                pressure of hydraulic fluid. It takes in fluid at a lower
                pressure and pushes it out at a much higher pressure. If the
                normal pressure is not strong enough for a job, this machine
                boosts it to make it more powerful.
              </p>
              <p>
                It is used in machines that need high pressure for tasks like
                punching, pressing, or bursting. This way, there is no need to
                install a big and costly high-pressure pump. In simple words,
                it is a small tool that helps give more power when needed.
              </p>
            </div>

            <h3 className="mt-8 mb-3 text-xl font-bold text-[#0d1b3f]">
              Features:
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-gray-700"
                >
                  {index === 0 ? null : (
                    <span className="font-bold text-[#f35a3b]">&gt;</span>
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Our <span className="text-[#f35a3b]">Hydro Tester Machine</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore high-pressure testing accessories designed for safer,
              cleaner, and more controlled hydro testing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.image} className="flex flex-col">
                <Link
                  href="/contact-us"
                  className="group block overflow-hidden rounded-md bg-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-80 items-center justify-center">
                    <Image
                      src={`/Hydro Tester Machine/${product.image}`}
                      alt={product.alt}
                      width={560}
                      height={480}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="pt-7">
                  <h3 className="text-2xl font-bold text-[#0d1b3f]">
                    {product.name}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-gray-600">
                    {product.description}
                  </p>

                  <h4 className="mt-8 text-lg font-bold text-[#0d1b3f]">
                    Key Features:
                  </h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="font-bold text-[#f35a3b]">&gt;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact-us"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0d1b3f] transition hover:text-[#e2582a]"
                  >
                    Contact Us
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2582a] text-white">
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Hydro Tester Machine (Hydraulic Intensifier) Manufacturer &amp;
          Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a trusted hydro tester machine manufacturer and supplier
            in India, engineering hydraulic intensifiers that boost the
            pressure of hydraulic fluid to meet high-pressure application
            needs. A hydro tester machine takes in fluid at a lower
            pressure and delivers it at a significantly higher output
            pressure, eliminating the need to install a large and costly
            high-pressure pump when standard system pressure isn't
            sufficient for the job.
          </p>
          <p>
            Working on the principle of Pascal's Law — where pressure
            applied to a confined fluid is transmitted equally in all
            directions — our hydraulic intensifiers convert low-pressure
            input into high, controlled output pressure. This makes them
            ideal for tasks such as punching, pressing, bursting, and hydro
            testing of pipelines, pressure vessels, and industrial fluid
            systems, where reliable high pressure is critical for safety
            verification and performance testing.
          </p>
          <p>
            Our hydro tester systems are supported by complementary
            components including deaerating valves, which remove trapped
            air or gas from liquid systems to prevent noise, blockages, and
            equipment damage, and filling valves, which ensure smooth,
            controlled fluid entry during hydro testing while preventing
            air pockets and pressure surges. These components are
            available in manual and automatic configurations, engineered
            with leak-proof, corrosion-resistant designs suited for
            pipelines, pressure vessels, and industrial fluid systems.
          </p>
          <p>
            Widely used across metalworking, manufacturing, and automotive
            industries, our hydro tester machines and intensifiers offer a
            cost-effective alternative to large pump installations while
            ensuring accurate, dependable high-pressure output. Every unit
            is manufactured with precision engineering and rigorous
            quality checks to guarantee safe, consistent performance in
            demanding testing and pressing applications.
          </p>
          <p>
            As a reliable hydro tester machine supplier serving industries
            across India, HPP combines technical expertise with dedicated
            after-sales support to help businesses achieve accurate, safe,
            and efficient high-pressure testing and pressing operations.
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
