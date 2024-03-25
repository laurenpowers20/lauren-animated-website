/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonYellow: {
          500: "#fbff12",
        },
        neonPink: {
          500: "#FF206E",
        },
        neonBlue: {
          500: "#41EAD4",
        },
      },
      fontFamily: {
        latoReg: "latoReg",
        rakkasReg: "rakkasReg",
        ovo: "ovo",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
