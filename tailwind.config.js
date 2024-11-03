/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Lavender:'rgb(149, 56, 226)',
        Snow:'rgb(246, 246, 246)',
        Gray:'rgb(11, 11, 11)',
      }
    },
  },
  plugins: [
        require('daisyui'),
  ],
}

