/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldCheck, Calendar, Lock, HelpCircle } from "lucide-react";

export default function Garantia() {
  return (
    <section className="py-12 md:py-16 bg-transparent px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Luxury Glassmorphic Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/85 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80 overflow-hidden"
        >
          {/* Subtle safety gradient bg */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/40 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Guarantee Seal Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative group select-none">
                {/* Glistening outer circle shadows */}
                <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl scale-125 animate-pulse" />
                
                {/* Real Stamp Graphic with Ribbons */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Decorative Ribbons behind the Seal */}
                  <div className="absolute top-[80px] flex justify-between w-[64px] h-[70px] -z-10 pointer-events-none">
                    {/* Left Ribbon */}
                    <div 
                      className="w-7 h-16 bg-red-600 shadow-md origin-top -rotate-12 rounded-b-sm relative"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </div>
                    {/* Right Ribbon */}
                    <div 
                      className="w-7 h-16 bg-red-500 shadow-md origin-top rotate-12 rounded-b-sm relative"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" />
                    </div>
                  </div>

                  {/* Serrated outer ring (The wax/metal stamp body) */}
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 border-4 border-amber-200 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                    
                    {/* Inner gold concentric dashed border */}
                    <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-100/60" />
                    
                    {/* Circular Text */}
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                      <path
                        id="seal-text-path"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                      />
                      <text className="font-display font-black text-[5px] fill-amber-950/85 tracking-[0.08em]">
                        <textPath href="#seal-text-path" startOffset="50%" textAnchor="middle">
                          • GARANTÍA DE SATISFACCIÓN TOTAL • 100% SEGURO
                        </textPath>
                      </text>
                    </svg>

                    {/* Central Medallion Shield/Star container */}
                    <div className="w-24 h-24 rounded-full bg-amber-900 flex flex-col items-center justify-center shadow-inner border border-amber-600/40 text-center text-white relative">
                      
                      {/* Metallic shine reflection overlay */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-full pointer-events-none" />

                      <span className="text-[10px] tracking-widest font-bold text-amber-200 leading-none">GARANTÍA</span>
                      <span className="font-display font-black text-3xl text-yellow-300 leading-tight drop-shadow-sm my-0.5">
                        7 DÍAS
                      </span>
                      
                      {/* 5 Shiny Stars */}
                      <div className="flex gap-0.5 text-yellow-300 mt-0.5">
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <span key={sIdx} className="text-[8px]">★</span>
                        ))}
                      </div>
                      
                      <span className="text-[7px] text-amber-200/95 font-bold uppercase tracking-wider leading-none mt-1">RESPALDO TOTAL</span>
                    </div>

                  </div>
                </div>

              </div>
              <span className="font-display font-black text-slate-800 text-sm uppercase tracking-wider mt-12 block">
                SELLO DE GARANTÍA REAL
              </span>
            </div>

            {/* Explanatory text column */}
            <div className="md:col-span-8 flex flex-col text-center md:text-left">
              <h3 className="font-display font-black text-2xl md:text-3xl text-slate-800 leading-tight mb-4">
                Prueba el material sin riesgo alguno
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Queremos que estés plenamente satisfecha con tu compra. Adquiere el Mega Pack hoy mismo, descárgalo e imprímelo. Si por cualquier motivo sientes que el material no cumple con tus expectativas o a tu hijo no le agrada, solo envíanos un correo dentro de los <span className="font-bold text-slate-800">7 días posteriores a tu compra</span> y te devolveremos el 100% de tu dinero de inmediato. Sin preguntas, sin condiciones.
              </p>

              {/* Secure payment micro badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 justify-center md:justify-start">
                  <Lock className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Pago 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 justify-center md:justify-start">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Compra Protegida</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 justify-center md:justify-start">
                  <Calendar className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Garantía con Shopify</span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
