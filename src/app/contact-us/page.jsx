"use client";

import Image from "next/image";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="bg-white">
            {/* ================= HERO ================= */}
            <section className="relative h-[420px] overflow-hidden">
                <Image
                    src="/breadcrumb.jpg" // Replace with your banner
                    alt="Contact Banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="mb-6"
                    />

                    <h1 className="text-4xl font-semibold text-white md:text-6xl">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section className="py-24">
                <div className="mx-auto max-w-8xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* ================= MAP ================= */}

                        <div className="overflow-hidden rounded-sm border border-gray-200 shadow-sm">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps?q=Plot+No.+L-132,+Sector-5,+DSIIDC+Industrial+Area,+Bawana,+New+Delhi-110039,+India&output=embed"
                                width="100%"
                                height="650"
                                loading="lazy"
                                allowFullScreen
                                className="border-0"
                            />
                        </div>

                        {/* ================= CONTACT DETAILS ================= */}

                        <div className="flex flex-col justify-center">

                            {/* Email */}
                            <div className="border-b border-gray-200 pb-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F4A] text-white">
                                        <FaEnvelope size={18} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#0B1F4A]">
                                            Email
                                        </h3>

                                        <a
                                            href="mailto:sales2@hppgroup.in"
                                            className="mt-1 block text-lg text-gray-700 hover:text-orange-500"
                                        >
                                            sales2@hppgroup.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}

                            <div className="border-b border-gray-200 py-5">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F4A] text-white">
                                        <FaPhoneAlt size={18} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#0B1F4A]">
                                            Phone Number
                                        </h3>

                                        <a
                                            href="tel:+919871456545"
                                            className="mt-1 block text-xl text-gray-700 hover:text-orange-500"
                                        >
                                            +91-9871456545
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}

                            <div className="border-b border-gray-200 py-5">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F4A] text-white">
                                        <FaMapMarkerAlt size={18} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#0B1F4A]">
                                            Office Address
                                        </h3>

                                        <p className="mt-1 text-xl leading-9 text-gray-700">
                                            Plot No. L-132, Sector-5, DSIIDC Industrial Area,Bawana,


                                            <br />
                                            New Delhi-110039,
                                            <br />
                                            India.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}

                            <div className="pt-7">
                                <h3 className="mb-8 text-3xl font-semibold text-[#0B1F4A]">
                                    Get In Touch
                                </h3>

                                <div className="flex gap-4">

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded bg-[#13264F] text-white transition hover:bg-orange-500"
                                    >
                                        <FaFacebookF size={18} />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded bg-[#13264F] text-white transition hover:bg-orange-500"
                                    >
                                        <FaInstagram size={18} />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded bg-[#13264F] text-white transition hover:bg-orange-500"
                                    >
                                        <FaYoutube size={18} />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded bg-[#13264F] text-white transition hover:bg-orange-500"
                                    >
                                        <FaLinkedinIn size={18} />                  </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}

            <section className="bg-[#f8f8f8] py-24">
                <div className="mx-auto max-w-5xl rounded-lg bg-white p-10 shadow-lg">

                    <h2 className="mb-10 text-center text-5xl font-bold text-[#13264F]">
                        Send Us A Message
                    </h2>

                    <form className="grid gap-6 md:grid-cols-2">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="h-14 rounded border border-gray-300 px-5 outline-none focus:border-[#13264F]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="h-14 rounded border border-gray-300 px-5 outline-none focus:border-[#13264F]"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="h-14 rounded border border-gray-300 px-5 outline-none focus:border-[#13264F]"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="h-14 rounded border border-gray-300 px-5 outline-none focus:border-[#13264F]"
                        />

                        <textarea
                            rows={6}
                            placeholder="Your Message"
                            className="rounded border border-gray-300 p-5 outline-none focus:border-[#13264F] md:col-span-2"
                        ></textarea>

                        <button
                            className="h-14 rounded bg-[#13264F] text-lg font-semibold text-white transition hover:bg-orange-500 md:col-span-2"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </section>
        </main>
    );
}