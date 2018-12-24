import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-event-handling')
  if(element != null) {
    var app = new Vue({
      name: 'Socks',
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
    // append "hello vue" component to page to test HMR
    const el = document.body.appendChild(document.createElement('hello'))
    const app = new Vue({
      el,
      render: h => h(App)
    })
  }
})
