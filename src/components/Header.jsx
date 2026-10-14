"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, ArrowUpRight, Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "PRODUCTS", href: "/products", dropdown: true },
  { label: "GLOBAL PRESENCE", href: "/global-presence" },
  { label: "BLOG", href: "/blog" },
];

const productLinks = [
  { label: "Hydraulic Power Pack", href: "/hydraulic-power-pack" },
  { label: "Hydraulic Cylinder", href: "/hydraulic-cylinder-manufacturer" },
  { label: "Pneumatic Cylinder", href: "/pneumatic-cylinder" },
  { label: "Air Cooled Oil Cooler", href: "/air-cooled-oil-cooler-manufacturer" },
  { label: "Water-Cooled Oil Cooler", href: "/water-cooled-oil-cooler-manufacturer" },
  { label: "Worm Gear Screw Jack", href: "/worm-gear-screw-jack" },
  { label: "Industrial Hydraulic Jack", href: "/industrial-hydraulic-jack-manufacturer" },
  { label: "Hydro Tester Machine", href: "/hydro-tester-machine" },
  { label: "Hydraulic Press", href: "/hydraulic-press" },
  { label: "Hydraulic Paper Mill System", href: "/hydraulic-paper-mill-system" },
  { label: "Hydraulic Rotary Unions", href: "/hydraulic-rotary-unions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="/" className="flex flex-shrink-0 items-center gap-3">
          {/* Sun burst icon */}
          <img src="/logo.webp" alt="HPP - Hydraulic and Pneumatic Products logo" className="h-10 w-full"/>
         
         
          <div className="leading-tight">
            <div className="font-serif text-2xl font-bold tracking-wide text-[#1e2a4a]">
              HPP
            </div>
            <div className="whitespace-nowrap text-xs font-bold tracking-wide text-[#1e2a4a]">
              HYDRAULIC &amp; PNEUMATIC PRODUCTS
            </div>
          </div>
        </a>

        {/* Phone */}
        <div className="hidden flex-shrink-0 items-center gap-2 xl:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a623]/20">
            <Phone className="h-4 w-4 fill-[#e2582a] text-[#e2582a]" />
          </span>
          <div className="leading-tight">
            <div className="text-xs font-semibold tracking-wider text-gray-500">
              PHONE
            </div>
            <div className="text-lg font-bold text-[#e2582a]">
              +91-9871456545
            </div>
          </div>
        </div>

        {/* Nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-bold tracking-wide text-[#1e2a4a] hover:text-[#e2582a]"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </a>
                {productsOpen && (
                  <ul className="absolute left-0 top-full z-20 w-72 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                    {productLinks.map((p) => (
                      <li key={p.label}>
                        <a
                          href={p.href}
                          className="block px-4 py-2 text-sm font-medium text-[#1e2a4a] hover:bg-gray-50 hover:text-[#e2582a]"
                        >
                          {p.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[15px] font-bold tracking-wide ${
                    pathname === link.href
                      ? "text-[#e2582a]"
                      : "text-[#1e2a4a] hover:text-[#e2582a]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right side: Get In Touch + Search */}
        <div className="hidden flex-shrink-0 items-center gap-6 lg:flex">
          <a
            href="/contact-us"
            className="flex items-center gap-1 text-[15px] font-bold tracking-wide text-[#1e2a4a] underline underline-offset-4 hover:text-[#e2582a]"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button aria-label="Search" className="text-[#1e2a4a] hover:text-[#e2582a]">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="text-[#1e2a4a] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 py-4 text-[15px] font-bold tracking-wide text-[#1e2a4a]"
                    >
                      {link.label}
                    </a>
                    <button
                      aria-label="Toggle products"
                      onClick={() => setMobileProductsOpen((open) => !open)}
                      className="p-4 text-[#1e2a4a]"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobileProductsOpen && (
                    <ul className="pb-3 pl-4">
                      {productLinks.map((p) => (
                        <li key={p.label}>
                          <a
                            href={p.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm font-medium text-[#1e2a4a] hover:text-[#e2582a]"
                          >
                            {p.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label} className="border-b border-gray-100">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-4 text-[15px] font-bold tracking-wide ${
                      pathname === link.href ? "text-[#e2582a]" : "text-[#1e2a4a]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <a
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center gap-1 text-[15px] font-bold tracking-wide text-[#1e2a4a]"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5a623]/20">
              <Phone className="h-4 w-4 fill-[#e2582a] text-[#e2582a]" />
            </span>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-wider text-gray-500">
                PHONE
              </div>
              <a
                href="tel:+919871456545"
                className="text-lg font-bold text-[#e2582a]"
              >
                +91-9871456545
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}