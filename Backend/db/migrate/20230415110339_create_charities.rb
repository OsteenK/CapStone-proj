class CreateCharities < ActiveRecord::Migration[7.0]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :email
      t.string :password
      t.text :description
      t.string :img_url
      t.integer :goal_amount
      t.integer :total_donations

      t.integer :administrator_id, null: false, foreign_key: true

      t.boolean :approved

      t.timestamps
    end
  end
end
