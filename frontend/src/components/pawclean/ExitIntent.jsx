import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

const PROMO_CODE = "PAWCLEAN10";

/**
 * Exit-intent / scroll-intent email capture popup.
 * Desktop: triggers when the cursor leaves the viewport from the top.
 * Mobile: triggers after 25s of activity OR when the user scrolls past 60%
 * of the page (since exit-intent doesn't exist on touch).
 * Shown at most once per session.
 */
export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("pc-exit-shown")) return;

    const trigger = () => {
      if (sessionStorage.getItem("pc-exit-shown")) return;
      sessionStorage.setItem("pc-exit-shown", "1");
      setOpen(true);
    };

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    let scrollHandler;
    let timer;

    if (isTouch) {
      // mobile: scroll-based trigger
      scrollHandler = () => {
        const pct =
          window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight);
        if (pct > 0.55) trigger();
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
      timer = setTimeout(trigger, 25000);
    } else {
      // desktop: cursor leaving top edge
      const onLeave = (e) => {
        if (e.clientY <= 4 && e.relatedTarget == null) trigger();
      };
      document.addEventListener("mouseout", onLeave);
      scrollHandler = onLeave; // reused for cleanup
      timer = setTimeout(trigger, 45000); // fallback after long dwell
    }

    return () => {
      if (isTouch) window.removeEventListener("scroll", scrollHandler);
      else document.removeEventListener("mouseout", scrollHandler);
      clearTimeout(timer);
    };
  }, []);

  const close = () => setOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("E-mail invalide.");
      return;
    }
    setError("");
    // Stub: persist locally. Wire to Klaviyo/Brevo later.
    try {
      const list = JSON.parse(localStorage.getItem("pc-emails") || "[]");
      list.push({ email: email.trim(), at: Date.now() });
      localStorage.setItem("pc-emails", JSON.stringify(list));
    } catch {
      /* ignore */
    }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="exit-intent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          data-testid="exit-intent"
        >
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-moss/55 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          {/* card */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-linen rounded-[1.75rem] overflow-hidden card-bloom"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              data-testid="exit-intent-close"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-moss hover:bg-white transition-colors"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="bg-forest text-linen px-7 py-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-linen/70">
                Offre de bienvenue
              </p>
              <p className="font-display text-2xl md:text-3xl leading-tight mt-2">
                <span className="text-terracotta">−10 %</span> sur votre
                première patte propre.
              </p>
            </div>

            <div className="px-7 py-7">
              {!submitted ? (
                <>
                  <h2
                    id="exit-intent-title"
                    className="font-display text-xl text-moss leading-tight mb-2"
                  >
                    Avant de partir…
                  </h2>
                  <p className="text-sm text-mute leading-relaxed mb-5">
                    Laissez votre e-mail. Recevez votre code de réduction et un
                    rappel pour ne pas oublier vos pattes boueuses.
                  </p>
                  <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <label className="sr-only" htmlFor="exit-email">
                      E-mail
                    </label>
                    <input
                      id="exit-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre.email@exemple.com"
                      data-testid="exit-intent-email"
                      className="w-full px-4 py-3 rounded-full bg-white border border-edge text-moss placeholder:text-mute/70 focus:outline-none focus:border-forest text-sm"
                    />
                    {error && (
                      <p className="text-xs text-destructive -mt-1 ml-1">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      data-testid="exit-intent-submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest text-linen px-6 py-3 text-sm hover:bg-moss transition-colors"
                    >
                      Recevoir mon code
                      <span>→</span>
                    </button>
                    <p className="text-[10px] text-mute text-center mt-1 leading-relaxed">
                      Pas de spam. Désinscription en un clic.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-forest text-linen flex items-center justify-center mb-4">
                    <Check size={20} strokeWidth={2} />
                  </div>
                  <h2 className="font-display text-2xl text-moss leading-tight mb-2">
                    Votre code est prêt.
                  </h2>
                  <p className="text-sm text-mute mb-5">
                    Utilisez-le au moment du paiement pour bénéficier de
                    −10 % sur votre commande.
                  </p>
                  <div
                    data-testid="exit-intent-code"
                    className="font-display text-2xl tracking-[0.3em] text-terracotta bg-white border border-dashed border-terracotta/40 rounded-xl py-4 mb-5"
                  >
                    {PROMO_CODE}
                  </div>
                  <a
                    href="#product"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-linen px-6 py-3 text-sm hover:bg-moss transition-colors"
                    data-testid="exit-intent-go"
                  >
                    Choisir ma taille
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
