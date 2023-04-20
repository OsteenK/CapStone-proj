class AddAdminIdToCharities < ActiveRecord::Migration[7.0]
  def change
    change_column :charities, :admin_id, :bigint, null: false
    add_foreign_key :charities, :Administrators, column: :admin_id
  end
end
