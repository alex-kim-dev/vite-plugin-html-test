import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin as html } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    html({
      entry: 'src/main.jsx',
      template: 'index.html',
    }),
  ],
})
