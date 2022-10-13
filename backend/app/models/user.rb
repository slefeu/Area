# frozen_string_literal: true

class User < ApplicationRecord
  # Relations
  has_many :widgets

  # Validattions
  validates :email,
    format: { with: /(.+)@(.+)/, message: "Email invalid"  },
              uniqueness: { case_sensitive: false },
              length: { minimum: 4, maximum: 254 }

  # Scope
  scope :administrators, -> { where(admin: true) }

  # Devise gem authentication
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[twitter google_oauth2],
         jwt_revocation_strategy: JwtDenylist
def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0, 20]
    #user.name = auth.info.name # assuming the user model has a name
    #user.username = auth.info.nickname # assuming the user model has a username
    #user.image = auth.info.image # assuming the user model has an image
    end
  end
end
