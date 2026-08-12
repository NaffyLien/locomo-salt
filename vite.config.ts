import { defineConfig } from 'vite'
import reactfrom from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/locomo-salt/',
  plugins: [react()],
})
