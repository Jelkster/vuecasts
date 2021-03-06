import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-conditional-rendering')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        product: 'Socks',
        inStock: true,
        inventory: 0
      }
    })
  }
})
