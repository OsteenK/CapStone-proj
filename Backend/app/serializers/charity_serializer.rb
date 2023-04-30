class CharitySerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :img_url, :goal_amount, :total_donations, :total_donated, :administrator_id, :approved, :created_at
  has_many :beneficiaries
end
