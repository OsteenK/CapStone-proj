class Charity < ApplicationRecord
    has_secure_password
    belongs_to :administrator
   has_many :donations
   has_many :donors, through: :donations
   has_many :beneficiaries
end
