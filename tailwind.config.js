/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#020202",
        platinum: "#C0C0AF",
        newGrey: "#D5D6D5",
        offWhite: "#EEEFEC",
        otherBlack: "#000000",
      },
    },
  },
  plugins: [],
};
