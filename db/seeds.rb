# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

administrators = [{username: "stephen", password: "password", name: "Stephen Zhou",
     age: 21, email: "stephen@email.com", language: "English", description: "hello",
     points: 10}]

administrators.each do |administrator|
    Administrator.create!(administrator)
end
