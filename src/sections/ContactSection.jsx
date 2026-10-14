"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";

const offices = [
  {
    title: "New Delhi Office",
    lines: [
      "Plot No. L -132, Sector-5, DSIIDC",
      "Industrial Area, Bawana, New Delhi-",
      "110039, India.",
    ],
  },
  {
    title: "Manufacturing Unit",
    lines: ["Industrial Manufacturing Facility", "Delhi NCR, India"],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with your real API route / email service
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-16"
      style={{ fontFamily: SITE_FONT }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left column */}
        <div className="relative">
          {/* Ghost watermark heading */}
          <span className="pointer-events-none absolute -top-2 left-0 select-none whitespace-pre-line text-5xl font-extrabold uppercase leading-[0.95] text-gray-100 sm:text-6xl">
            {"Providing\nReliable Cooling\nSolutions"}
          </span>

          <h2 className="relative pt-16 text-3xl font-extrabold leading-tight text-[#1e2a4a] sm:text-4xl">
            Providing Reliable <span className="text-[#e2582a]">Cooling</span>{" "}
            <span className="text-[#e2582a]">Solutions</span>
          </h2>

          <p className="relative mt-8 max-w-lg text-xl leading-relaxed text-[#1e2a4a]">
            Some of the <span className="font-bold">industries and clients</span>{" "}
            we proudly serve with our advanced hydraulic and industrial
            cooling solutions.
          </p>

          {/* Phone / email block */}
          <div className="relative mt-10 flex items-center gap-6">
            <img
              src="/houseimg.webp"
              alt="Office illustration"
              className="h-28 w-28 flex-shrink-0 object-contain"
            />
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919871456545"
                className="flex items-center gap-2 text-lg font-bold text-[#1e2a4a]"
              >
                <Phone className="h-5 w-5 text-[#1e2a4a]" />
                +91-9871456545
              </a>
              <a
                href="mailto:sales2@hppgroup.in"
                className="flex items-center gap-2 text-lg font-bold text-[#1e2a4a]"
              >
                <Mail className="h-5 w-5 text-[#1e2a4a]" />
                sales2@hppgroup.in
              </a>
            </div>
          </div>

          {/* Offices */}
          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.title}>
                <h3 className="text-xl font-extrabold text-[#1e2a4a]">
                  {office.title}
                </h3>
                <div className="mt-2 text-base leading-relaxed text-gray-700">
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: form card */}
        <div className="rounded-lg bg-[#1e2a4a] p-8 sm:p-10 lg:p-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get In <span className="text-[#e2582a]">Touch</span>
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white"
              >
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                Subject*
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Your Message Subject"
                className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message Here"
                className="w-full resize-none bg-gray-100 px-4 py-3 text-[#1e2a4a] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#e2582a]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-fit bg-[#3b6fd6] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#2f5bb8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm font-medium text-green-400">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}