class CreateChildActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :child_activities do |t|
      t.references :child, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
