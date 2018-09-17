# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root 'vuecasts#index'

  get 'vuecasts/index'
  get 'vuecasts/basic_data_binding'
  get 'vuecasts/lists'
end
