# == Schema Information
#
# Table name: actions
#
#  id         :bigint           not null, primary key
#  klass      :string           not null
#  options    :jsonb            not null
#  widget_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :action do
    klass { "at_hour" }
    options { {} }
    widget_id { create(:widget).id }
  end
end
