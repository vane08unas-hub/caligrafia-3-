/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import heroMockup from "../assets/images/regenerated_image_1785327614737.png";

// Import small book images for top row
import imgBook1 from "../assets/images/regenerated_image_1785326300128.png";
import imgBook2 from "../assets/images/regenerated_image_1785326313390.png";
import imgBook3 from "../assets/images/regenerated_image_1785326317220.png";
import imgBook4 from "../assets/images/regenerated_image_1785326329706.png";
import imgBook5 from "../assets/images/regenerated_image_1785326338368.png";
import imgBook6 from "../assets/images/regenerated_image_1785326341572.png";

interface HeroProps {
  checkoutUrl: string;
  onInitiateCheckout: () => void;
}

export default function Hero({ checkoutUrl, onInitiateCheckout }: HeroProps) {
  const handleBuyClick = () => {
    onInitiateCheckout();
    setTimeout(() => {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    }, 150);
  };

  const topBooks = [
    imgBook1,
    imgBook2,
    imgBook3,
    imgBook4,
    imgBook5,
    imgBook6
  ];

  return (
    <section className="bg-[#FEFDF6] pt-8 pb-12 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight mb-8 max-w-2xl mx-auto"
        >
          Transforma la escritura de tu hijo o alumnos con el{" "}
          <span className="text-[#FF0055]">Kit de Caligrafía más completo</span>: 350 actividades listas para imprimir.
        </motion.h1>

        {/* Row of small books at the very top */}
        <div className="grid grid-cols-6 gap-2 w-full max-w-md mb-8">
          {topBooks.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="aspect-[3/4] rounded-md overflow-hidden border border-slate-200/60 shadow-xs bg-white"
            >
              <img
                src={img}
                alt="Book cover miniature"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="64"
                height="85"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Main Flyer Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl sm:max-w-2xl rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-2 sm:p-3 mb-6"
        >
          <img
            src={heroMockup}
            alt="Pack Completo Caligrafía para niños"
            className="w-full h-auto rounded-xl object-contain block mx-auto max-h-[600px]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Large Pinkish-Red Pulsing CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-sm mb-4"
        >
          <button
            onClick={handleBuyClick}
            className="w-full bg-[#FF0055] hover:bg-[#E6004C] text-white font-sans font-black text-sm sm:text-base md:text-lg py-4 px-6 rounded-2xl shadow-md transition-all cursor-pointer animate-pulse-gentle uppercase tracking-wider"
          >
            ¡SÍ, QUIERO MEJORAR LA LETRA AHORA! ➔
          </button>
        </motion.div>

        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-600 font-sans font-extrabold text-xs sm:text-sm tracking-tight"
        >
          "¡Se acabe la letra fea!" - Más de 350 actividades
        </motion.p>

      </div>
    </section>
  );
}
