import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/inmo-digital/',
  build: {
    outDir: 'dist' // usa 'dist' (por defecto de Vite)
  } 
})
