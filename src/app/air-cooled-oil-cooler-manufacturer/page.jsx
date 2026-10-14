"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "What is the ideal oil flow rate for an air cooled oil cooler?",
    answer:
      "Ideal oil flow depends on system load — HPP offers models from 1-12 LPM for small hydraulic circuits (like HPP-L-608) up to 260-280 LPM for heavy-duty applications (like HPP-H-1490 and HPP-H-1680). Choosing the right LPM range depends on your pump displacement and operating pressure.",
  },
  {
    question: "Can an air cooled oil cooler work without a coolant tank?",
    answer:
      "Yes. HPP's air cooled oil coolers use ambient air and finned-tube technology to dissipate heat, so no separate coolant tank or water source is required — the oil itself acts as both lubricant and cooling medium.",
  },
  {
    question: "What fan size is needed for effective oil cooling?",
    answer:
      "Fan size depends on flow rate and heat load. Compact models use 6-inch fans for oil flows up to 22 LPM, while high-capacity coolers like HPP-H-1680 and HPP-H-1890 use 14 to 18-inch fans to handle flows up to 280 LPM.",
  },
  {
    question: "Are air cooled oil coolers suitable for mobile equipment?",
    answer:
      "Yes. HPP's hydraulic motor-driven air cooled oil coolers are specifically designed for moving vehicles and mobile equipment, offering compact installation and reliable cooling without needing a fixed water supply.",
  },
  {
    question: "Who is the best air cooled oil cooler manufacturer in India?",
    answer:
      "HPP (Hydraulic & Pneumatic Products) is a leading air cooled oil cooler manufacturer in India, known for a wide product range, AC/DC and single/three-phase configurations, and applications across cement plants, stone crushers, gearboxes, and mobile machinery.",
  },
  {
    question: "Which company supplies air cooled oil coolers for stone crusher machines?",
    answer:
      "HPP manufactures dedicated air-cooled oil coolers for stone crusher machines, built to withstand high dust, vibration, and continuous-duty operating conditions common in crushing plants.",
  },
  {
    question: "Who is a trusted air cooled oil cooler supplier for cement plants?",
    answer:
      "HPP supplies offline cooling systems and air cooled oil coolers specifically engineered for cement plant hydraulic circuits, ensuring stable oil temperature under continuous heavy-load operation.",
  },
  {
    question: "Which manufacturer offers air cooled oil coolers in AC and DC power options?",
    answer:
      "HPP offers both AC and DC powered air cooled oil cooler models — including 12V and 24V DC options — across multiple fan sizes and flow capacities, suitable for both industrial and mobile applications.",
  },
  {
    question: "Where can I find a reliable air cooled oil cooler supplier near me in India?",
    answer:
      "HPP supplies air cooled oil coolers across India with a strong presence in Delhi NCR, offering direct manufacturer support, fast delivery, and installation assistance for hydraulic system integrators and industrial equipment builders.",
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
    description: (
      <>
        As a trusted <Link href="/water-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">air cooled oil cooler manufacturer</Link>, our HPP-L-608 model prevents your electronic components due to overheating. Its oil flow LPM is 1-12, and the fan size is 6 (150) inches. This air cooled oil cooler model provides the best drain line for VD pumps. However, make sure the variable displacement pump bar pressure is up to 70 bar. Noise DBA depends on voltage, and the frequency is 50 Hz. The optimum accuracy and easy operation make this model the first choice for users. Buy this air cooled oil cooler today to increase the life of your item.
      </>
    ),
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
      "Hydraulic and Pneumatic Products (HPP) is known as a trusted air cooled oil cooler supplier in Delhi, offering the most efficient D-cup cooling models. HPP-W-0608-F2 is one of the most demanding cooling models. The oil flow LPM of this model is 1-22, with a fan size of 6 (150) inches. You will find variable noise DBA according to the voltage and power source—noise DBA ranges from 58 to 62. This model allows direct application to your electronic components. Oil is a proven solution to eliminate the risk of corrosion, which can affect the life of your electronic component. You don't have to make extra efforts in its application and maintenance. So get one today from a reliable air cooled oil cooler supplier in Delhi and enjoy unlimited benefits for your various electric appliances.",
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
  {
    title: "HPP-H-1012,1P,3P&D12V&D24V",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1012,1P,3P&D12V&D24V is one of the most demanding cooling models.",
    images: ["22.webp", "23.webp", "24.webp"],
  },
  {
    title: "HPP-H-1215-1P,3P,D12V & D24V",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1215-1P,3P,D12V & D24V is one of the most demanding cooling models.",
    images: ["25.webp", "26.webp", "27.webp"],
  },
   {
    title: "HPP-H-1418-1P & 3P",
    description:
      "Hydraulic and pneumatic products are known for the most efficient D-cup cooling models. HPP-H-1418-1P & 3P & D24V is one of the most demanding cooling models.",
    images: ["28.webp", "29.webp", "30.webp"],
  },
   {
    title: "HPP-H-1428-1P & 3P",
    description:
      "If you are looking for a high-level capacity of oil cooler models then Hydraulic & Pneumatic Products have the best solution for you. Model number HPP-H-1428-1P & 3P is one of our high-range D cup coolers. This model can serve you the oil flow LPM for 30 to 200. Which is great for your advanced cooling purpose. The size of the fan is almost double that of the regular models. Its size is 14 (350) inches. DBA noise remains the same (75) with any voltage, current, and power sources. Generally, power sources are AC and DC. Voltage requirements are 230 with AC and 1 phase. Get this high-capacity drain line solution today at the most reasonable prices with us.",
    images: ["31.webp", "32.webp", "33.webp"],
  },
   {
    title: "HPP-H-1490-1P & 3P",
    description: (
      <>
        We understand that different users have different requirements. That is the reason why, as a leading <Link href="/water-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">air cooled oil cooler manufacturer</Link>, we have many models to suit your cooling purposes. HPP-H-1490-1P & 3P belong to one of the best-performing D-cup cooling models. The oil flow LPM of this range is 30 to 260, with a large fan size of 14 (350) inches. The noise level of 60 dBA remains the same with an AC/DC power source, variable voltage, current, and 50 Hz frequency. We use cast iron headers, nitrile, and Viton seals to deliver the best quality results for a longer duration. Book your order today for these air-cooled oil cooler models, HPP-H-1490-1P & 3P and enjoy uninterrupted performance of your electronic components
      </>
    ),
    images: ["34.webp", "35.webp", "36.webp"],
  },
  {
    title: "HPP-H-1680-1P & 3P",
    description:
      "Are you looking for a D-cup cooling solution with a larger fan size? Hydraulic & Pneumatic Products introduces the best model HPP-H-1680-1P & 3P for this purpose. The oil flow LPM is 30 to 280. The fan size of this model is 16 (400) inches. It performs so well with AC power supply and 1 & 3 phase. Current requirements are variable but the Noise DBA of 76 remains the same at each condition. You can buy them to use to cool any item. This model can perform efficiently at a temperature of 100-degree celsius or higher. The most impressive part of this device is no requirement for any coolant tank. Oil lubricants are enough to perform as electric insulators and cooling solutions.",
    images: ["37.webp", "38.webp", "39.webp"],
  },
  {
    title: "HPP-H-1890-1P & 3P",
    description:
      "Hydraulic & Pneumatic Products is a leading air cooled oil cooler supplier in Delhi, known for manufacturing ideal oil coolers. Our model number HPP-H-1890-1P & 3P is known for the best output and largest fan size. Its oil flow is 30 to 280 LPM. The fan size of 18 (400) is the center of attraction of its overall features. This model number performs at a high voltage of 230 with an AC power source and a single phase. For 3-phase, the required voltage is 415 with an AC power supply. Noise DBA of 79 remains the same in both conditions. Your internal combustion device will perform uninterruptedly with the use of this cooling device. So why are you waiting? Contact our air-cooled oil cooler supplier in Delhi and get this model delivered to you now.",
    images: ["40.webp", "41.webp", "42.webp","43.webp","44.webp","45.webp"],
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
  const title = "Air Cooled Oil Cooler Manufacturer";

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

            <p className="text-lg leading-8 text-gray-600">
             HPP (Hydraulic & Pneumatic Products) is a leading <Link href="/water-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">air cooled oil cooler manufacturer</Link> in Delhi, specializing in finned-tube coolers with electric and hydraulic-driven fan systems. Our coolers are engineered for hydraulic power units, mobile equipment, compressors, gearboxes, and stone crusher machines operating in high ambient temperatures. With oil flow capacities ranging from 1 LPM to 280 LPM and fan sizes from 6" to 18", HPP delivers reliable, low-maintenance cooling solutions backed by in-house manufacturing and pan-India supply.

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
          Air Cooled Oil Cooler Manufacturer & Supplier in Delhi, India
        </h2>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
           HPP is a well-established <Link href="/water-cooled-oil-cooler-manufacturer" className="font-semibold text-[#f35a3b] hover:underline">air cooled oil cooler manufacturer</Link> in Delhi, serving hydraulic system OEMs, industrial machine builders, and maintenance teams across Delhi NCR. Our Delhi-based clients rely on us for fast turnaround, on-site technical support, and locally stocked spare parts for popular models like HPP-L-608 and HPP-W-0608.
As a trusted air cooled oil cooler supplier in Delhi, we work directly with hydraulic power unit manufacturers, compressor companies, cement plants, and construction equipment dealers in the region. Our Delhi supply network ensures shorter delivery timelines compared to sourcing from outside NCR, along with easier access for site visits, installation guidance, and after-sales service.

          </p>
          <p>
           <span className="font-bold">Why Delhi-based industries choose HPP:</span>  <br/>
           <ul className="list-disc pl-6 text-gray-600">
             <li>Faster delivery within Delhi NCR (reduced logistics time)</li> 
<li>  On-ground technical support and installation assistance</li>
<li>Wide model range covering both low-flow (1-22 LPM) and high-capacity (up to 280 LPM) requirements</li>
<li>Direct manufacturer pricing — no middleman markup</li>
<li>Proven track record with cement, automobile, and crusher machine industries in the region</li>
</ul>
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
