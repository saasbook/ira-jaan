class RemoveDateFromActivity < ActiveRecord::Migration[6.0]
  def change

    remove_column :activities, :date, :datetime
  end
end
