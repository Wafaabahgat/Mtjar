/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0b858f",
        second: "#089795",
        textmain: "#292929",
        bgHeader: "#F6FCFB",
        bgFooter: "#59595B",
        primary: "#0ea7b4",
        bgfooter: "#29323d",
        bgsubhero: "#f1f5f9",
        bordericon: "#41c9c4",
        BG: "#0B8590",
        bgLine: "#D9D9D9",
        bghover: "#3ABCBA",
        colorslider: "#0C6A72",
        fatwaText:"#373131",
        bgWhite:"#FFFFFF"
    },
    gridTemplateColumns: {
      prod: 'repeat(auto-fit, minmax(400px, 1fr))',
      plog: 'repeat(auto-fit, minmax(270px, 1fr))',
      plog1: 'repeat(auto-fit, minmax(330px, 1fr))',
  },
    },
  },
  plugins: [],
};
