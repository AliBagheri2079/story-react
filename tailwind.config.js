/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [],
  blocklist: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
