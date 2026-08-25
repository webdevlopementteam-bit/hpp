"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "How does an air cooled oil cooler work?",
    answer:
      "An air cooled oil cooler uses finned tubes and a fan to pass ambient air over hot hydraulic oil, transferring heat from the oil to the air and lowering oil temperature without needing a water source.",
  },
  {
    question: "What is the ideal oil flow rate for an air cooled oil cooler?",
    answer:
      "The ideal oil flow rate depends on the system's cooling load, typically ranging from 1-22 LPM for compact units to 30-280 LPM for high-capacity industrial models handling heavier heat loads.",
  },
  {
    question: "Can an air cooled oil cooler work without a coolant tank?",
    answer:
      "Yes, many air cooled oil cooler models operate without a separate coolant tank, as the hydraulic oil itself acts as both lubricant and heat-transfer medium during the cooling process.",
  },
  {
    question: "What fan size is needed for effective oil cooling?",
    answer:
      "Fan size depends on the required cooling capacity — smaller units use 6-inch fans for lower oil flow (up to 22 LPM), while high-capacity coolers use 14 to 18-inch fans to handle oil flows above 200 LPM.",
  },
  {
    question: "Are air cooled oil coolers suitable for mobile equipment?",
    answer:
      "Yes, air cooled oil coolers with hydraulic motor-driven fans are commonly used in mobile equipment, stone crushers, and moving vehicles since they don't require a fixed water supply.",
  },
  {
    question: "Who is the best air cooled oil cooler manufacturer in India?",
    answer:
      "HPP is a leading air cooled oil cooler manufacturer in India, offering a wide range of models from compact 6-inch fan units to high-capacity 18-inch fan coolers for industrial, mobile, and heavy-duty applications.",
  },
  {
    question: "Which company supplies air cooled oil coolers for stone crusher machines?",
    answer:
      "HPP supplies air cooled oil coolers specifically designed for stone crusher machines, engineered to handle high heat loads and continuous operation in demanding crushing applications.",
  },
  {
    question: "Who is a trusted air cooled oil cooler supplier for cement plants?",
    answer:
      "HPP is a trusted air cooled oil cooler supplier for cement plants, providing offline cooling systems built for high ambient temperature and continuous industrial operation.",
  },
  {
    question: "Which manufacturer offers air cooled oil coolers in AC and DC power options?",
    answer:
      "HPP manufactures air cooled oil coolers available in both AC and DC power configurations, including 12V and 24V options, to suit different industrial and mobile power requirements.",
  },
  {
    question: "Where can I find a reliable air cooled oil cooler supplier near me in India?",
    answer:
      "HPP, based in New Delhi, is a reliable air cooled oil cooler supplier serving industries across India with a wide product range, custom solutions, and dedicated after-sales support.",
  },
];

const featuredProducts = [
  { name: "Offline Cooling System for Cement Plant", image: "1.png" },
  { name: "Offline Cooling System for Automobile Industry", image: "2.png" },
  { name: "Offline Cooling System for Gearbox", image: "3.png" },
  {
    name: "Air-Cooled Oil Cooler with Hydraulic Motor for Moving Vehicles",
    image: "4.png",
  },
  {
    name: "Air-Cooled Oil Cooler for Stone Crusher Machines",
    image: "5.png",
  },
  {
    name: "Air Cooled Oil Cooler for Stone Crushers Machines",
    image: "6.png",
  },
];

