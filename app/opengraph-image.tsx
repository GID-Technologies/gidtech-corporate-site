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
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 75% 15%, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08), transparent 30%)",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Background grid */}
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

      {/* Left identity rail */}
      <div
        style={{
          width: 190,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            width: 98,
            height: 98,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 28,
            background: "rgba(255,255,255,0.04)",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          GID
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 70px",
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
              gap: 14,
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "6px",
            }}
          >
            GIDTECH
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              color: "#d4d4d4",
              fontSize: 16,
            }}
          >
            RC 9595315
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              marginBottom: 24,
              color: "#a3a3a3",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Proof-led technology company
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 830,
              fontSize: 62,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: "-3px",
            }}
          >
            Practical digital solutions built around real business problems.
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 830,
              marginTop: 26,
              color: "#b5b5b5",
              fontSize: 23,
              lineHeight: 1.45,
            }}
          >
            Business websites, visibility systems, custom platforms, automation
            workflows, and live product execution.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 22,
              color: "#d4d4d4",
              fontSize: 17,
            }}
          >
            <span>Solutions</span>
            <span>StatBet</span>
            <span>PaperTalk</span>
            <span>Build With GID</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            gidtechnologies.com
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
