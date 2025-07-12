import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Documentation/demo site build configuration
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: path.resolve(process.cwd(), 'index.html')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@lib': path.resolve(process.cwd(), 'lib')
    }
  },
  base: '/pivotui/' // Adjust for your GitHub Pages URL
})