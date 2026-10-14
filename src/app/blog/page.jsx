"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const posts = [
  {
    title:
      "Affordable Industrial Hydraulic Jack Manufacturers for Bulk Orders in Delhi",
    excerpt:
      "Looking for an industrial hydraulic jack manufacturer in Delhi? HPP offers affordable, durable, and high-quality hydraulic jacks for bulk orders.",
    href: "/blog/affordable-industrial-hydraulic-jack-manufacturers-for-bulk-orders-in-delhi",
    image: "/blogimage.webp",
  },
];

export default function BlogPage() {
  const title = "Blog";

  return (
    <section>
      {/* Breadcrumb */}
      <div className="relative h-[340px] w-full overflow-hidden md:h-[420px]">
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

          <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:text-base">
            <Link href="/" className="transition hover:text-[#f35a3b]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="font-semibold text-[#f35a3b]">{title}</span>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0d1b3f] md:text-4xl">
            Latest <span className="text-[#f35a3b]">Articles</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Guides and updates on hydraulic and pneumatic equipment from the
            HPP team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-50 items-center justify-center bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={300}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-50 px-6 py-5">
                <h3 className="text-base font-bold text-[#0d1b3f]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{post.excerpt}</p>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0d1b3f]">
                    Read More
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e2582a] text-white">
                      <ArrowUpRight size={14} />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
