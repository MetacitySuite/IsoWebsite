/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  mode: 'jit',
  plugins: [require('@headlessui/tailwindcss')],
};