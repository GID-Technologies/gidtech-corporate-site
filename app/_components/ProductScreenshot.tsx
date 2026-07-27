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
  cropTop = 8,
  zoom = 1.08,
  className = "",
}: ProductScreenshotProps) {
  const extraBottom = Math.max(0, (zoom - 1) * 100);

  return (
    <div
      className={`relative isolate aspect-[16/9] overflow-hidden bg-black ${className}`}
    >
      <div
        className="absolute inset-x-0"
        style={{
          top: `-${cropTop}%`,
          bottom: `-${extraBottom}%`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={92}
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
