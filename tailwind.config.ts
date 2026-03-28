import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kokoa-cream": "#FEF7ED",  // warmer golden cream — like melted white chocolate
        "kokoa-dark":  "#4A2D24",  // slightly lighter warm chocolate brown
        "kokoa-berry": "#E8284F",  // punchier vivid red — more appetite-stimulating
        "kokoa-sage":  "#5C7A28",  // brighter fresh green — evokes ripe fruit
        "kokoa-husk":  "#E8A858",  // warm amber/caramel — butterscotch, very appetizing
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
