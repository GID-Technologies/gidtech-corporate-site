import { ImageResponse } from "next/og";

export const alt = "Connect With GID Technologies — Aptech Graduation 2026";

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
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.16), transparent 26%)",
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
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          opacity: 0.55,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              GID
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: "5px",
                }}
              >
                GIDTECH
              </span>

              <span
                style={{
                  marginTop: 6,
                  color: "#858585",
                  fontSize: 15,
                }}
              >
                GID Technologies
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "11px 18px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              color: "#d4d4d4",
              fontSize: 16,
            }}
          >
            Aptech Graduation 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              marginBottom: 22,
              color: "#a3a3a3",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            The stage is only the beginning
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 970,
              fontSize: 70,
              lineHeight: 1.03,
              fontWeight: 700,
              letterSpacing: "-4px",
            }}
          >
            Choose how you want to connect with GID Technologies.
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 900,
              marginTop: 26,
              color: "#b5b5b5",
              fontSize: 24,
              lineHeight: 1.45,
            }}
          >
            Build. Hire. Partner. Support. Test. Explore.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "#d4d4d4",
            fontSize: 18,
          }}
        >
          <span>Continue the conversation after the presentation.</span>
          <span style={{ color: "#ffffff", fontWeight: 700 }}>
            gidtechnologies.com/graduation
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
