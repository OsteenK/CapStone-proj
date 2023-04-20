class RenamePasswordFieldInTables < ActiveRecord::Migration[7.0]
  def change
    rename_column :Administrators, :password, :password_digest
    rename_column :Charities, :password, :password_digest
    rename_column :Donors, :password, :password_digest
    # Add additional lines for each table that has a password column
  end
  
end
