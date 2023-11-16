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
        "grow-shrink": "grow-shrink 700ms infinite linear",
        "grow-shrink-2": "grow-shrink 700ms infinite 200ms linear",
        "grow-shrink-3": "grow-shrink 700ms infinite 400ms linear",
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
        "50%": { opacity: 0.5 },
        "100%": { opacity: 1 },
      },
      "grow-shrink": {
        "0%": { transform: "scaleY(100%)" },
        "50%": { transform: "scaleY(250%)" },
        "100%": { transform: "scaleY(100%)" },
      },
    },
  },
  plugins: [],
};
