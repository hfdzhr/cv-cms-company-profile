/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2497cd', // Curious Blue
          hover: '#28a3d4',
        },
        secondary: '#773a28', // Nutmeg
        accent: '#9b7055',    // Leather
        thunder: '#201e1f',   // Text Main
        muted: '#6b7280',     // Text Muted
        bg: '#f8fafc',
        'bg-soft': '#f1f5f9',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
