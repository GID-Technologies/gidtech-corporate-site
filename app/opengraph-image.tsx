import { ImageResponse } from "next/og";

export const alt =
  "GID Technologies — Practical digital products and business solutions";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 45%)",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "70px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 116,
            height: 116,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 32,
            backgroundColor: "rgba(255,255,255,0.06)",
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          GID
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "8px",
          }}
        >
          GIDTECH
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 900,
            marginTop: 22,
            fontSize: 38,
            lineHeight: 1.2,
            fontWeight: 600,
            color: "#d4d4d4",
          }}
        >
          Build. Solve. Connect.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            padding: "12px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 999,
            fontSize: 18,
            color: "#a3a3a3",
          }}
        >
          Digital products • Business solutions • Future platforms
        </div>
      </div>
    </div>,
    size,
  );
}
