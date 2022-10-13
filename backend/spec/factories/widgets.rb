# == Schema Information
#
# Table name: widgets
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  active     :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
FactoryBot.define do
  factory :widget do
    name { FFaker::Name.unique.name }
    user_id { create(:user).id }
  end
end
