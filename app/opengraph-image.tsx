import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "GID Technologies — Digital products and practical business solutions";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "brand", "GID Logo white.png"),
    "base64",
  );

  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.13), transparent 48%)",
        }}
      />

      {/* Everything important remains inside this square-safe region. */}
      <div
        style={{
          position: "relative",
          width: 540,
          height: 540,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(255,255,255,0.16)",
          borderRadius: 68,
          backgroundColor: "rgba(255,255,255,0.035)",
          textAlign: "center",
        }}
      >
        <img
          src={logoSrc}
          width="230"
          height="230"
          style={{
            objectFit: "contain",
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 70,
            fontWeight: 800,
            letterSpacing: "8px",
          }}
        >
          GIDTECH
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 27,
            color: "#b5b5b5",
            fontWeight: 600,
          }}
        >
          Build. Solve. Connect.
        </div>
      </div>
    </div>,
    size,
  );
}
