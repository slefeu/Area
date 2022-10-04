require "httparty"

class ApplicationController < ActionController::API
    def about
        about = File.read("/public/about.json")
        render json: about
    end
end
