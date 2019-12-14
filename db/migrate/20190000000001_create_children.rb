class CreateChildren < ActiveRecord::Migration[6.0]
    def change
      create_table :children do |t|
        t.string :username
        t.string :password
        t.string :name
        t.integer :age
        t.string :language
        t.text :description
        t.integer :points
        
        t.timestamps
      end
    end
  end