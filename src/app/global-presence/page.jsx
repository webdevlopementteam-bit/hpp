"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Section } from "lucide-react";
export default function Breadcrumb({
  title = "Global Presence",
  background = "/breadcrumb.jpg",
}) {
  return (
    <section>
    <div className="relative h-[360px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={background}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08152f]/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/70 via-transparent to-[#f35a3b]/20" />

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={75}
          height={75}
          className="mb-5"
        />

        {/* Page Title */}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
          <Link
            href="/"
            className="transition hover:text-[#f35a3b]"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-[#f35a3b]">
            {title}
          </span>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 h-1 w-20 rounded-full bg-[#f35a3b]" />
      </div>
      
    </div>

    <div className ="flex justify-center items-center">
    <Image src="/globe.jpg"  width={950}
          height={950}/>

    </div>
    <div className="mx-auto max-w-7xl px-6 py-20">
  {/* Heading */}
  <div className="mb-14 text-center">
    <h2 className="text-4xl font-bold text-[#0d1b3f] md:text-6xl">
      Our{" "}
      <span className="text-[#f35a3b]">
        Global Presence
      </span>
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
      Delivering high-quality hydraulic and pneumatic solutions across
      multiple countries with a strong international distribution network.
    </p>
  </div>

  {/* Countries */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      {
        country: "Nepal",
        flag: "/nepal.jpg",
      },
      {
        country: "Vietnam",
        flag: "/vietnam.jpg",
      },
      {
        country: "Sri Lanka",
        flag: "/srilanka.jpg",
      },
      {
        country: "Australia",
        flag: "/australia.jpg",
      },
      {
        country: "Kazakhstan",
        flag: "/kazakhstan.jpg",
      },
      {
        country: "Ukraine",
        flag: "/ukraine.jpg",
      },
      {
        country: "Morocco",
        flag: "/morocco.jpg",
      },
      {
        country: "Nigeria",
        flag: "/nigeria.jpg",
      },
      {
        country: "Saudi Arabia",
        flag: "/saudiarabia.jpg",
      },
      {
        country: "Qatar",
        flag: "/qatar.jpg",
      },
      {
        country: "Oman",
        flag: "/oman.jpg",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group flex items-center gap-5 bg-[#f9dfe5] p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d1b3f] hover:shadow-xl"
      >
        {/* Flag */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-white shadow-sm">
          <img
            src={item.flag}
            alt={item.country}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Country */}
        <h3 className="text-2xl font-semibold text-[#0d1b3f] transition-colors duration-300 group-hover:text-white">
          {item.country}
        </h3>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}