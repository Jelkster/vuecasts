import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('root-lists')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        names: ['Joe', 'Mary', 'Jane', 'Jack']
      },
      mounted() {
        document.querySelector('#button').addEventListener('click', () => {
          let name = document.querySelector('#input')
          app.names.push(name.value)
          name.value = ''
        })
      }
    })
  }
})
