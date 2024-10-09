/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "search-bar": "1fr 50px 1fr auto 1fr auto",
        "4-3": "4fr 3fr",
        "1-2": "1fr 2fr",
      },
      colors: {
        purple: {
          100: "#F2F1FF",
          200: "#E8E5FF",
          500: "#7D71FF",
          600: "#6F62FF",
          900: "#0D0B68",
        },
        gray: {
          100: "#F5F4F4",
          300: "#EBEAEA",
          500: "#B1B1B1",
          600: "#929292",
        },
        green: {
          500: "#29DC0C",
        },
        red: {
          500: "#E30613",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
