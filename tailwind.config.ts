import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        indigo: {
          999: "#101323",
        },
        violet: {
          999: "#030103",
        },
        green: {
          999: "#010200",
        },
        emerald: {
          999: "#010200",
        },
        teal: {
          999: "#000202",
        },
        gray: {
          999: "#000203",
        },
        blue: {
          999: "#010205",
        },
        purple: {
          999: "#030103",
        },
        red: {
          999: "#040001",
        },
        orange: {
          999: "#030100",
        },
        yellow: {
          999: "#020100",
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config