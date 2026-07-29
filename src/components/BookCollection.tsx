/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

// Import real notebook covers
import imgBook1 from "../assets/images/regenerated_image_1785326597864.png";
import imgBook2 from "../assets/images/regenerated_image_1785326616737.png";
import imgBook3 from "../assets/images/regenerated_image_1785326620678.png";
import imgBook4 from "../assets/images/regenerated_image_1785326624170.png";
import imgBook5 from "../assets/images/regenerated_image_1785326635535.png";
import imgBook6 from "../assets/images/regenerated_image_1785326639877.png";

interface Book {
  title: string;
  desc: string;
  image: string;
}

export default function BookCollection() {
  const books: Book[] = [
    {
      title: "Cuaderno Práctico",
      desc: "Trazos iniciales de letras para dominar el abecedario paso a paso.",
      image: imgBook1,
    },
    {
      title: "Silabario Cursivo",
      desc: "Aprende a unir consonantes y vocales formando sílabas con fluidez.",
      image: imgBook2,
    },
    {
      title: "Frases Cursivas",
      desc: "Práctica de oraciones completas y coordinación visual.",
      image: imgBook3,
    },
    {
      title: "Producción de Textos",
      desc: "Incentiva la escritura creativa, cuentos y pequeñas redacciones.",
      image: imgBook4,
    },
    {
      title: "Coordinación Motora",
      desc: "Ejercicios lúdicos para relajar la mano y soltar la muñeca.",
      image: imgBook5,
    },
    {
      title: "Práctica Diaria",
      desc: "Plantillas de refuerzo constante con renglones de práctica.",
      image: imgBook6,
    }
  ];

  return (
    <section className="py-14 bg-[#FEFDF6] px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight mb-2">
            Todo lo que tu hijo aprenderá con este Kit
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Más de 400 páginas diseñadas para aprender jugando
          </p>
        </div>

        {/* 6 Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Book cover visual */}
                <div className="flex items-center justify-center w-full mb-4">
                  <div className="relative group/book py-1">
                    {/* Subtle shadow */}
                    <div className="absolute bottom-0 left-4 right-4 h-2 bg-slate-900/10 rounded-full blur-xs scale-x-95" />
                    
                    {/* Cover wrapper */}
                    <div className="relative w-[150px] h-[190px] overflow-hidden rounded-xl border border-slate-200 shadow-md bg-white p-1">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-contain select-none"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-sans font-extrabold text-slate-800 text-sm sm:text-base mb-1.5">
                  {book.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">
                  {book.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
