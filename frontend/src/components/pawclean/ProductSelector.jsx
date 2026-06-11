import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SIZES, COLORS, STRIPE_LINKS } from "@/lib/pawclean-data";
import ProductCup from "@/components/pawclean/ProductCup";
import MagneticButton from "@/components/pawclean/MagneticButton";

/** Dog silhouette — single path, scales between sizes */
function DogSilhouette({ scale = 1, color = "#1A221C" }) {
  return (
    <svg
      viewBox="0 0 120 70"
      style={{ transform: `scale(${scale})`, transformOrigin: "center bottom" }}
      width="56"
      height="40"
      aria-hidden
    >
      <path
        fill={color}
        d="M9 48c0-9 6-15 14-16 3-4 8-7 14-7 5 0 9 2 11 5 3-2 7-3 11-3 5 0 9 2 12 6 0-4 2-7 5-9 1 4 2 9 1 14 5 2 8 7 8 13 0 9-7 15-16 15h-3l-3 7H56l-3-7H30l-3 7H17l-2-7c-4 0-6-3-6-7z"
      />
      <circle cx="84" cy="40" r="2.4" fill="#F7F5F0" />
    </svg>
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
      className="relative py-32 md:py-44 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Gallery */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-white to-[#EFEBE3] overflow-hidden card-bloom">
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${color.id}-${size.id}`}
                    initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 4 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={color.bloom}
                  >
                    <ProductCup
                      tone={color.hex}
                      toneLight={color.light}
                      size={
                        size.id === "S" ? 280 : size.id === "M" ? 330 : 380
                      }
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-mute">
                <span className="tracking-[0.25em] uppercase">
                  PawClean · {color.name}
                </span>
                <span className="tracking-[0.25em] uppercase">
                  Taille {size.id}
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
                          scale={s.dogScale}
                          color={active ? "#1A221C" : "#5C6A61"}
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
