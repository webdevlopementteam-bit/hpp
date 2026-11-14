import { Check } from "lucide-react";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const points = [
  {
    title: "Manufacturer, not trader",
    text: "designed and built at our own unit in Bawana, Delhi.",
  },
  {
    title: "Right sizing",
    text: "we select the cooler for your actual heat load, not a guess.",
  },
  {
    title: "Tested before dispatch",
    text: "every unit is pressure and performance tested.",
  },
  {
    title: "Ready stock + custom builds",
    text: "standard models ship fast; special sizes are made to order.",
  },
  {
    title: "Proven with big names",
    text: "trusted by Jindal Steel & Power, Honda, BHEL, ISGEC, JK Cement and Sona.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      className="w-full bg-[#f9fafb] py-16 sm:py-20"
      style={{ fontFamily: SITE_FONT }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#1e2a4a] sm:text-4xl">
          Why Choose HPP as Your{" "}
          <span className="text-[#e2582a]">Oil Cooler Manufacturer?</span>
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {points.map((p) => (
            <li
              key={p.title}
              className="flex items-start gap-3 rounded-md bg-white p-5 shadow-sm"
            >
              <Check
                className="mt-1 h-5 w-5 flex-shrink-0 text-[#e2582a]"
                strokeWidth={3}
              />
              <span className="text-base leading-relaxed text-gray-700">
                <strong className="font-bold text-[#1e2a4a]">{p.title}</strong>
                : {p.text}
              </span>
            </li>
          ))}
          <li className="flex items-start gap-3 rounded-md bg-white p-5 shadow-sm">
            <Check
              className="mt-1 h-5 w-5 flex-shrink-0 text-[#e2582a]"
              strokeWidth={3}
            />
            <span className="text-base leading-relaxed text-gray-700">
              <strong className="font-bold text-[#1e2a4a]">
                Pan-India and export supply
              </strong>
              , with spare parts and after-sales support.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
