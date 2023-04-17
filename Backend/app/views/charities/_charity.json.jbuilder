json.extract! charity, :id, :name, :email, :password, :description, :img_url, :goal_amount, :total_donations, :admin_id, :created_at, :updated_at
json.url charity_url(charity, format: :json)
