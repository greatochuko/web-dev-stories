/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "zoom-in": "zoomIn .3s forwards",
        "fade-in": "fadeIn .3s forwards",
      },
    },
    keyframes: {
      zoomIn: { "100%": { scale: "105%" } },
      fadeIn: { "100%": { opacity: 1 } },
    },
  },
  plugins: [],
};
