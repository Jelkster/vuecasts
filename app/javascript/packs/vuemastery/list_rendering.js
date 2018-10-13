import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-list-rendering')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        product: 'Socks',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          { variantId: 2234, variantColor: 'green' },
          { variantId: 2235, variantColor: 'blue' }
        ]
      }
    })
  }
})
