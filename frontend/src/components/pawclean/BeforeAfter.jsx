import { motion } from "framer-motion";

const BEFORE = "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/lnp5y4nu_image.png";
const AFTER = "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/2yy6pict_image.png";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      data-testid="section-before-after"
      className="relative py-24 md:py-32 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-2 rounded-[2rem] overflow-hidden card-bloom"
        >
          {/* Before */}
          <div className="relative aspect-[4/5] md:aspect-[16/10] bg-cover bg-center"
               style={{ backgroundImage: `url('${BEFORE}')` }}>
            <div className="absolute inset-0 bg-moss/15" />
            <span className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-linen bg-moss/70 backdrop-blur px-3 py-1.5 rounded-full">
              Avant — boue, sable, herbe
            </span>
          </div>
          {/* After */}
          <div className="relative aspect-[4/5] md:aspect-[16/10] bg-cover bg-center"
               style={{ backgroundImage: `url('${AFTER}')` }}>
            <div className="absolute inset-0 bg-linen/10" />
            <span className="absolute top-5 right-5 text-[10px] tracking-[0.3em] uppercase text-moss bg-linen/85 backdrop-blur px-3 py-1.5 rounded-full">
              Après — 10 secondes plus tard
            </span>
          </div>

          {/* VS badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-terracotta text-linen flex items-center justify-center font-display text-xl tracking-wider border-4 border-linen shadow-[0_18px_36px_rgba(0,0,0,0.25)]">
              VS
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-sm text-mute max-w-md">
          Photo non retouchée. Cocker spaniel, retour de balade en forêt de
          Fontainebleau, mars 2025.
        </p>
      </div>
    </section>
  );
}
