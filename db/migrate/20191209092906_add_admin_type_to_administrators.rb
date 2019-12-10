class AddAdminTypeToAdministrators < ActiveRecord::Migration[6.0]
  def change
    add_column :administrators, :admin_type, :string
  end
end
