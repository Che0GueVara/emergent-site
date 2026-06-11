import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { COLORS } from "@/lib/pawclean-data";
import ProductCup from "@/components/pawclean/ProductCup";
import MagneticButton from "@/components/pawclean/MagneticButton";
import { ArrowDown } from "lucide-react";

const tickerItems = [
  "Livraison gratuite en France",
  "Garantie 30 jours satisfait ou remboursé",
  "Silicone alimentaire — sans BPA",
  "+ 4 200 clients satisfaits",
  "Expédition sous 48 h",
  "Avis vérifiés ★ 4.9 / 5",
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cupY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="hero"
      data-testid="section-hero"
      className="relative w-full min-h-[100svh] overflow-hidden hero-wash"
    >
      <div className="grain" />

      {/* Top nav */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <a
            href="#hero"
            data-testid="brand-logo"
            className="font-display text-2xl tracking-tight text-forest"
          >
            Paw<span className="italic text-terracotta">Clean</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm text-mute">
            <a href="#how" className="hover:text-forest transition-colors">
              Le rituel
            </a>
            <a href="#product" className="hover:text-forest transition-colors">
              Le produit
            </a>
            <a href="#reviews" className="hover:text-forest transition-colors">
              Avis
            </a>
            <a href="#faq" className="hover:text-forest transition-colors">
              Questions
            </a>
          </nav>
          <a
            href="#product"
            data-testid="nav-cta"
            className="hidden md:inline-flex items-center gap-2 text-sm text-forest border-b border-forest/30 pb-0.5 hover:border-forest transition-colors"
          >
            Acheter
            <span className="inline-block translate-y-[1px]">→</span>
          </a>
        </div>
      </header>

      {/* Floating products */}
      <motion.div
        style={{ y: cupY, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="relative w-full max-w-5xl aspect-[16/9]">
          {/* Sky — back left */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [-4, -2, -4] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[6%] top-[28%] bloom-blue"
            style={{ filter: undefined }}
          >
            <ProductCup
              tone={COLORS[1].hex}
              toneLight={COLORS[1].light}
              size={200}
              className="bloom-blue"
            />
          </motion.div>

          {/* Sage — center front */}
          <motion.div
            animate={{ y: [0, -24, 0], rotate: [2, -2, 2] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 -translate-x-1/2 top-[24%]"
          >
            <ProductCup
              tone={COLORS[0].hex}
              toneLight={COLORS[0].light}
              size={300}
              className="bloom-green"
            />
          </motion.div>

          {/* Terracotta — right */}
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [3, 6, 3] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[6%] top-[30%]"
          >
            <ProductCup
              tone={COLORS[2].hex}
              toneLight={COLORS[2].light}
              size={210}
              className="bloom-terracotta"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-44 md:pt-52 pb-32 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs tracking-[0.3em] uppercase text-mute mb-8"
          data-testid="hero-overline"
        >
          Pour chiens et chats — fabriqué en silicone
        </motion.p>
        <h1
          data-testid="hero-headline"
          className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight text-moss"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Des pattes propres
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block italic"
          >
            en <span className="text-terracotta">dix secondes</span>.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-base md:text-lg text-mute max-w-xl mx-auto"
        >
          La routine de la balade, simplifiée. Un gobelet en silicone, de
          l&apos;eau tiède, et la boue disparaît.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <MagneticButton
            href="#product"
            data-testid="hero-cta"
            className="group inline-flex items-center gap-3 rounded-full bg-forest text-linen px-9 py-4 text-sm tracking-wide hover:bg-moss transition-colors duration-500"
          >
            Découvrir PawClean
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </MagneticButton>

          <a
            href="#how"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-mute hover:text-forest transition-colors"
            data-testid="hero-scroll-link"
          >
            <ArrowDown size={14} /> Voir le rituel
          </a>
        </motion.div>
      </motion.div>

      {/* Trust ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-forest text-linen py-3 overflow-hidden z-20"
        data-testid="trust-ticker"
      >
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap"
            >
              <span>{it}</span>
              <span className="text-terracotta">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
