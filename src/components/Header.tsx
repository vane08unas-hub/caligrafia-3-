/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Award } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 px-6 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Elegant Logo / Branding */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center shadow-md shadow-sky-100">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg tracking-tight text-slate-800">
              KIDS<span className="text-sky-500">TRAZO</span>
            </span>
            <span className="text-[10px] block uppercase tracking-widest text-slate-400 font-bold -mt-1">
              Editorial Premium
            </span>
          </div>
        </div>

        {/* Real-time trust seal */}
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200/50 px-3.5 py-1.5 rounded-full shadow-sm"
        >
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="h-3.5 w-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
            <Award className="h-3.5 w-3.5 text-amber-600 inline" />
            Más de 5,000 familias felices
          </span>
        </motion.div>
      </div>
    </header>
  );
}
