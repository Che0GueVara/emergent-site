import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis-powered smooth, buttery scroll for the whole page.
 * Respects prefers-reduced-motion and disables itself if needed.
 * Anchor clicks (a[href^="#"]) are intercepted for animated scrollTo.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out quartic
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
      wheelMultiplier: 1.05,
    });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Smooth anchor link handling
    const onAnchorClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -10, duration: 1.3 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
