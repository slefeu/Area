# frozen_string_literal: true

class Widget < ApplicationRecord
  # Callback
  before_destroy :destroy_children

  # Associations
  belongs_to :user
  has_one :action
  has_one :reaction, through: :action

  def destroy_children
    self.reaction.destroy
    self.action.destroy
  end
end
