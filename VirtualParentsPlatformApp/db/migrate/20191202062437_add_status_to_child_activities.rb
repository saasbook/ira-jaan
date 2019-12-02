class AddStatusToChildActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :child_activities, :status, :string
  end
end
