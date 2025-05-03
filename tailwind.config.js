/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'z-red': {
          600: '#E6465C'
        }
      },
      fontFamily:{
        'exo': '"Exo", sans-serif'
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      },
      lineHeight: {
        'leading-half': '0.5rem',
      }
    },
  },
  plugins: [],
}

