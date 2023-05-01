Rails.application.routes.draw do
  resources :beneficiaries
  resources :donations
  resources :donors
  resources :charities
  resources :administrators


  get '/donors/:id', to: 'donors#show'
  
  # Auth Routes
  post '/login' , to: 'session#create'
  delete '/logout', to: 'session#destroy'
  get '/loggedin', to: 'application#logged'
  # get '/loggedin', to: 'users#current_user'
  # get '/logged', to: 'application#administration'
  delete 'logout', to: 'sessions#destroy'

  get '/images' , to: 'images#index'

  #CHARITY ROUTES
  put "/charities/approve/:id", to: "charities#approve"
  delete "/charities/reject/:id", to: "charities#reject"
  get '/charitydetails/:id', to: 'charities#show'
  get '/charities', to: 'charities#index'
  post '/charity/signup', to: 'charities#create'

  get 'beneficiaries', to: 'charities#beneficiaries'
  get 'charitydetails', to: 'charities#beneficiaries'
  post 'beneficiaries', to: 'charities#create_beneficiary'
  put 'beneficiaries/:beneficiary_id', to: 'charities#update_beneficiary'
  delete 'beneficiaries/:beneficiary_id', to: 'charities#destroy_beneficiary'


  #DONOR ROUTES
  post '/donor/signup', to: 'donors#create'
  get '/donor/signup', to: 'donors#new'

  post '/donor/login', to: 'donors#login'
  get '/charities', to: 'donors#charities'
  get '/charities/:id', to: 'donors#show_charity'
  post '/donations', to: 'donors#donate'
  post '/donations/automate', to: 'donors#automate_donation'
  post '/donations/cancel', to: 'donors#cancel_donation'
  get '/beneficiaries', to: 'donors#beneficiaries'
  post '/donations/paypal', to: 'donors#paypal'
  post '/donations/stripe', to: 'donors#stripe'

   # Administrator routes
   post '/administrator/login', to: 'administrators#login'
   get '/administrator/applications', to: 'administrators#applications'
   post '/administrator/applications/:id/approve', to: 'administrators#approve_application'
   post '/administrator/applications/:id/reject', to: 'administrators#reject_application'
   delete '/administrator/charities/:id', to: 'administrators#delete_charity'
   get '/charities/unapproved', to: 'charities#unapproved'
   get '/charities/approved', to: 'charities#approved'
   


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
