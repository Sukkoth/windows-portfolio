/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-only": { max: "639px" },
        xs: {
          min: "420px",
        },
      },
      gridTemplateColumns: {
        folder: "3fr 1fr repeat(3, 1fr)",
      },
      colors: {
        "hover-color": "#303032",
      },
      fontFamily: {
        anurati: ["Anurati", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
