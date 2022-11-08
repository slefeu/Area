# frozen_string_literal: true

class PlaylistFollowActionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "Playlist Follow Command Handler"

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
      playlist = HTTParty.get(
        "https://api.spotify.com/v1/playlists/#{attributes[:playlist]}",
        "headers": {"Authorization": "Bearer #{token_info["access_token"]}"}
      )
    rescue NoMethodError
      puts "Error: Spotify return null"
      return false
    end

    current_follow = playlist["followers"]["total"].to_i

    last_follow = attributes[:nb_follower].to_i
    result = current_follow != last_follow

    if result
      puts "Follow Change: #{result}"
      action = Action.find(attributes[:action_id])
      action.options["nb_follower"] = current_follow.to_s
      action.save
    end

    result
  end
end
