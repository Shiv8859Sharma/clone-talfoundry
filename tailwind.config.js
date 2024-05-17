/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        cardRotate: {
          "0%": { zIndex: "10", transform: "rotate(-15deg)" },
          "25%": { zIndex: "20", transform: "rotate(15deg)" },
          "100%": { zIndex: "30", transform: "rotate(0deg)" },
        },
        cardBounce: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "40%": { transform: "scale(1)", opacity: 1 },
          "70%": { transform: "scale(1.05)" },
          "100%": { opacity: 0, transform: "scale(1.05)" }
        },
        heroAPulse: {
          "0%": { opacity: 0 },
          "70%": { opacity: 1, transform: "translate(0, 0)" },
          "100%": { opacity: 0, transform: 'translate(-10px, -10px)' }
        },
        heroBPulse: {
          "0%": { opacity: 0 },
          "70%": { opacity: 1, transform: "translate(0, 0)" },
          "100%": { opacity: 0, transform: 'translateY(10px)' }
        },
        heroCPulse: {
          "0%": { opacity: 0 },
          "70%": { opacity: 1, transform: "translate(0, 0)" },
          "100%": { opacity: 0, transform: 'translateX(10px)' }
        }
      }
    }
  },
  plugins: [],
}

