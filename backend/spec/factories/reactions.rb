FactoryBot.define do
  factory :reaction do
    klass { "at_hour" }
    options { {} }
    action_id { create(:action).id }
  end
end
