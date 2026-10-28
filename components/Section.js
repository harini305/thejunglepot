import Curve from "./Curve";

// A themed page section. `tone` is its own colour; `next` is the colour that follows,
// which draws the curved edge between them (none when both are the same).
export default function Section({ tone = "cream", next, id, className = "", children, ...rest }) {
  const curve = next && next !== tone;
  const classes = ["t-section", `t-${tone}`, tone === "deep" ? "surface-deep" : "", curve ? "has-curve" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={id} className={classes} {...rest}>
      {children}
      {curve && <Curve to={next} flip={next !== "cream"} />}
    </section>
  );
}
