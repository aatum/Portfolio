'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="hover:text-blue-400">Aatu Marttila</a>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="hover:text-blue-400">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-blue-400">About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="hover:text-blue-400">Projects</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-blue-400">Contact</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link href="/" legacyBehavior>
            <a
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-gray-600"
            >
              About
            </a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Projects
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 hover:bg-gray-600"
            >
              Contact
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
