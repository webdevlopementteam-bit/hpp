"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const topProducts = [
  {
    label: "Hydraulic Power Pack",
    href: "/hydraulic-power-pack",
    image: "/products/hydraulic-power-pack/main.webp",
  },
  {
    label: "Hydraulic Cylinder",
    href: "/hydraulic-cylinder",
    image: "/products/hydraulic-cylinder/main.webp",
  },
  {
    label: "Pneumatic Cylinder",
    href: "/pneumatic-cylinder",
    image: "/products/pneumatic-cylinder/main.webp",
  },
  {
    label: "Air Cooled Oil Cooler",
    href: "/air-cooled-oil-cooler",
    image: "/products/air-cooled-oil-cooler/main.webp",
  },
  {
    label: "Water-Cooled Oil Cooler",
    href: "/water-cooled-oil-cooler",
    image: "/products/water-cooled-oil-cooler/main.webp",
  },
  {
    label: "Worm Gear Screw Jack",
    href: "/worm-gear-screw-jack",
    image: "/products/worm-gear-screw-jack/main.webp",
  },
  {
    label: "Industrial Hydraulic Jack",
    href: "/industrial-hydraulic-jack",
    image: "/products/industrial-hydraulic-jack/main.webp",
  },
  {
    label: "Hydro Tester Machine",
    href: "/hydro-tester-machine",
    image: "/products/hydro-tester-machine/main.webp",
  },
];

export default function TopProducts() {
  return (
    <section
      className="w-full bg-white py-16 sm:py-20"
      style={{ fontFamily: SITE_FONT }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#1e2a4a] sm:text-4xl">
            Top <span className="text-[#e2582a]">Products</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our most trusted hydraulic and pneumatic solutions,
            engineered for reliability across every industrial application.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {topProducts.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100 p-4 sm:h-52">
                <Image
                  src={product.image}
                  alt={`${product.label} - HPP product category`}
                  width={300}
                  height={260}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-50 px-3 py-4">
                <h3 className="min-h-[2.5rem] text-center text-sm font-bold text-[#1e2a4a] sm:text-base">
                  {product.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-full bg-[#e2582a] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#c94a20]"
          >
            Show All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
