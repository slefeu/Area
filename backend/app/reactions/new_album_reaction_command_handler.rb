# frozen_string_literal: true

class NewAlbumReactionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "New Album Command Handler"

    begin
      token_info = HTTParty.post(
        "https://accounts.spotify.com/api/token",
        "body": "grant_type=client_credentials&client_id=#{ENV["SPOTIFY_CLIENT_ID"]}&client_secret=#{ENV["SPOTIFY_CLIENT_SECRET"]}"
      )
    rescue NoMethodError
      puts "Error: Spotify return null"
      return false
    end

    begin
      songs = HTTParty.get(
        "https://api.spotify.com/v1/browse/new-releases?limit=5",
        "headers": {"Authorization": "Bearer #{token_info["access_token"]}"}
      )
    rescue NoMethodError
      puts "Error: Spotify return null"
      return false
    end

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
