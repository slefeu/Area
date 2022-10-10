class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin, :background

  has_many :widgets
end
