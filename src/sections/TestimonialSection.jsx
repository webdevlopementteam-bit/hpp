"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#1f2d4b] py-10 sm:py-15">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* Background Watermark */}
      <div className="absolute right-4 top-4 text-[120px] font-bold text-white/5 select-none sm:right-10 sm:top-10 sm:text-[220px]">
        ❀
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            {/* Replace this div with your image */}
            <div className="flex h-[260px] w-[220px] items-center justify-center sm:h-[360px] sm:w-[300px] lg:h-[470px] lg:w-[380px]">
             <Image
               src="/tmimage.webp"
               alt="Testimonial"
               width={380}
               height={500}
               className="h-full w-full rounded-full object-cover"
             />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Name */}
            <h3 className="mb-4 text-3xl font-semibold text-white/60 sm:mb-6 sm:text-4xl lg:mb-8 lg:text-5xl">
              Deepak Gupta
            </h3>

            {/* Testimonial */}
            <p className="mx-auto max-w-5xl text-lg leading-snug font-light text-white sm:text-2xl lg:mx-0 lg:text-[30px] lg:leading-[1.2]">
              We are using their heat exchanger systems for heavy-duty
              operations, and the results are impressive. Low maintenance and
              consistent performance make them a trusted partner.
            </p>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-4 sm:mt-12 lg:mt-16 lg:justify-start">
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="h-3 w-3 rounded-full bg-white/20"></span>
            </div>
          </div>
        </div>

        {/* Quote Icon */}
        <div className="absolute bottom-0 right-4 hidden sm:right-12 sm:block">
          <Quote
            size={150}
            strokeWidth={1.5}
            className="rotate-180 text-[#ff5a3d]"
          />
        </div>
      </div>
    </section>
  );
}