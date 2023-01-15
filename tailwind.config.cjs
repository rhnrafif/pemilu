/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://sopylahpssmjazexqnfk.supabase.co/storage/v1/object/public/jayabuana/bg.svg')",
      }
    },
  },
  plugins: [],
}