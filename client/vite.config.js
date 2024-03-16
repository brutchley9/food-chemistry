import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
      port: 3003,
      open: true,
      proxy: {
        '/graphql': {
          target: 'http://localhost:3004',
          secure: false,
          changeOrigin: true
        }
      }
    }
})