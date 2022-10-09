Rails.application.routes.draw do
  resources :reactions
  resources :actions
  resources :widgets
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  root "application#about"

  devise_for :users, defaults: { format: :json }, controllers: { sessions: "users/sessions" }
  # devise_for :admin
  resources :users, only: [:index, :show, :destroy]


  get "about.json", to: "application#about"
  # Nasa service
  scope :nasa do
    get "apod", to: "nasa#apod"
  end
end
