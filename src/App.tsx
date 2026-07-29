/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, ShoppingBag } from "lucide-react";
import { trackEvent, initMetaPixel } from "./lib/tracking";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BookCollection from "./components/BookCollection";
import GallerySection from "./components/GallerySection";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import BonusesSection from "./components/BonusesSection";
import Garantia from "./components/Garantia";
import OfertaSection from "./components/OfertaSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  const [pixelId, setPixelId] = useState<string>("1636680907436275");
  const [checkoutUrl, setCheckoutUrl] = useState<string>(
    "https://vanessadigital.myshopify.com/cart/43140666949730:1"
  );
  const [isConfigLoaded, setIsConfigLoaded] = useState<boolean>(false);

  // 10-minute countdown timer (600 seconds)
  const [topTimeLeft, setTopTimeLeft] = useState<number>(600);

  // Floating buyer notification popup state
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTopTimeLeft((prev) => (prev <= 1 ? 600 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Popup effect - shows after 3 seconds, stays 5 seconds, repeats every 16 seconds
  useEffect(() => {
    let timeoutId: any;
    let intervalId: any;

    timeoutId = setTimeout(() => {
      setShowPopup(true);
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }, 3000);

    intervalId = setInterval(() => {
      setShowPopup(true);
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }, 16000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const formatTopTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  // Fetch configurations from backend API
  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/config");
        if (res.ok) {
          const data = await res.json();
          if (data.META_PIXEL_ID) {
            setPixelId(data.META_PIXEL_ID);
          }
          if (data.HOTMART_CHECKOUT_URL) {
            setCheckoutUrl(data.HOTMART_CHECKOUT_URL);
          }
        }
      } catch (err) {
        console.warn("[APP] No se pudo cargar config del backend (usando valores predeterminados de desarrollo):", err);
      } finally {
        setIsConfigLoaded(true);
      }
    }
    loadConfig();
  }, []);

  // Initialize tracking once configuration is ready
  useEffect(() => {
    if (!isConfigLoaded) return;

    // 1. Initialize client-side Meta Pixel
    initMetaPixel(pixelId);

    // 2. Track initial PageView (Pixel + CAPI)
    trackEvent({
      pixelId,
      eventName: "PageView"
    });

    // 3. Track ViewContent immediately as they land on the product page
    trackEvent({
      pixelId,
      eventName: "ViewContent",
      customData: {
        content_name: "Mega Pack de Caligrafía Infantil",
        content_category: "Educación Infantil",
        value: 8500,
        currency: "ARS"
      }
    });

  }, [isConfigLoaded, pixelId]);

  // Handler for InitiateCheckout tracking
  const handleInitiateCheckout = () => {
    console.log("[TRACK] Activando InitiateCheckout por click en botón de compra...");
    trackEvent({
      pixelId,
      eventName: "InitiateCheckout",
      customData: {
        content_name: "Mega Pack de Caligrafía Infantil",
        content_type: "product",
        value: 8500,
        currency: "ARS",
        contents: [{ id: "caligrafia_mega_pack", quantity: 1 }]
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FEFDF6] flex flex-col font-sans selection:bg-rose-200 selection:text-rose-900 relative">
      
      {/* Sticky Countdown Bar (10 Minutes) */}
      <div className="sticky top-0 z-50 w-full bg-[#FF0055] text-white py-2.5 px-4 text-center font-sans font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2">
        <Clock className="h-4 w-4 animate-pulse text-yellow-300 shrink-0" />
        <span>
          ¡OFERTA DE TIEMPO LIMITADO! El descuento especial termina en:{" "}
          <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-yellow-200 tracking-wider font-black">
            {formatTopTime(topTimeLeft)}
          </span>
        </span>
      </div>

      <main className="flex-1 relative z-10">
        
        {/* 1. Hero Section */}
        <Hero 
          checkoutUrl={checkoutUrl} 
          onInitiateCheckout={handleInitiateCheckout} 
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection />

        {/* 4. Book Collection: Todo lo que tu hijo aprenderá */}
        <BookCollection />

        {/* 5. How It Works: ¿Cómo Funciona? */}
        <HowItWorks />

        {/* 6. Gallery Section: Estos serán algunos de los ejercicios... */}
        <GallerySection />

        {/* 7. Benefits: Resultados visibles + ¿Este kit es para tu hijo? */}
        <Benefits />

        {/* 8. Testimonials: Padres reales, resultados reales */}
        <Testimonials />

        {/* 9. Bonuses: Bono Imprenta + 5 Regalos Exclusivos */}
        <BonusesSection />

        {/* 10. Garantía */}
        <Garantia />

        {/* 11. Oferta Especial */}
        <OfertaSection 
          checkoutUrl={checkoutUrl} 
          onInitiateCheckout={handleInitiateCheckout} 
        />

        {/* 12. Preguntas Frecuentes + Final CTA */}
        <FAQSection 
          checkoutUrl={checkoutUrl} 
          onInitiateCheckout={handleInitiateCheckout} 
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Camila Live Purchase Notification Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50 max-w-[280px] bg-white border border-slate-100 rounded-2xl p-4 shadow-2xl flex items-center gap-3"
          >
            {/* Green glowing active status indicator & icon */}
            <div className="relative shrink-0">
              <div className="h-10 w-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-[#FF0055]">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>

            {/* Notification Text */}
            <div className="flex-1 min-w-0 text-left">
              <p className="text-slate-800 text-xs sm:text-sm font-extrabold leading-tight">
                Camila está comprando en estos momentos
              </p>
              <p className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
                Kit de Caligrafía Infantil
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
