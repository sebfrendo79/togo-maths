/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Drapeau togolais
        green: { DEFAULT: "#076A3A", dark: "#054F2C" },
        gold: { DEFAULT: "#FFCE00", dark: "#D9AE00" },
        clay: { DEFAULT: "#D21034", dark: "#A50D29" },
        // Fonds et encre
        sand: { DEFAULT: "#FBF1E0", deep: "#F3E3C7", outer: "#E9DCC3" },
        ink: { DEFAULT: "#1E2A38", soft: "#2C3B4E" },
        paper: "#FFFDF9",
        wrong: "#7A1F2B",
        muted: "#8A8A8A",
        warm: "#7A6A52",
        // Réponses du quiz : quatre pastels distincts, contrastés sur texte encre
        pastel: {
          1: "#FCEEE4",
          2: "#E6F4E9",
          3: "#FFF7D9",
          4: "#EDEFF5",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "system-ui", "sans-serif"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        pill: "999px",
      },
      keyframes: {
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-7px) rotate(3deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-soft": "bounceSoft 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.25s ease",
      },
    },
  },
  plugins: [],
};
