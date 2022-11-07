# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  admin                  :boolean          default(FALSE), not null
#  background             :string
#  email                  :string           not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string           not null
#  google_refresh_token   :string
#  last_name              :string           not null
#  p_uid                  :string
#  provider               :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string

#  twitter_refresh_token  :string

#  songs                  :jsonb
#  spotify_token          :string

#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

require "httparty"

class User < ApplicationRecord
  # Callbacks
  before_destroy :destroy_widgets

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
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[twitter google_oauth2],
         jwt_revocation_strategy: JwtDenylist


  def self.connection_from_omniauth(auth)
    User.find_or_create_by(p_uid: auth.uid) do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token
      user.first_name = auth.info.first_name # assuming the user model has a username
      user.last_name = auth.info.last_name # assuming the user model has a username
      # user.provider = auth.provider
      user.p_uid = auth.uid
      # user.image = auth.info.image # assuming the user model has an image
    end
  end

  def request_token_from_spotify(code, redirect_uri)
    info_spotify = HTTParty.post("https://accounts.spotify.com/api/token", body: spotify_body)
    puts info_spotify
    if info_spotify["error"]
      return { error: info_spotify["error_description"] }
    end
    self.spotify_token = info_spotify["refresh_token"]
    { message: "Spotify token added to user" }
  end

  def request_token_from_twitter(code)
    result = HTTParty.post("https://accounts.google.com/o/oauth2/token", body: twitter_body(code))
    puts twitter_body(code)
    if result["error"]
      return { error: result["error_description"] }
    end
    self.twitter_refresh_token = result["refresh_token"]
    { message: "Twitter token added to user" }
  end

  def request_token_from_google(code)
    result = HTTParty.post("https://accounts.google.com/o/oauth2/token", body: google_body(code))
    puts google_body(code)
    if result["error"]
      return { error: result["error_description"] }
    end
    self.google_refresh_token = result["refresh_token"]
    { message: "Google token added to user" }
  end

  def reset_token(hashed)
    self.reset_password_token = Devise.token_generator.digest(User, :reset_password_token, hashed)
    self.reset_password_sent_at = Time.now
    self.save
  end

  def self.sign_in_with_google(param)
    token = HTTParty.post("https://accounts.google.com/o/oauth2/token", body: google_body(code))
    puts token
    access_token = token["access_token"]
    puts access_token
    result = HTTParty.post("https://www.googleapis.com/oauth2/v2/userinfo?access_token=#{access_token}")
    connection_from_omniauth(result)
  end

  private
    def spotify_body(code, redirect_uri)
      { client_id: ENV["SPOTIFY_CLIENT_ID"],
        client_secret: ENV["SPOTIFY_CLIENT_SECRET"], code: code,
        grant_type: "authorization_code", redirect_uri: redirect_uri }
    end

    def google_body(code)
      { "code" => code,
        "client_id"     => ENV["GOOGLE_CLIENT_ID"],
        "client_secret" => ENV["GOOGLE_CLIENT_SECRET"],
        "grant_type"    => "authorization_code" }
    end

    def twitter_body(code)
      { "code" => code,
        "client_id"     => ENV["TWITTER_API_PUBLIC"],
        "client_secret" => ENV["TWITTER_API_SECRET"],
        "grant_type"    => "authorization_code" }
    end

    def destroy_widgets
      self.widgets.map(&:destroy)
    end
end
