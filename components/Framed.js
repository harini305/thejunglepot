import Photo from "./Photo";

// An original photograph in an organic frame with a thin gold border and an
// optional terracotta form behind it (blob: "br" | "bl" | "tr" | "tl").
export default function Framed({ name, alt, sizes, shape = "pebble", ratio = "4 / 5", blob, className = "", reveal = true }) {
  return (
    <div className={`framed${blob ? ` blob blob-${blob}` : ""} ${className}`} data-reveal={reveal ? "" : undefined}>
      <div className={`frame ${shape}`}>
        <div className={`shape ${shape}`} style={{ aspectRatio: ratio }}>
          <Photo name={name} alt={alt} sizes={sizes} />
        </div>
      </div>
    </div>
  );
}
