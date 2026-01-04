/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E7',
        brown: '#8B4513',
        green: '#2E7D32',
        lightGreen: '#81C784',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
