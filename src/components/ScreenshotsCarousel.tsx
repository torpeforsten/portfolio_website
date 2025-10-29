"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type Slide = {
  src: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
};

type Props = {
  slides: Slide[];
  className?: string;
};

export default function ScreenshotsCarousel({ slides, className }: Props) {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  // Tunnista mobiili/pointer:coarse
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const go = useCallback(
    (n: number) => setIdx((p) => (n + total) % total),
    [total]
  );
  const next = useCallback(() => go(idx + 1), [go, idx]);
  const prev = useCallback(() => go(idx - 1), [go, idx]);

  // Nuolinäppäimet desktopilla
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Swipe vain mobiilissa
  const touchHandlers = useMemo(() => {
    if (!isMobile) return {};
    return {
      onTouchStart: (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX;
      },
      onTouchMove: (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
      },
      onTouchEnd: () => {
        if (touchStartX.current == null || touchEndX.current == null) return;
        const delta = touchEndX.current - touchStartX.current;
        const threshold = 40;
        if (delta < -threshold) next();
        if (delta > threshold) prev();
        touchStartX.current = null;
        touchEndX.current = null;
      },
    } as const;
  }, [isMobile, next, prev]);

  if (!slides.length) return null;

  const active = slides[idx];
  const w = active.width ?? 1080;
  const h = active.height ?? 1920;

  return (
    <div
      className={`grid gap-6 md:grid-cols-2 items-start ${className ?? ""}`}
      role="region"
      aria-label="Screenshots carousel"
      {...touchHandlers}
    >
      {/* Vasen: tekstit */}
      <div className="flex flex-col justify-center gap-3">
        <div className="text-sm text-gray-400">
          {idx + 1} / {total}
        </div>
        <h3 className="text-2xl font-semibold">{active.title}</h3>
        <p className="text-gray-300">{active.description}</p>
      </div>

      {/* Oikea: kuva + overlay-nuolet (desktop) + indikaattorit kuvan alla */}
      <div className="flex flex-col items-center">
        <div className="relative w-full">
          <Image
            key={active.src}
            src={active.src}
            alt={active.title || "Screenshot"}
            width={w}
            height={h}
            className="
    w-full h-auto object-contain rounded-xl 
    max-h-[75vh] md:max-h-[500px] lg:max-h-[450px]
  "
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            priority={idx === 0}
          />

          {/* Desktop-nuolet kuvan päällä (piiloon mobiilissa) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
          >
            ›
          </button>
        </div>

        {/* Swipe-vihje: vain mobiilissa */}
        {isMobile && (
          <div className="mt-3 text-gray-400 text-sm select-none animate-pulse">
            ⇠ Swipe to navigate ⇢
          </div>
        )}

        {/* Dots: aina näkyvissä, kuvan alla keskellä */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
