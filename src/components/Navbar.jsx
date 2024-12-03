"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './Navlink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { href: '#about', title: 'About me' },
    { href: '#projects', title: 'Dev Projects' },
    { href: '#photo-and-video', title: 'Photo and Videography' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#03110f] bg-opacity-100'>
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link href={"/"} className='text-2xl md:text-4xl font-semibold text-white'>Forstén</Link>

                <div className="mobile-menu block md:hidden">
                    {!isOpen ? (
                        <button
                            onClick={() => setIsOpen(true)}
                            className='text-slate-200 flex items-center px-3 py-2 border rouded border-slate-200 hover:text-white hover:border:white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsOpen(false)}
                            className='text-slate-200 flex items-center px-3 py-2 border rouded border-slate-200 hover:text-white hover:border:white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>
                <div className="menu hidden">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar