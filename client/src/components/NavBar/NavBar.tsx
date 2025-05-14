'use client';

import { useState } from 'react';
import Image from 'next/image';
import { NavLeft, NavRight } from './NavItem';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left Nav Bar */}
                <NavLeft />

                {/* Right/Desktop Nav Bar */}
                <div className="hidden md:flex space-x-8">
                    <NavRight href="/" text="HOME" />
                    <NavRight href="/about" text="ABOUT" />
                    <NavRight href="/research" text="RESEARCH" />
                    <NavRight href="/contact" text="CONTACT" />
                    <NavRight href="/imagery" text="IMAGERY" />
                    <NavRight href="/members" text="MEMBERS" />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-800 hover:text-red-700 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pt-4 border-t border-gray-300">
                    <div className="flex flex-col space-y-4 px-4">
                        <NavRight href="/" text="HOME" />
                        <NavRight href="/about" text="ABOUT" />
                        <NavRight href="/research" text="RESEARCH" />
                        <NavRight href="/contact" text="CONTACT" />
                        <NavRight href="/imagery" text="IMAGERY" />
                        <NavRight href="/members" text="MEMBERS" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
