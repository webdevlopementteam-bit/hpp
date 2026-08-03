"use client";

import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Global Presence", href: "/global-presence" },
];

// Replace with your actual gallery images
const galleryImages = [
  "/footerimg1.jpg",
  "/footerimg2.jpg",
  "/footerimg3.jpg",
  "/footerimg4.jpg",
  "/footerimg5.jpg",
  "/footerimg6.jpg",
];

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-[#0f1c3f]"
      style={{ fontFamily: SITE_FONT }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Top row: phone / logo / email */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <p className="text-lg font-semibold text-white">
            Contact us at{" "}
            <a
              href="tel:+919871456545"
              className="font-bold text-[#e2582a] hover:underline"
            >
              +91-9871456545
            </a>
          </p>

          <Link href="/" className="flex-shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
              <svg width="72" height="72" viewBox="0 0 100 100">
                {Array.from({ length: 13 }).map((_, i) => {
                  const angle = (i / 12) * 180 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const rInner = 22;
                  const rOuter = 40;
                  const x1 = 50 + rInner * Math.sin(rad);
                  const y1 = 32 - rInner * Math.cos(rad) * 0.55;
                  const x2 = 50 + rOuter * Math.sin(rad);
                  const y2 = 32 - rOuter * Math.cos(rad) * 0.55;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#e2582a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  );
                })}
                <circle cx="50" cy="30" r="16" fill="#f5a623" />
                <rect x="18" y="38" width="64" height="26" rx="2" fill="#ffffff" />
                <text
                  x="50"
                  y="59"
                  textAnchor="middle"
                  fontFamily="Georgia, serif"
                  fontWeight="bold"
                  fontSize="26"
                  fill="#1e2a4a"
                >
                  HPP
                </text>
                <rect x="14" y="66" width="72" height="4" fill="#1e2a4a" />
              </svg>
            </div>
          </Link>

          <p className="text-lg font-semibold text-white">
            Email:{" "}
            <a
              href="mailto:sales2@hppgroup.in"
              className="font-bold text-[#e2582a] hover:underline"
            >
              sales2@hppgroup.in
            </a>
          </p>
        </div>

        {/* Gallery strip */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="aspect-square w-full overflow-hidden rounded-md"
            >
              <img
                src={src}
                alt={`Facility and manufacturing photo ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Nav links */}
        <nav className="mt-14 flex flex-wrap items-center justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-semibold text-white transition-colors hover:text-[#e2582a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/10 bg-[#0a1530] py-5">
        <p className="text-center text-sm text-gray-300">
          Copyright © 2026 HPP All Right Reserved | Powered by{" "}
          <a
            href="https://bharatbizmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#e2582a] hover:underline"
          >
            Bharat Bizmart
          </a>
        </p>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919871456545"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 sm:opacity-100">
          Contact us
        </span>
        <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105">
          <IoLogoWhatsapp className="h-7 w-7 text-white" fill="white" />
        </span>
      </a>
    </footer>
  );
}