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
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${color.id}-${size.id}`}
                    initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 4 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProductPhoto
                      color={color}
                      size={
                        size.id === "S" ? 320 : size.id === "M" ? 380 : 440
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

        {/* Fiche technique dynamique */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-32 pt-16 border-t border-edge"
          data-testid="size-chart"
        >
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
                Fiche technique
              </p>
              <h3 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-moss">
                Les cotes exactes,{" "}
                <em className="text-terracotta">taille {size.label}</em>.
              </h3>
            </div>
            <p className="text-sm text-mute max-w-xs">
              Schéma à l&apos;échelle. Mêmes proportions de gobelet, hauteur
              ajustée selon votre animal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            {/* Diagram with dimension callouts */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-white to-[#EFEBE3] p-8 md:p-12 card-bloom">
              <div className="relative aspect-[3/4] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${size.id}-${color.id}`}
                    src={`/sizecharts/${size.id}_${color.id}.png`}
                    alt={`Schéma PawClean ${size.label} — ${color.name}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-h-full max-w-full object-contain"
                    style={{
                      filter: `drop-shadow(0 18px 28px ${color.hex}33)`,
                    }}
                  />
                </AnimatePresence>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-mute">
                <span className="tracking-[0.25em] uppercase">
                  Taille {size.label}
                </span>
                <span className="tracking-[0.25em] uppercase">{color.name}</span>
              </div>
            </div>

            {/* Spec rows */}
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  label: "Hauteur totale",
                  detail: "Du socle au rebord supérieur",
                  value: size.dimensions.height,
                  testId: "spec-height",
                },
                {
                  label: "Largeur du gobelet",
                  detail: "À la base, point le plus large",
                  value: size.dimensions.width,
                  testId: "spec-width",
                },
                {
                  label: "Ouverture supérieure",
                  detail: "Diamètre intérieur du collerette",
                  value: size.dimensions.opening,
                  testId: "spec-opening",
                },
                {
                  label: "Poids de l'animal",
                  detail: size.breed,
                  value: size.weight,
                  testId: "spec-weight",
                  span: true,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  data-testid={row.testId}
                  className="group relative grid grid-cols-[1fr_auto] items-baseline gap-6 px-6 py-5 md:py-6 rounded-2xl bg-white border border-edge card-bloom transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-mute mb-1.5">
                      {row.label}
                    </p>
                    <p className="text-sm text-mute">{row.detail}</p>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${size.id}-${row.testId}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`font-display ${
                        row.span ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
                      } text-moss leading-none`}
                    >
                      {row.value}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ))}

              <p className="text-xs text-mute mt-3 leading-relaxed max-w-md">
                Mesures données avec une tolérance de fabrication de ± 2 mm.
                Toutes nos tailles partagent la même ouverture supérieure (7 cm)
                — seule la hauteur change.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
