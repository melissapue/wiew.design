'use client';

import React from 'react';

const DISTRICTS = [
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

export default function Banner() {
  return (
    <div className="w-full bg-white/10 border-t border-b border-gray-200 py-2 overflow-hidden backdrop-blur">
      <h2 className="text-left text-base font-semibold text-sm text-[#FF2725] mb-2 pl-4">
        Auch in deinem Traumbezirk
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex gap-8 whitespace-nowrap px-4">
          {DISTRICTS.map((name, index) => (
            <span
              key={index}
              className="text-sm text-black font-medium flex-shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
