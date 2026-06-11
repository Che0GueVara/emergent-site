import { motion } from "framer-motion";

const REAL_BEFORE_AFTER =
  "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/9ki6d841_main-image-6.jpeg";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      data-testid="section-before-after"
      className="relative py-16 md:py-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            La preuve
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            Avant. <em className="text-terracotta">Après.</em>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden card-bloom bg-white"
        >
          <img
            src={REAL_BEFORE_AFTER}
            alt="Une patte boueuse à gauche, la même patte propre après dix secondes dans le gobelet PawClean à droite"
            loading="lazy"
            decoding="async"
            className="w-full h-auto block"
            data-testid="before-after-img"
          />

          {/* VS badge floating on top of the split */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-terracotta text-linen flex items-center justify-center font-display text-xl tracking-wider border-4 border-linen shadow-[0_18px_36px_rgba(0,0,0,0.25)]">
              VS
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-sm text-mute max-w-md">
          Photo non retouchée. Patte d&apos;un Cocker spaniel, retour de balade
          en forêt, immédiatement après dix secondes dans le gobelet PawClean.
        </p>
      </div>
    </section>
  );
}
