import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl?: string;
  href?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  href,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Kuva */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {href && (
            <Link
              href={href}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              aria-label="Open project page"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
          )}
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              aria-label="Open GitHub"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Alaosa: kiinteä korkeus -> kaikki kortit saman kokoisia */}
      <div className="text-white bg-[#181818] rounded-b-xl mt-3 py-6 px-4 h-40 flex flex-col">
        <h5 className="text-2xl font-semibold leading-tight mb-2">
          {title}
        </h5>

        {/* Kuvauksen rivitys + leikkaus jos liian pitkä */}
        <p className="text-[#ADB7BE] text-base leading-snug overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
