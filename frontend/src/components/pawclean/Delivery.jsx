import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CountUp({ to, suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      // ease out expo
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  {
    n: 0,
    suffix: "€",
    label: "Livraison gratuite",
    body: "Partout en France métropolitaine, sans condition de montant.",
  },
  {
    n: 10,
    suffix: " j",
    label: "Délai moyen",
    body: "6 à 10 jours ouvrés, avec suivi e-mail à chaque étape.",
  },
  {
    n: 30,
    suffix: " j",
    label: "Retour offert",
    body: "Satisfait ou remboursé, sans justification, pendant 30 jours.",
  },
];

export default function Delivery() {
  return (
    <section
      id="delivery"
      data-testid="section-delivery"
      className="relative px-4 md:px-12 py-12"
    >
      <div className="relative max-w-7xl mx-auto bg-forest text-linen rounded-[2.5rem] py-24 md:py-32 px-8 md:px-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(247,245,240,0.5) 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />
        <div className="relative">
          <p className="text-xs tracking-[0.3em] uppercase text-linen/70 mb-6">
            Promesse PawClean
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-2xl">
            Commandé aujourd&apos;hui.
            <br />
            <em className="text-terracotta">Adopté la semaine prochaine.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-testid={`delivery-stat-${i}`}
              >
                <p className="font-display text-6xl md:text-7xl text-terracotta leading-none mb-5">
                  <CountUp to={s.n} suffix={s.suffix} />
                </p>
                <p className="text-lg md:text-xl text-linen mb-2">{s.label}</p>
                <p className="text-sm text-linen/65 max-w-xs leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
