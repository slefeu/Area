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
    where(provider: auth.provider).find_or_create_by(p_uid: auth.uid) do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token
      user.first_name = auth.info.first_name # assuming the user model has a username
      user.last_name = auth.info.last_name # assuming the user model has a username
      user.provider = auth.provider
      user.p_uid = auth.uid
      # user.image = auth.info.image # assuming the user model has an image
    end
  end
end
