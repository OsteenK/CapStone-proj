class RenamePasswordFieldInTables < ActiveRecord::Migration[7.0]
  def change
    rename_column :administrators, :password, :password_digest
    rename_column :charities, :password, :password_digest
    rename_column :donors, :password, :password_digest
    # Add additional lines for each table that has a password column
  end
  
end
