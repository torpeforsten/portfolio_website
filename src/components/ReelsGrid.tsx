"use client";

import { useEffect, useState, useCallback } from "react";
import SmartPoster from "./SmartPoster";

export type Reel = { src: string; poster?: string };

type Props = {
  reels: Reel[];
  title?: string;
  subtitle?: string;
};

export default function ReelsGrid({ reels, title = "Reels", subtitle = "9:16 video format" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i == null ? i : (i - 1 + reels.length) % reels.length)), [reels.length]);
  const next = useCallback(() => setOpenIndex((i) => (i == null ? i : (i + 1) % reels.length)), [reels.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex == null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, prev, next]);

  useEffect(() => {
    if (openIndex == null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [openIndex]);

  return (
    <section className="mb-10 sm:mb-12">
      <div className="flex items-baseline justify-between mb-3 sm:mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-sm text-gray-400">{subtitle}</span>
      </div>

      {/* Grid of posters */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {reels.map((r, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Open reel ${i + 1}`}
          >
            <div className="relative w-full aspect-[9/16] bg-[#0b0b0b]">
              <SmartPoster
                videoSrc={r.src}
                posterSrc={r.poster}
                alt={`Reel ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white/90 text-black grid place-items-center group-hover:scale-105 transition-transform">
                  ▶
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {openIndex != null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-[min(90vw,420px)] md:max-w-[min(80vw,520px)]" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-black">
              {/* Keep poster behind video to avoid black flash */}
              <SmartPoster
                videoSrc={reels[openIndex].src}
                posterSrc={reels[openIndex].poster}
                alt={`Reel ${openIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <video
                key={reels[openIndex].src}
                className="absolute inset-0 w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
                autoPlay
              >
                <source src={reels[openIndex].src} type="video/mp4" />
              </video>
            </div>

            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white text-black shadow-lg"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Arrows (desktop) */}
            <button
              onClick={prev}
              className="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-black items-center justify-center"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-black items-center justify-center"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
