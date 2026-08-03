"use client";

import {
  UserCog,
  Cog,
  Factory,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Inspections & Testing",
    description:
      "We conduct detailed inspection and performance testing of hydraulic systems to ensure reliability, safety, and optimal efficiency in every application.",
    icon: <UserCog size={42} strokeWidth={2.2} />,
  },
  {
    title: "Spare Parts & Equipment",
    description:
      "We provide high-quality hydraulic components, spare parts, and equipment designed for durability, precision, and long-lasting industrial performance.",
    icon: <Cog size={42} strokeWidth={2.2} />,
    featured: true,
  },
  {
    title: "Industrial Applications",
    description:
      "Our hydraulic solutions are widely used across industries like manufacturing, construction, automation, and heavy engineering to boost productivity and efficiency.",
    icon: <Factory size={42} strokeWidth={2.2} />,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}
        <div className="mb-24 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left Side */}
          <div className="relative max-w-4xl">
            {/* Watermark */}
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-[70px] font-black uppercase tracking-wider text-gray-100 opacity-80 whitespace-nowrap select-none md:text-[110px] lg:text-[135px]">
              HOW WE WORK
            </span>

            {/* Heading */}
            <h2 className="relative z-10 text-4xl font-bold leading-tight text-[#10203f] md:text-5xl lg:text-6xl">
              Delivering Precision Hydraulic
              <br />
              Solutions in{" "}
              <span className="text-[#f25c42]">
                3 Simple Steps
              </span>
            </h2>
          </div>

          {/* Button */}
          <button className="group inline-flex h-14 items-center gap-3 bg-[#f25c42] px-8 font-semibold text-white transition-all duration-300 hover:bg-[#10203f]">
            View More

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 ${
                item.featured
                  ? "rounded-[250px] border-2 border-[#14284d] px-14 py-20"
                  : "px-8 py-10"
              }`}
            >
              {/* Icon */}
              <div className="mb-8 text-[#f25c42] transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-6 text-3xl font-bold leading-tight text-[#10203f]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-10 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}