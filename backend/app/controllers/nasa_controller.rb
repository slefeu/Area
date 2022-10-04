class NasaController < ApplicationController
  include HTTParty

  def apod
    img_info = HTTParty.get("https://api.nasa.gov/planetary/apod?api_key=0kohlBRL0b1ymWbGae4GKifyolr5cZ66qLBrHb6j")
    render json: img_info
  end
end
