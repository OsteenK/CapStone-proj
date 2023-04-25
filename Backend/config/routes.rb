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

  get '/images' , to: 'images#index'

  #CHARITY ROUTES

  get 'beneficiaries', to: 'charities#beneficiaries'
  get 'charitydetails', to: 'charities#beneficiaries'
  post 'beneficiaries', to: 'charities#create_beneficiary'
  put 'beneficiaries/:beneficiary_id', to: 'charities#update_beneficiary'
  delete 'beneficiaries/:beneficiary_id', to: 'charities#destroy_beneficiary'
  # get 'beneficiaries/:beneficiary_id/items', to: 'charities#items'
  # post 'beneficiaries/:beneficiary_id/items', to: 'charities#create_items'
  # put 'beneficiaries/:beneficiary_id/items/:items_id', to: 'charities#update_items'
  # delete 'beneficiaries/:beneficiary_id/items/:items_id', to: 'charities#destroy_items'


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
   post '/administrator/login', to: 'administrators#login'
   get '/administrator/applications', to: 'administrators#applications'
   post '/administrator/applications/:id/approve', to: 'administrators#approve_application'
   post '/administrator/applications/:id/reject', to: 'administrators#reject_application'
   delete '/administrator/charities/:id', to: 'administrators#delete_charity'

   # Donations routes
   get '/donations', to: 'donations#index'
   post '/donations', to: 'donations#create'
   get '/donations/:id', to: 'donations#show'
   put '/donations/:id', to: 'donations#update'
   delete '/donations/:id', to: 'donations#destroy'

  #  Application Routes
  # Contact Us Form Route
  post "/contact-us", to: 'application#contact_us'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
