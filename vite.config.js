export default {
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        FAQ: 'src/html/FAQ.html',
        contact: 'src/html/contact.html',
        product: 'src/html/products.html',
        request: 'src/html/request.html',
      }
    }
  }
}