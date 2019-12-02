Rails.application.routes.draw do
  # devise_for :administrators
  # devise_for :children
  get 'login/index'
  post 'login/administrator'
  post 'login/child'
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  # AdministratorController
  resources :administrators do
      resources :activities, :rewards
  end
  get 'administrators/:id/connect', to: 'administrators#connect', as: :connect_admin
  get 'administrators/:id/points', to: 'administrators#add_points', as: :admin_points
  put 'administrators/:id/points', to: 'administrators#update_points'

  # ChildController
  resources :children do
      resources :activities, :rewards
  end
  get 'children/:id/connect', to: 'children#connect', as: :connect_child

  post 'child/create'
  get 'tasks/index'

  # react navigation routes fallback to react app
  get '/login' => 'welcome#index'
  get '/signup' => 'welcome#index'
  get '/tasks' => 'welcome#index'
  get '/profile' => 'welcome#index'
end
