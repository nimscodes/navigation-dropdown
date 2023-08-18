/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray" : "hsl(0, 0%, 41%)",
        "almost-black" : "hsl(0, 0%, 8%)",
      },
      fontFamily : {
        epilogue: ['Epilogue','sans-serif']
      },
      fontSize : {
        "my-bold": 500,
        "my-bolder": 700,
      },
    },
  },
  plugins: [],
}