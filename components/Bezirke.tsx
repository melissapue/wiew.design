'use client';

import Image from 'next/image';
import Link from 'next/link';

const districts = [
  {
    name: 'Alsergrund',
    slug: 'alsergrund',
    image: 'alsergrund.png',
    count: 8,
  },
  {
    name: 'Brigittenau',
    slug: 'brigittenau',
    image: 'brigittenau.png',
    count: 5,
  },
  {
    name: 'Döbling',
    slug: 'doebling',
    image: 'doebling.png',
    count: 32,
  },
  {
    name: 'Donaustadt',
    slug: 'donaustadt',
    image: 'donaustadt.png',
    count: 63,
  },
  {
    name: 'Favoriten',
    slug: 'favoriten',
    image: 'favoriten.png',
    count: 23,
  },
  {
    name: 'Alle Bezirke',
    slug: 'alle',
    image: 'alle.png',
    count: 428,
  },
];

export default function Bezirke() {
  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Neubauprojekte in Wien
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {districts.map((district) => (
          <Link
            href={`/bezirke/${district.slug}`}
            key={district.name}
            className="group block hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-50 p-4 rounded-md shadow-md hover:shadow-xl text-center">
              <Image
                src={`/maps/${district.image}`}
                alt={`Karte von ${district.name}`}
                width={200}
                height={140}
                className="mx-auto mb-4"
              />
              <h3 className="text-base font-semibold text-gray-800 group-hover:text-red-600">
                {district.name}
              </h3>
              <p className="text-sm text-gray-600">
                {district.count} Neubauprojekte →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
