/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryAgrandirRegular: ["Agrandir-Regular"],
        primaryAgrandirBold: ["Agrandir-TextBold"],
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
    colors: {
      black: "var(--black)",
      white: "var(--white)",
      "white-shade-5": "var(--white-shade-5)",
      "gray-shade-0": "var(--gray-shade-0)",
      "gray-shade-5": "var(--gray-shade-5)",
      "orange-shade-0": "var(--orange-shade-0)",
      "orange-shade-5": "var(--orange-shade-5)",
      "orange-shade-10": "var(--orange-shade-10)",
      "orange-shade-15": "var(--orange-shade-15)",
      "orange-shade-20": "var(--orange-shade-20)",
      "blue-shade-0": "var(--blue-shade-0)",
      "blue-shade-5": "var(--blue-shade-5)",
      "blue-shade-10": "var(--blue-shade-10)",
      "blue-shade-15": "var(--blue-shade-15)",
      "blue-shade-20": "var(--blue-shade-20)",
      "blue-shade-25": "var(--blue-shade-25)",
      "blue-shade-30": "var(--blue-shade-30)",
      "blue-shade-35": "var(--blue-shade-35)",
      "blue-shade-40": "var(--blue-shade-40)",
      "blue-shade-45": "var(--blue-shade-45)",
      "brown-shade-0": "var(--brown-shade-0)",
    },
    keyframes: {
      leftScroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      leftScroll: "leftScroll 5s linear infinite",
    },
  },
  plugins: [],
};
