"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section>
      <div className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
        <Image
          src="/breadcrumb.jpg"
          alt="Thank You"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#08152f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/70 via-transparent to-[#f35a3b]/20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="mb-6"
          />

          <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            Thank You
          </h1>
        </div>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <CheckCircle2 size={64} className="mb-6 text-[#f35a3b]" />

        <h2 className="mb-4 text-3xl font-bold text-[#0d1b3f] md:text-4xl">
          Your Message Has Been Sent
        </h2>

        <p className="text-lg leading-8 text-gray-600">
          Thank you for reaching out to Hydraulic and Pneumatic Products
          (HPP). We have received your message and our team will get back
          to you shortly.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded bg-[#13264F] px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-500"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
