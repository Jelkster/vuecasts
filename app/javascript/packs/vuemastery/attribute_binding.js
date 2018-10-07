import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuemastery-attribute-binding')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        href: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding'
      }
    })
  }
})
