"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  ratio?: string;
};

export default function LightboxGallery({ images, ratio = "4/5" }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // Zoom handling
  const [scale, setScale] = useState(1);
  const lastTouch = useRef<{ x: number; y: number } | null>(null);

  // Swipe handling
  const touchStartX = useRef<number | null>(null);

  const next = () => {
    setScale(1);
    setIdx((p) => (p + 1) % images.length);
  };

  const prev = () => {
    setScale(1);
    setIdx((p) => (p - 1 + images.length) % images.length);
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
    } else if (e.touches.length === 2) {
      lastTouch.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // pinch zoom
    if (e.touches.length === 2) {
      const t1 = e.touches.item(0)!;
      const t2 = e.touches.item(1)!;

      const dist = Math.hypot(t1.pageX - t2.pageX, t1.pageY - t2.pageY);

      if (!lastTouch.current) {
        lastTouch.current = { x: dist, y: 0 };
      } else {
        const delta = dist - lastTouch.current.x;
        setScale((s) => Math.min(Math.max(s + delta * 0.005, 1), 3));
        lastTouch.current = { x: dist, y: 0 };
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (deltaX > 60) prev();
    else if (deltaX < -60) next();

    touchStartX.current = null;
  };

  const handleDoubleClick = () => {
    setScale((s) => (s > 1 ? 1 : 2));
  };

  return (
    <>
      {/* GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {images.map((src, i) => (
          <div
            key={src}
            className="mb-4 cursor-pointer"
            onClick={() => {
              setIdx(i);
              setOpen(true);
            }}
          >
            <div className={`relative w-full aspect-[${ratio}]`}>
              <Image
                src={src}
                alt=""
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-auto"
          onClick={() => {
            setOpen(false);
            setScale(1);
          }}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center overflow-hidden">
            <Image
              src={images[idx]}
              alt=""
              width={1600}
              height={2000}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.15s",
              }}
              className="rounded-xl object-contain mx-auto max-w-full max-h-screen"
            />

            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg z-50"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Desktop arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-black items-center justify-center shadow-lg z-50"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-black items-center justify-center shadow-lg z-50"
            >
              ›
            </button>

            {/* Mobile bottom dots */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 md:hidden">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === idx ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
