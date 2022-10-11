FactoryBot.define do
  factory :user do
    first_name { "Jean Jean" }
    last_name { "Michelle" }
    email { FFaker::Internet.unique.email }
    password { "12345" }
  end
end
