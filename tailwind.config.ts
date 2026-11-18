import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5EFE2",
        limewash: "#EFE7D6",
        terracotta: "#B24E2B",
        "terracotta-deep": "#8C3B21",
        teak: "#3A2416",
        "teak-deep": "#241409",
        ink: "#1B1611",
        ochre: "#C0872E",
        "ochre-light": "#DDAA55",
        palm: "#4A5B3C",
        "palm-deep": "#2E3A25",
        stone: "#DCD3BF",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      maxWidth: {
        content: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
