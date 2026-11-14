import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const PAGE_URL =
  "https://www.aircooledoilcooler.com/blog/hydraulic-components-supplier-germany";

const linkClass = "font-bold text-[#f35a3b] hover:text-[#0d1b3f]";

const faqs = [
  {
    question:
      "Can an Indian manufacturer meet German quality expectations for hydraulic cylinders?",
    answer:
      "Yes, if the supplier works to your drawing, tests every unit and provides material certificates and test reports. Start with a first-article inspection to confirm quality before volume orders.",
  },
  {
    question:
      "Do you build custom hydraulic cylinders and oil coolers in low volumes?",
    answer:
      "Yes. HPP builds custom cylinders, oil coolers and screw jacks from single prototypes to regular series orders.",
  },
  {
    question: "Which documents come with each delivery?",
    answer:
      "Approval drawing, pressure or load test report, material certificates for critical parts, and digital operating and maintenance instructions in English.",
  },
  {
    question: "How long does delivery to Germany take?",
    answer:
      "Standard oil coolers usually ship within 1 to 2 weeks, and custom cylinders, oil coolers and screw jacks take about 3 to 5 weeks to build. Sea freight from India to Hamburg then takes around 4 to 6 weeks door to door. For urgent or prototype orders, air freight reaches Germany in about one week.",
  },
  {
    question: "Should I choose an air cooled or a water cooled oil cooler?",
    answer:
      "Choose air cooled for low to medium heat loads and machines without a water supply. Choose water cooled for high heat loads, continuous duty or hot, enclosed spaces.",
  },
  {
    question:
      "When should I use a screw jack instead of a hydraulic cylinder?",
    answer:
      "Use a screw jack when you need to hold a load without power, position it precisely or lift a platform with several synchronised jacks. Use a hydraulic cylinder for high forces, fast strokes and impact loads.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  url: PAGE_URL,
  inLanguage: "en",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const coolingTable = [
  ["Cooling medium", "Ambient air, electric fan", "Plant water, shell and tube design"],
  [
    "Best for",
    "Low to medium heat loads, mobile machines, power packs",
    "High heat loads, continuous duty, hot enclosed areas",
  ],
  ["Installation", "Simple, no water piping", "Needs water supply and return lines"],
  ["Running cost", "Fan power only", "Water treatment and pumping"],
  ["Maintenance", "Keep fins clean", "Check water quality and scaling"],
  [
    "Typical OEM use",
    "Hydraulic power units, presses, machine tools",
    "Injection moulding, steel and heavy industry",
  ],
];

const oilCoolerQuote = [
  "Oil flow rate (l/min) and oil type",
  "Heat to remove (kW), or power pack motor rating (kW)",
  "Target oil inlet and outlet temperature",
  "Maximum ambient temperature (air cooled) or water temperature and flow (water cooled)",
  "Voltage and frequency (for example 400 V / 50 Hz, 3-phase)",
  "Port standard (BSPP, metric) and mounting space",
  "Options: bypass valve, thermostat, temperature switch",
];

const heavyDuty = [
  "Hard-chrome plated piston rod, induction hardened where side loads or impacts are high",
  "Honed seamless tube with controlled wall thickness",
  "Proven seal systems for your fluid and temperature range",
  "End-of-stroke cushioning for fast, heavy loads",
  "100% pressure testing before dispatch, with a test report per cylinder",
];

const cylinderQuote = [
  "Drawing or sketch with bore, rod diameter and stroke (mm)",
  "Working and test pressure (bar)",
  "Mounting style (flange, clevis, trunnion, foot)",
  "Port type and size",
  "Fluid, temperature range and environment (outdoor, dust, washdown)",
  "Options: position sensor, cushioning, special coating",
  "Annual quantity and batch size",
];

const screwJackQuote = [
  "Load per jack (kN), static and dynamic",
  "Stroke (mm) and lifting speed (mm/min)",
  "Duty cycle (operations per hour, hours per day)",
  "Mounting orientation (upright or inverted) and end fittings",
  "Number of jacks and whether they must run synchronised",
  "Drive: hand wheel, AC motor or geared motor",
  "Options: anti-rotation, bellows boot, limit switches",
];

const supplierChecklist = [
  [
    "Quality management",
    "Valid ISO 9001 certificate from an accredited body, with a certificate number you can verify",
  ],
  [
    "In-house manufacturing",
    "Own machining, welding, assembly and test bench, not trading only",
  ],
  [
    "Testing",
    "Pressure test on every cylinder and oil cooler, with a test report per serial number",
  ],
  [
    "Traceability",
    "Material certificates for tubes, rods and spindles linked to each order",
  ],
  ["Drawings", "Approval drawing before production, STEP files on request"],
  [
    "Communication",
    "Named English-speaking engineer, reply within 24 to 48 hours",
  ],
  [
    "Logistics",
    "Clear Incoterms, export packing, realistic lead time in writing",
  ],
  ["References", "Industrial clients and installations you can check"],
];

function CheckList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check size={18} className="mt-1 flex-shrink-0 text-[#f35a3b]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BlogPostPage() {
  const title =
    "How German OEMs Source Custom Hydraulic Cylinders, Oil Coolers and Screw Jacks: 2027 Buyer's Guide";

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="relative h-[380px] w-full overflow-hidden md:h-[440px]">
        <Image
          src="/breadcrumb.webp"
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#08152f]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152f]/70 via-transparent to-[#f35a3b]/20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={70}
            height={70}
            className="mb-6"
          />

          <h1 className="mb-5 max-w-4xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/blog" className="transition hover:text-[#f35a3b]">
              Blog
            </Link>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">
              Hydraulic Components Supplier Germany
            </span>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="mx-auto max-w-5xl px-6 pt-16">
        <div className="overflow-hidden rounded-md bg-gray-100">
          <Image
            src="/factoryimage.webp"
            alt="HPP hydraulic cylinders, oil coolers and screw jacks for German OEMs"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p>
            German machine builders expect three things from a hydraulic
            component supplier: parts built exactly to drawing, documents that
            support CE compliance, and deliveries that arrive on time. That is
            true whether you need a custom hydraulic cylinder, an{" "}
            <Link
              href="/iso-certified-air-cooled-oil-cooler-manufacturer-in-germany"
              className={linkClass}
            >
              air cooled oil cooler
            </Link>{" "}
            for a power unit, or a worm gear screw jack for a lifting platform.
          </p>
          <p>
            This guide is written for purchasing managers and design engineers
            at German OEMs. It explains what to look for when you source these
            three product groups, what the new EU Machinery Regulation changes
            from January 2027, and how to evaluate an overseas OEM supplier
            before you place the first order. At the end, you can download our
            free RFQ checklist.
          </p>

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Why German OEMs Are Adding New Hydraulic Component Suppliers
          </h2>
          <p>
            Many machine builders in Germany rely on one or two long-standing
            suppliers for hydraulic parts. That works well until lead times
            stretch, a supplier stops producing low-volume custom parts, or
            prices rise faster than machine prices.
          </p>
          <p>That is why more OEMs now run a dual-sourcing strategy:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">
                Custom, low-to-medium volume parts
              </strong>{" "}
              such as special-stroke cylinders or non-standard oil coolers go to
              a flexible OEM supplier that builds to drawing.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Standard catalogue parts</strong>{" "}
              stay with existing distributors.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Critical items</strong> get a
              qualified second source, so one supplier delay cannot stop a
              production line.
            </li>
          </ul>
          <p>
            A good OEM hydraulic supplier should work from your drawings, accept
            your quality requirements, and ship complete assemblies, for example
            a{" "}
            <Link href="/hydraulic-power-pack" className={linkClass}>
              hydraulic power pack
            </Link>{" "}
            with an integrated oil cooling system, rather than loose parts.
          </p>

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            What the EU Machinery Regulation 2027 Means for Your Component
            Suppliers
          </h2>
          <p>
            The new EU Machinery Regulation (EU) 2023/1230 replaces the
            Machinery Directive 2006/42/EC. According to the German Federal
            Institute for Occupational Safety and Health (BAuA), it applies to
            machinery placed on the market from{" "}
            <strong className="text-[#0d1b3f]">20 January 2027</strong>.
          </p>
          <p>What this means in practice for sourcing:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">
                The placing-on-market date decides which rules apply.
              </strong>{" "}
              Machines delivered after 20 January 2027 must meet the new
              Regulation, even if they were designed earlier.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                Digital documentation becomes the default.
              </strong>{" "}
              Instructions and the EU Declaration of Conformity can be supplied
              digitally, so you need clean, digital component data from your
              suppliers.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                You, the OEM, stay responsible for the finished machine.
              </strong>{" "}
              Most hydraulic cylinders, oil coolers and screw jacks are supplied
              as components, so your CE file depends on the quality of the
              documents your suppliers provide.
            </li>
          </ul>
          <p>Before 2027, ask every hydraulic supplier for:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Dimensional drawings and 3D models (STEP)</li>
            <li>
              Material certificates for critical parts such as rods, tubes and
              lifting spindles
            </li>
            <li>Pressure test reports for every cylinder and oil cooler</li>
            <li>Load ratings and test data for screw jacks</li>
            <li>
              CE declarations for bought-in electrical parts, such as oil cooler
              fan motors
            </li>
            <li>
              Digital operating and maintenance instructions in English (and
              German on request)
            </li>
          </ol>

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Hydraulic Oil Cooling Systems: Air Cooled vs Water Cooled
          </h2>
          <p>
            Every hydraulic system turns part of its input power into heat.
            Without an oil cooler, oil temperature climbs, viscosity drops, seals
            harden and pumps wear faster. Choosing between an air cooled and a{" "}
            <Link
              href="/custom-water-cooled-hydraulic-oil-cooler-supplier-germany"
              className={linkClass}
            >
              custom water cooled hydraulic oil cooler
            </Link>{" "}
            depends mainly on your heat load and your plant.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-base">
              <thead>
                <tr className="bg-[#0d1b3f] text-white">
                  <th className="px-4 py-3 font-bold">Factor</th>
                  <th className="px-4 py-3 font-bold">Air cooled oil cooler</th>
                  <th className="px-4 py-3 font-bold">Water cooled oil cooler</th>
                </tr>
              </thead>
              <tbody>
                {coolingTable.map(([factor, air, water]) => (
                  <tr key={factor} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-[#0d1b3f]">{factor}</td>
                    <td className="px-4 py-3">{air}</td>
                    <td className="px-4 py-3">{water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="pt-2 text-xl font-bold text-[#0d1b3f]">
            What to send for an oil cooler quote
          </h3>
          <CheckList items={oilCoolerQuote} />

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Custom and Heavy-Duty Hydraulic Cylinders
          </h2>
          <p>
            A standard catalogue cylinder rarely fits a special machine
            perfectly. A{" "}
            <Link
              href="/custom-hydraulic-cylinder-manufacturer-germany"
              className={linkClass}
            >
              custom hydraulic cylinder manufacturer
            </Link>{" "}
            builds to your bore, stroke, mounting and port requirements, so you
            do not need to redesign your machine around a catalogue part.
          </p>
          <p>Common cylinder types for OEM machines:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">Tie-rod cylinders</strong> for
              industrial machines, often built to ISO 6020-2 mounting dimensions
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Welded body cylinders</strong>{" "}
              for compact, mobile and agricultural equipment
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                Heavy-duty (mill-type) cylinders
              </strong>{" "}
              for steel plants, presses and cement plants, often to ISO 6022
              dimensions for higher pressures
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                Single acting and telescopic cylinders
              </strong>{" "}
              for lifting and tipping
            </li>
          </ul>

          <h3 className="pt-2 text-xl font-bold text-[#0d1b3f]">
            What makes a cylinder truly heavy duty
          </h3>
          <CheckList items={heavyDuty} />

          <h3 className="pt-2 text-xl font-bold text-[#0d1b3f]">
            What to send for a hydraulic cylinder quote
          </h3>
          <CheckList items={cylinderQuote} />

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Mechanical Screw Jacks and Worm Gear Lifting Jacks
          </h2>
          <p>
            When a load must be lifted, held or positioned precisely without a{" "}
            <strong className="text-[#0d1b3f]">hydraulic power unit</strong>, a
            mechanical screw jack is often the better choice. A worm gear drives
            a lifting spindle, turning motor rotation into slow, controlled
            linear motion.
          </p>
          <p>Why OEMs choose screw jacks over hydraulics for some jobs:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">Holding loads:</strong>{" "}
              trapezoidal spindle jacks can be self-locking, so they hold a load
              without power. Confirm self-locking for your lead, speed and
              vibration with the supplier.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Precise positioning:</strong>{" "}
              suited to platforms, stage lifts, solar trackers and test rigs.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Synchronised lifting:</strong>{" "}
              two, four or more jacks linked by shafts and bevel gearboxes lift a
              large platform evenly.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">No oil leaks:</strong> clean
              operation for food, packaging and indoor equipment.
            </li>
          </ul>

          <h3 className="pt-2 text-xl font-bold text-[#0d1b3f]">
            Translating or rotating spindle?
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">Translating spindle:</strong>{" "}
              the spindle moves up and down through the gearbox. Simple and
              robust, but needs space below the jack.
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                Rotating spindle (travelling nut):
              </strong>{" "}
              the spindle turns and a nut moves along it. Saves space and suits
              long strokes.
            </li>
          </ul>

          <h3 className="pt-2 text-xl font-bold text-[#0d1b3f]">
            What to send for a screw jack quote
          </h3>
          <CheckList items={screwJackQuote} />

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            How to Evaluate an Overseas Hydraulic OEM Supplier: 8-Point
            Checklist
          </h2>
          <p>
            Whether you source from Germany, Eastern Europe or Asia, use the
            same checklist. A good supplier will answer every point in writing
            before you order.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-base">
              <thead>
                <tr className="bg-[#0d1b3f] text-white">
                  <th className="px-4 py-3 font-bold">#</th>
                  <th className="px-4 py-3 font-bold">Check</th>
                  <th className="px-4 py-3 font-bold">What a good answer looks like</th>
                </tr>
              </thead>
              <tbody>
                {supplierChecklist.map(([check, answer], i) => (
                  <tr key={check} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-[#0d1b3f]">{i + 1}</td>
                    <td className="px-4 py-3 font-semibold text-[#0d1b3f]">{check}</td>
                    <td className="px-4 py-3">{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-[#0d1b3f]">Tip:</strong> Order a first
            article or a small pilot batch, inspect it in your own plant, then
            release volume orders.
          </p>

          {/* ---------- */}
          <h2 className="pt-4 text-2xl font-bold text-[#0d1b3f] md:text-3xl">
            Why German OEMs Work With HPP
          </h2>
          <p>
            HPP (Hydraulic &amp; Pneumatic Products) manufactures air cooled oil
            coolers, water cooled oil coolers, hydraulic power packs, hydraulic
            and pneumatic cylinders, worm gear screw jacks and hydraulic jacks at
            its own facility in Delhi, India.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-[#0d1b3f]">12+ years</strong> of hydraulic
              manufacturing and{" "}
              <strong className="text-[#0d1b3f]">11,000+ installations</strong>
            </li>
            <li>
              Trusted by industrial clients including Jindal Steel &amp; Power,
              Honda, BHEL and ISGEC
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Built to your drawing:</strong>{" "}
              custom bores, strokes, mountings, cooler sizes and jack ratings
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Complete systems:</strong>{" "}
              hydraulic power packs with integrated oil cooling, ready to install
            </li>
            <li>
              <strong className="text-[#0d1b3f]">
                Every unit tested before dispatch
              </strong>
            </li>
            <li>
              <strong className="text-[#0d1b3f]">ISO 9001:2015 certified</strong>
            </li>
            <li>
              <strong className="text-[#0d1b3f]">Export ready:</strong> quotes in
              EUR, export packing, documents in English
            </li>
          </ul>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#f9fafb] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion
            faqs={faqs}
            includeSchema={false}
            questionAs="h3"
            heading={
              <>
                <span className="text-[#0d1b3f]">Frequently Asked</span>{" "}
                <span className="text-[#f35a3b]">Questions</span>
              </>
            }
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0d1b3f] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Get a Quote: <span className="text-[#f35a3b]">Send Your Drawing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-200">
            Send us your drawing or basic data (load, stroke, flow rate or heat
            load), and our engineers will reply with a technical offer in EUR
            within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#f35a3b] px-6 py-3 font-bold text-white transition-colors hover:bg-[#d94a2c]"
            >
              Upload Your Drawing
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Download the Free RFQ Checklist (PDF)
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-200">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:sales2@hppgroup.in" className="hover:text-[#f35a3b]">
              sales2@hppgroup.in
            </a>{" "}
            ·{" "}
            <strong className="text-white">Phone / WhatsApp:</strong>{" "}
            <a href="tel:+919871456545" className="hover:text-[#f35a3b]">
              +91-9871456545
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
