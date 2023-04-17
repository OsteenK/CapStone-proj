json.extract! donation, :id, :donation_amount, :anonymous, :charity_id, :donor_id, :created_at, :updated_at
json.url donation_url(donation, format: :json)
