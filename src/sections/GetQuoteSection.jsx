import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

export default function GetQuoteSection() {
  return (
    <section
      className="w-full bg-[#1e2a4a] py-16 sm:py-20"
      style={{ fontFamily: SITE_FONT }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Get a Quote for Your <span className="text-[#e2582a]">Oil Cooler</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-200">
          Tell us your flow rate and application, and we will recommend the
          right air cooled or water cooled oil cooler, usually within 24 hours.
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 text-base text-gray-200">
          <p>
            <strong className="font-bold text-white">Phone / WhatsApp:</strong>{" "}
            <a href="tel:+919871456545" className="hover:text-[#e2582a]">
              +91-9871456545
            </a>{" "}
            <strong className="font-bold text-white">Email:</strong>{" "}
            <a href="mailto:sales2@hppgroup.in" className="hover:text-[#e2582a]">
              sales2@hppgroup.in
            </a>
          </p>
          <p>
            <strong className="font-bold text-white">Address:</strong> Plot No.
            L-132, Sector-5, DSIIDC Industrial Area, Bawana, New Delhi-110039,
            India
          </p>
        </div>

        <Link
          href="/contact-us"
          className="mt-10 inline-flex items-center gap-2 bg-[#e2582a] px-8 py-3 text-base font-bold text-white transition-colors hover:bg-[#c9481f]"
        >
          Request a Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
