json.extract! donor, :id, :first_name, :last_name, :email, :password, :created_at, :updated_at
json.url donor_url(donor, format: :json)
