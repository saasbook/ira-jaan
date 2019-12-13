# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Administrator.delete_all
# Activity.delete_all

administrators = [
    {username: "stephen", password: "password", name: "Stephen Zhou",
     age: 21, email: "stephen@email.com", language: "English", description: "hello",
     points: 10, admin_type: "Teacher"}]

children = [{username: "christine", password: "password", name: "Christine Nguyen",
age: 9, language: "English",
description: "Hello! My name is Christine and I like to play soccer and climb trees. I want to be a firefighter in the future.",
points: 10}]

administrators.each do |administrator|
    Administrator.create!(administrator)
end

children.each do |child|
    Child.create!(child)
end

activities = [{title: "Do chores", description: "Do your chores!", points_reward: 10,
    frequency: "Once a day", administrator: Administrator.first}]

activities.each do |activity|
    Activity.create!(activity)
end
