import { ImageResponse } from "next/og";

export const alt = "Build With GID — Aptech Graduation 2026";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function GraduationOpenGraphImage() {
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
            "radial-gradient(circle at center, rgba(255,255,255,0.14), transparent 46%)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "12px 22px",
            border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: 999,
            fontSize: 20,
            color: "#d4d4d4",
          }}
        >
          APTECH GRADUATION 2026
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 84,
            lineHeight: 1,
            fontWeight: 800,
            letterSpacing: "-3px",
          }}
        >
          BUILD WITH GID
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 900,
            marginTop: 28,
            fontSize: 34,
            lineHeight: 1.25,
            color: "#b5b5b5",
          }}
        >
          Build • Hire • Partner • Support • Explore
        </div>
      </div>
    </div>,
    size,
  );
}
