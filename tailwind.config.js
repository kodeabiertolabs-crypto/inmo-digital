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
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
        }
      },
      
    },
  },
  plugins: [],
}
