/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderImage: {
        gradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
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
      colors: {
        "offwhite": '#F5F9FC',
        "naturalblack": '#222222',
        "lightgray": '#D1E0E9',
        "off-black": '#02010C',
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)",
      }
    },
  },
plugins: [function ({ addUtilities }) {
  addUtilities({
    '.border-image-gradient': {
      'border-image-source': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
      'border-image-slice': '1',
    },
  });
},],
}