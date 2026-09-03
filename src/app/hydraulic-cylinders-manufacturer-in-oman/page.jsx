"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question:
      "What is the difference between a single-acting and double-acting hydraulic cylinder?",
    answer:
      "A single-acting hydraulic cylinder moves in one direction using hydraulic pressure and returns via spring or gravity, while a double-acting hydraulic cylinder uses hydraulic pressure for both extend and retract strokes, offering more controlled force in both directions.",
  },
  {
    question: "Why does a hydraulic cylinder leak oil?",
    answer:
      "A hydraulic cylinder leaks oil mainly due to worn or damaged seals, scored piston rods, misalignment, or excessive operating pressure beyond the cylinder's rated capacity.",
  },
  {
    question: "How do you choose the right hydraulic cylinder for an application?",
    answer:
      "Choosing the right hydraulic cylinder depends on required bore size, stroke length, operating pressure, mounting style (trunnion, flange, clevis), and the load and speed demands of the machine.",
  },
  {
    question: "What causes a hydraulic cylinder rod to bend or fail?",
    answer:
      "A hydraulic cylinder rod bends or fails due to side loading, misalignment, exceeding the rod's buckling limit, or using an undersized rod for the application's load requirements.",
  },
  {
    question: "How long do chrome-plated hydraulic cylinder rods last?",
    answer:
      "Chrome-plated hydraulic cylinder rods typically last several years under normal conditions, as the chrome layer resists corrosion and scoring, though lifespan depends on operating environment, load, and maintenance.",
  },
  {
    question: "Who is the best hydraulic cylinder manufacturer in India?",
    answer:
      "HPP is a leading hydraulic cylinder manufacturer in India, offering single-acting, double-acting, and custom-engineered cylinders with high-grade seals and chrome-plated rods, trusted by industrial clients including BHEL, ISGEC, and Jindal.",
  },
  {
    question: "Which company supplies custom hydraulic cylinders in India?",
    answer:
      "HPP supplies custom hydraulic cylinders in India, manufacturing tailored designs such as front trunnion, flange mounting, and rear clevis configurations to match specific industrial and mobile hydraulic applications.",
  },
  {
    question: "Who is a reliable hydraulic cylinder supplier for construction equipment?",
    answer:
      "HPP is a reliable hydraulic cylinder supplier for construction equipment, delivering corrosion-resistant, high-pressure cylinders engineered for long service life in heavy-duty construction machinery.",
  },
  {
    question: "Which hydraulic cylinder manufacturer offers cylinders for hydraulic presses?",
    answer:
      "HPP manufactures hydraulic cylinders specifically designed for hydraulic press applications, built for high-force output, durability, and precision under continuous industrial use.",
  },
  {
    question: "Where can I find a trusted hydraulic cylinder supplier near me in India?",
    answer:
      "HPP, headquartered in New Delhi, is a trusted hydraulic cylinder supplier serving industries across India with manufacturing, custom design, and after-sales support.",
  },
];

const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const keyFeatures = [
  "Easy installation and maintenance",
  "Smooth and reliable operation",
  "High performance under pressure",
  "Corrosion-resistant components",
  "Low operating cost",
  "Long service life",
  "Standard and customized designs",
];

const products = [
  { name: "Hydraulic Cylinder - Front Trunnion", image: "1.png" },
  { name: "Hydraulic Cylinder - Front Flange Mounting", image: "2.png" },
  { name: "Hydraulic Cylinder - Rear Clevis (Double Eye)", image: "3.png" },
  { name: "Hydraulic Cylinder - Customize", image: "4.png" },
  { name: "Hydraulic Cylinder -for Hydraulic Press", image: "5.png" },
  { name: "Hydraulic Cylinder -Welded Design Round Flange", image: "6.png" },
];

