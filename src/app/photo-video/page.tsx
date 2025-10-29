import Image from "next/image";
import Link from "next/link";
import IgWidget from "../../components/IGWidget";
import ReelsGrid from "../../components/ReelsGrid";

export const metadata = {
  title: "Photo & Videography",
  description: "Selected photography and drone videography work.",
};

export default function PhotoVideoPage() {
  // 9:16 videos (Reels)
const mediaBase = "/images/photos%26video";

const reels916 = [
  { src: `${mediaBase}/v1.mov`, poster: `${mediaBase}/v1.jpg` },
  { src: `${mediaBase}/v2.mp4`, poster: `${mediaBase}/v2.jpg` },
  { src: `${mediaBase}/v3.mp4`, poster: `${mediaBase}/v3.jpg` },
];

const landscapes169 = [
  `${mediaBase}/w1.jpg`,
  `${mediaBase}/w2.jpg`,
  `${mediaBase}/w3.jpg`,
  `${mediaBase}/w4.jpg`,
  `${mediaBase}/w5.jpg`,
  `${mediaBase}/w6.jpg`,
];

const portraits45 = [
  `${mediaBase}/p1.jpg`,
  `${mediaBase}/p2.jpg`,
  `${mediaBase}/p3.jpg`,
  `${mediaBase}/p4.jpg`,
  `${mediaBase}/p5.jpg`,
  `${mediaBase}/p6.jpg`,
  `${mediaBase}/p7.jpg`,
  `${mediaBase}/p8.jpg`,
  `${mediaBase}/p9.jpg`,
];

  return (
    <main className="text-white px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-12 pb-14 max-w-6xl mx-auto">
      {/* IG Widget Section */}
      <section className="mb-10 sm:mb-12 md:mb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Photo & Videography
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          A collection of selected photography and drone videography — from
          cinematic aerial shots to natural portraits. All captured and edited
          by me.
        </p>

        <h2 className="text-2xl font-bold mb-3 sm:mb-4">
          Latest from Instagram
        </h2>

        <IgWidget widgetId="cc9fe4cb06b254c8874b5446fa4a7a12" height={600} />

        <div className="flex justify-center mt-4 sm:mt-6">
          <Link
            href="https://www.instagram.com/forstenroope/"
            target="_blank"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }}
          >
            Follow me on Instagram
          </Link>
        </div>
      </section>

      <ReelsGrid
        reels={[
          {
            src: "/images/photos&video/v1.mov",
            poster: "/images/photos&video/v1.jpg",
          },
          {
            src: "/images/photos&video/v2.mp4",
            poster: "/images/photos&video/v2.jpg",
          },
          {
            src: "/images/photos&video/v3.mp4",
            poster: "/images/photos&video/v3.jpg",
          },
        ]}
      />

      {/* 2) Landscapes / 16:9 grid */}
      <section className="mb-10 sm:mb-12">
        <div className="flex items-baseline justify-between mb-3 sm:mb-4">
          <h2 className="text-2xl font-bold">Landscapes</h2>
          <span className="text-sm text-gray-400">16:9 photography</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {landscapes169.map((src) => (
            <figure
              key={src}
              className="relative rounded-xl overflow-hidden bg-[#111]"
            >
              <Image
                src={src}
                alt="Landscape"
                width={1920}
                height={1080}
                className="w-full h-full object-cover aspect-[16/9]"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* 3) Portraits / 4:5 masonry */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-3 sm:mb-4">
          <h2 className="text-2xl font-bold">Portraits</h2>
          <span className="text-sm text-gray-400">4:5 photography</span>
        </div>

        {/* Masonry layout, forcing consistent aspect ratio */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 md:gap-6 [column-fill:_balance]">
          {portraits45.map((src) => (
            <figure
              key={src}
              className="mb-4 sm:mb-5 md:mb-6 break-inside-avoid rounded-xl overflow-hidden bg-[#111]"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={src}
                  alt="Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
