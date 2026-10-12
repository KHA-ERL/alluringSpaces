/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./sanity/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14110f",
        charcoal: "#1f211c",
        forest: "#123f38",
        moss: "#6f7b5f",
        clay: "#a34f35",
        cream: "#f4efe7",
        paper: "#fbf8f2",
        muted: "#c7b9a6"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(16, 12, 8, 0.28)",
        soft: "0 20px 70px rgba(36, 25, 17, 0.12)"
      }
    }
  },
  plugins: []
};
