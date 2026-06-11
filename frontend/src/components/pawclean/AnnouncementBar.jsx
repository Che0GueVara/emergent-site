import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";

function nextSunday(locale) {
  const d = new Date();
  const days = (7 - d.getDay()) % 7 || 7;
  d.setDate(d.getDate() + days);
  return d.toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function AnnouncementBar() {
  const { lang, t } = useLang();
  const MESSAGES = t.announcement.messages;

  const [closed, setClosed] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("pc-banner-closed")) setClosed(true);
  }, []);

  useEffect(() => {
    if (closed) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), 4200);
    return () => clearInterval(id);
  }, [closed, MESSAGES.length]);

  // Reset index when language changes to avoid out-of-bound
  useEffect(() => {
    setIdx(0);
  }, [lang]);

  if (closed) return null;

  return (
    <div
      className="relative z-[60] bg-moss text-linen"
      data-testid="announcement-bar"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-2 flex items-center gap-3">
        <div className="flex-1 min-w-0 text-center relative h-5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${idx}`}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-[0.18em] uppercase whitespace-nowrap"
            >
              <span aria-hidden className="text-terracotta">
                {MESSAGES[idx].icon}
              </span>
              <span className="truncate">{MESSAGES[idx].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
        <span className="hidden sm:inline text-[10px] tracking-[0.25em] uppercase text-linen/60">
          {t.announcement.until} {nextSunday(lang)}
        </span>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("pc-banner-closed", "1");
            setClosed(true);
          }}
          aria-label={t.announcement.close}
          data-testid="announcement-close"
          className="ml-1 text-linen/70 hover:text-linen transition-colors"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
