"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

const HERO_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const productList = [
  {
    number: "01",
    label: "Air/Water Cooled Oil Cooler",
    href: "/air-cooled-oil-cooler-manufacturer",
  },
  {
    number: "02",
    label: "Hydraulic Power Pack",
    href: "/hydraulic-power-pack",
  },
  {
    number: "03",
    label: "Hydraulic Cylinder",
    href: "/hydraulic-cylinder-manufacturer",
  },
  {
    number: "04",
    label: "Worm Gear Screw Jack",
    href: "/worm-gear-screw-jack",
  },
];

const heroStats = [
  { value: "12+", label: "Years Experience" },
  { value: "11,000+", label: "Installations" },
  { value: "1000+", label: "Industrial Clients" },
  { value: "20+", label: "Product Variants" },
];

export default function HeroSection() {
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
              style={{ backgroundImage: "url('/factoryimage.webp')" }}
            />
            <div className="absolute inset-0 bg-black/65" />

            {/* Left: content */}
            <div className="relative z-10 flex w-full flex-col justify-center px-6 py-16 sm:px-14 lg:w-2/3 lg:px-16">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Air Cooled Oil Cooler Manufacturer in Delhi, India
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
                  HPP (Hydraulic &amp; Pneumatic Products) is a Delhi-based
                  manufacturer of{" "}
                  <strong className="font-bold text-white">
                    air-cooled oil coolers, water-cooled oil coolers, and
                    complete hydraulic systems
                  </strong>
                  . From our manufacturing unit in Bawana Industrial Area, we
                  design and build hydraulic oil coolers that keep your power
                  packs, presses, and machines running at a safe, steady
                  temperature. With 12+ years of experience and 11,000+
                  installations across steel, cement, automobile, and
                  engineering plants, we help Indian industry cut downtime
                  caused by overheating hydraulic oil.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#e2582a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c9481f]"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="tel:+919871456545"
                    className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    Call +91-9871456545
                  </a>
                  <a
                    href="https://wa.me/919871456545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe57]"
                  >
                    <IoLogoWhatsapp className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Stats strip */}
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/20 pt-6 sm:grid-cols-4">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-[#e2582a] sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="text-xs font-medium text-gray-200 sm:text-sm">
                      {s.label}
                    </div>
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
