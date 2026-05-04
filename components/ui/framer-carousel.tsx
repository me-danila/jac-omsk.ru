"use client";
import { animate, motion, useMotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const items = [
  {
    id: 1,
    url: "/assets/img/banner1.webp",
    title: "Весна — время больших возможностей",
    href: "#",
  },
  {
    id: 2,
    url: "/assets/img/banner2.webp",
    title: "JAС Финанс 3.0",
    href: "#",
  },
  {
    id: 3,
    url: "/assets/img/banner3.webp",
    title: "JAC K7",
    href: "#",
  },
  {
    id: 4,
    url: "/assets/img/banner4.webp",
    title: "JAC N200X",
    href: "#",
  },
  {
    id: 5,
    url: "/assets/img/banner5.webp",
    title: "JAC N120X",
    href: "#",
  },
  {
    id: 6,
    url: "/assets/img/banner6.webp",
    title: "JAC N90X",
    href: "#",
  },
  {
    id: 7,
    url: "/assets/img/banner7.webp",
    title: "JAC N90",
    href: "#",
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <section className="mx-auto w-full">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="shrink-0 w-full relative aspect-[2.25/1]"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  priority={item.id === 1}
                  className="object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </Link>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label="Предыдущий слайд"
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 cursor-pointer
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            type="button"
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            aria-label="Следующий слайд"
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 cursor-pointer
              ${
                index === items.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Перейти к слайду ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
