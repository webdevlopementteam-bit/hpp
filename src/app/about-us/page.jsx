"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AboutSection from "@/sections/About";

export default function BreadcrumbSection({
  title = "About Us",
  image = "/breadcrumb.webp", // Put your image in public/images/
}) {
  return (
    <section>
    <div className="relative h-[340px] md:h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071428]/70 via-transparent to-[#ff5a36]/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <Image
          src="/logo.webp" // Replace with your logo
          alt="Logo"
          width={70}
          height={70}
          className="mb-6"
        />

        {/* Title */}
        <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm md:text-base text-white/80">
          <Link
            href="/"
            className="transition hover:text-[#ff5a36]"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="font-semibold text-[#ff5a36]">
            {title}
          </span>
        </div>
      </div>
    </div>
    <AboutSection/>
    <div className="mx-auto max-w-7xl bg-[#f5f7fa] p-6 md:p-10">
  <div className="grid overflow-hidden bg-[#0f1d3b] lg:grid-cols-[320px_1fr]">
    {/* Left Side Menu */}
    <div className="bg-[#182544]">
      <button className="w-full border-l-4 border-[#ff5b3a] bg-[#0f1d3b] px-8 py-7 text-left text-2xl font-bold uppercase tracking-wide text-white transition-all">
        ABOUT US
      </button>

      <button className="w-full px-8 py-7 text-left text-2xl font-bold uppercase tracking-wide text-gray-400 transition-all hover:bg-[#0f1d3b] hover:text-white">
        VISION
      </button>

      <button className="w-full px-8 py-7 text-left text-2xl font-bold uppercase tracking-wide text-gray-400 transition-all hover:bg-[#0f1d3b] hover:text-white">
        MISSION
      </button>
    </div>

    {/* Right Side Content */}
    <div className="bg-[#0f1d3b] px-8 py-10 md:px-12 md:py-12">
      <p className="text-lg leading-[2.1] text-gray-200 md:text-[15px]">
        Hydraulic and Pneumatic Products (HPP) is a leading name in the
        engineering field, offering high-performance solutions in hydraulics
        and pneumatics since 2013. Under the visionary leadership of our
        Managing Director, Mr. Prem Kumar Jha &amp; Ms. Bhawna, we have
        consistently delivered quality-driven products that meet the dynamic
        needs of industries worldwide.

       <br/>
 
        With a team of 30+ skilled workers, 15+ qualified office staff, and
        more than 5 dedicated departments, we ensure precision manufacturing,
        timely delivery, and unmatched customer support.
        Our in-house Research & Development team is continuously working to
        expand our product range and enhance product performance to stay ahead
        of industrial demands. Every solution is designed with reliability,
        durability, and efficiency in mind, ensuring long-term value for our
        customers across diverse industrial sectors.
      </p>
    </div>
  </div>
</div>
<div className="mx-auto max-w-7xl px-6 py-20">
  {/* Heading */}
  <div className="relative mb-14 text-center">
    {/* Watermark */}
    <h2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[70px] font-black uppercase text-gray-100 opacity-70 md:text-[100px]">
      INDUSTRIES SERVED
    </h2>

    <h2 className="relative z-10 text-4xl font-bold md:text-6xl">
      <span className="text-[#0d1b3f]">Industries</span>{" "}
      <span className="text-[#f35a3b]">We Served</span>
    </h2>
  </div>

 {/* Image Grid */}
<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Manufacturing & Automation",
      image: "/img1.webp",
    },
    {
      title: "Construction & Infrastructure",
      image: "/img2.webp",
    },
    {
      title: "Mining & Heavy Engineering",
      image: "/img3.webp",
    },
    {
      title: "Agriculture & Earthmoving",
      image: "/img4.webp",
    },
    {
      title: "Industrial Processing Plants",
      image: "/img5.webp",
    },
    {
      title: "Energy & Utilities",
      image: "/img6.webp",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative h-[260px] overflow-hidden rounded-sm"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Always Visible Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08152f]/95 via-[#08152f]/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-bold leading-snug text-white">
          {item.title}
        </h3>

        {/* Orange Underline */}
        <div className="mt-4 h-[3px] w-16 rounded-full bg-[#f35a3b]" />
      </div>
    </div>
  ))}
</div>
</div>
<div className="mx-auto max-w-7xl px-6 py-7">
  {/* Heading */}
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-[#0d1b3f] md:text-4xl">
      Director{" "}
      <span className="text-[#f35a3b]">
        Message
      </span>
    </h2>
  </div>

  {/* Sub Heading */}
  <h3 className="mb-8 text-xl font-bold text-[#0d1b3f] md:text-xl">
    We specialize in a wide variety of hydraulic and pneumatic
    components, designed for durability, efficiency, and reliability.
  </h3>

  {/* Message */}
  <div className="space-y-7 text-lg leading-10 text-[#1d2b4f] md:text-[18px] md:leading-[2.2]">
    <p>
      Since the inception of Hydraulic and Pneumatic Products in 2013,
      our vision has always been clear—to deliver reliable,
      high-quality engineering solutions that empower industries and
      build long-term trust with our clients.
    </p>

    <p>
      What started as a modest venture has today grown into a
      multi-departmental organization with a highly skilled workforce,
      a diverse product portfolio, and a reputation built on
      commitment, quality, and customer satisfaction. This journey
      would not have been possible without the dedication of our
      engineers, technicians, support staff, and the unwavering trust
      of our clients and partners.
    </p>

    <p>
      At HPP, we believe in continuous improvement, innovation, and
      customer-centric thinking. Whether it's a custom hydraulic power
      pack, precision cylinders, rotary unions, or complete hydraulic
      systems, our goal is to provide solutions that add measurable
      value while ensuring maximum performance in the most demanding
      industrial environments.
    </p>

    <p>
      Looking ahead, we are excited to expand our product offerings,
      embrace emerging technologies, and strengthen our commitment to
      excellence. We are not just manufacturing components—we are
      building long-lasting partnerships and engineering solutions
      that move industries forward.
    </p>

    <p>
      Thank you for being a part of our journey.
    </p>
  </div>

  {/* Signature */}
  <div className="mt-12 border-l-4 border-[#f35a3b] pl-6">
    <h4 className="mb-3 text-2xl font-bold text-[#0d1b3f]">
      Warm Regards,
    </h4>

    <h3 className="text-3xl font-bold text-[#0d1b3f]">
      Prem Kumar Jha
    </h3>

    <p className="mt-2 text-xl font-semibold text-[#f35a3b]">
      Managing Director
    </p>

    <p className="mt-1 text-lg font-medium text-gray-600">
      Hydraulic and Pneumatic Products (HPP)
    </p>
  </div>
</div>
    </section>
  );
}