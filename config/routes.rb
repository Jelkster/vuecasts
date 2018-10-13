# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'vuecasts#home'

  get 'vuecasts/index'
  get 'vuecasts/basic_data_binding'
  get 'vuecasts/lists'

  get 'vuemastery/index'
  get 'vuemastery/the_vue_instance'
  get 'vuemastery/attribute_binding'
  get 'vuemastery/conditional_rendering'
end
