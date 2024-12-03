"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This website is built using React and Tailwind CSS.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/torpeforsten/portfolio_website",
  },
  {
    id: 2,
    title: "School Projects",
    description: "You can find my school projects in my GitHub.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/torpeforsten",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-3xl font-bold text-white mt-4 mb-8 md:mb-12">
        Dev Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
        {projectsData.map((project) =>             
        <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
        )}
              </div>
    </section>
  );
};

export default Projects;