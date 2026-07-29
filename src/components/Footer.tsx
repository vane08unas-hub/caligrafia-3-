/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, Mail, Lock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          
          {/* Logo / Trust disclosure */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-sky-500 flex items-center justify-center font-display font-black text-white text-sm">
                K
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                KIDS<span className="text-sky-400">TRAZO</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Invertimos en el desarrollo cognitivo y motor de los más pequeños. Creamos material educativo premium diseñado bajo altos estándares pedagógicos para el hogar y el aula.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mt-2">
              <Mail className="h-4 w-4 text-sky-400" />
              <span>Soporte: vane08unas@gmail.com</span>
            </div>
          </div>

          {/* Quick links & Privacy */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">
              Políticas y Legales
            </h4>
            <a href="#privacy" className="text-xs hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#terms" className="text-xs hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#cookies" className="text-xs hover:text-white transition-colors">Política de Cookies</a>
            <a href="#refund" className="text-xs hover:text-white transition-colors">Políticas de Devolución</a>
          </div>

          {/* Safety disclaimer banner */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2">
              Garantía Shopify
            </h4>
            <div className="flex gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <Lock className="h-5 w-5 text-emerald-400 shrink-0" />
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Este producto se comercializa a través de Shopify. La plataforma procesa los pagos de forma 100% segura y encriptada, garantizando el acceso inmediato tras el pago.
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer disclosure in Spanish */}
        <div className="pt-8 border-t border-slate-800 flex flex-col gap-6 text-[10px] sm:text-xs leading-relaxed text-slate-500">
          <p>
            “Este sitio web no forma parte del sitio de Facebook ni de Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc.”
          </p>
          <p>
            Descargo de responsabilidad: Los resultados de este material pueden variar de un niño a otro según el tiempo de práctica diaria y la constancia de los padres o docentes. Los bonos de regalo se entregan de forma gratuita junto con el paquete principal. Shopify es la plataforma procesadora segura de este material educativo.
          </p>
        </div>

        {/* Bottom Credits line */}
        <div className="pt-8 mt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <span>&copy; {new Date().getFullYear()} KidsTrazo Editorial. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1">
            Hecho con <Heart className="h-3 w-3 text-rose-500 fill-rose-500" /> para mamás y papás felices
          </span>
        </div>

      </div>
    </footer>
  );
}
