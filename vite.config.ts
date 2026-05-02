import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: '/src/html/index.html'
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@routes': '/src/routes/routes.ts'
    }
  },
  build: {
    rollupOptions: {
      input: {
        home: 'src/html/index.html',
        about: 'src/html/about.html',
        gallery: 'src/html/gallery.html',
        services: 'src/html/services.html',
        contact: 'src/html/contact.html',
      }
    }
  }
})