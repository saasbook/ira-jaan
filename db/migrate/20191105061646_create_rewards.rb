class CreateRewards < ActiveRecord::Migration[6.0]
    def change
      create_table :rewards do |t|
        t.integer :points_cost
        t.string :name
        t.text :description
        t.string :url
        t.references :administrator, null: false, foreign_key: true
  
        t.timestamps
      end
    end
  end