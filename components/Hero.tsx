'use client';
import Link from 'next/link';
import Banner from './Banner';
import CityMap from './CityMap';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#f9f9f9]">
      <CityMap />

      <div className="absolute inset-0 flex flex-col justify-center pl-12 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="max-w-2xl bg-white bg-opacity-70 backdrop-blur-lg p-10 rounded-2xl shadow-xl transition-all duration-500 mb-6">
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 leading-snug tracking-tight text-gray-900">
              Deine neue <span className="text-[#FF2725]">Wohnung</span> ist
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-snug tracking-tight text-gray-900">
              nur ein paar Klicks entfernt.
            </h2>
            <p className="text-gray-700 mb-8 text-base md:text-[1.125rem] leading-relaxed">
              Mit <span className="text-[#FF2725] font-semibold">Wiew</span>{' '}
              entdeckst du aktuelle Neubauprojekte in Wien – intuitiv, visuell
              und schnell.
            </p>
            <Link href="/kartensuche">
              <span className="inline-flex items-center rounded-full border border-[#FF2725] bg-[#FF2725] px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#FF2725] transition cursor-pointer shadow-md">
                Jetzt Karte entdecken
              </span>
            </Link>
            <p className="text-xs text-gray-500 mt-2">
              Unsere interaktive Karte zeigt dir alle aktuellen Projekte in
              Wien.
            </p>
          </div>
          <div className="pointer-events-auto"></div>
        </div>
      </div>
    </section>
  );
}
