import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // чтобы пути были относительные
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, './src/html/contact.html'),
        products: resolve(__dirname, './src/html/products.html'),
        faq: resolve(__dirname, './src/html/FAQ.html'),
        request: resolve(__dirname, './src/html/request.html'),
        about: resolve(__dirname, './src/html/about.html')
      }
    }
  }
});