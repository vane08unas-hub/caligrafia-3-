/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Lock, Flame } from "lucide-react";
import imgPackCompleto from "../assets/images/regenerated_image_1785328170530.png";

interface OfertaProps {
  checkoutUrl: string;
  onInitiateCheckout: () => void;
}

export default function OfertaSection({ checkoutUrl, onInitiateCheckout }: OfertaProps) {
  // Countdown timer: 29 minutes and 45 seconds
  const [timeLeft, setTimeLeft] = useState(1785);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 1785 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return {
      m: String(m).padStart(2, "0"),
      s: String(s).padStart(2, "0"),
    };
  };

  const { m, s } = formatTime(timeLeft);

  const handleBuyClick = () => {
    onInitiateCheckout();
    setTimeout(() => {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }, 150);
  };

  const inclusions = [
    "Cuaderno Práctico de Caligrafía",
    "Silabario Cursivo",
    "Frases Cursivas",
    "Producción de Textos",
    "Coordinación Motora Infantil",
    "Práctica Diaria",
    "Kit de Caligrafía en Imprenta (Regalo)",
    "Guía Maestra: Por dónde empezar (Regalo)",
    "4 Bonos Extra del Alfabeto (Regalo)",
    "Acceso y actualizaciones de por vida"
  ];

  return (
    <section id="oferta-section" className="py-14 bg-[#FEFDF6] px-6 text-center">
      <div className="max-w-xl mx-auto">
        {/* Urgency countdown block */}
        <div className="mb-6 inline-flex items-center gap-2 bg-[#FEF6C9] border border-amber-200 px-4 py-2 rounded-2xl shadow-xs">
          <Flame className="h-4 w-4 text-orange-500 fill-orange-500 animate-pulse" />
          <span className="text-amber-950 font-sans font-bold text-xs sm:text-sm">
            La oferta finaliza en: <span className="font-mono text-sm">{m}:{s}</span>
          </span>
        </div>

        {/* Core Offer Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white border-4 border-dashed border-[#FF0055] rounded-3xl p-6 sm:p-8 shadow-md"
        >
          {/* OFERTA HOY Badge */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF0055] text-white font-sans font-black text-xs uppercase tracking-widest px-6 py-2 rounded-full shadow-md">
            OFERTA HOY
          </div>

          <h3 className="font-sans font-black text-slate-800 text-lg sm:text-2xl mt-4 mb-4">
            Pack Completo Caligrafía para niños
          </h3>

          <div className="max-w-md sm:max-w-lg mx-auto mb-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2">
            <img 
              src={imgPackCompleto} 
              alt="Pack Completo Caligrafía para niños" 
              className="w-full h-auto object-contain block mx-auto"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Checklist */}
          <ul className="space-y-3.5 text-left border-b border-slate-100 pb-6 mb-6">
            {inclusions.map((inc, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <span className="text-emerald-500 font-extrabold text-sm sm:text-base">✓</span>
                <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                  {inc}
                </span>
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="mb-6">
            <span className="text-slate-400 line-through text-sm sm:text-base block">
              Valor Total: $35.000 ARS
            </span>
            <div className="text-3xl sm:text-5xl font-sans font-black text-[#FF0055] tracking-tight mt-1">
              $8.500 ARS
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mt-2">
              Un único pago de $8.500 Pesos Argentinos • Descarga instantánea • Acceso de por vida
            </span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleBuyClick}
            className="w-full bg-[#FF0055] hover:bg-[#E6004C] text-white font-sans font-black text-base sm:text-xl py-4.5 px-6 rounded-2xl shadow-md transition-all cursor-pointer animate-pulse-gentle uppercase tracking-wider flex items-center justify-center gap-2"
          >
            ¡SÍ, QUIERO EL KIT AHORA! ➔
          </button>

          {/* Trust information */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs text-slate-400 font-semibold uppercase">
            <div className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-500" />
              <span>Pago 100% Seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span>7 Días de Garantía</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
