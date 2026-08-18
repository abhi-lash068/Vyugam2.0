/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        carbon: '#101010',
        'carbon-2': '#161412',
        oxblood: '#7A0606',
        crimson: '#C1121F',
        ember: '#FF4A12',
        marigold: '#FDB515',
        mustard: '#D99A00',
        cream: '#F5E6B8',
        smoke: '#F2F2EA',
      },
      fontFamily: {
        display: ['Anton', 'Archivo Black', 'sans-serif'],
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
