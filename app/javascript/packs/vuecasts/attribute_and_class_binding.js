import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuecasts-attribute-and-class-binding')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        title: 'Now the title is being set through JavaScript.',
        className: 'color-red',
        isLoading: false
      },
      methods: {
        toggleClass() {
          this.isLoading = true
        }
      }
    })
  }
})
