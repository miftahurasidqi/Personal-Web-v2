/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          50: "rgb(15, 45, 65)",
          100: "rgb(13, 39, 57)",
          200: "rgb(12, 36, 53)",
          300: "rgb(9, 27, 41)",
          400: "rgb(8, 24, 37)",
          500: "rgb(6, 18, 28)",
          //
          // rgb(12, 36, 53)
          // rgb(9, 27, 41)
          // rgb(8, 24, 37)
          // rgb(6, 18, 28)
        },
      },
    },
    // fontFamily: {
    //   sans: ["Helvetica", "Arial", "sans-serif", "ui-sans-serif", "system-ui"],
    // },
    // night: {
    //   50: "#091B29",
    //   100: "#05181F",
    //   200: "#040B1A",
    //   300: "#000000",
    // },
  },
  plugins: [],
};
// #091B29
