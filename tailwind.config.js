/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./index.html",
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        primary: "#475DDB",
        secondary: "#F0F4F9",
        tertiary: "#f8f8ff",
        others: "#484848",
        font: "#8A8A8A",
        dashboardPrimary: "#343A40",
      },
      height: {
        h800: "830px",
        h700: "700px",
        h550: "550px",
        h500: "500px",
        h400: "400px",
        90: "22rem",
      },
      maxWidth: {
        half: "50%",
        quater: "25%",
      },
      minHeight: {
        400: "400px",
      },

      borderRadius: {
        circle: "50%",
      },
      width: {
        45: "45%",
        90: "22rem",
      },
    },
  },
  plugins: [],
};
