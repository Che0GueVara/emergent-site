import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Apple-style custom cursor: ring follows with spring lag, dot is precise.
 * Hidden on touch devices. Enlarges on interactive elements.
 */
export default function CustomCursor() {
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const sRingX = useSpring(ringX, { stiffness: 180, damping: 22, mass: 0.6 });
  const sRingY = useSpring(ringY, { stiffness: 180, damping: 22, mass: 0.6 });
  const scale = useSpring(1, { stiffness: 300, damping: 22 });

  const enabledRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;
    enabledRef.current = true;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e) => {
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    const onOver = (e) => {
      const t = e.target;
      if (
        t.closest(
          "a, button, [role='button'], [data-magnetic], input, textarea, select, label, .cursor-hover",
        )
      ) {
        scale.set(1.8);
      } else {
        scale.set(1);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [ringX, ringY, dotX, dotY, scale]);

  return (
    <>
      <motion.div
        aria-hidden
        data-testid="custom-cursor-ring"
        style={{
          x: sRingX,
          y: sRingY,
          scale,
          width: 36,
          height: 36,
          borderRadius: 999,
          border: "1.5px solid #1E3A2F",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        aria-hidden
        data-testid="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "#C9644B",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 101,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
