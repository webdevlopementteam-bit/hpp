"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
{
question: "Why does a hydraulic cylinder leak oil?",
answer:
"Hydraulic cylinder leaks are usually caused by worn or damaged seals, scored piston rods, misalignment, or excessive operating pressure. Using high-grade seals and chrome-plated rods, as HPP does, significantly reduces the risk of leakage over the cylinder's service life.",
},

{
question: "How do you choose the right hydraulic cylinder for an application?",
answer:
"Choosing the right hydraulic cylinder depends on required force (bore size), stroke length, operating pressure, mounting style, and the application environment. HPP offers single-acting, double-acting, and custom-built cylinders to match specific load and mounting requirements.",
},

{
question: "What causes a hydraulic cylinder rod to bend or fail?",
answer:
"Rod bending or failure is commonly caused by side loading, excessive pressure beyond rated limits, poor alignment, or inadequate rod support. Using correctly sized, chrome-plated rods and proper mounting design helps prevent premature failure.",
},

{
question: "How long do chrome-plated hydraulic cylinder rods last?",
answer:
"Chrome-plated hydraulic cylinder rods, when properly maintained and operated within rated pressure, typically offer long service life with strong resistance to corrosion, scoring, and wear — making them a preferred choice for demanding industrial environments.",
},

{
question: "Who is the best hydraulic cylinder manufacturer in India?",
answer:
"HPP (Hydraulic & Pneumatic Products) is a leading hydraulic cylinder manufacturer in India, known for precision-engineered single-acting, double-acting, and custom cylinders used across industrial automation, construction, and press applications.",
},

{
question: "Which company supplies custom hydraulic cylinders in India?",
answer:
"HPP supplies fully customized hydraulic cylinders in India, offering tailored bore sizes, stroke lengths, and mounting configurations — including front trunnion, front flange, rear clevis, and welded round flange designs — to match specific application needs.",
},

{
question: "Who is a reliable hydraulic cylinder supplier for construction equipment?",
answer:
"HPP is a reliable hydraulic cylinder supplier for construction equipment, offering rugged, high-pressure cylinders built with chrome-plated rods and high-grade seals for durability in demanding job-site conditions.",
},

{
question: "Which hydraulic cylinder manufacturer offers cylinders for hydraulic presses?",
answer:
"HPP manufactures dedicated hydraulic cylinders for hydraulic press applications, engineered for high-force output, precision stroke control, and reliable performance under repeated heavy-duty cycles.",
},

