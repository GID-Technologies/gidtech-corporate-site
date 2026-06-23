import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        navy: "#050505",
        panel: "rgba(13, 13, 13, 0.72)",
        line: "rgba(255, 255, 255, 0.10)",

        // Keep these names so existing code does not break,
        // but neutralize them away from the StatBet cyan identity.
        electric: "#FFFFFF",
        cyanGlow: "#CFCFCF",

        gidBlack: "#000000",
        gidCharcoal: "#0D0D0D",
        gidElevated: "#111111",
        gidText: "#FFFFFF",
        gidMuted: "#A3A3A3",
        gidDim: "#737373",
        gidHeritage: "#BFA46A",
      },

      boxShadow: {
        glow: "0 0 50px rgba(255, 255, 255, 0.08)",
        card: "0 24px 80px rgba(0, 0, 0, 0.42)",
        premium: "0 28px 100px rgba(0, 0, 0, 0.55)",
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px)",

        "premium-radial":
          "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.09), transparent 30%), radial-gradient(circle at 78% 10%, rgba(191, 164, 106, 0.08), transparent 32%), radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.045), transparent 36%)",
      },

      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
        "fade-up": "fadeUp 800ms ease both",
      },

      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
