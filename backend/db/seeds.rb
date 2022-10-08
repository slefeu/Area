# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users
users = [{ first_name: "Jean-Jean", last_name: "La fouriere", email: "jean.four@email.com", password: "12345",
admin: true }]
if User.count == 0
  users.each do |user|
    User.create!(first_name: user[:first_name], last_name: user[:last_name], email: user[:email],
                admin: user[:admin], password: user[:password])
  end
end

# Actions
actions = [{ klass: "EachDay", options: {}, user_id: User.first.id }]
if Action.count == 0
  actions.each do |action|
    Action.create!(klass: action[:klass], options: action[:options], user_id: action[:user_id])
  end
end

# Reactions
reactions = [{ klass: "SendMail", options: {}, action_id: Action.first.id }]
if Reaction.count == 0
  reactions.each do |reaction|
    Reaction.create!(klass: reaction[:klass], options: reaction[:options], action_id: reaction[:action_id])
  end
end
