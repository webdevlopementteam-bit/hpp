"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const industryUses = [
  "Factories and manufacturing plants",
  "Workshops",
  "Construction sites",
  "Vehicle service centers",
  "Heavy engineering units",
];

const bulkBenefits = [
  {
    title: "1. Save More Money",
    description:
      "Buying in bulk usually costs less per unit. Manufacturers often give better pricing for large orders.",
  },
  {
    title: "2. Same Quality Everywhere",
    description:
      "When you buy from one manufacturer, every jack has the same design, strength, and performance. This is helpful if you're using them across multiple locations.",
  },
  {
    title: "3. Easy Maintenance",
    description:
      "Same product = same maintenance process. Your team gets used to servicing and repairing them quickly.",
  },
  {
    title: "4. Customization Options",
    description:
      "Not all machines need the same lifting power. A good manufacturer helps you choose the right size and capacity for each need.",
  },
  {
    title: "5. Reliable & On-Time Supply",
    description:
      "Big projects need equipment on time. A trusted Industrial Hydraulic Jack Manufacturer in Delhi ensures your bulk order reaches you without delays.",
  },
];

const chooseChecklist = [
  "Load Capacity – How much weight do you need to lift?",
  "Build Quality – Check the material and hydraulic parts used.",
  "Purpose – Vehicle lifting? Machine maintenance? Construction?",
  "Working Conditions – Dust, heat, or heavy daily use?",
  "Support & Guidance – Does the manufacturer help you pick the right product?",
  "Bulk Order Capacity – Can they deliver your full order on time?",
];

const usageAreas = [
  "Machine installation & repair",
  "Vehicle & commercial workshops",
  "Construction projects",
  "Factories",
  "Heavy engineering work",
  "Material handling",
  "Equipment servicing",
];

const orderDetails = [
  "Quantity needed",
  "Maximum load",
  "Lifting height",
  "Space available",
  "Your industry/use case",
];

const faqs = [
  {
    question: "What is an industrial hydraulic jack used for?",
    answer:
      "It's used to lift heavy machines, vehicles, and equipment during repair, maintenance, or installation work.",
  },
  {
    question: "How do I pick the right hydraulic jack capacity?",
    answer:
      "Check the maximum weight you need to lift and the height required, then choose accordingly.",
  },
  {
    question: "Why buy hydraulic jacks in bulk?",
    answer:
      "It keeps quality consistent across your business and often reduces cost per unit.",
  },
  {
    question: "Where can I find a good Industrial Hydraulic Jack Manufacturer in Delhi?",
    answer:
      "HPP provides hydraulic and pneumatic solutions across Delhi and other parts of India.",
  },
  {
    question: "Are hydraulic jacks good for heavy machinery?",
    answer: "Yes, as long as the jack's capacity matches your load requirement.",
  },
  {
    question: "Does HPP supply bulk hydraulic jack orders?",
    answer:
      "Yes, HPP can customize bulk orders based on your quantity, capacity, and application needs.",
  },
  {
    question: "What affects the price of a hydraulic jack?",
    answer:
      "Lifting capacity, build quality, design, and order quantity all impact the price.",
  },
  {
    question: "Can hydraulic jacks be used in manufacturing plants?",
    answer:
      "Yes, they're commonly used for machine maintenance and installation in factories.",
  },
  {
    question: "What details should I share while placing an order?",
    answer:
      "Quantity, load capacity, lifting height, application, and any special requirements.",
  },
  {
    question: "Why does manufacturer selection matter for bulk orders?",
    answer:
      "A good manufacturer ensures consistent quality, proper guidance, and timely delivery.",
  },
];

export default function BlogPostPage() {
  const title =
    "Industrial Hydraulic Jack Manufacturer in Delhi | Best Prices for Bulk Orders";

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

          <h1 className="mb-5 max-w-4xl text-3xl font-bold text-white md:text-4xl">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Blog</span>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">
              Industrial Hydraulic Jack Manufacturer
            </span>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <div className="overflow-hidden rounded-md bg-gray-100 p-8">
          <Image
            src="/blogimage.webp"
            alt={title}
            width={900}
            height={520}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            Every industry needs a strong and safe way to lift heavy
            machines, vehicles, and equipment. That's where a good{" "}
            <Link
              href="/industrial-hydraulic-jack-manufacturer"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              hydraulic jack
            </Link>{" "}
            comes in.
          </p>
          <p>
            If your business buys hydraulic jacks in bulk, picking the
            right manufacturer matters a lot. It helps you save money
            without losing quality.{" "}
            <Link
              href="/"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              HPP
            </Link>{" "}
            is a well-known name in hydraulic
            and pneumatic products, offering reliable lifting solutions
            for all kinds of industries.
          </p>
          <p>
            If you're searching for an{" "}
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              Industrial Hydraulic Jack Manufacturer in Delhi
            </Link>
            , you need a product that is safe,
            strong, easy to use, and long-lasting. HPP builds hydraulic
            jacks keeping all these things in mind.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Why Use Hydraulic Jacks in Industries?
          </h2>
          <p>
            Hydraulic jacks lift heavy loads using hydraulic pressure —
            with very little manual effort. That's why they're used in:
          </p>
          <ul className="space-y-2">
            {industryUses.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Unlike basic mechanical jacks, hydraulic jacks lift heavier
            weights in a smaller, compact size. Different models are
            available depending on your load and height needs.
          </p>

          <h3 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Top Benefits of Buying Hydraulic Jacks in Bulk
          </h3>
          <div className="space-y-4">
            {bulkBenefits.map((item) => (
              <div key={item.title}>
                <p className="font-bold text-[#0d1b3f]">{item.title}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            How to Choose the Right Hydraulic Jack Manufacturer
          </h3>
          <p>
            Price matters — but it shouldn't be the only thing you look
            at. A cheap jack that can't handle the load isn't a good deal.
          </p>
          <p>Here's what to check before buying:</p>
          <ul className="space-y-2">
            {chooseChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Where Are Hydraulic Jacks Used?
          </h3>
          <ul className="space-y-2">
            {usageAreas.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Why Choose HPP for Bulk Hydraulic Jack Orders?
          </h3>
          <p>
            HPP specializes in hydraulic and pneumatic equipment made for
            real industrial needs. When you're looking for an{" "}
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              Industrial Hydraulic Jack Manufacturer in Delhi
            </Link>
            , HPP helps you choose the
            right capacity, size, and design — based on your exact
            requirement.
          </p>
          <p>Before placing a bulk order, just share:</p>
          <ul className="space-y-2">
            {orderDetails.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            This helps HPP recommend the best hydraulic jack for your
            business.
          </p>

          <h3 className="pt-4 text-xl font-bold text-[#0d1b3f]">
            Ready to Order Hydraulic Jacks in Bulk?
          </h3>
          <p>
            Don't choose a hydraulic jack based on price alone. Focus on
            quality, safety, and long-term performance too.
          </p>
          <p>
            If you're comparing options for an{" "}
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              Industrial Hydraulic Jack Manufacturer in Delhi
            </Link>
            , HPP is a reliable choice for businesses
            across manufacturing, construction, and vehicle servicing
            industries.
          </p>
          <p>
            📞{" "}
            <Link
              href="/contact-us"
              className="font-bold text-[#f35a3b] hover:text-[#0d1b3f]"
            >
              Contact HPP today
            </Link>{" "}
            to discuss your bulk hydraulic jack
            requirement and get the right solution for your business.
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
