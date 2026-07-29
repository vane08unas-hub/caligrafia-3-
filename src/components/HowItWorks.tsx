/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Printer, Pencil } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Llega a tu correo",
      desc: "Después de realizar el pago, recibirás el acceso de inmediato a tu correo electrónico para mayor seguridad.",
      icon: Mail,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      title: "Descarga las actividades",
      desc: "Descárgalo en tu PC o celular, puedes imprimirlo tantas veces como desees.",
      icon: Printer,
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Realiza las actividades",
      desc: "¡Manos a la OBRA, es hora de hacerlas con tu pequeño(a)! Diviértete y realiza las actividades a tu propio ritmo.",
      icon: Pencil,
      color: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  return (
    <section className="py-14 bg-yellow-50/50 px-6 text-center">
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block bg-[#FEF6C9] text-amber-950 font-bold text-lg sm:text-xl px-8 py-2 rounded-full shadow-xs mb-8"
        >
          ¿Cómo Funciona?
        </motion.div>

        {/* Steps container */}
        <div className="space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 sm:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className={`h-12 w-12 rounded-full border flex items-center justify-center shrink-0 ${step.color}`}>
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="text-center sm:text-left">
                  <h3 className="font-sans font-bold text-slate-800 text-base sm:text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
