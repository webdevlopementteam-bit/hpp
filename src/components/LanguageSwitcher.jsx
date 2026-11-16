"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// Google Translate powered language switcher (loader lives in app/layout.js).
export const LANGUAGES = [
  { code: "en", label: "English", country: "United States", flag: "us" },
  { code: "de", label: "German", country: "Germany", flag: "de" },
  { code: "sv", label: "Swedish", country: "Sweden", flag: "se" },
  { code: "da", label: "Danish", country: "Denmark", flag: "dk" },
  { code: "ar", label: "Arabic", country: "Oman", flag: "om" },
];

const flagSrc = (flag) => `https://flagcdn.com/w40/${flag}.png`;

function readCurrentLang() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
  const code = match ? decodeURIComponent(match[1]) : "en";
  return LANGUAGES.some((l) => l.code === code) ? code : "en";
}

function setTranslateCookie(code) {
  const host = window.location.hostname;
  const rootDomain = host.split(".").slice(-2).join(".");
  const domains = ["", `; domain=${host}`, `; domain=.${rootDomain}`];

  if (code === "en") {
    const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
    domains.forEach((d) => {
      document.cookie = `googtrans=; ${expired}; path=/${d}`;
    });
  } else {
    domains.forEach((d) => {
      document.cookie = `googtrans=/en/${code}; path=/${d}`;
    });
  }
}

export default function LanguageSwitcher({ compact = false }) {
  const [current, setCurrent] = useState("en");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setCurrent(readCurrentLang());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(code) {
    setOpen(false);
    if (code === current) return;
    setTranslateCookie(code);
    window.location.reload();
  }

  const active = LANGUAGES.find((l) => l.code === current) || LANGUAGES[0];

  return (
    <div ref={ref} className="notranslate relative" translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${active.label}. Change language`}
        className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1.5 text-sm font-bold text-[#1e2a4a] transition-colors hover:border-[#e2582a] hover:text-[#e2582a]"
      >
        <img
          src={flagSrc(active.flag)}
          alt=""
          width={22}
          height={16}
          className="h-4 w-[22px] rounded-sm object-cover shadow-sm"
        />
        {!compact && <span>{active.code.toUpperCase()}</span>}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border border-gray-100 bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === current}
                onClick={() => choose(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-gray-50 ${
                  lang.code === current
                    ? "font-bold text-[#e2582a]"
                    : "font-medium text-[#1e2a4a]"
                }`}
              >
                <img
                  src={flagSrc(lang.flag)}
                  alt={`${lang.country} flag`}
                  width={24}
                  height={18}
                  className="h-[18px] w-6 flex-shrink-0 rounded-sm object-cover shadow-sm"
                />
                <span>
                  {lang.country} – {lang.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
