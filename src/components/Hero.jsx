import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-gray-700">
              Hello, I&apos;m{"  "}
            </span>
            Roope Forstén
          </h1>

          <p className="text-gray-200 text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Developer, UI/UX Designer, and Content Creator. This is
            my portfolio where I showcase my work and knowledge.
          </p>

          <a href="/Forsten_cv.pdf" download>
            <button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-gradient-to-br from-emerald-900 via-sky-800 to-gray-900 hover:bg-gray-800 text-white">
              Download CV
            </button>
          </a>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            className="rounded-full bg-[#181818] relative overflow-hidden
                  w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[330px] lg:h-[330px]"
          >
            <Image
              src="/images/roope.png"
              alt="Roope"
              fill
              className="object-contain" // tai object-cover jos haluat täyttää ympyrän
              sizes="(min-width:1024px) 330px, (min-width:768px) 260px, 220px"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
