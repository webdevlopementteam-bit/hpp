"use client";

export default function TextMarquee() {
  const text = "HYDRAULIC AND PNEUMATIC PRODUCTS (HPP)";

  return (
    <section className="w-full overflow-hidden  py-4">
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 items-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="mx-10 text-4xl font-bold uppercase tracking-[0.25em] text-[#0f172a] md:text-6xl"
            >
              {text}
            </span>
          ))}
        </div>

        <div
          className="animate-marquee flex shrink-0 items-center"
          aria-hidden="true"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="mx-10 text-4xl font-bold uppercase tracking-[0.25em] text-white md:text-6xl"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
    </section>
  );
}