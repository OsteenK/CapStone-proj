class Donor < ApplicationRecord
    has_secure_password
    has_many :donations
end
