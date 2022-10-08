class Action < ApplicationRecord
  # Associations
  has_one :reaction
  belongs_to :user
end
