import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, '.');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  build: {
    root,
    rollupOptions: {
      outDir,
      emptyOutDir: true,
      input: {
        main: resolve(__dirname, 'index.html'),
        hamburger: resolve(__dirname, 'pages/hamburger/index.html'),
        landingPage: resolve(__dirname, 'pages/landing-page/index.html'),
        productCard: resolve(__dirname, 'pages/product-card/index.html'),
      },
    },
  },
});
