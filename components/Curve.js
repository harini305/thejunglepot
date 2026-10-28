// Curved lower edge of a section, filled with the next section's colour,
// with a terracotta line along the curve.
export default function Curve({ to, flip = false }) {
  const edge = flip ? "M0,40 C360,120 1080,0 1440,70" : "M0,70 C360,0 1080,120 1440,40";
  return (
    <svg className="curve" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d={`${edge} L1440,120 L0,120 Z`} fill={`var(--curve-${to})`} />
      <path d={edge} fill="none" className="curve-line" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
