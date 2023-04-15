class CreateBeneficiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :beneficiaries do |t|
      t.string :name
      t.string :location
      t.text :description
      t.text :items
      t.string :img_url
      t.integer :charity_id

      t.timestamps
    end
  end
end
