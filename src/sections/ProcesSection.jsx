"use client";

import Link from "next/link";
import { ClipboardList, Ruler, Factory, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Share your requirement",
    description:
      "oil flow rate, motor rating, oil temperature and application.",
    icon: <ClipboardList size={42} strokeWidth={2.2} />,
  },
  {
    title: "Design and sizing",
    description: "our engineers select or design the right oil cooler.",
    icon: <Ruler size={42} strokeWidth={2.2} />,
  },
  {
    title: "Manufacturing and testing",
    description: "the unit is built and tested at our Delhi facility.",
    icon: <Factory size={42} strokeWidth={2.2} />,
  },
  {
    title: "Delivery and support",
    description:
      "on-time dispatch, installation guidance and spare parts.",
    icon: <Truck size={42} strokeWidth={2.2} />,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="relative max-w-4xl">
            {/* Watermark */}
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-[70px] font-black uppercase tracking-wider text-gray-100 opacity-80 whitespace-nowrap select-none md:text-[110px] lg:text-[135px]">
              HOW WE WORK
            </span>

            <h2 className="relative z-10 text-4xl font-bold leading-tight text-[#10203f] md:text-5xl lg:text-6xl">
              How We Deliver the Right Cooling Solution in{" "}
              <span className="text-[#f25c42]">4 Steps</span>
            </h2>
          </div>

          <Link
            href="/contact-us"
            className="group inline-flex h-14 flex-shrink-0 items-center gap-3 self-start bg-[#f25c42] px-8 font-semibold text-white transition-all duration-300 hover:bg-[#10203f]"
          >
            Get a Quote
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ================= STEPS ================= */}
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li
              key={item.title}
              className="group flex flex-col items-center rounded-md border border-gray-200 px-6 py-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#14284d]"
            >
              <span className="mb-4 text-sm font-bold tracking-widest text-gray-400">
                STEP {index + 1}
              </span>
              <div className="mb-6 text-[#f25c42] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-tight text-[#10203f]">
                {item.title}
              </h3>
              <p className="text-lg leading-8 text-gray-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
