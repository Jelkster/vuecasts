import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'

import Task from '../../components/vuecasts/task.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var element = document.getElementById('vuecasts-components_101')
  if(element != null) {
    const app = new Vue({
      el: element,
      components: { Task }
    })
  }
})

// document.addEventListener('turbolinks:load', () => {
//   var element = document.getElementById('vuecasts-components_101')
//   if(element != null) {

//     Vue.component('task', {
//       template: '<li><slot></slot></li>'
//     })

//     new Vue({
//       el: element
//     })
//   }
// })
