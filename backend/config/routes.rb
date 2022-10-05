Rails.application.routes.draw do
  # Defines the root path route ("/")

  root "application#about"

  resources :users
  get "about.json", to: "application#about"
  # Nasa service
  scope :nasa do
    get "apod", to: "nasa#apod"
  end
end
