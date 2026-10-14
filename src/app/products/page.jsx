"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    label: "Hydraulic Power Pack",
    href: "/hydraulic-power-pack",
    image: "/products/hydraulic-power-pack/main.webp",
  },
  {
    label: "Hydraulic Cylinder",
    href: "/hydraulic-cylinder-manufacturer",
    image: "/products/hydraulic-cylinder/main.webp",
  },
  {
    label: "Pneumatic Cylinder",
    href: "/pneumatic-cylinder",
    image: "/products/pneumatic-cylinder/main.webp",
  },
  {
    label: "Air Cooled Oil Cooler",
    href: "/air-cooled-oil-cooler-manufacturer",
    image: "/products/air-cooled-oil-cooler/main.webp",
  },
  {
    label: "Water-Cooled Oil Cooler",
    href: "/water-cooled-oil-cooler-manufacturer",
    image: "/products/water-cooled-oil-cooler/main.webp",
  },
  {
    label: "Worm Gear Screw Jack",
    href: "/worm-gear-screw-jack",
    image: "/products/worm-gear-screw-jack/main.webp",
  },
  {
    label: "Industrial Hydraulic Jack",
    href: "/industrial-hydraulic-jack-manufacturer",
    image: "/products/industrial-hydraulic-jack/main.webp",
  },
  {
    label: "Hydro Tester Machine",
    href: "/hydro-tester-machine",
    image: "/products/hydro-tester-machine/main.webp",
  },
  {
    label: "Hydraulic Press",
    href: "/hydraulic-press",
    image: "/products/hydraulic-press/main.webp",
  },
  {
    label: "Hydraulic Paper Mill System",
    href: "/hydraulic-paper-mill-system",
    image: "/products/hydraulic-paper-mill-system/main.webp",
  },
  {
    label: "Hydraulic Rotary Unions",
    href: "/hydraulic-rotary-unions",
    image: "/products/hydraulic-rotary-unions/main.webp",
  },
];

export default function ProductsPage() {
  const title = "Products";

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
            <span className="font-semibold text-[#f35a3b]">{title}</span>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Our <span className="text-[#f35a3b]">Product</span> Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our complete range of hydraulic and pneumatic solutions,
            engineered for reliability across every industrial application.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
                <Image
                  src={category.image}
                  alt={`${category.label} - HPP product category`}
                  width={500}
                  height={420}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-50 px-6 py-5">
                <h3 className="text-center text-base font-bold text-[#0d1b3f]">
                  {category.label}
                </h3>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <span className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0d1b3f]">
                    View Products
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
    </section>
  );
}
