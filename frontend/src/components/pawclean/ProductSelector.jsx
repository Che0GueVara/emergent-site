import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SIZES, COLORS, STRIPE_LINKS } from "@/lib/pawclean-data";
import { useLang } from "@/lib/i18n";
import ProductPhoto from "@/components/pawclean/ProductPhoto";
import MagneticButton from "@/components/pawclean/MagneticButton";

const STRIPE_LINKS_USD = {
  S: "https://buy.stripe.com/5kQ28j61kgWadMV289e7m05",
  M: "https://buy.stripe.com/14A7sD2P85ds7oxbIJe7m04",
  L: "https://buy.stripe.com/00w7sDexQbBQ9wFfYZe7m03",
};

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
  const { t } = useLang();
  const prod = t.product;
  const sizeTexts = t.sizes;
  const colorTexts = t.colors;

  const [size, setSize] = useState(SIZES[1]);
  const [color, setColor] = useState(COLORS[0]);

  const isUSD = prod.currency === "$";
  const stripeUrl = isUSD ? STRIPE_LINKS_USD[size.id] : STRIPE_LINKS[size.id];

  // Merge translated text with static data
  const sizes = SIZES.map((s, i) => ({
    ...s,
    weight: sizeTexts[i]?.weight ?? s.weight,
    breed: sizeTexts[i]?.breed ?? s.breed,
  }));
  const colors = COLORS.map((c, i) => ({
    ...c,
    name: colorTexts[i]?.name ?? c.name,
  }));

  const currentSize = sizes.find((s) => s.id === size.id) ?? sizes[1];
  const currentColor = colors.find((c) => c.id === color.id) ?? colors[0];
  const specLabels = sizeTexts[SIZES.findIndex((s) => s.id === size.id)]?.dimensions ?? {
    height: "Height", width: "Width", opening: "Opening"
  };

  return (
    <section
      id="product"
      data-testid="section-product"
      className="relative pt-6 md:pt-10 pb-16 md:pb-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Headline — always on top, visible on all screen sizes */}
        <div className="mb-10 md:mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-5">
            {prod.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-moss">
            {prod.headline1}
            <br />
            <em className="text-terracotta">{prod.headline2}</em>
          </h2>
          <p className="mt-6 text-mute text-base md:text-lg max-w-md leading-relaxed">
            {prod.body}
          </p>
        </div>

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
              <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${color.id}-${size.id}`}
                    src={`/sizecharts/${size.id}_${color.id}.png`}
                    alt={`PawClean ${size.label} — ${currentColor.name}`}
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
                {prod.scaleLabel}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-mute">
                <span className="tracking-[0.25em] uppercase">
                  PawClean · {currentColor.name}
                </span>
                <span className="tracking-[0.25em] uppercase">
                  {prod.sizeLabel} {size.label}
                </span>
              </div>
            </div>
          </div>

          {/* Configurator */}
          <div>
            {/* Color swatches */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.25em] uppercase text-mute">
                  {prod.colorLabel}
                </span>
                <span className="text-sm text-moss">{currentColor.name}</span>
              </div>
              <div className="flex items-center gap-4">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setColor(COLORS.find((x) => x.id === c.id))}
                    data-testid={`color-swatch-${c.id}`}
                    aria-label={c.name}
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

            {/* Size selector */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.25em] uppercase text-mute">
                  {prod.sizeLabel}
                </span>
                <span className="text-sm text-moss">
                  {currentSize.breed} · {currentSize.weight}
                </span>
              </div>
              <div className="flex items-end gap-4 md:gap-6">
                {sizes.map((s) => {
                  const active = size.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSize(SIZES.find((x) => x.id === s.id))}
                      data-testid={`size-tag-${s.id}`}
                      aria-pressed={active}
                      className={`relative no-select group flex flex-col items-center justify-end pb-4 pt-6 px-4 w-24 md:w-28 h-36 md:h-40 rounded-[6px] border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active
                          ? "kraft-paper border-moss/40 -rotate-[3deg] shadow-[0_8px_30px_-6px_rgba(30,58,47,0.25)]"
                          : "bg-white border-edge hover:-translate-y-1"
                      }`}
                      style={{ transformOrigin: "center bottom" }}
                    >
                      <span
                        className={`absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border ${
                          active ? "border-moss/60 bg-linen/60" : "border-edge bg-linen"
                        }`}
                      />
                      <span
                        className={`absolute top-[18px] left-1/2 -translate-x-1/2 w-px h-3 ${
                          active ? "bg-moss/40" : "bg-edge"
                        }`}
                      />
                      <div className="flex-1 flex items-end justify-center mb-1">
                        <DogSilhouette src={s.icon} scale={s.dogScale} active={active} />
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

            {/* Dimensions */}
            <div
              data-testid="size-chart"
              className="mt-10 grid grid-cols-3 rounded-2xl border border-edge bg-white overflow-hidden card-bloom"
            >
              {[
                { labelKey: "height", value: size.dimensions.height, testId: "spec-height" },
                { labelKey: "width", value: size.dimensions.width, testId: "spec-width" },
                { labelKey: "opening", value: size.dimensions.opening, testId: "spec-opening" },
              ].map((s, i) => (
                <div
                  key={s.testId}
                  data-testid={s.testId}
                  className={`px-4 md:px-6 py-5 text-center ${i < 2 ? "border-r border-edge" : ""}`}
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                    {specLabels[s.labelKey]}
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${size.id}-${s.testId}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="font-display text-2xl md:text-3xl text-moss leading-none"
                    >
                      {s.value}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-mute leading-relaxed">
              {prod.tolerance}
            </p>

            {/* Price + CTA */}
            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-edge pt-8">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-mute mb-2">
                  {prod.priceLabel}
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
                    {isUSD && <span className="text-terracotta">$</span>}
                    {prod.prices ? prod.prices[size.id] : size.price}
                    {!isUSD && <span className="text-terracotta">€</span>}
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
                {prod.buyCta}
                <span>→</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
