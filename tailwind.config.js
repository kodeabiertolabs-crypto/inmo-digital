/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar modo oscuro basado en clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para el tema oscuro
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
        },
      },
    },
  },
  plugins: [],
}
