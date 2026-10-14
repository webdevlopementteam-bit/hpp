"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const features = [
  "Easy to Installation",
  "Maximum Performance",
  "Low Operating Cost",
  "Long Lasting",
  "Corrosion Resistant",
];

const products = [
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "1.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with valve bank and pressure gauges",
  },
  {
    name: "Hydraulic Power Pack for Rolling Mill Industry",
    image: "2.webp",
    alt: "HPP hydraulic power pack for rolling mill industry with external motor frame and oil cooler",
  },
  { name: "Hydraulic Power Pack for Hydro Testers - Single Tube", image: "3.webp" },
  { name: "Hydraulic Power Pack for Hydro Testers - Triple Tube", image: "4.webp" },
  { name: "Hydraulic Power Pack for Ingot Cutting Machine", image: "5.webp" },
  { name: "Hydraulic Power Pack for Straightening Machine", image: "6.webp" },
  { name: "Hydraulic Power Pack For Hydro Tester", image: "7.webp" },
  { name: "Hydraulic Power Pack for Injection Moulding Machine", image: "8.webp" },
  { name: "Hydraulic Power Pack for Push Pointer", image: "9.webp" },
  { name: "Hydraulic Power Pack for Sugar Mill Industry", image: "10.webp" },
  { name: "Hydraulic Power Pack for CNC Clamp/De-Clamp", image: "11.webp" },
  { name: "Hydraulic Power Pack for Hydraulic Press", image: "12.webp" },
];

export default function HydraulicPowerPackPage() {
  const title = "Hydraulic Power Pack";

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
              src="/products/hydraulic-power-pack/main.webp"
              alt="HPP Hydraulic Power Pack - industrial hydraulic power unit"
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
              Our <span className="font-semibold text-[#f35a3b]">Hydraulic Power Packs</span> are
              compact, efficient, and designed to handle a wide range of
              industrial applications. These systems are built using
              high-quality components, ensuring maximum performance and
              durability. Available in both standard and custom
              configurations, our power packs are widely used in presses,
              injection molding machines, material handling, lifting
              systems, etc. Key features include modular design, ease of
              maintenance, low noise levels, and reliable pressure control.
              Whether you need a mobile or stationary unit, we offer
              optimized solutions tailored to your operational requirements.
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
              Our <span className="text-[#f35a3b]">Hydraulic Power Pack</span> Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our range of custom-built hydraulic power packs
              engineered for specific industrial applications.
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
                    src={`/products/hydraulic-power-pack/${product.image}`}
                    alt={product.alt || product.name}
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
    </section>
  );
}
