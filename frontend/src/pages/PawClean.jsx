import { useEffect } from "react";
import CustomCursor from "@/components/pawclean/CustomCursor";
import ScrollProgress from "@/components/pawclean/ScrollProgress";
import SmoothScroll from "@/components/pawclean/SmoothScroll";
import AnnouncementBar from "@/components/pawclean/AnnouncementBar";
import Hero from "@/components/pawclean/Hero";
import HowItWorks from "@/components/pawclean/HowItWorks";
import InsideLook from "@/components/pawclean/InsideLook";
import ProductSelector from "@/components/pawclean/ProductSelector";
import BeforeAfter from "@/components/pawclean/BeforeAfter";
import Features from "@/components/pawclean/Features";
import Reviews from "@/components/pawclean/Reviews";
import Delivery from "@/components/pawclean/Delivery";
import FAQSection from "@/components/pawclean/FAQSection";
import Footer from "@/components/pawclean/Footer";
import MobileBuyBar from "@/components/pawclean/MobileBuyBar";

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
      <SmoothScroll />
      <AnnouncementBar />
      <Hero />
      <HowItWorks />
      <ProductSelector />
      <InsideLook />
      <BeforeAfter />
      <Features />
      <Reviews />
      <Delivery />
      <FAQSection />
      <Footer />
      <MobileBuyBar />
    </main>
  );
}
