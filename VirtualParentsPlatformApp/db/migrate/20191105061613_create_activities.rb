class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.string :title
      t.text :description
      t.integer :points_reward
      t.datetime :date
      t.string :frequency
      t.text :notes
      t.text :feedback
      t.string :status
      t.references :administrator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
