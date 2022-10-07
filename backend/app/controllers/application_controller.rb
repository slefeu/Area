require "httparty"

class ApplicationController < ActionController::API
  respond_to :json

  def about
    about = File.read("public/about.json")
    render json: about
  end
end
