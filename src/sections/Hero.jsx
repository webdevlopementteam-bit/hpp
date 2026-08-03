"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";


const HERO_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const slides = [
  {
    heading: "Complete Hydraulic & Pneumatic Engineering Solutions",
    description:
      "We specialize in manufacturing high-quality hydraulic systems including power packs, cylinders, oil coolers, and presses — customized to meet the needs of modern industries like manufacturing, construction, and automation.",
  },
  {
    heading: "Powering Industries with Advanced Hydraulic Solutions",
    description:
      "From Hydraulic Power Packs to Oil Coolers, Cylinders & Press Machines — we deliver reliable engineering solutions that enhance productivity and ensure long-lasting performance in demanding industrial environments.",
  },
  {
    heading: "Engineering Excellence in Every Component We Build",
    description:
      "Our precision-built hydraulic and pneumatic products are trusted across sectors for their durability, efficiency, and consistent performance under the toughest operating conditions.",
  },
];

const productList = [
  {
    number: "01",
    label: "Air/Water Cooled Oil Cooler",
    href: "/products/air-water-cooled-oil-cooler",
  },
  {
    number: "02",
    label: "Hydraulic Power Pack",
    href: "/products/hydraulic-power-pack",
  },
  {
    number: "03",
    label: "Hydraulic Cylinder",
    href: "/products/hydraulic-cylinder",
  },
  {
    number: "04",
    label: "Worm Gear Screw Jack",
    href: "/products/worm-gear-screw-jack",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setActiveSlide(index);
      setFade(true);
    }, 250);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % slides.length);
  }, [activeSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + slides.length) % slides.length);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  // handle fade transition whenever activeSlide changes from autoplay
  useEffect(() => {
    setFade(false);
    const t = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(t);
  }, [activeSlide]);

  const slide = slides[activeSlide];

  return (
    <section
      className="relative w-full bg-white"
      style={{ fontFamily: HERO_FONT }}
    >
      <div className="flex w-full">
        {/* Vertical contact strip */}
        <div className="hidden w-10 flex-shrink-0 flex-col items-center justify-between py-6 md:flex">
          <a
            href="mailto:sales2@hppgroup.in"
            className="flex items-center gap-2 whitespace-nowrap text-xs tracking-wide text-gray-500 [writing-mode:vertical-rl]"
          >
            sales2@hppgroup.in
          </a>
          <p className="mt-6 whitespace-nowrap text-xs tracking-wide text-gray-400 [writing-mode:vertical-rl]">
            Plot No. L -132, Sector-5, DSIIDC Industrial Area, Bawana, New
            Delhi-110039, India.
          </p>
        </div>

        {/* Main hero frame */}
        <div className="relative flex-1 overflow-hidden">
          <div className="relative flex min-h-[600px] w-full">
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('./factoryimage.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black/65" />

            {/* Left: rotating content */}
            <div className="relative z-10 flex w-full flex-col justify-center px-8 py-16 sm:px-14 lg:w-2/3 lg:px-16">
              <div
                className={`max-w-2xl transition-opacity duration-500 ease-in-out ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {slide.heading}
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
                  {slide.description}
                </p>
                <a
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 bg-[#e2582a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9481f]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Slide indicators */}
              <div className="mt-12 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeSlide
                        ? "w-8 bg-[#e2582a]"
                        : "w-3 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: static numbered product list */}
            <div className="relative z-10 hidden w-full max-w-md flex-shrink-0 bg-black/85 px-10 py-16 lg:flex lg:flex-col lg:justify-center">
              <ul className="flex flex-col gap-10">
                {productList.map((item) => (
                  <li key={item.number}>
                    <Link
                      href={item.href}
                      className="group flex items-start gap-6"
                    >
                      <span className="text-2xl font-light text-gray-500 transition-colors group-hover:text-[#e2582a]">
                        {item.number}
                      </span>
                      <span className="text-2xl font-medium leading-snug text-gray-100 underline decoration-transparent underline-offset-4 transition-colors group-hover:text-[#e2582a] group-hover:decoration-[#e2582a]">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prev / Next arrows */}
            <div className="absolute bottom-6 right-6 z-20 flex gap-3">
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}