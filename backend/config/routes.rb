Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"

  resources :users

  # Nasa service
  scope :nasa do
    get "apod", to: "nasa#apod"
  end
end
