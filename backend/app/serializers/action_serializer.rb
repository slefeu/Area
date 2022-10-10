class ActionSerializer < ActiveModel::Serializer
  attributes :id, :name, :options

  def name
    object.klass
  end
end
