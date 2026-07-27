import Image from "next/image";

type ProductScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  cropTop?: number;
  zoom?: number;
  className?: string;
};

export default function ProductScreenshot({
  src,
  alt,
  priority = false,
  cropTop = 10,
  zoom = 1.13,
  className = "",
}: ProductScreenshotProps) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden bg-black ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={92}
        sizes="(max-width: 768px) 100vw, 720px"
        className="object-cover"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "center top",
          top: `-${cropTop}%`,
        }}
      />
    </div>
  );
}
