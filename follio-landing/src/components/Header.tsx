'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center shadow-sm bg-white text-follio-navy relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/only-logo.png" alt="Follio logo" className="h-8 w-8" />
        <span className="text-xl font-bold tracking-tight">Follio</span>
      </div>

      {/* Always-visible hamburger button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-follio-navy">
        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Dropdown menu */}
        {menuOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl w-56 text-sm z-50 overflow-hidden">
            <nav className="flex flex-col">
            <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 hover:bg-gray-50 text-follio-navy font-medium transition"
            >
                Home
            </Link>
            <Link
                href="/#features"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 hover:bg-gray-50 text-follio-navy font-medium transition"
            >
                Features
            </Link>
            <Link
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 hover:bg-gray-50 text-follio-navy font-medium transition"
            >
                About
            </Link>
            <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 hover:bg-gray-50 text-follio-navy font-medium transition"
            >
                Contact
            </Link>
            <Link
                href="/careers"
                onClick={() => setMenuOpen(false)}
                className="px-5 py-3 hover:bg-gray-50 text-follio-navy font-medium transition"
            >
                Careers
            </Link>
            </nav>
        </div>
        )}
    </header>
  );
}
