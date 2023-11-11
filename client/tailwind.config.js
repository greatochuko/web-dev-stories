/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "zoom-in": "zoomIn .3s forwards",
        "fade-in": "fadeIn .3s forwards",
        rotate: "rotate 1s infinite linear",
        slowpulse: "slowpulse 1.5s infinite linear",
      },
    },
    keyframes: {
      zoomIn: { "100%": { scale: "105%" } },
      fadeIn: { "100%": { opacity: 1 } },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      slowpulse: {
        "0%": { opacity: 1 },
        "50%": { opacity: 0.3 },
        "100%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
