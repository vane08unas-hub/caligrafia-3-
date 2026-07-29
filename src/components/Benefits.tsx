/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import imgNotebookReal from "../assets/images/worksheet_grid_1783180618002.webp";

export default function Benefits() {
  const metrics = [
    {
      title: "Legibilidad de la letra",
      desc: "Trazos claros y definidos que todos pueden leer.",
      before: 25,
      after: 90,
      improvement: "70% de mejora",
    },
    {
      title: "Velocidad de escritura",
      desc: "Escribe con más fluidez sin cansarse.",
      before: 55,
      after: 85,
      improvement: "30% de mejora",
    },
    {
      title: "Concentración en la tarea",
      desc: "Logra terminar sus deberes con calma y foco.",
      before: 25,
      after: 80,
      improvement: "55% de mejora",
    },
    {
      title: "Seguridad y autoestima",
      desc: "Se siente orgulloso de mostrar sus cuadernos.",
      before: 30,
      after: 95,
      improvement: "65% de mejora",
    }
  ];

  const idealFor = [
    "Niños de 1° a 6° grado",
    "Niños con letra ilegible o desordenada",
    "Padres que quieren apoyar y desarrollo motor en casa",
    "Docentes que buscan material de refuerzo de calidad"
  ];

  const notIdealFor = [
    "Padres que buscan juegos de tablet únicamente",
    "Niños que ya dominan la caligrafía artística profesional"
  ];

  return (
    <section className="py-14 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        {/* SECTION 1: Resultados visibles */}
        <div className="text-center mb-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight mb-2">
            Resultados visibles en la caligrafía de tu hijo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Transforma el esfuerzo en una habilidad que le servirá toda la vida.
          </p>
        </div>

        {/* Big Real Notebook Image Preview */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 max-w-2xl mx-auto mb-10 bg-slate-50">
          <img
            src={imgNotebookReal}
            alt="Resultados visibles de caligrafía"
            className="w-full h-auto object-cover max-h-[380px]"
            loading="lazy"
            decoding="async"
            width="672"
            height="380"
            referrerPolicy="no-referrer"
          />
          {/* Badge overlays */}
          <div className="absolute bottom-4 left-4 bg-[#FF0055] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider">
            Material en Español
          </div>
        </div>

        {/* 4 Metrics Comparison Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {metrics.map((metric, i) => (
            <div key={i} className="p-5 border border-slate-100 rounded-2xl shadow-xs bg-[#FFFDFB]">
              <h3 className="font-sans font-bold text-slate-800 text-sm sm:text-base mb-1">
                {metric.title}
              </h3>
              <p className="text-slate-500 text-xs mb-4">
                {metric.desc}
              </p>

              {/* Progress bars */}
              <div className="space-y-2 mb-3">
                {/* Before */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-0.5">
                    <span>Antes del Kit</span>
                    <span>{metric.before}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-300 rounded-full" 
                      style={{ width: `${metric.before}%` }}
                    />
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-[#FF0055] mb-0.5">
                    <span>Después del Kit</span>
                    <span>{metric.after}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-rose-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#FF0055] rounded-full" 
                      style={{ width: `${metric.after}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Improvement tag */}
              <div className="text-right text-xs font-extrabold text-[#00A86B]">
                ➔ +{metric.improvement}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: ¿Este kit es para tu hijo? */}
        <div className="border-t border-slate-100 pt-14 text-center max-w-3xl mx-auto">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mb-10">
            ¿Este kit es para tu hijo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Es ideal para */}
            <div className="bg-emerald-50/40 border border-emerald-100/80 rounded-3xl p-6 sm:p-8">
              <h3 className="font-sans font-extrabold text-[#00A86B] text-base sm:text-lg mb-6 flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
                Es ideal para
              </h3>
              <ul className="space-y-4">
                {idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#00A86B] shrink-0 mt-0.5 stroke-[3]" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* No es ideal para */}
            <div className="bg-red-50/40 border border-red-100/80 rounded-3xl p-6 sm:p-8">
              <h3 className="font-sans font-extrabold text-red-500 text-base sm:text-lg mb-6 flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">✗</span>
                No es ideal para
              </h3>
              <ul className="space-y-4">
                {notIdealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5 stroke-[3]" />
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