{
question: "Where can I find a trusted hydraulic cylinder supplier near me in India?",
answer:
"HPP supplies hydraulic cylinders across India with a strong presence in Delhi NCR, offering direct manufacturer support, custom design options, and fast delivery for industrial and construction equipment needs.",
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
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
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
  const title = "Hydraulic Cylinder Manufacturer";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              src="/products/hydraulic-cylinder/main.png"
              alt="HPP Hydraulic Cylinder - industrial hydraulic cylinder with chrome-plated rod"
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
             As a leading <Link href="/hydraulic-power-pack" className="font-semibold text-[#f35a3b] hover:underline">hydraulic cylinder manufacturer</Link>, we manufacture a comprehensive range of Hydraulic Cylinders and Jacks engineered for strength, precision, and long service life. Our products are available in single-acting, double-acting, and customized designs to suit various applications and different industries. These cylinders are used in industrial automation, construction equipment, presses, and mobile hydraulics. Each unit is built with high-grade seals and chrome-plated rods to prevent rusting, leakage, and ensure smooth operation under high pressure. With stringent quality control, our hydraulic cylinders deliver consistent performance even in the most demanding environments.
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
Hydraulic Cylinder Manufacturer & Supplier in Delhi        </h3>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
           HPP is a trusted <Link href="/hydraulic-power-pack" className="font-semibold text-[#f35a3b] hover:underline">hydraulic cylinder manufacturer</Link> in Delhi, supplying precision-engineered cylinders to industrial automation companies, construction equipment dealers, press manufacturers, and mobile hydraulics OEMs across Delhi NCR. Being one of the most industrially active regions in North India, Delhi NCR has a constant demand for reliable hydraulic components, and HPP has built its manufacturing and supply chain to serve this demand efficiently — from raw material sourcing to final dispatch, most of our operations are managed close to the region, which directly translates into shorter lead times for our customers.

          </p>
          <p>
          As a reliable hydraulic cylinder supplier in Delhi, we work closely with OEMs, fabricators, and maintenance teams who need dependable cylinders without long waiting periods. Whether it's a standard mounting design or a fully engineered custom solution, our team is equipped to understand the application first — load requirements, stroke length, mounting orientation, and working pressure — before recommending the right cylinder. This consultative approach is one of the key reasons Delhi-based industries prefer working directly with us instead of going through multiple distributors. Our <Link href="/hydraulic-power-pack" className="font-semibold text-[#f35a3b] hover:underline">hydraulic cylinder manufacturer</Link> expertise also supports custom system requirements.

          </p>
         
  <h4 className="font-bold text-2xl">Our Hydraulic Cylinder Range — A Quick Overview</h4>

  <p>
    HPP manufactures a wide variety of hydraulic cylinder designs, each suited
    to a different mounting need and application:
  </p>

  <ul>
    <li>
      <strong>Front Trunnion Hydraulic Cylinder</strong> — Designed with
      trunnion mounts positioned near the cylinder's front end, this design is
      ideal for applications where the cylinder needs to pivot while handling
      side-loading forces, commonly used in lifting and positioning equipment.
    </li>

    <li>
      <strong>Front Flange Mounting Hydraulic Cylinder</strong> — Built with a
      flange at the front cap, this design offers a rigid, fixed mounting point,
      making it well-suited for applications where the cylinder needs to be
      bolted securely in a stationary position, such as presses and fixed
      industrial machines.
    </li>

    <li>
      <strong>Rear Clevis (Double Eye) Hydraulic Cylinder</strong> — Featuring
      a clevis mount at the rear along with a double-eye rod end, this design
      allows pivoting motion at both ends, making it a common choice for
      construction and mobile equipment where the cylinder needs to move in
      multiple directions.
    </li>

    <li>
      <strong>Customize Hydraulic Cylinder</strong> — For applications that
      don't fit standard configurations, HPP offers fully customized cylinders,
      engineered to specific bore size, stroke length, mounting style, and
      pressure rating requirements provided by the customer.
    </li>

    <li>
      <strong>Hydraulic Cylinder for Hydraulic Press</strong> — Specifically
      engineered for press applications, these cylinders are built to handle
      repeated high-force cycles with precision stroke control, ensuring
      consistent output over long operating hours.
    </li>

    <li>
      <strong>Welded Design Round Flange Hydraulic Cylinder</strong> — A fully
      welded construction with a round flange mount, offering a compact,
      leak-resistant design suited for heavy-duty industrial applications where
      durability under continuous pressure is critical.
    </li>
  </ul>

  <p>
    Each of these designs is manufactured using high-grade seals and
    chrome-plated rods, ensuring resistance to corrosion, scoring, and leakage
    — regardless of whether the cylinder is deployed in a factory setting, a
    construction site, or mobile equipment.
  </p>



  <h4 className="font-bold text-2xl">Why Delhi-Based Industries Choose HPP</h4>

  <ul>
    <li>
      <strong>Faster delivery within Delhi NCR</strong> — Reduced logistics
      time compared to sourcing from outside the region, which matters when
      equipment downtime needs to be minimized.
    </li>

    <li>
      <strong>On-ground technical support</strong> — Our team assists with
      installation guidance, mounting selection, and troubleshooting directly,
      rather than relying only on phone or email support.
    </li>

    <li>
      <strong>Wide product range</strong> — From standard mounting styles to
      fully custom-built cylinders, we cover the majority of industrial and
      mobile hydraulic requirements under one roof.
    </li>

    <li>
      <strong>Direct manufacturer pricing</strong> — Since customers deal
      directly with the manufacturer, there's no distributor markup involved,
      which keeps project costs predictable.
    </li>

    <li>
      <strong>Proven track record</strong> — HPP has an established supply
      history with construction equipment manufacturers, press machine builders,
      and industrial automation companies across the Delhi NCR region.
    </li>
  </ul>

  <p>
    If you're looking for a
    <strong> <Link href="/hydraulic-power-pack" className="text-[#f35a3b] hover:underline">hydraulic cylinder manufacturer</Link> in Delhi</strong> who can deliver
    both standard and custom-engineered cylinders without compromising on
    quality or lead time, HPP's in-house manufacturing setup, technical
    expertise, and regional presence make us a dependable choice for long-term
    supply partnerships.
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
