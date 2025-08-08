'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Neubauprojekte', href: '#' },
  { name: 'Kartensuche', href: '#' },
  { name: 'Services', href: '/services' },
  { name: 'Anbieter', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Kontakt', href: '#' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/50 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        {/* Logo (fixed and properly sized) */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Wiew Logo"
            width={120}
            height={120}
            priority
            className="w-[80px] md:w-[100px] lg:w-[120px] h-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[#FF2725] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Language toggle */}
          <select
            defaultValue="de"
            className="text-sm text-gray-700 border-none bg-transparent focus:outline-none"
          >
            <option value="de">DE</option>
            <option value="en">EN</option>
          </select>

          <button className="rounded-full bg-[#FF2725] text-white px-4 py-1.5 text-sm font-semibold hover:bg-[#cc1f1e] transition">
            Sign Up
          </button>
          <button className="rounded-full bg-gray-100 text-[#FF2725] px-4 py-1.5 text-sm font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </div>

        {/* Burger menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#FF2725] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <hr className="my-3" />
            {/* Language + CTAs */}
            <select
              defaultValue="de"
              className="text-sm text-gray-700 border border-gray-200 rounded px-2 py-1"
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
            </select>
            <button className="mt-2 rounded-full bg-[#FF2725] text-white px-4 py-1.5 text-sm font-semibold hover:bg-[#cc1f1e] transition">
              Sign Up
            </button>
            <button className="rounded-full bg-gray-100 text-[#FF2725] px-4 py-1.5 text-sm font-semibold hover:bg-gray-200 transition">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
