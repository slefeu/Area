class ActionSerializer < ActiveModel::Serializer
  attributes :id, :options, :name

  def name
    object.klass
  end
end
