/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-header": "url('/src/components/header/image-background.jpg')",
      },
      animation: {
        typing: "typing 6s steps(25) infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "25ch" },
        },
      },
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      backgroundColor: {
        custom: "#F8F6F4",
      },
    },
  },
  plugins: [],
};
