/**
 * Real product photo (background already removed — transparent PNG).
 * Adds a soft coloured glow behind the product and a tone-matched drop shadow.
 * When `dragging` is true, the bloom + shadow are suppressed so the product
 * cleanly follows the cursor / finger.
 */
export default function ProductPhoto({
  color,
  size = 320,
  className = "",
  priority = false,
  dragging = false,
}) {
  const glow = `radial-gradient(50% 50% at 50% 60%, ${color.hex}55 0%, transparent 70%)`;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size * 1.2 }}
      role="img"
      aria-label={`PawClean — ${color.name}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          background: glow,
          opacity: dragging ? 0 : 1,
        }}
      />
      <img
        src={color.image}
        alt={`PawClean — gobelet ${color.name}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className="relative w-full h-full object-contain select-none transition-[filter] duration-300"
        style={{
          filter: dragging
            ? "none"
            : `drop-shadow(0 20px 30px ${color.hex}55) drop-shadow(0 8px 14px rgba(26,34,28,0.18))`,
          WebkitFilter: dragging
            ? "none"
            : `drop-shadow(0 20px 30px ${color.hex}55) drop-shadow(0 8px 14px rgba(26,34,28,0.18))`,
        }}
      />
    </div>
  );
}
