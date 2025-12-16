"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // CHANGED: 'bg-emerald-950' gives that deep solid evergreen look. 
    // If you don't have that class, use style={{ backgroundColor: '#022c22' }}
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
            DJ Lights
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Contact
            </Link>
            {/* Book Button - Made Red to stand out against Green (Christmas colors) */}
            <Link
              href="/contact"
              className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none hover:text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          // Added bg-emerald-950 here too so the dropdown matches the bar
          <div className="md:hidden pb-4 bg-emerald-950">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="hover:text-amber-400 transition-colors block px-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="hover:text-amber-400 transition-colors block px-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="hover:text-amber-400 transition-colors block px-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-amber-400 transition-colors block px-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors text-center mx-2"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}