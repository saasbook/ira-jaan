# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_09_092906) do

  create_table "activities", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "points_reward"
    t.string "frequency"
    t.text "notes"
    t.text "feedback"
    t.integer "administrator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["administrator_id"], name: "index_activities_on_administrator_id"
  end

  create_table "administrators", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "name"
    t.integer "age"
    t.string "email"
    t.string "language"
    t.text "description"
    t.integer "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "admin_type"
  end

  create_table "child_activities", force: :cascade do |t|
    t.integer "child_id", null: false
    t.integer "activity_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.index ["activity_id"], name: "index_child_activities_on_activity_id"
    t.index ["child_id"], name: "index_child_activities_on_child_id"
  end

  create_table "child_rewards", force: :cascade do |t|
    t.integer "child_id", null: false
    t.integer "reward_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["child_id"], name: "index_child_rewards_on_child_id"
    t.index ["reward_id"], name: "index_child_rewards_on_reward_id"
  end

  create_table "children", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "name"
    t.integer "age"
    t.string "language"
    t.text "description"
    t.integer "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "connections", force: :cascade do |t|
    t.integer "child_id", null: false
    t.integer "administrator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["administrator_id"], name: "index_connections_on_administrator_id"
    t.index ["child_id"], name: "index_connections_on_child_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.integer "points_cost"
    t.string "name"
    t.text "description"
    t.string "url"
    t.integer "administrator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["administrator_id"], name: "index_rewards_on_administrator_id"
  end

  add_foreign_key "activities", "administrators"
  add_foreign_key "child_activities", "activities"
  add_foreign_key "child_activities", "children"
  add_foreign_key "child_rewards", "children"
  add_foreign_key "child_rewards", "rewards"
  add_foreign_key "connections", "administrators"
  add_foreign_key "connections", "children"
  add_foreign_key "rewards", "administrators"
end
