module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Cinzel: ["Cinzel Decorative", "cursive"],
        Rakkas: ["Rakkas", "cursive"],
        Amatic: ["Amatic SC", "cursive"],
        Carattere: ["Carattere", "cursive"],
        Imperial: ["Imperial Script", "cursive"],
      },
    },
  },
  variants: {
    extend: { dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
    }},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
