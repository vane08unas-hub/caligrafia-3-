/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function SolutionSection() {
  const points = [
    "Trazos fonéticos y visuales",
    "Niveles de dificultad gradual",
    "Fomenta el amor por la escritura",
    "Material digital listo para imprimir"
  ];

  return (
    <section className="py-14 md:py-18 bg-[#FEFDF6] px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-snug tracking-tight mb-4"
        >
          Un método probado que transforma trazos en arte
        </motion.h2>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Nuestro Kit de Caligrafía utiliza un enfoque progresivo: desde la coordinación básica hasta la producción de frases completas, asegurando un avance real y duradero.
        </motion.p>

        {/* Inner Question and Checkbox Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-amber-100 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-sm"
        >
          <h3 className="font-sans font-extrabold text-slate-800 text-base sm:text-lg mb-6 tracking-tight">
            ¿Por qué es diferente a otros cuadernos?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shrink-0">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-slate-700 font-medium text-xs sm:text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
