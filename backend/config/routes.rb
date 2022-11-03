require "sidekiq/web"

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # config/routes.rb

  root "application#about"
  # root to: "home#index"

  # ##cancel for tests

  get "about.json", to: "application#about"

  resources :reactions, only: [:index, :show]
  resources :actions, only: [:index, :show]
  resources :widgets

  delete "signout", to: "users#signout"

  get "current_user", to: "users#show_current_user"
  get "users/reset_token", to: "users#reset_token"

  devise_for :users, defaults: { format: :json },
                    controllers: { omniauth_callbacks: "users/omniauth_callbacks", sessions: "users/sessions" }
  # devise_for :admin
  resources :users, only: [:index, :show, :update, :destroy]

  # Nasa service
  scope :nasa do
    get "apod", to: "nasa#apod"
  end

  # Path for documentation
  mount Rswag::Ui::Engine => "/api-docs"
  mount Rswag::Api::Engine => "/api-docs"
end
