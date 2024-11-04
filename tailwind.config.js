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
        LightGray:'rgb(247, 247, 247)',
        DarkGunmetal:'rgb(9, 8, 15)',
        Green:'rgb(48, 156, 8)'
      }
    },
  },
  plugins: [
        require('daisyui'),
  ],
}

