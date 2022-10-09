class WidgetSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_one :action
  has_one :reaction, through: :action
end
