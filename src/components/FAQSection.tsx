/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

interface FAQSectionProps {
  checkoutUrl?: string;
  onInitiateCheckout?: () => void;
}

export default function FAQSection({ checkoutUrl = "https://vanessadigital.myshopify.com/cart/43140666949730:1", onInitiateCheckout }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const list: FAQItem[] = [
    {
      id: "f1",
      question: "¿Qué es exactamente el Mega Pack de Caligrafía Infantil?",
      answer: "Es la recopilación digital más completa de habla hispana, con más de 400 páginas de actividades en PDF listas para imprimir. Incluye cuadernillos progresivos que abarcan desde motricidad inicial y laberintos hasta abecedarios en imprenta, cursiva ligada, sílabas, oraciones y divertidos juegos didácticos."
    },
    {
      id: "f2",
      question: "¿Para qué edades está recomendado este material?",
      answer: "Está diseñado de forma evolutiva para niños de 4 a 8 años de edad. Los más chicos (4-5 años) inician con trazos básicos, laberintos y letras grandes en mayúscula. Los más grandes (6-8 años) practican sílabas simples/complejas, oraciones completas y la letra cursiva fluida."
    },
    {
      id: "f3",
      question: "¿Cómo y cuándo recibiré el material tras el pago?",
      answer: "El acceso es de inmediato y automático. Apenas se aprueba el pago, el sistema de Shopify te envía un correo electrónico seguro con tus datos de ingreso para descargar la colección completa en archivos PDF a tu computadora, tablet o celular en un clic."
    },
    {
      id: "f4",
      question: "¿Los archivos son reutilizables e imprimibles indefinidamente?",
      answer: "¡Sí! Al ser archivos PDF descargables para toda la vida, los guardas para siempre. Puedes imprimir la misma ficha de práctica o juego didáctico las veces que quieras para el mismo niño o para otros hermanos y alumnos en el salón de clases."
    },
    {
      id: "f5",
      question: "¿Tengo que realizar pagos mensuales o suscripciones?",
      answer: "No. Es un pago único de tan solo $8.500 Pesos Argentinos. No existen suscripciones, cargos recurrentes ni cobros ocultos a futuro. Todo el material y sus actualizaciones futuras son tuyos de por vida."
    },
    {
      id: "f6",
      question: "¿Cómo funciona la garantía de satisfacción de 7 días?",
      answer: "Es 100% libre de riesgo. Si por cualquier motivo el material no cumple tus expectativas o a tu hijo no le agrada, puedes solicitar el reembolso total del dinero dentro de los primeros 7 días posteriores a tu compra directamente desde la plataforma y se te devolverá el dinero sin preguntas."
    }
  ];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleBuyClick = () => {
    if (onInitiateCheckout) {
      onInitiateCheckout();
    }
    setTimeout(() => {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }, 150);
  };

  return (
    <section className="py-14 bg-[#FEFDF6] px-6 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-10 text-center">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Resolvemos tus dudas al instante
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-2xl mx-auto mb-16">
          {list.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-300 text-left"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <span className="font-sans font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="h-5 w-5 text-indigo-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-2 border-t border-slate-50 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Final CTA Block */}
        <div className="border-t border-slate-100 pt-14 max-w-2xl mx-auto text-center">
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-tight">
            Ayuda a tu hijo a dominar la escritura hoy mismo
          </h3>

          <button
            onClick={handleBuyClick}
            className="w-full bg-[#FF0055] hover:bg-[#E6004C] text-white font-sans font-black text-sm sm:text-lg py-4 px-6 rounded-2xl shadow-md transition-all cursor-pointer animate-pulse-gentle uppercase tracking-wider mb-3"
          >
            ¡SÍ, QUIERO EL KIT AHORA! ➔
          </button>

          <p className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
            Acceso inmediato • Kit de Letra Imprenta REGALO + 4 bonos incluidos
          </p>
        </div>

      </div>
    </section>
  );
}
