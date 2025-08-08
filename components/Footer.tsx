'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png';

const districts = [
  'Innere Stadt',
  'Leopoldstadt',
  'Landstraße',
  'Wieden',
  'Margareten',
  'Mariahilf',
  'Neubau',
  'Josefstadt',
  'Alsergrund',
  'Favoriten',
  'Simmering',
  'Meidling',
  'Hietzing',
  'Penzing',
  'Rudolfsheim-Fünfhaus',
  'Ottakring',
  'Hernals',
  'Währing',
  'Döbling',
  'Brigittenau',
  'Floridsdorf',
  'Donaustadt',
  'Liesing',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#FF2725] via-[#ff7b78] to-white text-white px-6 pt-24 pb-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center px-2">
            <Image src={logo} alt="Wiew Logo" width={120} height={40} />
            <p className="mt-3 max-w-xs text-sm text-white/80 leading-relaxed">
              Immobilien neu gedacht – digital, lokal, transparent.
            </p>
          </div>
          {/* Middle Column */}
          <div className="px-2">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              <li>
                <a href="#" className="hover:underline">
                  Neubauprojekte
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kartensuche
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anbieter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="px-2">
            <h2 className="text-xl font-bold mb-4">Kontakt</h2>
            <ul className="space-y-0.5 text-sm leading-tight">
              <li>info@wiew.at</li>
              <li>+43 1 234 56 78</li>
              <li>Zimmermanngasse 8, 1090 Wien</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-2">Socials</h3>
              <ul className="space-y-1.5 text-sm leading-relaxed">
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 text-sm flex flex-wrap justify-between mt-10">
          <p>Copyright © 2025 Wiew. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Datenschutz
            </a>
            <a href="#" className="hover:underline">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
