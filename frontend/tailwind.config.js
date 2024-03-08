const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            stone: colors.warmGray,
            sky: colors.lightBlue,
            neutral: colors.trueGray,
            gray: colors.coolGray,
            slate: colors.blueGray,
            lime: colors.lime,
            rose: colors.rose,
            componentBg: "#092635",
            textColor: "#9EC8B9",
            textColor2: "#5C8374",
            mainBg: "#ECF4D6",
        },
    },
    plugins: [],
};
