/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        colors: {
          black: "#000000",
          primary: "#146C94",
          secondary: "#19A7CE",
          accent: "#F6F1F1",
          neutral: "#AFD3E2",
          link: "#0070f0",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "10rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [],
}