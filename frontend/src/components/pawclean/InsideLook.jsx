import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

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
  const { t } = useLang();
  const ins = t.inside;

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
            {ins.overline}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            {ins.headline.split(" ").slice(0, -2).join(" ")}{" "}
            <em className="text-terracotta">
              {ins.headline.split(" ").slice(-2).join(" ")}
            </em>
          </h2>
        </motion.div>

        {/* Row 1 */}
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
              alt={ins.row1.imgAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
              data-testid="inside-img-group"
            />
          </div>
          <div className="lg:pl-4">
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
              {ins.row1.overline}
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss mb-5">
              {ins.row1.title}
            </h3>
            <p className="text-mute text-base md:text-lg leading-relaxed max-w-md">
              {ins.row1.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {ins.row1.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.25em] uppercase text-moss bg-white border border-edge rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center mb-20 md:mb-28"
        >
          <div className="lg:pr-4 lg:order-1 order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
              {ins.row2.overline}
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss mb-5">
              {ins.row2.title1}
              <br />
              {ins.row2.title2}
            </h3>
            <p className="text-mute text-base md:text-lg leading-relaxed max-w-md">
              {ins.row2.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {ins.row2.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.25em] uppercase text-moss bg-white border border-edge rounded-full px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden card-bloom bg-white lg:order-2 order-1">
            <img
              src={IMG_PARTS}
              alt={ins.row2.imgAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
              data-testid="inside-img-parts"
            />
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-mute mb-4">
                {ins.row3.overline}
              </p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-moss">
                {ins.row3.title1}{" "}
                <em className="text-terracotta">{ins.row3.titleAccent}</em>
              </h3>
            </div>
            <p className="text-sm text-mute max-w-sm">{ins.row3.body}</p>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden card-bloom bg-white">
            <img
              src={IMG_USAGE}
              alt={ins.row3.imgAlt}
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
