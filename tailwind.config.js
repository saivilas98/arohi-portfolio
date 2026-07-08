/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F4",
        ink: "#1B1812",
        muted: "#75705F",
        line: "#E7E1D4",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#B8502F",
          soft: "#F2E2D5",
          deep: "#8C3B22",
        },
        olive: "#565232",
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
