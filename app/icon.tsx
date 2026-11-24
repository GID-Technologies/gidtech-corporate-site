import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "GID Technologies";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(
    join(process.cwd(), "public", "brand", "GID Logo white.png"),
    "base64",
  );

  const src = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: 64,
        height: 64,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt=""
        width={150}
        height={150}
        style={{
          display: "block",
          width: 150,
          height: 150,
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
    </div>,
    size,
  );
}
