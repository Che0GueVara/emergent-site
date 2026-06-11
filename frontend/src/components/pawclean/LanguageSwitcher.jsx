import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`flex items-center gap-1 text-xs tracking-[0.2em] uppercase ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`px-2 py-0.5 rounded transition-all duration-300 ${
          lang === "fr"
            ? "text-forest font-medium"
            : "text-mute hover:text-forest"
        }`}
      >
        FR
      </button>
      <span className="text-edge select-none">|</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-0.5 rounded transition-all duration-300 ${
          lang === "en"
            ? "text-forest font-medium"
            : "text-mute hover:text-forest"
        }`}
      >
        EN
      </button>
    </div>
  );
}
