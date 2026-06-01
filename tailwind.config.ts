import type { Config } from "tailwindcss";

// Paleta i typografia zgodne z briefem (motyw: kłosy zboża, ciepło, natura).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wheat: "#C99A3A", // wheat gold
        cream: "#FFF8ED", // warm cream
        linen: "#EADDC8", // linen beige
        olive: "#6F7D45", // olive green
        forest: "#26351F", // deep forest
        brown: "#6B4B2A", // warm brown
        clay: "#B87952", // soft clay
        ink: "#231F18", // dark text
      },
      fontFamily: {
        // Nowoczesna para: Sora (nagłówki) + Manrope (treść).
        serif: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(35, 31, 24, 0.18)",
      },
      backgroundImage: {
        "wheat-fade":
          "linear-gradient(180deg, rgba(38,53,31,0.0) 0%, rgba(38,53,31,0.55) 100%)",
      },
      keyframes: {
        sway: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
