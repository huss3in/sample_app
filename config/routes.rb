Rails.application.routes.draw do

 
#root to: 'static_pages#landing'
  get 'test/index'

  get 'demo/index'
  get 'demo/hello'
  #root to: 'home#index'
  get 'home/index'
#root :to => 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
