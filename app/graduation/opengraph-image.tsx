import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Build With GID — Aptech Graduation 2026";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function GraduationOpenGraphImage() {
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
            "radial-gradient(circle at center, rgba(255,255,255,0.14), transparent 48%)",
        }}
      />

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
          width="145"
          height="145"
          style={{
            objectFit: "contain",
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: 24,
            padding: "10px 18px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            fontSize: 18,
            color: "#b5b5b5",
            letterSpacing: "2px",
          }}
        >
          APTECH 2026
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 470,
            marginTop: 26,
            fontSize: 68,
            lineHeight: 0.95,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          BUILD WITH GID
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 22,
            color: "#a3a3a3",
          }}
        >
          Build • Hire • Partner • Explore
        </div>
      </div>
    </div>,
    size,
  );
}
