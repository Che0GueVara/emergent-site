import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function FAQSection() {
  const { t } = useLang();
  const faqItems = t.faqItems;

  return (
    <section
      id="faq"
      data-testid="section-faq"
      className="relative py-16 md:py-24 bg-linen"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-mute mb-6">
            {t.faq.overline}
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-moss">
            {t.faq.headline1} <em className="text-terracotta">{t.faq.headlineAccent}</em>{t.faq.headline2}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-edge last:border-b-0 [&[data-state=open]_.acc-icon]:rotate-45"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="py-7 text-left hover:no-underline group">
                <span className="font-display text-xl md:text-2xl text-moss pr-6 leading-snug">
                  {item.q}
                </span>
                <Plus
                  size={22}
                  strokeWidth={1.5}
                  className="acc-icon shrink-0 text-terracotta"
                />
              </AccordionTrigger>
              <AccordionContent className="pb-8 text-base md:text-lg text-mute leading-relaxed max-w-2xl">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
