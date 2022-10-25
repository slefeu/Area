# frozen_string_literal: true

# == Schema Information
#
# Table name: widgets
#
#  id         :bigint           not null, primary key
#  active     :boolean          default(TRUE), not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_widgets_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Widget < ApplicationRecord
  # Callbacks
  before_destroy :destroy_children
  after_create :capitalize_name

  # Validations
  validates :name, { uniqueness: { case_sensitive: false } }

  # Associations
  belongs_to :user
  has_one :action
  has_one :reaction, through: :action

  # Scopes
  scope :activated, -> { where(active: true) }

  def disactivate
    self.active = false
    self.save
  end

  def activate
    self.active = true
    self.save
  end

  private
    def capitalize_name
      self.name.capitalize!
      self.save
    end

    def destroy_children
      self.reaction&.destroy
      self.action&.destroy
    end
end
