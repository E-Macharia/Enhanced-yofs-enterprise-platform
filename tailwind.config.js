/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yofs: {
          dark: '#0A192F',
          navy: '#112240',
          lightnavy: '#233554',
          slate: '#8892B0',
          lightslate: '#A8B2D1',
          white: '#E6F1FF',
          cyan: '#00F0FF',
          purple: '#7000FF',
          teal: '#64FFDA',
          cardbg: 'rgba(17, 34, 64, 0.7)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
