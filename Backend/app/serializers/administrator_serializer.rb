class AdministratorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email
  has_many :charities, methods: :total_donated
end
