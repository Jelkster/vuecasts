import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-event-handling')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        product: 'Socks',
        image: 'green.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          { variantId: 2234, variantColor: 'green', variantImage: 'green.jpg' },
          { variantId: 2235, variantColor: 'blue', variantImage: 'blue.jpg' }
        ],
        cart: 0,
      },
      methods: {
        addToCart() {
          this.cart += 1
        },
        updateProduct(image) {
          this.image = image
        }
      }
    })
  }
})
