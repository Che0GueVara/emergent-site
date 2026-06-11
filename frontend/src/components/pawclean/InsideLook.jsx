import { motion } from "framer-motion";

const IMG_GROUP =
  "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/cuxhfhtb_main-image-2.jpeg";
const IMG_PARTS =
  "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/zzt553kx_main-image-3.jpeg";
const IMG_USAGE =
  "https://customer-assets.emergentagent.com/job_ten-seconds-clean/artifacts/u4sfsety_main-image-7.jpeg";

const fade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function InsideLook() {
  return (
    <section
      id="inside"
      data-testid="section-inside"
      className="relative pt-16 md:pt-24 pb-12 md:pb-16 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section heading */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            Vu de près
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            Pensé jusqu&apos;au{" "}
            <em className="text-terracotta">moindre détail.</em>
          </h2>
        </motion.div>

        {/* Row 1 — hero shot with bristle reveal */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center mb-20 md:mb-28"
        >
          <div className="relative rounded-[2rem] overflow-hidden card-bloom bg-white">
            <img
              src={IMG_GROUP}
              alt="Les trois coloris PawClean — le gobelet bleu basculé révèle la couronne intérieure de picots silicone"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
              data-testid="inside-img-group"
            />
          </div>
          <div className="lg:pl-4">
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
              L&apos;intérieur
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss mb-5">
              Une couronne de picots silicone à 360°.
            </h3>
            <p className="text-mute text-base md:text-lg leading-relaxed max-w-md">
              Souples, fermes, étudiés pour épouser chaque coussinet sans
              irriter. La rotation douce du gobelet décolle la boue, le sable et
              les pollens accumulés pendant la balade. Aucune brosse, aucun
              produit — juste de la friction maîtrisée et un peu d&apos;eau
              tiède.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["360° de picots", "Silicone alimentaire", "Sans BPA"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.25em] uppercase text-moss bg-white border border-edge rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 2 — Disassembled */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center mb-20 md:mb-28"
        >
          <div className="lg:pr-4 lg:order-1 order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
              Démontable
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss mb-5">
              Trois pièces.
              <br />
              Un démontage en deux secondes.
            </h3>
            <p className="text-mute text-base md:text-lg leading-relaxed max-w-md">
              Le corps, la bague et la couronne de picots se séparent d&apos;un
              quart de tour. Tout passe au lave-vaisselle sans se déformer.
              Aucun recoin oublié, aucune mauvaise odeur — votre gobelet reste
              impeccable, lavage après lavage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Lave-vaisselle",
                "Sans recoins cachés",
                "Pièces interchangeables",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.25em] uppercase text-moss bg-white border border-edge rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden card-bloom bg-white lg:order-2 order-1">
            <img
              src={IMG_PARTS}
              alt="Le gobelet PawClean démonté — le corps transparent, la bague blanche et la couronne de picots silicone"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
              data-testid="inside-img-parts"
            />
          </div>
        </motion.div>

        {/* Row 3 — Usage in real life (the 6-panel mosaic from the brand) */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
                En situation
              </p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss">
                Quatre gestes. Dix secondes.{" "}
                <em className="text-terracotta">Le tour est joué.</em>
              </h3>
            </div>
            <p className="text-sm text-mute max-w-sm">
              Eau tiède, rotation douce, séchage à la serviette — et le tapis
              d&apos;entrée vous remerciera.
            </p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden card-bloom bg-white">
            <img
              src={IMG_USAGE}
              alt="Démonstration en six étapes : remplir le gobelet, plonger la patte, sécher à la serviette, vider l'eau sale, et le résultat avant/après"
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
              data-testid="inside-img-usage"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
