class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.integer :donation_amount
      t.boolean :anonymous
      t.integer :charity_id, null: false, foreign_key: true
      t.integer :donor_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
