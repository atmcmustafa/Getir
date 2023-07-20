/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "350px",

      largePhone: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      center: "true",
    },
    extend: {
      backgroundImage: {
        downloadPattern:
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      },
      colors: {
        "brand-purple": "#4D3298",
        "brand-text-purple": "#5C3EBD",
        "brand-yellow": "#FFD201",
        "brand-gray": "#DEDEE3",
        grayBackground: "#FBFAFB",
      },
    },
  },
  plugins: [],
};
