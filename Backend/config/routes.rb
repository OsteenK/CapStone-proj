Rails.application.routes.draw do
  resources :beneficiaries
  resources :donations
  resources :donors
  resources :charities
  resources :administrators
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
