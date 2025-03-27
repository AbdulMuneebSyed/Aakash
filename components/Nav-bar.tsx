"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import logo from "@/public/Aakash-Associates-Logo-Image.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-around">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center justify-center">
            <div className="relative h-24 w-40">
              <Image
                src={logo}
                alt="Aakash Associates Logo"
                fill
                className="object-contain h-24 w-40"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between w-1/2 space-x-8">
          <Link
            href="/"
            className="text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/projects"
            className="text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            PROJECTS
          </Link>
          <Link
            href="/services"
            className="text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 font-medium hover:text-red-600 transition-colors"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-900 font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-900 font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/projects"
              className="text-gray-900 font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              href="/services"
              className="text-gray-900 font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 font-medium py-2 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
