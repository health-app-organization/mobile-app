const {
  primarycolor,
  linkcolor,
  primarycolortwo,
  lightGreen,
  lightBlue,
  secondaryColor,
} = require("./constants/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utilities/**/*.{js,ts,jsx,tsx}",
    "./global.css",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      height: {
        105: "450px",
        128: "512px",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        primary: primarycolor,
        secondary: secondaryColor,
        primaryTwo: primarycolortwo,
        // secondary: colors.secondary,
        // tertiary: colors.tertiary,
        greyText: "#949494",
        error: "#ED4337",
        link: linkcolor,
        purple1: "#9647FF",
        lightGreen: lightGreen,
        lightBlue: lightBlue,
      },
    },
  },
  plugins: [],
};
