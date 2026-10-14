"use client";

import Image from "next/image";
import { Check, MapPin } from "lucide-react";


const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const checklist = [
  "Advanced hydraulic & pneumatic engineering solutions",
  "High-quality manufacturing with precision components",
  "Custom-built products for industrial applications",
  "Reliable performance with long-lasting durability",
];

const stats = [
  { value: "1,734+", label: "Industrial Clients" },
  { value: "11,000+", label: "Projects Delivered" },
];

export default function AboutSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-16"
      style={{ fontFamily: SITE_FONT }}
    >
     

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left: image collage */}
        <div className="relative mx-auto h-[580px] w-full max-w-xl lg:mx-0">
            <Image src="/about.webp" alt="About Us" fill className="rounded-2xl object-cover shadow-lg" />
        </div>

        {/* Right: content */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#1e2a4a] sm:text-4xl">
            Delivering Precision Solutions for{" "}
            <span className="text-[#e2582a]">
              Hydraulic &amp; Pneumatic Systems
            </span>
          </h2>

          <p className="mt-6 border-l-4 border-[#e2582a] pl-4 text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-[#e2582a]">
              Hydraulic and Pneumatic Products (HPP)
            </span>{" "}
            is a trusted provider of comprehensive hydraulic and pneumatic
            solutions designed to meet the evolving needs of modern
            industries. Backed by 30+ skilled professionals and advanced
            manufacturing capabilities, we ensure precision, durability, and
            high performance in every product we deliver.
          </p>

          {/* Stats */}
          <div className="mt-8 flex gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-[#1e2a4a]">
                  {stat.value}
                </div>
                <div className="mt-1 text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <ul className="mt-8 flex flex-col gap-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                  <Check className="h-5 w-5 text-[#e2582a]" strokeWidth={3} />
                </span>
                <span className="text-base text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

          {/* Team members badge */}
          <div className="mt-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#1e2a4a] text-center shadow-md">
            <span className="text-xl font-extrabold text-white">30+</span>
            <span className="text-[9px] font-semibold tracking-wide text-gray-300">
              TEAM MEMBERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}