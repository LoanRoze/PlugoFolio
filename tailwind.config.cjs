/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        muted: '#6b7280',
        surface: '#0f172a',
      },
      boxShadow: {
        card: '0 10px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
