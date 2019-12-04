Rails.application.routes.draw do
  # devise_for :administrators
  # devise_for :children
  get 'login/index'
  post 'login/administrator'
  post 'login/child'
  get 'logout', to: 'login#logout', as: :logout
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  resources :activities

  # AdministratorController
  resources :administrators do
      resources :activities do
          get 'start', to: 'activities#start', as: :start_activity, on: :member
      end
      post 'activities/:id', to: 'activities#interact'
      resources :rewards
  end
  get 'administrators/:id/connect', to: 'administrators#connect', as: :connect_admin
  get 'administrators/:id/points', to: 'administrators#add_points', as: :admin_points
  put 'administrators/:id/points', to: 'administrators#update_points'

  # ChildController
  resources :children do
      resources :activities do
          member do
              get 'finish', to: 'activities#finish', as: :finish_activity
              get 'approve', to: 'activities#approve', as: :approve_activity
          end
      end
      post 'activities/:id', to: 'activities#interact'
      resources :rewards
  end
  get 'children/:id/connect', to: 'children#connect', as: :connect_child

  post 'children/create'
  get 'tasks/index'

  # react navigation routes fallback to react app
  get '/login' => 'welcome#index'
  get '/signup' => 'welcome#index'
  get '/tasks' => 'welcome#index'
  get '/profile' => 'welcome#index'
end
