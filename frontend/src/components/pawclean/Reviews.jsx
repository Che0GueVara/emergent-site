import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { REVIEWS } from "@/lib/pawclean-data";

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < n ? "fill-terracotta text-terracotta" : "text-edge"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      data-testid="section-reviews"
      className="relative py-16 md:py-24 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
              4 200 avis vérifiés
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
              Ce qu&apos;en disent
              <br />
              <em className="text-terracotta">leurs maîtres.</em>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-display text-5xl text-moss leading-none">
              4.9
            </div>
            <div>
              <Stars n={5} />
              <p className="text-xs text-mute mt-1">sur 5 — moyenne France</p>
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-testid={`review-card-${i}`}
              className="break-inside-avoid mb-6 p-7 rounded-3xl bg-white border border-edge card-bloom"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars n={r.rating} />
                <span
                  className="inline-flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase text-forest"
                  title="Avis vérifié"
                >
                  <BadgeCheck size={14} /> Vérifié
                </span>
              </div>
              <p className="font-display text-lg md:text-xl text-moss leading-snug mb-6">
                « {r.body} »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-edge">
                <img
                  src={r.photo}
                  alt={r.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-moss leading-tight">
                    {r.name}{" "}
                    <span className="text-mute font-normal">· {r.flag}</span>
                  </p>
                  <p className="text-xs text-mute">
                    {r.city} — {r.pet}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
