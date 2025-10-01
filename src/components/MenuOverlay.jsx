"use client";
import Link from "next/link";
import NavLink from "./Navlink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center space-y-6 bg-[#03110f]">
      {links.map((link, index) => (
        <li key={index}>
          {link.type === "anchor" ? (
            <NavLink href={link.href} title={link.title} />
          ) : (
            <Link
              href={link.href}
              className="block text-slate-200 hover:text-white"
            >
              {link.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
