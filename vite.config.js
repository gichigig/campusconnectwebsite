import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        safety: resolve(__dirname, 'safety-standards.html'),
        delete: resolve(__dirname, 'delete-account.html')
      }
    }
  }
})
