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

  #CHARITY ROUTES

  get 'beneficiaries', to: 'charities#beneficiaries'
  post 'beneficiaries', to: 'charities#create_beneficiary'
  put 'beneficiaries/:beneficiary_id', to: 'charities#update_beneficiary'
  delete 'beneficiaries/:beneficiary_id', to: 'charities#destroy_beneficiary'
  get 'beneficiaries/:beneficiary_id/inventory', to: 'charities#inventory'
  post 'beneficiaries/:beneficiary_id/inventory', to: 'charities#create_inventory'
  put 'beneficiaries/:beneficiary_id/inventory/:inventory_id', to: 'charities#update_inventory'
  delete 'beneficiaries/:beneficiary_id/inventory/:inventory_id', to: 'charities#destroy_inventory'


  #DONOR ROUTES
  post '/donor/register', to: 'donor#register'
  post '/donor/login', to: 'donor#login'
  get '/charities', to: 'donor#charities'
  get '/charities/:id', to: 'donor#show_charity'
  post '/donations', to: 'donor#donate'
  post '/donations/automate', to: 'donor#automate_donation'
  post '/donations/cancel', to: 'donor#cancel_donation'
  get '/beneficiaries', to: 'donor#beneficiaries'
  post '/donations/paypal', to: 'donor#paypal'
  post '/donations/stripe', to: 'donor#stripe'

   # Administrator routes
   post '/admin/login', to: 'administrators#login'
   get '/admin/applications', to: 'administrators#applications'
   post '/admin/applications/:id/approve', to: 'administrators#approve_application'
   post '/admin/applications/:id/reject', to: 'administrators#reject_application'
   delete '/admin/charities/:id', to: 'administrators#delete_charity'

   # Donations routes
   get '/donations', to: 'donations#index'
   post '/donations', to: 'donations#create'
   get '/donations/:id', to: 'donations#show'
   put '/donations/:id', to: 'donations#update'
   delete '/donations/:id', to: 'donations#destroy'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
