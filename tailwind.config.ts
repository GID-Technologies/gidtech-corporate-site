import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#020617",
        navy: "#06111f",
        panel: "rgba(15, 23, 42, 0.64)",
        line: "rgba(148, 163, 184, 0.16)",
        electric: "#38bdf8",
        cyanGlow: "#22d3ee"
      },
      boxShadow: {
        glow: "0 0 50px rgba(56, 189, 248, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        "premium-radial":
          "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 30%), radial-gradient(circle at 78% 10%, rgba(34, 211, 238, 0.14), transparent 32%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.12), transparent 36%)"
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
        "fade-up": "fadeUp 800ms ease both"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
