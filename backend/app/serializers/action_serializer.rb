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
class ActionSerializer < ActiveModel::Serializer
  attributes :id, :name, :options

  def name
    object.klass
  end
end
