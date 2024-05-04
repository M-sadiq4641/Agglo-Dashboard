/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dashboardbgImg: "url(./images/dashboard-background-img.png)",
        curvedHR: "url(./images/curved-hr-line.png)",
        boxBG: "url(./images/box-bg.png)",
        buynowBTNbg: "url(./images/butnow-bg.png)",
      },
    },
  },
  plugins: [],
};
