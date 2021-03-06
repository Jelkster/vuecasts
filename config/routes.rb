# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'vuecasts#home'

  get 'vuecasts', to: 'vuecasts#index'
  get 'vuecasts/basic_data_binding'
  get 'vuecasts/lists'
  get 'vuecasts/vue_event_listeners'
  get 'vuecasts/attribute_and_class_binding'
  get 'vuecasts/the_need_for_computed_properties'
  get 'vuecasts/components_101'

  get 'vuemastery', to: 'vuemastery#index'
  get 'vuemastery/the_vue_instance'
  get 'vuemastery/attribute_binding'
  get 'vuemastery/conditional_rendering'
  get 'vuemastery/list_rendering'
  get 'vuemastery/event_handling'
  get 'vuemastery/class_and_style_binding'
  get 'vuemastery/computed_properties'
  get 'vuemastery/components'
end
