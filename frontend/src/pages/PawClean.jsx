import { useEffect } from "react";
import CustomCursor from "@/components/pawclean/CustomCursor";
import ScrollProgress from "@/components/pawclean/ScrollProgress";
import Hero from "@/components/pawclean/Hero";
import HowItWorks from "@/components/pawclean/HowItWorks";
import ProductSelector from "@/components/pawclean/ProductSelector";
import BeforeAfter from "@/components/pawclean/BeforeAfter";
import Features from "@/components/pawclean/Features";
import Reviews from "@/components/pawclean/Reviews";
import Delivery from "@/components/pawclean/Delivery";
import FAQSection from "@/components/pawclean/FAQSection";
import Footer from "@/components/pawclean/Footer";

export default function PawClean() {
  useEffect(() => {
    document.title = "PawClean — Des pattes propres en 10 secondes";
  }, []);

  return (
    <main
      data-testid="pawclean-root"
      className="relative bg-linen text-moss font-body antialiased"
    >
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <HowItWorks />
      <ProductSelector />
      <BeforeAfter />
      <Features />
      <Reviews />
      <Delivery />
      <FAQSection />
      <Footer />
    </main>
  );
}
