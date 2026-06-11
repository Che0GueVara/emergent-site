import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/pawclean-data";
import HeroCarousel from "@/components/pawclean/HeroCarousel";
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
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const cupY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  // responsive carousel sizing (cup size + orbit radius)
  const [layout, setLayout] = useState({ size: 680, radius: 460 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setLayout({ size: 280, radius: 160 });
      else if (w < 768) setLayout({ size: 380, radius: 230 });
      else if (w < 1100) setLayout({ size: 520, radius: 340 });
      else setLayout({ size: 680, radius: 460 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      data-testid="section-hero"
      className="relative w-full min-h-[100svh] overflow-hidden hero-wash flex flex-col"
    >
      <div className="grain" />

      {/* Top nav */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-4 sm:py-6 flex items-center justify-between">
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
            <a href="#inside" className="hover:text-forest transition-colors">
              Vu de près
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-forest border-b border-forest/30 pb-0.5 hover:border-forest transition-colors"
          >
            Acheter
            <span className="inline-block translate-y-[1px]">→</span>
          </a>
        </div>
      </header>

      {/* TOP — Circular 3D-style carousel (drag horizontally to rotate) */}
      <motion.div
        style={{ y: cupY }}
        className="relative z-10 pt-16 sm:pt-20 md:pt-24"
      >
        <HeroCarousel
          items={[COLORS[0], COLORS[1], COLORS[2]]}
          radius={layout.radius}
          productSize={layout.size}
          className="mx-auto max-w-6xl"
        />
      </motion.div>

      {/* BOTTOM — Editorial headline + CTA */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6 pt-2 pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-mute mb-6"
          data-testid="hero-overline"
        >
          Pour chiens et chats — fabriqué en silicone alimentaire
        </motion.p>
        <h1
          data-testid="hero-headline"
          className="font-display text-[clamp(2.5rem,7vw,6.25rem)] leading-[0.95] tracking-tight text-moss"
        >
          <motion.span
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Des pattes propres
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block italic"
          >
            en <span className="text-terracotta">dix secondes</span>.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-base md:text-lg text-mute max-w-xl"
        >
          La routine de la balade, simplifiée. Un gobelet en silicone, de
          l&apos;eau tiède, et la boue disparaît.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4"
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
        className="relative left-0 right-0 bg-forest text-linen py-3 overflow-hidden z-20"
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
