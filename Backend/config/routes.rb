Rails.application.routes.draw do
  resources :beneficiaries
  resources :donations
  resources :donors
  resources :charities
  resources :administrators


  get '/donors/:id', to: 'donors#show'

  post '/login' , to: 'session#create'
  delete '/logout', to: 'session#destroy' 
  get '/loggedin', to: 'application#logged'
  # get '/loggedin', to: 'users#current_user'
  # get '/logged', to: 'application#administration'
  delete 'logout', to: 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
