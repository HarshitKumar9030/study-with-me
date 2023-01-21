/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx, js, tsx, ts, html, mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  plugins: [],
}
}