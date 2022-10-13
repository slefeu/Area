# == Schema Information
#
# Table name: reactions
#
#  id         :bigint           not null, primary key
#  klass      :string           not null
#  options    :jsonb            not null
#  action_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :reaction do
    klass { "at_hour" }
    options { {} }
    action_id { create(:action).id }
  end
end
