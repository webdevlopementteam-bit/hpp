"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const SITE_FONT = "'Baloo 2', 'Quicksand', ui-rounded, sans-serif";
const STORAGE_KEY = "hpp_lead_popup_closed";
const OPEN_DELAY_MS = 8000;

export default function LeadPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    data.append("subject", "New Lead - Home Page Popup (aircooledoilcooler.com)");
    try {
      const ok = await submitLead(data);
      if (ok) {
        form.reset();
        close();
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      style={{ fontFamily: SITE_FONT }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-[#1e2a4a] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-3 top-3 text-white/70 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <p
          id="lead-popup-title"
          className="pr-6 text-2xl font-extrabold text-white sm:text-3xl"
        >
          Get a Quote for Your <span className="text-[#e2582a]">Oil Cooler</span>
        </p>
        <p className="mt-2 text-sm text-gray-300">
          Tell us your flow rate and application, and we will recommend the
          right air cooled or water cooled oil cooler.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name*"
            className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone / WhatsApp*"
            className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email*"
            className="w-full border border-white/30 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#e2582a]"
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Flow rate (LPM), motor rating, application"
            className="w-full resize-none bg-gray-100 px-4 py-3 text-[#1e2a4a] placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#e2582a]"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-[#e2582a] px-8 py-3 text-base font-bold text-white transition-colors hover:bg-[#c9481f] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Request a Quote"}
          </button>
          {error && <p className="text-sm font-medium text-red-400">{error}</p>}
        </form>
      </div>
    </div>
  );
}
