import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import ProductPhoto from "@/components/pawclean/ProductPhoto";

const TAU = 360;

/**
 * Circular 3D-style carousel for the hero.
 * Products sit on a horizontal circle of radius R, viewed from the front.
 * Horizontal pointer drag rotates the whole arrangement around the Y axis.
 * On release, the rotation snaps to the nearest product (every 360/N degrees).
 * No carousel sliding — the items rotate around an invisible centre.
 */
export default function HeroCarousel({
  items,
  radius = 360,
  productSize = 540,
  className = "",
}) {
  const N = items.length;
  const step = TAU / N; // angle between products (e.g. 120° for 3)

  const rotation = useMotionValue(0); // raw, can keep increasing
  const smooth = useSpring(rotation, {
    stiffness: 220,
    damping: 28,
    mass: 0.6,
  });

  const [dragging, setDragging] = useState(false);
  const wrapperRef = useRef(null);
  const stateRef = useRef({ startX: 0, startRot: 0 });

  const onPointerDown = (e) => {
    if (e.target.closest("a, button")) return;
    stateRef.current.startX = e.clientX;
    stateRef.current.startRot = rotation.get();
    setDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - stateRef.current.startX;
    // 0.45° per pixel — feels close to a real turntable
    rotation.set(stateRef.current.startRot + dx * 0.45);
  };

  const finishDrag = () => {
    if (!dragging) return;
    setDragging(false);
    const r = rotation.get();
    // snap to nearest step
    const snapped = Math.round(r / step) * step;
    animate(rotation, snapped, {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.7,
    });
  };

  // gentle auto-rotation when idle (paused on hover/drag)
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (dragging || hovered) return;
    const id = setInterval(() => {
      const r = rotation.get();
      animate(rotation, r + step, {
        duration: 5.5,
        ease: [0.65, 0, 0.35, 1],
      });
    }, 5500);
    return () => clearInterval(id);
  }, [dragging, hovered, rotation, step]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full select-none touch-pan-y ${className}`}
      style={{ height: productSize * 1.35 }}
      data-testid="hero-carousel"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onPointerLeave={finishDrag}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* invisible centre we position items relative to */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: productSize, height: productSize * 1.2 }}
      >
        {items.map((item, i) => (
          <CarouselItem
            key={item.id}
            color={item}
            index={i}
            count={N}
            radius={radius}
            productSize={productSize}
            rotation={smooth}
            dragging={dragging}
          />
        ))}
      </div>

      {/* subtle hint shown on the first paint */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-mute pointer-events-none transition-opacity duration-500 ${
          dragging ? "opacity-0" : "opacity-70"
        }`}
        data-testid="carousel-hint"
      >
        ← faites pivoter →
      </div>
    </div>
  );
}

function CarouselItem({
  color,
  index,
  count,
  radius,
  productSize,
  rotation,
  dragging,
}) {
  const xRef = useRef(0);
  const zRef = useRef(0);
  const scaleRef = useRef(1);
  const opacityRef = useRef(1);
  const zIndexRef = useRef(0);
  const elRef = useRef(null);

  useEffect(() => {
    const baseAngle = (TAU / count) * index;
    const update = (rot) => {
      const ang = ((baseAngle + rot) * Math.PI) / 180;
      const x = Math.sin(ang) * radius;
      const z = Math.cos(ang) * radius - radius; // z=0 at front, z=-2R at back
      // scale: from 0.5 at back to 1 at front
      const t = (z + 2 * radius) / (2 * radius); // 0..1, 1 at front
      const scale = 0.55 + 0.45 * t;
      const opacity = 0.25 + 0.75 * t;
      const zi = Math.round(t * 100);
      const el = elRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${x}px, 0, ${z}px) scale(${scale})`;
      el.style.opacity = opacity;
      el.style.zIndex = zi;
      xRef.current = x;
      zRef.current = z;
      scaleRef.current = scale;
      opacityRef.current = opacity;
      zIndexRef.current = zi;
    };
    update(rotation.get());
    const unsub = rotation.on("change", update);
    return () => unsub();
  }, [rotation, radius, count, index]);

  return (
    <motion.div
      ref={elRef}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={
          dragging
            ? { y: 0, rotate: 0 }
            : { y: [0, -22, 0], rotate: [-1.5, 1.5, -1.5] }
        }
        transition={{
          duration: 8 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ProductPhoto
          color={color}
          size={productSize}
          priority={index === 0}
          dragging={dragging}
        />
      </motion.div>
    </motion.div>
  );
}
