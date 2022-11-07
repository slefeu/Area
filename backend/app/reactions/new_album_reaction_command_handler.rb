# frozen_string_literal: true

class NewAlbumReactionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "New Album Command Handler"

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
        "title": song["name"],
        "artist": song["artists"][0]["name"]
      }
    end

    user = User.find(attributes[:user_id])

    # if user.songs is null or undefined
    if user.songs.nil?
      user.songs = { "albums": result }
    else
      user.songs["albums"] = result
    end
    user.save
  end
end
