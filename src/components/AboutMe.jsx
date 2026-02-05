"use client";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {useTranslations} from "next-intl";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>JavaScript / React / Next.js / Tailwind CSS</li>
        <li>React Native (Expo, Firebase, geolocation, push notifications)</li>
        <li>C# / .NET (Blazor, Razor Pages, ASP.NET Web API, Entity Framework)</li>
        <li>Java (REST, Vaadin, Maven, Jetty, Android mobile apps)</li>
        <li>SQL: MySQL, SQLite, H2</li>
        <li>Firebase (Auth, Firestore, Cloud Functions, Cloud Messaging)</li>
        <li>Python (scripting, data handling basics)</li>
      </ul>
    ),
  },
  {
    title: "Tools and Technologies",
    id: "tools",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>Visual Studio Code, IntelliJ IDEA, Android Studio, Visual Studio</li>
        <li>MySQL Workbench</li>
        <li>Postman</li>
        <li>Git & GitHub (team collaboration, version control)</li>
        <li>Expo Application Services (EAS) for iOS builds</li>
        <li>Microsoft Azure (Blob Storage, IoT Hub)</li>
        <li>Figma (UI/UX design, prototyping)</li>
        <li>Lightroom & Adobe Creative Cloud (content creation)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>Licensed massage therapist (2019–2020)</li>
        <li>
          4th Year Bachelor of Engineering, Computer Science (Savonia University of Applied Sciences, 2022–2026)
        </li>
        <li>Studies include: mobile & web development, software engineering, databases, cloud technologies, and IoT</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-5 sm:pl-6 space-y-3">
        <li>
          <strong>Thesis – “Moose Warning System” (SafeRoad App)</strong> — React Native + Firebase app for driver safety: real-time wildlife sighting reports, geolocation, smart push notifications, hunting area overlays (2025)
        </li>
        <li>
          <strong>Aviste Oy</strong> — Full-stack Mobile & Web Development (04/2025–10/2025 internship)
        </li>
        <li>
          <strong>Team projects in school:</strong>
          <ul className="list-disc pl-6 sm:pl-8 space-y-2">
            <li><em>Lönnrot</em> (Next.js + Tailwind UI project)</li>
            <li>Raspberry Pi IoT dashboard (Flask + Azure IoT Hub)</li>
            <li>Vaadin app with Measurement & Person entities, Grid filters & security config</li>
          </ul>
        </li>
        <li>Vekomi Oy / Pumpulipoiju — Licensed massage therapist (2020–2022)</li>
        <li>Adobe softwares since 2016</li>
        <li>Photography since 2016 — Drone videography since 2024</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // --- min-height stabilointi tabien välillä ---
  const [minH, setMinH] = useState(0);
  const measureRefs = useRef({});
  const contentBoxRef = useRef(null);

  const handleTabChange = (next) => {
    startTransition(() => setTab(next));
  };

  useLayoutEffect(() => {
    const recalc = () => {
      let max = 0;
      Object.values(measureRefs.current).forEach((el) => {
        if (el) max = Math.max(max, el.offsetHeight);
      });
      setMinH(max + 16);
    };
    recalc();
  }, []);

  useEffect(() => {
    const r = new ResizeObserver(() => {
      let max = 0;
      Object.values(measureRefs.current).forEach((el) => {
        if (el) max = Math.max(max, el.offsetHeight);
      });
      setMinH(max + 16);
    });
    Object.values(measureRefs.current).forEach((el) => el && r.observe(el));
    if (contentBoxRef.current) r.observe(contentBoxRef.current);
    return () => r.disconnect();
  }, []);

  const activeContent = TAB_DATA.find((d) => d.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      {/* Sama konttileveys/padding kuin navissa → kaikki linjassa */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-8">
        {/* Mobiilissa 1-palsta, md:llä kuva+teksti 2-palstalle */}
        <div className="md:grid md:grid-cols-2 items-start gap-8 xl:gap-16 py-8 sm:py-12">
          {/* Kuva: mobiilissa keskellä, desktopissa sticky */}
          <div className="md:order-1 md:sticky md:top-24 md:self-start">
            <Image
              src="/images/drone.png"
              alt="drone_kuva"
              width={500}
              height={500}
              className="object-contain w-full h-auto max-h-[520px] mx-auto"
              priority
            />
          </div>

          {/* Teksti + tabit */}
          <div className="mt-6 md:mt-0 text-left flex flex-col h-full md:order-2">
            <h2 className="text-3xl font-bold text-white mb-4 text-center md:text-left">
              About Me
            </h2>

            {/* Tekstit → aina hieman kapeampi kuin tabirivi (prosenttipohjainen, responsiivinen) */}
            <div className="w-full max-w-[92%] sm:max-w-[94%] lg:max-w-[95%] mx-auto md:mx-0 space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                I am a soon to be graduate Computer Science student at Savonia University of Applied Sciences, currently completing my thesis in full-stack development. I am passionate about web and mobile development as well as UI/UX design.
              </p>
              <p>
                I have strong experience with JavaScript, TypeScript, React, Next.js, and React Native (Expo + Firebase). I have also worked with backend technologies such as C# / .NET (Blazor, Web API, Entity Framework) and Java (REST, Vaadin, Android) with working knowledge gained through coursework and projects. In addition, I am skilled in working with databases (Firebase, MySQL, SQLite, H2) and cloud services like Firebase and Microsoft Azure.
              </p>
              <p>
                My thesis project, the Moose Warning App (SafeRoad), combines geolocation, push notifications, and community-driven wildlife reporting to improve traffic safety. Through team projects and professional experience, I’ve also worked with IoT dashboards, REST APIs, and modern DevOps tools.
              </p>
              <p>
                Beyond my studies, I am passionate about content creation,
                photography, and drone videography, and I approach both technology
                and creativity with an entrepreneurial mindset. I am a team player
                who is always ready to learn, grow, and contribute to meaningful
                projects.
              </p>
            </div>

            {/* Tabit → kolumnin täysi leveys */}
            <div
              className="w-full flex flex-row justify-center md:justify-start mt-8 gap-4"
              role="tablist"
              aria-label="About tabs"
            >
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
              <TabButton selectTab={() => handleTabChange("tools")} active={tab === "tools"}>Tools</TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
              <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
            </div>

            {/* Tabin sisältö → sama “hieman kapeampi” leveys kuin About-teksteillä */}
            <div
              ref={contentBoxRef}
              className="mt-8 w-full max-w-[92%] sm:max-w-[94%] lg:max-w-[95%] mx-auto md:mx-0"
              style={{ minHeight: minH }}
            >
              {activeContent}
            </div>

            {/* Piilotettu mittaus samaa leveyttä vasten */}
            <div
              aria-hidden
              className="fixed -left-[9999px] top-0 pointer-events-none"
              style={{
                width: contentBoxRef.current
                  ? `${contentBoxRef.current.offsetWidth}px`
                  : undefined,
              }}
            >
              {TAB_DATA.map((d) => (
                <div
                  key={`measure-${d.id}`}
                  ref={(el) => (measureRefs.current[d.id] = el)}
                  className="space-y-3"
                >
                  {d.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;