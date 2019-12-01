Rails.application.routes.draw do
  # devise_for :administrators
  # devise_for :children
  get 'login/index'
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  # AdministratorController
  resources :administrators do
      resources :activities, :rewards
  end
  get 'administrators/:id/points', to: 'administrators#add_points', as: :admin_points
  put 'administrators/:id/points', to: 'administrators#update_points'

  # ChildController
  resources :children do
      resources :activities, :rewards
  end

  post 'child/create'
  get 'tasks/index'
end
