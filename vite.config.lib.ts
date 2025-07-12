import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// Library build configuration
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(process.cwd(), 'lib/index.ts'),
      name: 'PivotUI',
      fileName: (format) => `pivotui.${format === 'es' ? 'js' : format === 'umd' ? 'umd.cjs' : format}`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'lib')
    }
  }
})