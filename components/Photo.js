import { imageSet } from "@/lib/images";

// Plain responsive <img> (Next image optimisation is disabled for this project).
// Photos with an AVIF set are wrapped in <picture> so supporting browsers fetch the
// smaller AVIF file; others fall back to WebP. Either way it is one request.
export default function Photo({ name, alt, sizes = "100vw", priority = false, className }) {
  const { src, srcSet, avifSrcSet, width, height } = imageSet(name);
  const img = (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
  if (!avifSrcSet) return img;
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      {img}
    </picture>
  );
}
