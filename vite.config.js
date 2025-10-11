import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const repoName = 'inmo-digital'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  //base: `/${repoName}/`,
   
})
