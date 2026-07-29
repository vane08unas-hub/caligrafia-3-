/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, CheckCircle2, ArrowRight, BookOpen, 
  Smile, Trophy, Layers, Award, ShieldCheck, Heart
} from "lucide-react";

interface WhatIsIncludedProps {
  checkoutUrl?: string;
  onInitiateCheckout?: () => void;
}

export default function WhatIsIncluded({ checkoutUrl, onInitiateCheckout }: WhatIsIncludedProps) {
  const elements = [
    {
      title: "500+ Páginas de Caligrafía",
      desc: "Un arsenal completo de fichas de práctica organizadas por dificultad para que nunca te quedes sin material.",
      icon: <Layers className="h-6 w-6 text-rose-500" />,
      tag: "Volumen Completo",
      color: "bg-rose-50 border-rose-100"
    },
    {
      title: "Abecedario Paso a Paso",
      desc: "Guías con flechas indicadoras de trazo para letras mayúsculas y minúsculas, ayudando a memorizar la direccionalidad correcta.",
      icon: <BookOpen className="h-6 w-6 text-sky-500" />,
      tag: "Letra por Letra",
      color: "bg-sky-50 border-sky-100"
    },
    {
      title: "Motricidad Fina Inicial",
      desc: "Trazos divertidos, líneas punteadas, ondas, curvas y laberintos para relajar la mano y preparar los músculos para sostener el lápiz.",
      icon: <Smile className="h-6 w-6 text-amber-500" />,
      tag: "Pre-Escritura",
      color: "bg-amber-50 border-amber-100"
    },
    {
      title: "Sílabas y Oraciones",
      desc: "Paso progresivo desde la letra suelta hasta la formación de oraciones completas sobre renglones y pautas escolares adaptadas.",
      icon: <Sparkles className="h-6 w-6 text-indigo-500" />,
      tag: "Lectoescritura",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      title: "Números y Operaciones",
      desc: "Fichas interactivas para aprender los números, contar objetos y practicar caligrafía matemática con ilustraciones divertidas.",
      icon: <Trophy className="h-6 w-6 text-emerald-500" />,
      tag: "Matemática Inicial",
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      title: "Diplomas y Motivación",
      desc: "Fichas de refuerzo emocional positivo, diplomas de campeón y medallas recortables para celebrar cada página terminada.",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      tag: "Refuerzo Emocional",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <section id="que-contiene" className="py-20 px-6 relative overflow-hidden bg-transparent">
      
      {/* Decorative Sparkle Blobs */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-rose-400/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] bg-amber-300/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-700 font-extrabold text-xs uppercase px-4 py-1.5 rounded-full border border-rose-200 shadow-xs mb-4">
            <Sparkles className="h-4 w-4 text-rose-500" />
            Contenido Editorial Premium
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-800 leading-tight mb-4">
            ¿Qué contiene exactamente el Mega Pack? 📚
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Un sistema pedagógico completo diseñado por expertos para llevar a tu hijo desde los primeros trazos hasta la escritura fluida de oraciones y cuentos en cursiva ligada.
          </p>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {elements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`bg-white border p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
            >
              {/* Corner badge or tag */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider border ${item.color} text-slate-700`}>
                  {item.tag}
                </span>
              </div>

              {/* Icon and Core text */}
              <div>
                <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-md border border-slate-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-display font-black text-slate-800 text-xl mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Elegant check list */}
              <div className="border-t border-slate-100/80 pt-4 flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Listo para descargar e imprimir</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action conversions */}
        <div className="mt-16 bg-white/80 backdrop-blur-md border border-rose-100 rounded-3xl p-6 md:p-10 shadow-xl max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
            <span className="text-slate-800 font-extrabold text-sm uppercase tracking-wider">Únete a más de 12,000 mamás felices</span>
          </div>
          
          <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800 mb-4">
            Obtén acceso inmediato a todo el material por un único pago.
          </h3>
          
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            No tienes que pagar suscripciones mensuales ni comprar cuadernos aburridos de forma repetida. Descarga los archivos en PDF una vez y úsalos para siempre con todos tus hijos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => {
                if (onInitiateCheckout) onInitiateCheckout();
                window.open(checkoutUrl || "https://pay.hotmart.com/V106618670N?checkoutMode=10", "_blank");
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-extrabold text-sm py-4 px-8 rounded-2xl cursor-pointer shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>¡DESCARGAR PACK POR SOLO $7 USD!</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Compra 100% segura · 7 días de garantía</span>
          </div>
        </div>

      </div>
    </section>
  );
}
