json.extract! beneficiary, :id, :name, :location, :description, :items, :img_url, :charity_id, :created_at, :updated_at
json.url beneficiary_url(beneficiary, format: :json)
