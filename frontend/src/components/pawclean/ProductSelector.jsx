import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SIZES, COLORS, STRIPE_LINKS } from "@/lib/pawclean-data";
import ProductPhoto from "@/components/pawclean/ProductPhoto";
import MagneticButton from "@/components/pawclean/MagneticButton";

/** Dog silhouette — uses user-provided per-size PNG icons */
function DogSilhouette({ src, scale = 1, active = false }) {
  return (
    <div
      className="flex items-end justify-center"
      style={{ height: 58, width: 64 }}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        className="block object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: `${scale * 100}%`,
          maxWidth: "100%",
          opacity: active ? 1 : 0.55,
          filter: active ? "none" : "saturate(0)",
        }}
      />
    </div>
  );
}

export default function ProductSelector() {
  const [size, setSize] = useState(SIZES[1]);
  const [color, setColor] = useState(COLORS[0]);

  const stripeUrl = STRIPE_LINKS[size.id];

  return (
    <section
      id="product"
      data-testid="section-product"
      className="relative pt-6 md:pt-10 pb-16 md:pb-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Gallery — schéma coté qui sert aussi de visuel produit */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-white to-[#EFEBE3] overflow-hidden card-bloom">
              <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${color.id}-${size.id}`}
                    src={`/sizecharts/${size.id}_${color.id}.png`}
                    alt={`PawClean ${size.label} — ${color.name}, schéma à l'échelle`}
                    initial={{ opacity: 0, scale: 0.94, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -6 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="max-h-full max-w-full object-contain"
                    style={{
                      filter: `drop-shadow(0 20px 30px ${color.hex}33)`,
                    }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-moss bg-linen/80 backdrop-blur px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                Schéma à l&apos;échelle
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-mute">
                <span className="tracking-[0.25em] uppercase">
                  PawClean · {color.name}
                </span>
                <span className="tracking-[0.25em] uppercase">
                  Taille {size.label}
                </span>
              </div>
            </div>
          </div>

          {/* Configurator */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-5">
              Le produit
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-moss">
              Le gobelet
              <br />
              <em className="text-terracotta">en silicone.</em>
            </h2>
            <p className="mt-6 text-mute text-base md:text-lg max-w-md leading-relaxed">
              Trois tailles pensées pour chaque morphologie. Trois couleurs
              choisies pour vivre dans votre entrée.
            </p>

            {/* Color swatches */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.25em] uppercase text-mute">
                  Coloris
                </span>
                <span className="text-sm text-moss">{color.name}</span>
              </div>
              <div className="flex items-center gap-4">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(c)}
                    data-testid={`color-swatch-${c.id}`}
                    aria-label={`Choisir ${c.name}`}
                    aria-pressed={color.id === c.id}
                    className={`group relative w-12 h-12 rounded-full transition-all duration-500 ${
                      color.id === c.id
                        ? "ring-2 ring-offset-4 ring-offset-linen ring-moss"
                        : ""
                    }`}
                    style={{ backgroundColor: c.hex }}
                  >
                    <span className="sr-only">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size tag selector */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.25em] uppercase text-mute">
                  Taille
                </span>
                <span className="text-sm text-moss">
                  {size.breed} · {size.weight}
                </span>
              </div>
              <div className="flex items-end gap-4 md:gap-6">
                {SIZES.map((s) => {
                  const active = size.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSize(s)}
                      data-testid={`size-tag-${s.id}`}
                      aria-pressed={active}
                      className={`relative no-select group flex flex-col items-center justify-end pb-4 pt-6 px-4 w-24 md:w-28 h-36 md:h-40 rounded-[6px] border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active
                          ? "kraft-paper border-moss/40 -rotate-[3deg] shadow-[0_8px_30px_-6px_rgba(30,58,47,0.25)]"
                          : "bg-white border-edge hover:-translate-y-1"
                      }`}
                      style={{ transformOrigin: "center bottom" }}
                    >
                      {/* tag hole */}
                      <span
                        className={`absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border ${
                          active
                            ? "border-moss/60 bg-linen/60"
                            : "border-edge bg-linen"
                        }`}
                      />
                      <span
                        className={`absolute top-[18px] left-1/2 -translate-x-1/2 w-px h-3 ${
                          active ? "bg-moss/40" : "bg-edge"
                        }`}
                      />
                      <div className="flex-1 flex items-end justify-center mb-1">
                        <DogSilhouette
                          src={s.icon}
                          scale={s.dogScale}
                          active={active}
                        />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl text-moss leading-none">
                          {s.label}
                        </span>
                      </div>
                      <span
                        className={`mt-1 text-[10px] tracking-[0.2em] uppercase ${
                          active ? "text-moss" : "text-mute"
                        }`}
                      >
                        {s.weight}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dimensions inline strip — au sein du bloc d'achat */}
            <div
              data-testid="size-chart"
              className="mt-10 grid grid-cols-3 rounded-2xl border border-edge bg-white overflow-hidden card-bloom"
            >
              {[
                {
                  label: "Hauteur",
                  value: size.dimensions.height,
                  testId: "spec-height",
                },
                {
                  label: "Largeur",
                  value: size.dimensions.width,
                  testId: "spec-width",
                },
                {
                  label: "Ouverture",
                  value: size.dimensions.opening,
                  testId: "spec-opening",
                },
              ].map((s, i) => (
                <div
                  key={s.label}
                  data-testid={s.testId}
                  className={`px-4 md:px-6 py-5 text-center ${
                    i < 2 ? "border-r border-edge" : ""
                  }`}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                    {s.label}
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${size.id}-${s.testId}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-display text-2xl md:text-3xl text-moss leading-none"
                    >
                      {s.value}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-mute leading-relaxed">
              Tolérance ± 2 mm. Mêmes proportions pour les trois tailles, seule
              la hauteur change.
            </p>

            {/* Price + CTA */}
            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-edge pt-8">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-mute mb-2">
                  Prix unitaire · livraison offerte
                </p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={size.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    data-testid="product-price"
                    className="font-display text-5xl md:text-6xl text-moss leading-none"
                  >
                    {size.price}
                    <span className="text-terracotta">€</span>
                  </motion.p>
                </AnimatePresence>
              </div>

              <MagneticButton
                href={stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="product-buy-cta"
                className="inline-flex items-center gap-3 rounded-full bg-forest text-linen px-10 py-5 text-sm tracking-wide hover:bg-moss transition-colors duration-500"
              >
                Acheter ce modèle
                <span>→</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
