"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <span className="hidden sm:inline">Natural. Fluent. German. & LinguaThor</span>
          <span className="sm:hidden">German AI Academy</span>
        </Link>
        
        {/* Desktop Navigation (links intentionally removed) */}
        <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
          {/* intentionally left blank - top-right 'Academy' label removed */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg z-50" aria-label="Mobile navigation">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#ergebnisse"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ergebnisse
              </a>
              <a
                href="#live-calls"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live-Calls
              </a>
              <a
                href="#tandem-spaces"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tandem Spaces
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#coaches"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Coaches
              </a>
              <a
                href="#pricing"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Preise
              </a>
              <a
                href="#faq"
                className="block py-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
