import { motion } from "framer-motion";
import { STEPS } from "@/lib/pawclean-data";

const reveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: (i) => ({
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="section-how"
      className="relative py-16 md:py-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            Le rituel
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            Trois gestes. <em className="text-terracotta">Aucun produit.</em>
            <br />
            Une patte impeccable.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              data-testid={`step-card-${i}`}
              className="relative"
            >
              <div className="flex items-baseline gap-6 mb-6">
                <span className="font-display text-7xl text-terracotta leading-none">
                  {s.n}
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
