'use client';
import { useState } from 'react';

interface BuildingData {
  id: string;
  label: string;
  path: string;
}

const buildings: BuildingData[] = [
  { id: 'b1', label: 'Projekt 1', path: 'M10,10 L40,10 L40,40 L10,40 Z' },
  { id: 'b2', label: 'Projekt 2', path: 'M50,10 L80,10 L80,30 L50,30 Z' },
  { id: 'b3', label: 'Projekt 3', path: 'M90,10 L120,10 L120,50 L90,50 Z' },
  { id: 'b4', label: 'Projekt 4', path: 'M130,10 L170,10 L170,40 L130,40 Z' },
  { id: 'b5', label: 'Projekt 5', path: 'M10,50 L30,50 L30,90 L10,90 Z' },
  { id: 'b6', label: 'Projekt 6', path: 'M40,60 L70,60 L70,100 L40,100 Z' },
  { id: 'b7', label: 'Projekt 7', path: 'M80,70 L110,70 L110,110 L80,110 Z' },
  { id: 'b8', label: 'Projekt 8', path: 'M120,60 L160,60 L160,90 L120,90 Z' },
  { id: 'b9', label: 'Projekt 9', path: 'M20,110 L50,110 L50,140 L20,140 Z' },
  { id: 'b10', label: 'Projekt 10', path: 'M60,120 L90,120 L90,160 L60,160 Z' },
  {
    id: 'b11',
    label: 'Projekt 11',
    path: 'M100,130 L130,130 L130,170 L100,170 Z',
  },
  {
    id: 'b12',
    label: 'Projekt 12',
    path: 'M140,110 L170,110 L170,150 L140,150 Z',
  },
  { id: 'b13', label: 'Projekt 13', path: 'M10,150 L40,150 L40,190 L10,190 Z' },
  { id: 'b14', label: 'Projekt 14', path: 'M50,170 L80,170 L80,190 L50,190 Z' },
  {
    id: 'b15',
    label: 'Projekt 15',
    path: 'M90,170 L120,170 L120,190 L90,190 Z',
  },
  {
    id: 'b16',
    label: 'Projekt 16',
    path: 'M130,160 L160,160 L160,190 L130,190 Z',
  },
  { id: 'b17', label: 'Projekt 17', path: 'M10,100 L20,100 L20,110 L10,110 Z' },
  { id: 'b18', label: 'Projekt 18', path: 'M30,100 L40,100 L40,110 L30,110 Z' },
  {
    id: 'b19',
    label: 'Projekt 19',
    path: 'M150,150 L160,150 L160,160 L150,160 Z',
  },
  {
    id: 'b20',
    label: 'Projekt 20',
    path: 'M170,150 L180,150 L180,160 L170,160 Z',
  },
  { id: 'b21', label: 'Projekt 21', path: 'M160,40 L170,40 L170,50 L160,50 Z' },
  { id: 'b22', label: 'Projekt 22', path: 'M110,30 L120,30 L120,40 L110,40 Z' },
  { id: 'b23', label: 'Projekt 23', path: 'M60,40 L70,40 L70,50 L60,50 Z' },
  { id: 'b24', label: 'Projekt 24', path: 'M20,30 L30,30 L30,40 L20,40 Z' },
];

export default function CityMap() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <rect width="200" height="200" fill="#ffffff" />

        {buildings.map((b) => (
          <path
            key={b.id}
            d={b.path}
            fill={hoverId === b.id ? '#ff6666' : '#f0f0f0'}
            stroke="#ddd"
            strokeWidth="1"
            className="transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.03]"
            onMouseEnter={() => setHoverId(b.id)}
            onMouseLeave={() => setHoverId(null)}
          />
        ))}
      </svg>
    </div>
  );
}
