"use client";

import { Settings, KeyRound, Building2 } from "lucide-react";
import { ArrowUp } from "lucide-react";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const solutions = [
  {
    icon: Settings,
    title: "Hydraulic Oil Coolers",
    description:
      "High-performance oil coolers designed to maintain optimal oil temperature in hydraulic systems. These systems prevent overheating, improve efficiency, and extend machine life in continuous industrial operations.",
    bg: "bg-[#e2582a]",
    image: "/images/solutions/hydraulic-oil-coolers.jpg",
  },
  {
    icon: KeyRound,
    title: "Hydraulic Power & Cooling Systems",
    description:
      "Advanced hydraulic power packs and cooling systems engineered for heavy-duty applications. They ensure stable performance, reduced heat generation, and enhanced reliability in demanding industrial environments.",
    bg: "bg-[#1e2a4a]",
    image: "/images/solutions/power-cooling-systems.jpg",
  },
  {
    icon: Building2,
    title: "Industrial Heat Exchange",
    description:
      "Efficient heat exchangers built for high thermal load industries. These systems maintain temperature balance, increase productivity, and ensure long-term operational safety.",
    bg: "bg-[#e2582a]",
    image: "/images/solutions/industrial-heat-exchange.jpg",
  },
];

// Replace src with your own logo assets in /public/images/logos/
const clientLogos = [
  { name: "Sona", src: "/sona.png" },
  { name: "Jindal Steel & Power", src: "/jindal.png" },
  { name: "Honda", src: "/honda.png" },
  { name: "HK Cement", src: "/jk-cement.png" },
  { name: "ISGEC", src: "/isgec.png" },
  { name: "BHEL", src: "/bhel.png" },
];

export default function SolutionsSection() {
  // duplicated for a seamless infinite marquee
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className="relative w-full overflow-hidden bg-white pt-16"
      style={{ fontFamily: SITE_FONT }}
    >
      {/* Heading with ghost watermark text behind it */}
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none whitespace-nowrap text-6xl font-extrabold uppercase text-gray-100 sm:text-7xl lg:text-8xl">
          Providing Solutions
        </span>
        <h2 className="relative text-3xl font-extrabold uppercase tracking-wide text-[#1e2a4a] sm:text-4xl">
          Providing Solutions
        </h2>
        <p className="relative mt-4 text-xl font-bold sm:text-2xl">
          <span className="text-[#e2582a]">Hydraulic</span>
          <span className="text-[#1e2a4a]">
            {" "}
            / Pneumatic / Industrial / Manufacturing / Power Systems
          </span>
        </p>
      </div>

      {/* Three solution cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {solutions.map(({ icon: Icon, title, description, bg, image }) => (
          <div
            key={title}
            className={`group relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-10 py-16 text-center ${bg}`}
          >
            {/* hover image reveal */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-in-out group-hover:bg-black/55" />

            {/* content */}
            <div className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
              <Icon
                className="mx-auto h-10 w-10 text-white"
                strokeWidth={1.75}
              />
              <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/90">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Auto-scrolling client logo carousel */}
      <div className="relative w-full overflow-hidden bg-white py-12">
        <div className="marquee-track flex w-max items-center gap-16">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex w-40 flex-shrink-0 flex-col items-center gap-3 border-b border-gray-100 pb-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-15 w-auto object-cover transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div
      className="w-full bg-white py-14 text-center"
      style={{ fontFamily: SITE_FONT }}
    >
      <ArrowUp className="mx-auto h-7 w-7 text-[#1e2a4a]" strokeWidth={2.5} />
      <h2 className="mt-4 text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
        Some of the <span className="text-[#e2582a]">partners &amp; clients</span>{" "}
        we&apos;ve worked with
      </h2>
    </div>
<div className="flex  w-full items-center justify-center mt-3">
  <img
    src="/13.png"
    alt="Description of image"
    className="h-[450px] max-w-full object-contain"
  />
</div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}