import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/NTBlok.github.io/' : '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    },
  },
  optimizeDeps: {
    include: ['bootstrap/dist/css/bootstrap.min.css']
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@fortawesome': resolve(__dirname, 'node_modules/@fortawesome'),
      'bootstrap': resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        // Add Bootstrap's SCSS path to the include paths
        includePaths: ['./node_modules'],
      }
    }
  }
});