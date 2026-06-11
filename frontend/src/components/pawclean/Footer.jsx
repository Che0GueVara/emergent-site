import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      data-testid="section-footer"
      className="relative bg-linen border-t border-edge"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
        <a
          href="#hero"
          className="font-display text-4xl tracking-tight text-forest inline-block"
          data-testid="footer-logo"
        >
          Paw<span className="italic text-terracotta">Clean</span>
        </a>
        <p className="mt-4 text-sm text-mute max-w-md mx-auto">
          {t.footer.tagline}
        </p>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-[0.25em] uppercase text-mute">
          <a href="#" className="hover:text-forest transition-colors">
            {t.footer.legal}
          </a>
          <a href="#" className="hover:text-forest transition-colors">
            {t.footer.cgv}
          </a>
          <a href="#" className="hover:text-forest transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-forest transition-colors">
            {t.footer.cookies}
          </a>
          <a href="#" className="hover:text-forest transition-colors">
            {t.footer.contact}
          </a>
        </nav>

        <div
          className="mt-12 flex items-center justify-center gap-4 flex-wrap"
          data-testid="payment-icons"
        >
          {["Visa", "Mastercard", "PayPal", "Apple Pay", "Amex"].map((p) => (
            <span
              key={p}
              className="text-[10px] tracking-[0.25em] uppercase text-mute border border-edge rounded-full px-4 py-2 bg-white"
            >
              {p}
            </span>
          ))}
        </div>

        <p className="mt-12 text-xs text-mute">
          © {new Date().getFullYear()} PawClean SAS — {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
