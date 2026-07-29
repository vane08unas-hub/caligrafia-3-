/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

// Import real worksheet assets
import imgWorksheet1 from "../assets/images/regenerated_image_1785328991364.jpg";
import imgWorksheet2 from "../assets/images/regenerated_image_1785328992661.jpg";
import imgWorksheet3 from "../assets/images/regenerated_image_1785328994521.jpg";
import imgWorksheet4 from "../assets/images/regenerated_image_1785328998897.jpg";

export default function GallerySection() {
  const worksheets = [
    {
      img: imgWorksheet1,
      title: "Coordinación básica",
      desc: "Líneas, curvas y calentamiento motor inicial."
    },
    {
      img: imgWorksheet2,
      title: "Abecedario guiado",
      desc: "Direccionalidad correcta letra por letra."
    },
    {
      img: imgWorksheet3,
      title: "Práctica de sílabas",
      desc: "Unión de consonantes y vocales progresivas."
    },
    {
      img: imgWorksheet4,
      title: "Oraciones completas",
      desc: "Fluidez y espaciado correcto en el renglón."
    }
  ];

  return (
    <section className="py-14 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight mb-2">
            Estos serán algunos de los ejercicios...
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Material didáctico listo para imprimir y usar desde la comodidad de tu hogar.
          </p>
        </div>

        {/* 4-Column Real Exercises Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {worksheets.map((sheet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex flex-col justify-between shadow-xs group"
            >
              <div className="relative rounded-xl overflow-hidden bg-white border border-slate-100 aspect-[3/4] mb-3">
                <img
                  src={sheet.img}
                  alt={sheet.title}
                  className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-1 text-center sm:text-left">
                <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">
                  {sheet.title}
                </h4>
                <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 leading-tight">
                  {sheet.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
