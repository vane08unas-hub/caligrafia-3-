/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Gift } from "lucide-react";

// Import bonus images matching assets
import imgBonus1 from "../assets/images/bonus_primer_alfabeto_1783880912937.webp";
import imgBonus2 from "../assets/images/bonus_casita_caligrafia_1783880902035.webp";
import imgBonus3 from "../assets/images/bonus_collage_alfabeto_1783880890720.webp";

export default function BonusesSection() {
  const handleScrollToOferta = () => {
    const el = document.getElementById("oferta-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* BONUS PART 1: Bono Imprenta */}
      <section className="py-14 bg-amber-50/30 border-t border-b border-amber-100/50 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Side: Copy */}
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-amber-200">
              <Gift className="h-3 w-3 text-amber-600" />
              Bono de regalo #1
            </div>

            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
              No solo cursiva... <br />
              ¡Que domine todos los estilos!
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Además de la letra cursiva ligada, es vital que tu hijo aprenda a escribir en letra de imprenta (letra de molde o script) de forma clara, simétrica y fluida para sus tareas cotidianas.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                  Acceso al Kit de Caligrafía Letra Imprenta completo
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                  Más de 350 actividades de trazo recto y circular
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                  Ideal para reforzar la legibilidad en proyectos escolares
                </span>
              </li>
            </ul>

            <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold p-4 rounded-xl leading-relaxed">
              ⭐ ¡GRATIS SI COMPRAS HOY! Este kit se añadirá automáticamente a tu área de descarga sin costo adicional.
            </div>
          </div>

          {/* Right Side: Image representation */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] bg-white rounded-3xl p-4 shadow-md border border-slate-100">
              <img
                src={imgBonus1}
                alt="Kit de Caligrafía en Imprenta"
                className="w-full h-auto rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
                width="280"
                height="350"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-[#FF0055] text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm">
                GRATIS HOY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS PART 2: ¡Espera, aún hay más! 5 regalos exclusivos */}
      <section className="py-14 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Headers */}
          <div className="text-center mb-10">
            <span className="text-[#FF0055] font-extrabold text-sm uppercase tracking-wider block mb-1">
              ¡ESPERA, AÚN HAY MÁS!
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900">
              5 regalos exclusivos
            </h2>
          </div>

          {/* Main Guía Maestra Bonus Box */}
          <div className="bg-yellow-50/50 border border-yellow-100/80 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto mb-10 flex flex-col md:flex-row gap-6 items-center">
            {/* Left Column: Cover placeholder icon or book */}
            <div className="w-full max-w-[150px] aspect-[3/4] bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 flex flex-col justify-between text-white shadow-md border border-white">
              <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                <Gift className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider block opacity-75">Guía Maestra</span>
                <h4 className="font-sans font-black text-xs leading-tight">Por Dónde Empezar</h4>
              </div>
            </div>

            {/* Right Column: Copy & Checklist */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <span className="bg-[#FF0055] text-white font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                Regalo Especial #2
              </span>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800">
                Guía Maestra: "Por Dónde Empezar Según el Nivel de Tu Hijo"
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                No te pierdas en el material. Te diremos con exactitud:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md">
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 stroke-[3]" />
                  <span>Qué módulo abrir</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 stroke-[3]" />
                  <span>Qué páginas usar</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700 text-xs font-semibold col-span-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 stroke-[3]" />
                  <span>En qué orden progresar de forma sencilla</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleScrollToOferta}
                  className="w-full sm:w-auto bg-[#FFB703] hover:bg-[#FFA200] text-slate-900 font-sans font-black text-xs py-3 px-6 rounded-xl cursor-pointer shadow-sm transition-all uppercase tracking-wider"
                >
                  ¡LO QUIERO TODO!
                </button>
              </div>
            </div>
          </div>

          {/* 4 Small Bonus Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Card 1 */}
            <div className="p-4 border border-slate-100 rounded-2xl flex gap-4 bg-slate-50 items-center">
              <img
                src={imgBonus3}
                alt="Collage del alfabeto"
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] text-[#FF0055] font-black uppercase tracking-wider block">Bono #3</span>
                <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">Collage del alfabeto</h4>
                <span className="text-[10px] text-[#00A86B] font-extrabold uppercase">GRATIS HOY</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 border border-slate-100 rounded-2xl flex gap-4 bg-slate-50 items-center">
              <img
                src={imgBonus1}
                alt="Mi primer diccionario"
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] text-[#FF0055] font-black uppercase tracking-wider block">Bono #4</span>
                <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">Mi primer diccionario ilustrado</h4>
                <span className="text-[10px] text-[#00A86B] font-extrabold uppercase">GRATIS HOY</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 border border-slate-100 rounded-2xl flex gap-4 bg-slate-50 items-center">
              <img
                src={imgBonus1}
                alt="Mi primer alfabeto"
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] text-[#FF0055] font-black uppercase tracking-wider block">Bono #5</span>
                <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">Mi primer alfabeto (Actividades extra)</h4>
                <span className="text-[10px] text-[#00A86B] font-extrabold uppercase">GRATIS HOY</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4 border border-slate-100 rounded-2xl flex gap-4 bg-slate-50 items-center">
              <img
                src={imgBonus2}
                alt="La casita de caligrafía"
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-xs border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] text-[#FF0055] font-black uppercase tracking-wider block">Bono #6</span>
                <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">La casita de caligrafía</h4>
                <span className="text-[10px] text-[#00A86B] font-extrabold uppercase">GRATIS HOY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
