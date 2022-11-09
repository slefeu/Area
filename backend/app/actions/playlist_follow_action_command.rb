# frozen_string_literal: true

class PlaylistFollowActionCommand
  def initialize(options)
    @action_id = options["action_id"]
    @widget_id = Action.find(@action_id).widget.id
    @playlist = options["playlist_id"]
    @nb_follower = options["nb_follower"] || current_follow
  end

  def to_h
    { action_id: @action_id, widget_id: @widget_id, playlist: @playlist, nb_follower: @nb_follower }
  end

  private
    def current_follow
      client_id = "d89d9e6d83484fc48fff9bc6791371c0"
      client_secret = "e6d65483b28c4c1195b94f67ea6e03cf"

      begin
        token_info = HTTParty.post(
          "https://accounts.spotify.com/api/token",
          "body": "grant_type=client_credentials&client_id=#{client_id}&client_secret=#{client_secret}"
        )
      rescue NoMethodError
        puts "Error: Spotify return null"
        return 0
      end

      begin
        playlist = HTTParty.get(
          "https://api.spotify.com/v1/playlists/#{@playlist}",
          "headers": {"Authorization": "Bearer #{token_info["access_token"]}"}
        )
      rescue NoMethodError
        puts "Error: Spotify return null"
        return 0
      end

      return playlist["followers"]["total"].to_i
    end
end
