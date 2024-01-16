/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        100: '35rem',
      },
      backgroundImage: {
        'circles': "url('./src/assets/images/pattern-circles.svg')"
      },
      colors: {
        'Dark-Desaturated-Blue': 'hsl(227, 35%, 25%)',
        'Pure-Blue': 'hsl(226, 100%, 87%)',
        'Very-Pale-Blue': 'hsl(230, 100%, 99%)',
        'Grayish-Blue':'hsl(225, 20%, 60%)',
        'Light-Grayish-Blue': 'hsl(223, 50%, 87%)',
        'Light-Grayish-Blue-slider': 'hsl(224, 65%, 95%)',
        'Strong-Cyan': 'hsl(174, 86%, 45%)',
        'Soft-Cyan': 'hsl(174, 77%, 80%)',
        'Light-Red': 'hsl(15, 100%, 70%)',
        'Light-Grayish-Red': 'hsl(14, 92%, 95%)'
      }
    },
  },
  plugins: [],
}

