"use client";

import { useState } from "react";
import { Droplets, ArrowDown } from "lucide-react";
const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const projects = [
  {
    id: 1,
    title: "Air Cooled Oil Cooler",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    projectNo: "01",
    description: "Hydraulic Oil Cooling System Installation",
  },
  {
    id: 2,
    title: "Hydraulic Power Pack",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    projectNo: "02",
    description: "Hydraulic Power Pack Manufacturing",
  },
  {
    id: 3,
    title: "Industrial Hydraulic Jack",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    projectNo: "03",
    description: "Industrial Hydraulic Jack Project",
  },
  {
    id: 4,
    title: "Water Cooled Oil Cooler",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    projectNo: "04",
    description: "Water Cooled Oil Cooling Plant",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section className="w-full bg-[#f5f5f5] ">
      <div className="mx-auto max-w-[1700px] grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="bg-[#f5f5f5] px-6 py-10 sm:px-10 lg:px-28 lg:py-13 flex flex-col justify-center">
          {/* Circle */}
          <div className="w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#06143a] flex flex-col justify-center items-center mb-8 lg:mb-17">
            <h2 className="text-[#ff6b57] text-[20px] sm:text-[28px] font-bold leading-none">
              11,000+
            </h2>

            <p className="text-white text-[13px] sm:text-[18px] uppercase mt-2 sm:mt-3">
              Projects
            </p>

            <p className="text-white text-[13px] sm:text-[18px] uppercase mt-1 sm:mt-2">
              Completed
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-3 sm:space-y-5">
            {projects.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
                className={`block text-left text-[22px] sm:text-[28px] lg:text-[38px] font-semibold tracking-tight transition-all duration-300 ${
                  active.id === item.id
                    ? "text-[#06143a]"
                    : "text-[#06143a]/90 hover:text-[#ff6b57]"
                }`}  style={{ fontFamily: SITE_FONT }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[320px] sm:min-h-[400px]">
          <img
            src={active.image}
            alt={active.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Bottom Card */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row lg:left-24 lg:right-0">
            {/* Info */}
            <div className="flex flex-1 items-center gap-4 bg-[#06143a] px-6 py-6 text-white sm:gap-10 sm:px-10 sm:py-8 lg:px-14 lg:py-12">
              <div className="flex-shrink-0">
                <Droplets
                  size={36}
                  strokeWidth={2.2}
                  className="text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                />
              </div>

              <div>
                <p className="text-[#ff6b57] text-[15px] sm:text-[18px] lg:text-[22px] font-bold mb-2 lg:mb-3">
                  Project No: {active.projectNo}
                </p>

                <h3 className="text-[16px] sm:text-[20px] lg:text-[26px] leading-snug lg:leading-relaxed max-w-xl font-light">
                  {active.description}
                </h3>
              </div>
            </div>

            {/* Arrow */}
            <button className="flex w-full items-center justify-center bg-[#f4664a] py-4 transition hover:bg-[#ef5b3e] sm:w-[120px] sm:py-0 lg:w-[270px]">
              <ArrowDown
                size={32}
                strokeWidth={2.3}
                className="text-white sm:h-10 sm:w-10 lg:h-[58px] lg:w-[58px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}