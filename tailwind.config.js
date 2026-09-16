/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'background-alt': '#0A0A0A',
        'background-card': '#0D0D0D',
        primary: {
          500: '#C1121F',
          700: '#B00020',
          900: '#8B0000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
