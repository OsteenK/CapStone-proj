class Beneficiary < ApplicationRecord
    belongs_to :charity
    has_many :donations
end
