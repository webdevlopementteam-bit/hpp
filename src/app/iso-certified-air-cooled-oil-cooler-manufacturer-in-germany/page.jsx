"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What does ISO certification mean for an air cooled oil cooler manufacturer?",
    answer:
      "ISO certification means the manufacturer follows internationally recognized quality management standards throughout design, production, and testing, ensuring consistent product quality, reliability, and traceability — an important trust signal for German industrial buyers evaluating suppliers.",
  },
  {
    question: "Why do German industries prefer ISO certified hydraulic component suppliers?",
    answer:
      "German industries prefer ISO certified suppliers because certification indicates standardized manufacturing processes, documented quality control, and consistent performance — reducing the risk of component failure in critical industrial applications.",
  },
  {
    question: "How does an air cooled oil cooler benefit hydraulic systems in industrial applications?",
    answer:
      "An air cooled oil cooler dissipates excess heat from hydraulic oil using finned tubes and fans, preventing overheating, extending component life, and reducing unplanned downtime in continuous industrial operations.",
  },
  {
    question: "What should German buyers verify before importing an air cooled oil cooler?",
    answer:
      "German buyers should verify the manufacturer's ISO certification validity, request pressure and performance test reports, check material and seal specifications, and review sample units before committing to bulk orders.",
  },
  {
    question: "Can ISO certified air cooled oil coolers be customized for specific machinery requirements?",
    answer:
      "Yes, ISO certified manufacturers typically offer customization in fan size, oil flow capacity, and voltage configuration, allowing air cooled oil coolers to be matched precisely to specific machinery and application requirements.",
  },
  {
    question: "Who is an ISO Certified Air Cooled Oil Cooler Manufacturer in Germany?",
    answer:
      "HPP is recognized as an ISO Certified Air Cooled Oil Cooler Manufacturer serving Germany, offering a wide range of finned-tube cooling models engineered for reliable heat dissipation in demanding industrial applications.",
  },
  {
    question: "Which company supplies ISO certified air cooled oil coolers for German industrial machinery?",
    answer:
      "HPP supplies ISO certified air cooled oil coolers for German industrial machinery, manufacturing models with varying oil flow and fan capacities to suit different hydraulic system requirements.",
  },
  {
    question: "How can German buyers source air cooled oil coolers from an ISO certified overseas manufacturer?",
    answer:
      "German buyers can source air cooled oil coolers from an ISO certified overseas manufacturer like HPP by requesting product specifications, certification documents, and sample testing before placing bulk or OEM supply orders.",
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

const modelSections = [
  {
    title: "HPP-L-608",
    description:
      "Our HPP-L-608 model, from HPP, an ISO Certified Air Cooled Oil Cooler Manufacturer in Germany, prevents your electronic components from the loss due to overheating. Its oil flow LPM is 1-12, Also the fan size is 6 (150) inches. This oil cooler model presents the best drain line for VD pumps. But make sure that the bar pressure of the variable Displacement pump needs to be up to 70 bar pressure. Noise DBA depends on voltage and the frequency is 50 GHz. The optimum accuracy level and easy operation of this model make it the first preference of the users. Buy this model today to increase the life of your item.",
    images: ["7.webp", "8.webp", "9.webp"],
  },
  {
    title: "HPP-W-0608",
    description:
      "Our best D cup cooler model number HPP-W-0608 is now available with the most compatible solutions. We have upgraded it with unique efficiency and features. The oil flow LPM of this model is 1-22. The fan size is 6 (150) inches. The noise DBA of HPP-W-0608. Is 55 GHz with a voltage of 230 and an AC power source. This noise is variable with a DC power source and 12-14 voltage. The presence of oil works as a lubricant. According to experts, oil is the best heat and rust conductor. So this model can effectively keep your internal combustion devices cool without any additional support. Book HPP-W-0608 today to save your items from heating effects.",
    images: ["10.webp", "11.webp", "12.webp"],
  },
  {
    title: "HPP-W-0608-F2",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-W-0608-F2 is one of the most demanding cooling models. The oil flow LPM of this model is 1-22 with a fan size of 6(150) inches. You will find variable noise DBA according to the Voltage and power source. Noise DBA is available from 58 to 62. This model allows you a direct application to your electronic components. Oil is a proven source to eliminate the risk of corrosion which can affect the life of your electronic component. You don’t have to make extra efforts in its application and maintenance. So get one today and enjoy unlimited benefits for your various electric appliances.",
    images: ["13.webp", "14.webp", "15.webp"],
  },
  {
    title: "HPP-H-0608",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-0608 is one of the most demanding cooling models.",
    images: ["16.webp", "17.webp", "18.webp"],
  },
  {
    title: "HPP-H-0608-F2",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-0608-F2 is one of the most demanding cooling models.",
    images: ["19.webp", "20.webp", "21.webp"],
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
        <p className="mt-8 text-lg leading-8 text-gray-600">{description}</p>
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
  const title = "Air Cooled Oil Cooler";

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
            ISO Certified Air Cooled Oil Cooler
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
              ISO Certified Air Cooled Oil Cooler Manufacturer in Germany
            </h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-[#f35a3b]" />

            <p className="text-lg leading-8 text-gray-600">
             HPP, an <Link href="/air-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">ISO Certified Air Cooled Oil Cooler Manufacturer in Germany</Link>, offers Air-Cooled Oil Coolers that are one of our most selling products. It is essential for maintaining the ideal temperature in hydraulic systems, extending the life of components, and reducing system downtime. Our coolers are built with high-efficiency finned tubes and electric or hydraulic-driven fans. They are easy to install and ideal for mobile equipment, compressors, and power units operating in high ambient temperature conditions. Designed for optimal heat dissipation and minimal energy consumption, our air coolers meet the cooling demands of various hydraulic circuits. 

              coolers meet the cooling demands of various hydraulic circuits.
            </p>
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

      {modelSections.map((section, index) => (
        <div
          key={section.title}
          className={index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}
        >
          <ModelSection {...section} />
        </div>
      ))}

      {/* Content */}
      <div className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-6 text-lg leading-8 text-gray-600">
          <p>
            In industries where machines operate under high pressure and
            continuous workloads, effective oil temperature control is
            essential. Our air cooled oil coolers are suitable for different
            industrial requirements, including hydraulic systems, gearboxes, and
            other applications where consistent cooling performance is
            important. We focus on quality, durability, and dependable cooling
            solutions to meet the requirements of industrial customers in
            Germany.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Air-Oil Coolers for Gearboxes
          </h2>
          <p>
            Gearboxes generate heat during continuous operation due to friction
            and mechanical movement. Excessive heat can affect lubricant
            performance, increase component wear, and reduce equipment
            efficiency.
          </p>
          <p>
            HPP offers{" "}
            <strong className="text-[#0d1b3f]">Air-Oil Coolers for Gearboxes</strong>{" "}
            designed to help maintain suitable oil temperatures during
            operation. These cooling solutions support effective heat
            dissipation and help protect gearbox components from unnecessary
            thermal stress.
          </p>
          <p>
            Our solutions are suitable for industrial machinery and equipment
            that require reliable temperature management. Selecting the right
            cooler according to operating conditions and heat load can help
            improve equipment reliability and support long-term performance.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Air-Oil Coolers for Hydraulic Systems
          </h2>
          <p>
            Hydraulic systems are widely used in manufacturing plants,
            construction equipment, industrial machinery, and material handling
            applications. During operation, hydraulic oil absorbs heat, which
            can affect system efficiency and component life if temperatures
            become too high.
          </p>
          <p>
            HPP provides{" "}
            <strong className="text-[#0d1b3f]">
              Air-Oil Coolers for Hydraulic Systems
            </strong>{" "}
            to help control oil temperatures and maintain consistent hydraulic
            performance. These coolers use airflow to remove excess heat from
            hydraulic oil, making them a practical solution for applications
            where efficient oil cooling is required.
          </p>
          <p>
            Proper oil temperature management can help reduce overheating
            risks, maintain lubricant properties, and support the reliable
            operation of hydraulic equipment.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Why Choose HPP for Air Cooled Oil Coolers in Germany?
          </h2>
          <p>
            Choosing the right cooling equipment is important for maintaining
            industrial productivity and reducing unexpected maintenance
            requirements.{" "}
            <Link
              href="/about-us"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              Hydraulic and Pneumatic Products (HPP)
            </Link>{" "}
            focuses on delivering dependable oil cooling solutions for
            different industrial applications.
          </p>
          <p>Key reasons to consider HPP include:</p>
          <ul className="list-disc space-y-2 pl-6">
            {[
              ["ISO-Certified Quality:", "A quality-focused approach to product performance and reliability."],
              ["Industrial Applications:", "Cooling solutions for hydraulic systems, gearboxes, and industrial machinery."],
              ["Efficient Heat Dissipation:", "Designed to remove excess heat from oil during machine operation."],
              ["Durable Performance:", "Cooling equipment designed for demanding industrial working conditions."],
              ["Application-Based Solutions:", "Product selection based on cooling requirements and operating conditions."],
              ["Technical Support:", "Assistance in identifying suitable cooling solutions for specific industrial applications."],
            ].map(([label, text]) => (
              <li key={label}>
                <strong className="text-[#0d1b3f]">{label}</strong> {text}
              </li>
            ))}
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Applications of Air Cooled Oil Coolers
          </h2>
          <p>
            Air cooled oil coolers are used across several industries where oil
            temperature control is necessary for reliable machine operation.
          </p>
          <p>Common applications include:</p>
          <ul className="list-disc space-y-2 pl-6">
            {[
              "Hydraulic power packs and hydraulic systems",
              "Industrial gearboxes and transmission systems",
              "Construction and earthmoving equipment",
              "Manufacturing and processing machinery",
              "Material handling equipment",
              "Industrial automation systems",
              "Heavy-duty machinery and equipment",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            The correct oil cooler depends on factors such as oil flow rate,
            operating temperature, ambient temperature, heat rejection
            capacity, and available installation space.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Get Reliable Air Cooling Solutions from HPP
          </h2>
          <p>
            Looking for an{" "}
            <strong className="text-[#0d1b3f]">
              ISO-certified air cooled oil cooler manufacturer in Germany
            </strong>{" "}
            for your industrial requirements? Hydraulic and Pneumatic Products
            (HPP) offers dependable cooling solutions for hydraulic systems,
            gearboxes, and industrial machinery.
          </p>
          <p>
            Our focus is on helping businesses select suitable oil cooling
            equipment according to their technical and operational
            requirements. Whether you need Air-Oil Coolers for Gearboxes or
            Air-Oil Coolers for Hydraulic Systems, our team can help you
            identify the right solution.
          </p>
          <p>
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] underline hover:text-[#0d1b3f]"
            >
              Contact Hydraulic and Pneumatic Products (HPP) today
            </Link>{" "}
            to discuss your application requirements and request product
            details or a quotation for your next industrial project.
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
