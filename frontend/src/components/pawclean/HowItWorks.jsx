import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HowItWorks() {
  const { t } = useLang();
  const steps = t.steps;

  return (
    <section
      id="how"
      data-testid="section-how"
      className="relative pt-16 md:pt-24 pb-6 md:pb-8 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            {t.how.overline}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            {t.how.headline1} <em className="text-terracotta">{t.how.headline2}</em>
            <br />
            {t.how.headline3}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              data-testid={`step-card-${i}`}
              className="relative"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-7xl text-terracotta leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-edge mt-auto mb-3" />
              </div>
              <h3 className="font-display text-3xl text-moss mb-3">
                {s.title}
              </h3>
              <p className="text-mute text-base leading-relaxed max-w-sm">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
