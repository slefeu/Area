FactoryBot.define do
  factory :widget do
    name { "WidgetName" }
    user_id { create(:user).id }
  end
end
