class Widget < ApplicationRecord
  # Associations
  belongs_to :user
  has_one :action
end
