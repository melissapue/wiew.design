'use client';

import React from 'react';

export default function Search() {
  const [showFilters, setShowFilters] = React.useState(false);
  return (
    <section className="w-full relative z-10 -mt-28 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-5 md:p-8 border border-gray-100">
        <h2 className="text-lg md:text-xl font-light text-gray-800 mb-5">
          Finde dein neues{' '}
          <span className="text-[#FF2725] font-semibold">Zuhause</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
          <select className="w-full p-3 rounded-lg border border-gray-200 bg-white/70 text-gray-700">
            <option>Bezirk</option>
          </select>

          <input
            type="text"
            placeholder="Wohnfläche ab, m²"
            className="w-full p-3 rounded-lg border border-gray-200 bg-white/70 text-gray-700"
          />

          <input
            type="text"
            placeholder="Preis bis, €"
            className="w-full p-3 rounded-lg border border-gray-200 bg-white/70 text-gray-700"
          />

          <button className="w-full p-3 rounded-lg bg-[#FF2725] text-white font-semibold hover:bg-white hover:text-[#FF2725] hover:border hover:border-[#FF2725] transition">
            Suchen
          </button>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
          <button
            className="underline hover:text-black transition"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Weniger Filter' : 'Mehr Filter'}
          </button>
        </div>
        {showFilters && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Preis
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ab, €"
                  className="w-full p-2 rounded border border-gray-200"
                />
                <input
                  type="text"
                  placeholder="Bis, €"
                  className="w-full p-2 rounded border border-gray-200"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Wohnfläche
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ab, m²"
                  className="w-full p-2 rounded border border-gray-200"
                />
                <input
                  type="text"
                  placeholder="Bis, m²"
                  className="w-full p-2 rounded border border-gray-200"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Zimmer
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['1', '2', '3', '4', '5', '6', '7', '8+'].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Status
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Abgeschlossen
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  In Entwicklung
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Objekttyp
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Dachgeschoss',
                  'Erdgeschoss',
                  'Haus',
                  'Loft / Studio',
                  'Penthouse',
                  'Duplex',
                ].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Details & Ausstattung
              </label>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Suchen"
                  className="col-span-2 p-3 rounded-lg border border-gray-200"
                />
                <button className="col-span-1 p-3 rounded-lg bg-[#FF2725] text-white font-semibold hover:bg-white hover:text-[#FF2725] hover:border hover:border-[#FF2725] transition">
                  Suchen
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2 text-[#FF2725]">
                Freiflächen
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['Balkon', 'Terrasse', 'Garten', 'Loggia'].map((label) => (
                  <label key={label} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {label}
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <button className="px-6 py-3 bg-[#FF2725] text-white rounded hover:bg-white hover:text-[#FF2725] hover:border hover:border-[#FF2725] transition">
                Suchen →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
