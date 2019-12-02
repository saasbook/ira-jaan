class RemoveStatusFromActivity < ActiveRecord::Migration[6.0]
  def change

    remove_column :activities, :status, :string
  end
end
