import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "GID Technologies";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = await readFile(
    join(process.cwd(), "public", "brand", "GID Logo white.png"),
    "base64",
  );

  const src = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        borderRadius: 36,
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt=""
        width={420}
        height={420}
        style={{
          display: "block",
          width: 420,
          height: 420,
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
    </div>,
    size,
  );
}
