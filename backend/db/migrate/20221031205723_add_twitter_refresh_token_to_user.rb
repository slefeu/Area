class AddTwitterRefreshTokenToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :twitter_token, :string
  end
end
