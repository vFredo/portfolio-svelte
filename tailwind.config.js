/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        jiggle: {
          from: {
            transform: 'skewX(0deg) skewY(0deg)',
          },
          '50%': {
            transform: 'skewX(-5deg) skewY(-5deg)',
          },
          to: {
            transform: 'skewX(0deg) skewY(0deg)',
          },
        },
      },
      animation: {
        jiggle: 'jiggle 0.6s cubic-bezier(0.85, 0, 0.15, 1)',
      }
    },
  },
  plugins: [],
}

