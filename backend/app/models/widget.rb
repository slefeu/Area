class Widget < ApplicationRecord
  # Relations
  belongs_to :user
  has_many :reactions
  has_many :actions
end
