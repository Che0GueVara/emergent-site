import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Sparkles, Leaf, Droplets, Plane } from "lucide-react";

const ICONS = [Sparkles, Leaf, Droplets, Plane];

export default function Features() {
  const { t } = useLang();
  const featureItems = t.featureItems;

  return (
    <section
      id="features"
      data-testid="section-features"
      className="relative py-16 md:py-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            {t.features.overline}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            {t.features.headline1}
            <br />
            <em className="text-terracotta">{t.features.headline2}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featureItems.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`feature-card-${i}`}
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-edge card-bloom transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-10">
                  <Icon
                    size={28}
                    className="text-forest"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="font-display text-xs text-mute">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-moss leading-tight mb-3">
                  {f.title}
                </h3>
                <p className="text-mute text-base leading-relaxed max-w-sm">
                  {f.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