export default function HydraulicCylinderPage() {
  const title = "Hydraulic Cylinder";

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
            Hydraulic Cylinders Manufacturer in Oman
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
              src="/products/hydraulic-cylinder/main.png"
              alt="HPP Hydraulic Cylinder - industrial hydraulic cylinder with chrome-plated rod"
              width={700}
              height={560}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
              Top Hydraulic Cylinders Manufacturer in Oman
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
              We are a trusted{" "}
              <Link
                href="/hydraulic-cylinder"
                className="font-semibold text-[#f35a3b] hover:underline"
              >
                Hydraulic Cylinders Manufacturer in Oman
              </Link>
              , offering a comprehensive range of hydraulic cylinders and
              jacks designed for strength, precision, and long service
              life. Our products include single-acting, double-acting,
              and customized designs suitable for various applications
              and industries. These hydraulic cylinders are widely used
              in industrial automation, construction equipment, presses,
              and mobile hydraulics. Each unit is manufactured with
              high-grade seals and chrome-plated rods to resist rust,
              reduce leakage, and ensure smooth operation under high
              pressure. With strict quality control, our hydraulic
              cylinders provide reliable and consistent performance even
              in demanding working environments.
            </p>

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
        <h3 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Hydraulic Cylinders Manufacturer in Oman
        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            If you are looking for a reliable Hydraulic Cylinders
            Manufacturer in Oman, choosing cylinders that offer strength,
            smooth operation, corrosion resistance, and long service life
            is important. We manufacture a comprehensive range of
            hydraulic cylinders and jacks designed to deliver consistent
            performance in industrial and heavy-duty applications. Our
            hydraulic cylinders are available in single-acting,
            double-acting, and customized designs to meet different
            machine and application requirements.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Reliable Hydraulic Cylinders for Different Applications
          </h4>
          <p>
            Hydraulic cylinders convert hydraulic pressure into controlled
            linear movement, making them an essential component in many
            types of machinery. Our cylinders are designed for
            applications where reliable force, accurate movement, and
            continuous operation are required. They are widely used in
            industrial automation, construction equipment, hydraulic
            presses, mobile hydraulics, and other demanding applications.
          </p>
          <p>
            As an experienced{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-[#f35a3b] hover:underline"
            >
              Hydraulic Cylinders Manufacturer in Oman
            </Link>
            , we
            focus on providing practical hydraulic solutions according to
            the working conditions and requirements of different
            industries. From standard cylinders to application-specific
            designs, our range can be selected according to mounting
            requirements, operating pressure, stroke length, and machine
            configuration.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Types of Hydraulic Cylinders
          </h4>
          <p>
            We offer different hydraulic cylinder designs to suit various
            applications and mounting arrangements. Our range includes
            single-acting hydraulic cylinders, double-acting hydraulic
            cylinders, front trunnion designs, front flange mounting
            cylinders, rear clevis or double-eye cylinders, welded round
            flange cylinders, and hydraulic cylinders designed for press
            applications.
          </p>
          <p>
            Single-acting cylinders use hydraulic pressure for movement in
            one direction, while double-acting cylinders use hydraulic
            pressure for both extension and retraction. This makes
            double-acting designs suitable for applications where
            controlled movement is required in both directions.
          </p>
          <p>
            Customized hydraulic cylinders can also be developed according
            to specific dimensions, mounting arrangements, stroke
            requirements, and operating conditions.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Key Features of Our Hydraulic Cylinders
          </h4>
          <p>
            Our hydraulic cylinders are manufactured with a focus on
            dependable performance and long-term operation. High-grade
            seals help minimize oil leakage and maintain reliable
            hydraulic pressure, while chrome-plated rods provide improved
            resistance against corrosion and wear.
          </p>
          <p>Key features include:</p>
          <ul className="space-y-2">
            {keyFeatures.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            These features make the cylinders suitable for both general
            industrial applications and demanding working environments.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Hydraulic Cylinders for Industrial and Heavy-Duty Use
          </h4>
          <p>
            Hydraulic systems often operate under high pressure and
            continuous working conditions. A properly designed cylinder
            can help maintain efficient machine movement and reduce
            unnecessary downtime. Our hydraulic cylinders are therefore
            manufactured with attention to material quality, sealing
            performance, dimensional accuracy, and overall durability.
          </p>
          <p>
            For construction and mobile equipment, hydraulic cylinders can
            provide the controlled movement required for lifting,
            pushing, pulling, and positioning. In hydraulic presses and
            industrial automation systems, they can support precise and
            repeatable operations.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Customized Hydraulic Cylinder Solutions
          </h4>
          <p>
            Every hydraulic application has different requirements.
            Cylinder dimensions, mounting style, stroke length, pressure
            capacity, and operating environment can vary from one machine
            to another. For this reason, we provide customized hydraulic
            cylinder solutions based on specific application needs.
          </p>
          <p>
            Whether you require a standard hydraulic cylinder or a
            specially designed unit, our team can help identify a
            suitable configuration for your equipment.
          </p>

          <h4 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose Our Hydraulic Cylinders?
          </h4>
          <p>
            We follow stringent quality control practices to maintain
            consistent product quality and performance. Our focus on
            reliable materials, quality seals, chrome-plated rods,
            accurate manufacturing, and practical designs helps deliver
            hydraulic cylinders suitable for demanding industrial
            conditions.
          </p>
          <p>
            If you need dependable hydraulic cylinders for construction
            equipment, hydraulic presses, automation systems, or mobile
            machinery, our range provides a reliable solution designed
            for smooth operation, durability, and long-term performance
            in Oman.
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
