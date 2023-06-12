/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'mint': '#D8ECDB',
      'black': '#2B3141',
      'beige': '#F5F0EC',
      'offWhite': '#FFFEF9',
    },
  },
  plugins: [],
}