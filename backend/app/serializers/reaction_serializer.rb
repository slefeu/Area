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
class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :name, :options

  def name
    object.klass
  end
end
