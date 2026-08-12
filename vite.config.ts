import { defineConfig } from 'vite'
import reactfrom '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/locomo-salt/',
  plugins: [react()],
})
