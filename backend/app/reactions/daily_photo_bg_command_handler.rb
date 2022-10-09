# frozen_string_literal: true

class DailyPhotoBgCommandHandler
  def initialize
  end

  def call(attributs)
    puts "Daily Photo Bg Command Handler"

    img_info = HTTParty.get("https://api.nasa.gov/planetary/apod?api_key=0kohlBRL0b1ymWbGae4GKifyolr5cZ66qLBrHb6j")
    img = img_info["url"]
    user = User.find(attributs[:user_id])
    user.background = img
    user.save
  end
end
