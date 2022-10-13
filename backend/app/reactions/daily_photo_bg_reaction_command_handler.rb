# frozen_string_literal: true

class DailyPhotoBgReactionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "Daily Photo Bg Command Handler"

    img_info = HTTParty.get("https://api.nasa.gov/planetary/apod?api_key=0kohlBRL0b1ymWbGae4GKifyolr5cZ66qLBrHb6j")
    img = img_info["url"]

    user = User.find(attributes[:user_id])
    user.background = img
    user.save # return true if succeed
  end
end
