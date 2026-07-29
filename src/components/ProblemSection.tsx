/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16 bg-white px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-snug tracking-tight mb-6"
          id="problem-title"
        >
          ¿Te preocupa que tu hijo tenga una letra <br className="hidden sm:inline" />
          ilegible o se canse rápido al escribir?
        </motion.h2>

        {/* Embedded YouTube Short Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="my-6 mx-auto w-full max-w-[315px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 bg-black"
        >
          <iframe
            src="https://www.youtube.com/embed/Rqx9ZW_0UtI"
            title="Demostración de Caligrafía Infantil"
            className="w-full h-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* Descriptive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Muchos niños sufren porque no dominan el trazo correcto, lo que genera frustración, bajas notas y falta de confianza en sus tareas escolares.
        </motion.p>

        {/* Highlight Alert Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-50/90 border border-red-100 rounded-2xl p-5 sm:p-6 text-red-700 max-w-2xl mx-auto shadow-sm"
        >
          <p className="font-sans font-semibold text-sm sm:text-base leading-relaxed">
            Una mala caligrafía no es pereza, es falta de entrenamiento motor adecuado. <br className="hidden sm:inline" />
            <span className="font-bold underline decoration-red-300">¡Podemos solucionarlo jugando!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
