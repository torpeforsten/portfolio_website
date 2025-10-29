"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  videoSrc: string;
  posterSrc?: string;
  alt?: string;
  className?: string;
};


export default function SmartPoster({ videoSrc, posterSrc, alt = "Reel poster", className }: Props) {
  const [imgSrc, setImgSrc] = useState<string | null>(posterSrc ?? null);
  const triedPoster = useRef<boolean>(false);

  useEffect(() => {
    if (!posterSrc) {
      extractFrame();
    }
  }, [videoSrc, posterSrc]);

  const onPosterError = () => {
    if (!triedPoster.current) {
      triedPoster.current = true;
      extractFrame();
    }
  };

  const extractFrame = () => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous";

    const onLoaded = () => {
     
      const target = Math.min(1, Math.max(0.1, (video.duration || 1) * 0.1));
      const onSeeked = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth || 1080;
          canvas.height = video.videoHeight || 1920;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            setImgSrc(dataUrl);
          }
        } catch {
         
        } finally {
          cleanup();
        }
      };
      video.currentTime = target;
      video.addEventListener("seeked", onSeeked, { once: true });
    };

    const cleanup = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    video.addEventListener("loadedmetadata", onLoaded, { once: true });
    video.addEventListener("error", cleanup, { once: true });

    document.body.appendChild(video);

    setTimeout(() => {
      try {
        document.body.removeChild(video);
      } catch {}
    }, 0);
  };


  return imgSrc ? (

    <img
      src={imgSrc}
      alt={alt}
      onError={onPosterError}
      className={className}
      draggable={false}
    />
  ) : (
    <div className={`grid place-items-center text-gray-400 ${className ?? ""}`}>
      No preview
    </div>
  );
}
