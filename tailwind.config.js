/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderImage: {
        gradient: "linear-gradient(103.52deg, #3A3EF5 18.99%, #32C8F1 82.34%)",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      animation: {
        moveX: 'moveX 1s ease-in-out infinite',
      },
      colors: {
        "offwhite": '#F5F9FC',
        "naturalblack": '#222222',
        "lightgray": '#D1E0E9',
        "off-black": "#01000B",

      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)",
      }
    },
  },
plugins: [],
}