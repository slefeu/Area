# frozen_string_literal: true

class User < ApplicationRecord
  # Callbacks
  before_destroy :destroy_children

  # Validattions
  validates :email,
    format: { with: /(.+)@(.+)/, message: "Email invalid"  },
              uniqueness: { case_sensitive: false },
              length: { minimum: 4, maximum: 254 }

  # Associations
  has_many :widgets

  # Scope
  scope :administrators, -> { where(admin: true) }

  # Devise gem authentication
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist

  def destroy_children
    self.reaction&.destroy
    self.action&.destroy
  end
end
