# frozen_string_literal: true

class Widget < ApplicationRecord
  # Associations
  belongs_to :user
  has_one :action
  has_one :reaction, through: :action
end
