/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        secondary: "#0d084d",
        main: "#f87316",
        third:"#84cc16",
        blue: "#086972",
      },
      backgroundImage: {
        Delivery: "url('assets/Package.png')",
        HomeAddress: "url('assets/supply.png')",
        Market: "url('assets/market.png')",
        Shipping: "url('assets/paper.png')"
      },
    },
    // 'sm': '540px',
    screens: {
      
      'xs': '240px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  plugins: [],
}

