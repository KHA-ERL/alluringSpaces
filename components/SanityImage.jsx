import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function SanityImage({ image, alt = "", className = "", priority = false, sizes = "100vw" }) {
  const src = typeof image === "string" ? image : urlForImage(image)?.width(1600).height(1000).fit("crop").auto("format").url();

  if (!src) {
    return null;
  }

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      priority={priority}
      sizes={sizes}
    />
  );
}
