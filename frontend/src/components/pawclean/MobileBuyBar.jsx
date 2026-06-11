import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sticky mobile-only "buy" bar that slides up from the bottom once the user
 * has scrolled past the hero. Keeps the purchase action one tap away on phones.
 */
export default function MobileBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once user has scrolled past ~70% of the first viewport.
      const trigger = window.innerHeight * 0.7;
      setVisible(window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-buy"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-[70] md:hidden"
          data-testid="mobile-buy-bar"
        >
          <div className="m-3 rounded-2xl bg-forest text-linen shadow-[0_18px_36px_rgba(0,0,0,0.28)] px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] tracking-[0.25em] uppercase text-linen/70">
                PawClean — silicone
              </p>
              <p className="text-sm leading-tight truncate">
                À partir de{" "}
                <span className="font-display text-base text-terracotta">
                  18 €
                </span>{" "}
                · livraison offerte
              </p>
            </div>
            <a
              href="#product"
              data-testid="mobile-buy-cta"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta text-linen px-5 py-2.5 text-sm font-medium whitespace-nowrap"
            >
              Acheter
              <span>→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
