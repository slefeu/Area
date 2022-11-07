# frozen_string_literal: true

class NewSongReactionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "New Songs Command Handler"

    client_id = "d89d9e6d83484fc48fff9bc6791371c0"
    client_secret = "e6d65483b28c4c1195b94f67ea6e03cf"

    token_info = HTTParty.post(
      "https://accounts.spotify.com/api/token",
      "body": "grant_type=client_credentials&client_id=#{client_id}&client_secret=#{client_secret}"
    )

    songs = HTTParty.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=5",
      "headers": {"Authorization": "Bearer #{token_info["access_token"]}"}
    )

    result = []
    songs["albums"]["items"].each do |song|
      result << {
        "image": song["images"][0]["url"],
        "url": song["external_urls"]["spotify"],
      }
    end

    puts result

    user = User.find(attributes[:user_id])
    user.songs = result
    user.save
  end
end