const modelSections = [
  {
    title: "HPP-L-608",
    description:
      "Our HPP-L-608 model prevents your electronic components from the loss due to overheating. Its oil flow LPM is 1-12, Also the fan size is 6 (150) inches. This oil cooler model presents the best drain line for VD pumps. But make sure that the bar pressure of the variable Displacement pump needs to be up to 70 bar pressure. Noise DBA depends on voltage and the frequency is 50 GHz. The optimum accuracy level and easy operation of this model make it the first preference of the users. Buy this model today to increase the life of your item.",
    images: ["7.png", "8.jpg", "9.jpg"],
  },
  {
    title: "HPP-W-0608",
    description:
      "Our best D cup cooler model number HPP-W-0608 is now available with the most compatible solutions. We have upgraded it with unique efficiency and features. The oil flow LPM of this model is 1-22. The fan size is 6 (150) inches. The noise DBA of HPP-W-0608. Is 55 GHz with a voltage of 230 and an AC power source. This noise is variable with a DC power source and 12-14 voltage. The presence of oil works as a lubricant. According to experts, oil is the best heat and rust conductor. So this model can effectively keep your internal combustion devices cool without any additional support. Book HPP-W-0608 today to save your items from heating effects.",
    images: ["10.jpg", "11.jpg", "12.png"],
  },
  {
    title: "HPP-W-0608-F2",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-W-0608-F2 is one of the most demanding cooling models. The oil flow LPM of this model is 1-22 with a fan size of 6(150) inches. You will find variable noise DBA according to the Voltage and power source. Noise DBA is available from 58 to 62. This model allows you a direct application to your electronic components. Oil is a proven source to eliminate the risk of corrosion which can affect the life of your electronic component. You don’t have to make extra efforts in its application and maintenance. So get one today and enjoy unlimited benefits for your various electric appliances.",
    images: ["13.jpg", "14.jpg", "15.jpg"],
  },
  {
    title: "HPP-H-0608",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-0608 is one of the most demanding cooling models.",
    images: ["16.jpg", "17.jpg", "18.jpg"],
  },
  {
    title: "HPP-H-0608-F2",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-0608-F2 is one of the most demanding cooling models.",
    images: ["19.jpg", "20.jpg", "21.jpg"],
  },
  {
    title: "HPP-H-1012,1P,3P&D12V&D24V",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1012,1P,3P&D12V&D24V is one of the most demanding cooling models.",
    images: ["22.jpg", "23.jpg", "24.jpg"],
  },
  {
    title: "HPP-H-1215-1P,3P,D12V & D24V",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1215-1P,3P,D12V & D24V is one of the most demanding cooling models.",
    images: ["25.jpg", "26.jpg", "27.jpg"],
  },
   {
    title: "HPP-H-1418-1P & 3P",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1418-1P & 3P & D24V is one of the most demanding cooling models.",
    images: ["28.jpg", "29.jpg", "30.jpg"],
  },
   {
    title: "HPP-H-1428-1P & 3P",
    description:
      "If you are looking for a high-level capacity of oil cooler models then Hydraulic & Pneumatic Products have the best solution for you. Model number HPP-H-1428-1P & 3P is one of our high-range D cup coolers. This model can serve you the oil flow LPM for 30 to 200. Which is great for your advanced cooling purpose. The size of the fan is almost double that of the regular models. Its size is 14 (350) inches. DBA noise remains the same (75) with any voltage, current, and power sources. Generally, power sources are AC and DC. Voltage requirements are 230 with AC and 1 phase. Get this high-capacity drain line solution today at the most reasonable prices with us.",
    images: ["31.jpg", "32.jpg", "33.jpg"],
  },
   {
    title: "HPP-H-1490-1P & 3P",
    description:
      "We understand that different users have different requirements. That this the reason we have many models to suit your cooling purposes. HPP-H-1490-1P & 3P The model belongs to one of the best-performing D cup cooling models. The oil Flow LPM of this range is 30 to 260 with a large fan size of 14 (350) inches. The noise DBA 60 remains the same with AC DC power source, variable voltage, current, and 50 frequency. We use cast iron headers, Nitrate, and Vitron seal to serve the best quality results for a longer duration. Book your order today for model number HPP-H-1490-1P & 3P and enjoy an uninterrupted performance of your electronic components.",
    images: ["34.jpg", "35.jpg", "36.jpg"],
  },
  {
    title: "HPP-H-1680-1P & 3P",
    description:
      "Are you looking for a D-cup cooling solution with a larger fan size? Hydraulic & Pneumatic Products introduces the best model HPP-H-1680-1P & 3P for this purpose. The oil flow LPM is 30 to 280. The fan size of this model is 16 (400) inches. It performs so well with AC power supply and 1 & 3 phase. Current requirements are variable but the Noise DBA of 76 remains the same at each condition. You can buy them to use to cool any item. This model can perform efficiently at a temperature of 100-degree celsius or higher. The most impressive part of this device is no requirement for any coolant tank. Oil lubricants are enough to perform as electric insulators and cooling solutions.",
    images: ["37.jpg", "38.jpg", "39.jpg"],
  },
  {
    title: "HPP-H-1890-1P & 3P",
    description:
      "Hydraulic & Pneumatic Products are leading manufacturers of ideal oil coolers. Our model number HPP-H-1890-1P & 3P is known for the best output and largest fan size. Its oil flow LPM is 30 to 280. The fan size of 18 (400) is the center of attraction of its overall features. This model number performs at a high voltage of 230 with an AC power source and a single phase. With 3 Phase voltage is required for 415 with an AC power supply. 79 Noise DBA remains the same in both conditions. Your internal combustion device will perform uninterruptedly with the use of this cooling device. So why are you waiting? Contact us and get this model delivered to you now.",
    images: ["40.jpg", "41.jpg", "42.jpg","43.jpg","44.jpg","45.jpg"],
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
              src="/products/air-cooled-oil-cooler/main.png"
              alt={title}
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

            <p className="text-lg leading-8 text-gray-600">
              HPP Air-Cooled Oil Coolers are one of the most selling products.
              They are essential for maintaining the ideal temperature in
              hydraulic systems, extending component life, and reducing system
              downtime. Our coolers are built with high-efficiency finned tubes
              and electric or hydraulic-driven fans. They are easy to install
              and ideal for mobile equipment, compressors, and power units
              operating in high ambient temperature conditions. Designed for
              optimal heat dissipation and minimal energy consumption, our air
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
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="mb-6 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Air Cooled Oil Cooler Manufacturer &amp; Supplier in India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            HPP is a leading air cooled oil cooler manufacturer and supplier
            in India, offering high-efficiency cooling solutions to maintain
            optimal oil temperature in hydraulic systems. Built with
            high-efficiency finned tubes and electric or hydraulic-driven
            fans, our air-cooled oil coolers ensure reliable heat
            dissipation, extended component life, and reduced system
            downtime.
          </p>
          <p>
            Our range covers multiple models — from compact units like
            HPP-L-608 and HPP-W-0608 (oil flow 1-22 LPM) to high-capacity
            coolers like HPP-H-1490 and HPP-H-1890 (oil flow up to 280 LPM,
            fan sizes up to 18 inches) — available in AC/DC, single-phase,
            and three-phase configurations to suit different industrial
            loads.
          </p>
          <p>
            These coolers are ideal for mobile equipment, compressors,
            gearboxes, stone crushers, cement plants, and power units
            operating in high ambient temperature conditions, with easy
            installation and minimal energy consumption.
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
