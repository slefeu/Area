require 'sidekiq/web'

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # config/routes.rb
  authenticate :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web => '/sidekiq'
  end

  root to: 'home#index'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  ###cancel for tests

  ###root "application#about"

  ###get "about.json", to: "application#about"

  resources :reactions
  resources :actions
  resources :widgets

  delete "signout", to: "users#signout"

  get "current_user", to: "users#show_current_user"

  ###devise_for :users, defaults: { format: :json }, controllers: { sessions: "users/sessions" }
  # devise_for :admin
  resources :users, only: [:index, :show, :destroy]

  # Nasa service
  scope :nasa do
    get "apod", to: "nasa#apod"
  end
end
