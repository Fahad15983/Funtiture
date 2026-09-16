/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.jsx', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(26, 26, 26, 0.08)',
      },
    },
  },
  plugins: [],
};
