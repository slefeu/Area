FactoryBot.define do
  factory :action do
    klass { "at_hour" }
    options { {} }
    widget_id { create(:widget).id }
  end
end
