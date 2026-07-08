/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4FC",
        ink: "#211D2E",
        muted: "#726C88",
        line: "#E3DEF3",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#7C5CD1",
          soft: "#ECE6FA",
          deep: "#55368F",
        },
        olive: "#6B5A94",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
