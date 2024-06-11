/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "412px",
        "sm-only": { max: "639px" },
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
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-full-width": {},
        ".hover-effect": {
          content: '""',
          position: "absolute",
          top: "-4px",
          right: "-4px",
          bottom: "-4px",
          left: "-4px",
          zIndex: "-10",
          borderRadius: "0.5rem",
          backgroundColor: "#303032",
        },
      };
      addUtilities(newUtilities, ["hover"]);
    },
  ],
};
