import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuecasts-the_need_for_computed_properties')
  if(element != null) {
    var app = new Vue({
      el: element,
      data: {
        message: 'Hello World',
        tasks: [
          { description: 'Go to the store', completed: true },
          { description: 'Finish screencast', completed: false },
          { description: 'Make donation', completed: false },
          { description: 'Clear inbox', completed: false },
          { description: 'Make dinner', completed: false },
          { description: 'Clean room', completed: true },
        ]
      },
      computed: {
        reversedMessage() {
          return this.message.split('').reverse().join('')
        },
        incompleteTasks() {
          return this.tasks.filter(task => !task.completed)
        }
      }
    })
  }
})
