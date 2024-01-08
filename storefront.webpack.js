// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.html'),
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.js'),
      './js/Checkout.js': path.resolve(__dirname, 'template/js/custom-js/components/Checkout.js'),
      './Checkout.vue': path.resolve(__dirname, 'template/js/custom-js/components/Checkout.vue')
    }
  }
})
