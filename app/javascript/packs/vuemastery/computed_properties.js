import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-computed-properties')
  if(element != null) {
    var app = new Vue({
      name: 'Socks',
      el: element,
      data: {
        brand: 'Vue Mastery',
        selectedVariant: 0,
        product: 'Socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          { variantId: 2234, variantColor: 'green', variantImage: 'green.jpg', variantQuantity: 10 },
          { variantId: 2235, variantColor: 'blue', variantImage: 'blue.jpg', variantQuantity: 0 }
        ],
        cart: 0,
      },
      methods: {
        addToCart() {
          this.cart += 1
        },
        updateProduct(index) {
          this.selectedVariant = index
          console.log(index)
        },
        nonComputedTitle() {
          console.log('computing displayTitle...')
          return this.brand + ' ' + this.product
        }
      },
      computed: {
        title() {
          console.log('computing title...')
          return this.brand + ' ' + this.product
        },
        image() {
          return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
          console.log('computing inStock...')
          return this.variants[this.selectedVariant].variantQuantity
        }
      }
    })
  }
})
