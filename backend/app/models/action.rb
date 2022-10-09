class Action < ApplicationRecord
  # Associations
  belongs_to :widget
  has_one :reaction
end
