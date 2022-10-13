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
class WidgetSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_one :action
  has_one :reaction, through: :action
end
