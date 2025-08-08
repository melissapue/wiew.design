'use client';
import { Compass, Sofa, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Services Intro Section */}
      <section className="max-w-7xl mx-auto mb-12 flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2">
          <h2 className="text-sm tracking-widest text-[#FF2725] mb-2">
            SERVICES
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Was <span className="text-[#FF2725]">WIEW</span> bietet
          </h1>
        </div>
        <div className="lg:w-1/2">
          <p className="text-lg text-gray-800 leading-relaxed">
            Wir schaffen durchdachte, moderne Immobilienvermarktung, die deine
            Vision verkörpert — egal ob du gerade erst beginnst oder dein
            bestehendes Projekt auf das nächste Level heben willst.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF5F5] border-[#FFCCCC] border rounded-md p-6 mb-12 text-sm text-gray-800">
        <h2 className="font-semibold text-base text-[#FF2725] mb-2">
          Hinweis zur Testphase
        </h2>
        <p className="mb-2">
          WIEW befindet sich aktuell in der offenen Testphase. Während dieser
          Zeit ist die Nutzung der Plattform komplett kostenlos – es fallen
          keine Gebühren an, und wir erzielen keinen Umsatz.
        </p>
        <p>
          Die untenstehenden Preise gelten erst mit dem offiziellen Launch
          (voraussichtlich in den nächsten Monaten). Was jedoch immer kostenlos
          bleibt: <strong>das Basis-Inserat.</strong> Damit verfolgen wir unser
          Ziel, die größte und aktuellste Datenbank für Neubauprojekte in ganz
          Österreich aufzubauen.
        </p>
      </section>

      <section className="space-y-8">
        {/* All pricing cards in a single flex row */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 w-full">
          {[
            {
              title: 'FREE',
              price: '0€',
              desc: 'Für Einsteiger mit Basisbedarf',
              features: [
                'Unbegrenzte Projekte & Bilder',
                'Darstellung in Listen- und Kartensuche',
                'Lead-Weiterleitung per E-Mail',
              ],
            },
            {
              title: 'STARTER',
              price: '89€ / Monat',
              desc: 'Für den professionellen Einstieg',
              features: [
                'Alles aus FREE plus:',
                'PDF-Exposé zum Download',
                'Basis-Analytics (Aufrufe, Leads)',
                'Link zur Bauträger-Website',
                'Top-Platzierung 2 Tage/Monat',
              ],
            },
            {
              title: 'PRO',
              price: '249€ / Monat',
              desc: 'Für fortgeschrittene Nutzer',
              features: [
                'Alles aus STARTER plus:',
                '3D-Tour für bis zu 5 Wohnungstypen',
                'Schnittstelle zu Makler-/Bauträger-Software',
                'Top-Platzierung 1 Woche/Monat',
              ],
            },
            {
              title: 'PREMIUM',
              price: '499€ / Monat',
              desc: 'Für höchste Ansprüche',
              features: [
                'Alles aus PRO plus:',
                '1 MusterWohnung (möbliert, fotorealistisch)',
                'KI-Innenarchitektin inkl. 1000 Tokens/Monat',
                'Top-Platzierung 2 Wochen/Monat',
              ],
            },
            {
              title: 'PERFORMANCE',
              price: '599€ / Monat',
              desc: '+ Media-Budget',
              features: [
                'Alles aus PREMIUM plus:',
                'Dauerhafte Top-Platzierung',
                'Managed Ads (Google & Meta)',
                'Telefon-Lead-Boost: mind. 2 Outbound-Calls/Monat',
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border rounded-xl shadow-md p-6 w-full max-w-xs transform transition-transform duration-300 hover:scale-105 ${
                plan.title === 'PERFORMANCE'
                  ? 'bg-[#FF2725] text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold tracking-tight ${
                    plan.title !== 'PERFORMANCE' ? 'text-[#FF2725]' : ''
                  }`}
                >
                  {plan.title}
                </h3>
                <p className="text-4xl font-extrabold mt-2">
                  {plan.price.split('/')[0]}
                  {plan.price.includes('/') && (
                    <span className="text-base font-medium">
                      {' '}
                      /{plan.price.split('/')[1]}
                    </span>
                  )}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    plan.title === 'PERFORMANCE'
                      ? 'text-white/80'
                      : 'text-gray-500'
                  }`}
                >
                  {plan.desc}
                </p>
                {plan.features.length > 0 &&
                plan.features[0].startsWith('Alles aus') ? (
                  <>
                    <p className="mt-4 text-sm">{plan.features[0]}</p>
                    <ul
                      className={`mt-2 space-y-2 text-sm text-left list-disc list-inside leading-relaxed ${
                        plan.title === 'PERFORMANCE'
                          ? 'marker:text-white'
                          : 'marker:text-[#FF2725]'
                      }`}
                    >
                      {plan.features.slice(1).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <ul
                    className={`mt-4 space-y-2 text-sm text-left list-disc list-inside leading-relaxed ${
                      plan.title === 'PERFORMANCE'
                        ? 'marker:text-white'
                        : 'marker:text-[#FF2725]'
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className={`mt-6 text-sm font-semibold py-2 px-4 rounded transition duration-200 ${
                  plan.title === 'PERFORMANCE'
                    ? 'bg-white text-[#FF2725] hover:bg-gray-100'
                    : 'bg-[#FF2725] text-white hover:bg-[#e21e1c]'
                }`}
              >
                Jetzt starten
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Optionale Add-ons Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-1">
          Flexible <span className="text-[#FF2725]">Add-ons</span>
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Ab dem STARTER-Paket zubuchbar – je nach Bedarf.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-black mb-1">
                3D Add-on
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Für Varianten mit mehreren Wohnungstypen</li>
                <li>Fotorealistische 3D-Visualisierung</li>
              </ul>
            </div>
            <div className="flex justify-between items-end mt-4">
              <span className="text-sm text-gray-500">
                39€/Monat je Einheit
              </span>
            </div>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-black mb-1">
                KI Boost
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Zusätzliche Tokens für KI-Innenarchitektin</li>
                <li>Mehr kreative Optionen</li>
              </ul>
            </div>
            <div className="flex justify-between items-end mt-4">
              <span className="text-sm text-gray-500">49€/Monat</span>
            </div>
          </div>
          <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg text-black mb-1">
                Hero-Slot
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Präsenz auf der Startseite</li>
                <li>Exklusiv & besonders sichtbar</li>
              </ul>
            </div>
            <div className="flex justify-between items-end mt-4">
              <span className="text-sm text-gray-500">99€/Woche</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECH EXTRAS SECTION */}
      <section className="mt-20 px-4 py-16 pink-section rounded-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h2 className="text-sm tracking-widest text-[#FF2725] mb-2">
              TECH HIGHLIGHTS
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Smarte <span className="text-[#FF2725]">Visualisierung</span>
            </h1>
          </div>
          <div>
            <p className="mt-0 text-gray-700 text-lg leading-relaxed">
              Innovative Tools für immersive Erlebnisse und smarte
              Visualisierungen – für alle, die mehr zeigen wollen als
              Grundrisse.
            </p>
          </div>
        </div>
        <section className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Musterwohnung */}
            <div className="border border-[#FFCCCC] rounded-lg p-6 bg-gradient-to-br from-[#FFF5F5] to-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <Sofa className="w-12 h-12 text-[#FF2725] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2 text-center">
                Musterwohnung
              </h3>
              <p className="text-sm text-[#222] leading-relaxed font-normal text-center">
                Eine noch nicht gebaute Einheit wird zum begehbaren 3D-Erlebnis
                – vollständig eingerichtet, fotorealistisch und direkt im
                Browser erlebbar.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setExpanded(0)}
                  className="bg-[#FF2725] text-white text-sm px-4 py-2 rounded hover:bg-[#e21e1c] transition"
                >
                  Vorschau öffnen
                </button>
                {expanded === 0 && (
                  <div className="relative mt-4 bg-gray-100 h-64 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 text-sm italic">
                      Bildvorschau groß
                    </span>
                    <button
                      onClick={() => setExpanded(null)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-black transition"
                    >
                      ↓ Vorschau schließen
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 3D Tour */}
            <div className="border border-[#FFCCCC] rounded-lg p-6 bg-gradient-to-br from-[#FFF5F5] to-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <Compass className="w-12 h-12 text-[#FF2725] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2 text-center">
                3D Tour
              </h3>
              <p className="text-sm text-[#222] leading-relaxed font-normal text-center">
                Ein digitaler Zwilling – puristisch und maßgetreu. Fokus auf
                Raumgefühl, Laufwege und Stellflächen, ganz ohne Möbel.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setExpanded(1)}
                  className="bg-[#FF2725] text-white text-sm px-4 py-2 rounded hover:bg-[#e21e1c] transition"
                >
                  Vorschau öffnen
                </button>
                {expanded === 1 && (
                  <div className="relative mt-4 bg-gray-100 h-64 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 text-sm italic">
                      Bildvorschau groß
                    </span>
                    <button
                      onClick={() => setExpanded(null)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-black transition"
                    >
                      ↓ Vorschau schließen
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* KI-Innenarchitektin */}
            <div className="border border-[#FFCCCC] rounded-lg p-6 bg-gradient-to-br from-[#FFF5F5] to-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <Sparkles className="w-12 h-12 text-[#FF2725] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2 text-center">
                KI-Innenarchitektin
              </h3>
              <p className="text-sm text-[#222] leading-relaxed font-normal text-center">
                Automatisiertes Interior-Styling basierend auf Stilwahl – mit
                Echtzeit-Renderings für individuelle Einrichtungsideen.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setExpanded(2)}
                  className="bg-[#FF2725] text-white text-sm px-4 py-2 rounded hover:bg-[#e21e1c] transition"
                >
                  Vorschau öffnen
                </button>
                {expanded === 2 && (
                  <div className="relative mt-4 bg-gray-100 h-64 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 text-sm italic">
                      Bildvorschau groß
                    </span>
                    <button
                      onClick={() => setExpanded(null)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-black transition"
                    >
                      ↓ Vorschau schließen
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
