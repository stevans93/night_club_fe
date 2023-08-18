/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        h700: "700px",
      },
      maxWidth: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
