class AddSpotifyTokenToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :spotify_token, :string
  end
end
