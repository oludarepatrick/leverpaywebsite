/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryExtraLight: ["LufgaExtraLight"],
        primaryLight: ["LufgaLight"],
        primaryThin: ["LufgaThin"],
        primaryMedium: ["LufgaMedium"],
        primaryRegular: ["LufgaRegular"],
        primarySemiBold: ["LufgaSemiBold"],
        primaryBold: ["lufgaBold"],
        primaryExtraBold: ["LufgaExtraBold"],
      },
    },
  },
  plugins: [],
};
