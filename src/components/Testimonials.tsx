/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, MessageSquare } from "lucide-react";
import { Testimonial } from "../types";

/// Import generated realistic mother avatars
import avatarMom1 from "../assets/images/avatar_mom_1_1783299110337.webp";
import avatarMom2 from "../assets/images/avatar_mom_2_1783299120010.webp";
import avatarMom3 from "../assets/images/avatar_mom_3_1783299128026.webp";
import avatarMom4 from "../assets/images/avatar_mom_4_1783299137744.webp";
import avatarMom5 from "../assets/images/avatar_mom_5_1783299146396.webp";
import avatarMom6 from "../assets/images/avatar_mom_6_1783299354530.webp";

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      id: "t1",
      name: "Carla Rivas",
      city: "Mendoza",
      childAge: "Felipe (6 años)",
      rating: 5,
      avatar: avatarMom1,
      text: "Felipe borraba tanto que terminaba rompiendo las hojas de la frustración. Empezamos con las guías de motricidad fina del pack para que suelte la mano y ahora escribe sus primeras oraciones sin enojarse. Un alivio total para las tardes de tarea."
    },
    {
      id: "t2",
      name: "Laura Vargas",
      city: "Rosario",
      childAge: "Sofi (5 años)",
      rating: 5,
      avatar: avatarMom2,
      text: "Lo compré para reforzar el jardín de 5 y le encanta. Las fichas de recortar y colorear fueron un éxito rotundo. Se entretiene sola mientras yo puedo cocinar o trabajar."
    },
    {
      id: "t3",
      name: "Sofía Mendoza",
      city: "Córdoba",
      childAge: "Bruno (7 años)",
      rating: 5,
      avatar: avatarMom3,
      text: "La maestra nos recomendó practicar caligrafía porque la letra de Bruno era muy despareja y le costaba mantenerse sobre el renglón. Después de un mes imprimiendo las hojas de este pack, el cambio es asombroso. Muy prolijo."
    },
    {
      id: "t4",
      name: "Jimena Gómez",
      city: "Buenos Aires",
      childAge: "Santino (8 años)",
      rating: 5,
      avatar: avatarMom4,
      text: "Mi hijo mayor tiene 8 y todavía le costaba enlazar las letras en cursiva. Los ejercicios específicos de letra cursiva que trae este pack son fantásticos, súper progresivos y fáciles de entender para él."
    },
    {
      id: "t5",
      name: "Isabella Paredes",
      city: "Salta",
      childAge: "Alma (6 años)",
      rating: 5,
      avatar: avatarMom5,
      text: "Como docente de primer grado y mamá, sé lo difícil que es enseñar el trazo correcto en clases tan numerosas. Se lo recomiendo siempre a las familias porque la estructura pedagógica de este pack respeta la madurez muscular del niño."
    },
    {
      id: "t6",
      name: "Natalia Domínguez",
      city: "Neuquén",
      childAge: "Mateo (4 años)",
      rating: 5,
      avatar: avatarMom6,
      text: "Mateo no quería agarrar lápices ni crayones de ninguna forma. Empezamos haciendo los caminitos y laberintos lúdicos de motricidad fina y ahora es él quien me pide imprimir las hojas."
    }
  ];

  return (
    <section className="py-14 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-3">
            Padres reales, resultados reales
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Opiniones honestas de mamás que ya están viendo el cambio en sus pequeños.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-all"
            >
              <div>
                {/* Stars and quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <MessageSquare className="h-4 w-4 text-slate-300" />
                </div>
                
                {/* Quote text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {test.avatar && (
                    <div className="relative shrink-0">
                      <img 
                        src={test.avatar} 
                        alt={test.name} 
                        className="h-9 w-9 rounded-full object-cover border border-slate-200"
                        loading="lazy"
                        decoding="async"
                        width="36"
                        height="36"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-sans font-bold text-slate-800 text-xs sm:text-sm">
                      {test.name}
                    </h4>
                    <span className="text-slate-400 text-[10px] block">
                      {test.city}
                    </span>
                  </div>
                </div>
                <div className="bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-lg shrink-0">
                  <span className="text-[9px] font-bold text-rose-700 uppercase">
                    {test.childAge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
