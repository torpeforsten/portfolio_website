"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
    id: 1,
    title: "SafeRoad – Moose Warning App",
    description:
      "React Native + Firebase app for real-time wildlife warnings and smart push notifications.",
    image: "/images/Projects/saferoad.png",
    tag: ["All", "Mobile"],
    href: "/saferoad", // sisäinen
  },
    {
    id: 2,
    title: "Photo & Videography",
    description: "Selected shoots, drone footage, reels and edits.",
    image: "/images/Projects/photovideo.png",
    tag: ["All", "Media"],
    href: "/photo-video", // sisäinen
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "This website is built using Next.js and Tailwind CSS.",
    image: "/images/Projects/portfolio.png",
    tag: ["All", "Web"],
    href: "https://github.com/torpeforsten/portfolio_website", // ulkoinen
  },
  {
    id: 4,
    title: "School Projects",
    description: "University coursework & team projects on my GitHub.",
    image: "/images/Projects/sp.png",
    tag: ["All", "Web"],
    href: "https://github.com/torpeforsten", // ulkoinen
  },
];

const Projects = () => {
  return (
    <section id="tech-media">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        Tech projects & Media work
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
        {projectsData.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            imgUrl={p.image}
            href={p.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
