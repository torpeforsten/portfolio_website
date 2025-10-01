"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { href: "/#about", title: "About me" },
  { href: "/#tech-media", title: "Tech & Media" },
  { href: "/saferoad", title: "SafeRoad" },
  { href: "/photo-video", title: "Photo & Videography" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // sulje mobiilivalikko kun klikataan linkkiä
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#03110f] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href="/" className="text-2xl md:text-4xl font-semibold text-white">
          Forstén
        </Link>

        {/* Burger vain mobiililla */}
        <div className="block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Desktop-menu aina näkyvissä (ei burgeria) */}
        <div className="hidden md:block">
          <ul className="flex p-0 md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile overlay (käyttää samoja linkkejä) */}
      {isOpen ? (
        <MenuOverlay
          links={navLinks.map((l) => ({
            ...l,
            // Varmistetaan että overlayn linkin klikkaus sulkee menun
            onClick: handleNavClick,
          }))}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
