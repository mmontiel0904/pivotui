import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    }),
  ],
  
  // Serve assets from the assets directory
  publicDir: 'assets',
  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PivotUI',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'pivotui.css';
          return assetInfo.name || 'asset';
        },
      },
    },
    
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    
    // Generate CSS file
    cssCodeSplit: false,
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/tokens': resolve(__dirname, 'src/tokens'),
      '@/styles': resolve(__dirname, 'src/styles'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },
  
  css: {
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  
  server: {
    open: true,
    port: 3000,
  },
  
  preview: {
    port: 3001,
  },
});