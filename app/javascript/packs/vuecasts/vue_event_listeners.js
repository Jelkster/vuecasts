import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuecasts-vue-event-listeners')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        newName: '',
        names: ['Joe', 'Mary', 'Jane', 'Jack']
      },
      methods: {
        addName() {
          this.names.push(this.newName)
          this.newName = ''
        }
      }
      // mounted() {
      //   document.querySelector('#button').addEventListener('click', () => {
      //     let name = document.querySelector('#input')
      //     app.names.push(name.value)
      //     name.value = ''
      //   })
      // }
    })
  }
})
