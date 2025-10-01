import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Photo & Videography",
  description: "Selected photography and drone videography work.",
};

export default function PhotoVideoPage() {
  const photos = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg"];

  return (
    <main className="text-white px-4 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-12 pb-12 max-w-6xl mx-auto">
      <header className="mb-6 sm:mb-7 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">Photo & Videography</h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-gray-300">
          Selected work from photography and drone videography. For more, check
          my socials or get in touch!
        </p>
      </header>

      {/* Instagram feed */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl font-bold mb-3 sm:mb-3.5 md:mb-4">
          Latest from Instagram
        </h2>

        {/* LightWidget script (pakollinen) */}
        <Script
          id="lightwidget-script"
          src="//cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="afterInteractive"
        />

        <div className="rounded-xl bg-[#111] p-2">
            <iframe
    src="//lightwidget.com/widgets/cc9fe4cb06b254c8874b5446fa4a7a12.html"
    scrolling="no"
    className="
      lightwidget-widget w-full border-0 overflow-hidden
      h-[340px] sm:h-[420px] md:h-[520px] lg:h-[600px]
    "
  />
        </div>

        {/* IG button */}
        <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
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

      {/* Oma galleria */}
      <section className="mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl font-bold mb-3 sm:mb-3.5 md:mb-4">Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {photos.map((f) => (
            <figure
              key={f}
              className="relative rounded-xl overflow-hidden bg-[#111]"
            >
              <Image
                src={`/images/photo-video/${f}`}
                alt={f}
                width={1000}
                height={1000}
                className="object-cover w-full h-full aspect-[4/3]"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
