# frozen_string_literal: true

class TemparatureChangeActionCommand
  def initialize(options)
    @action_id = options["action_id"]
    @latitude = options["latitude"]
    @longitude = options["longitude"]
    @last_temp = options["last_temp"] || current_temp
  end

  def to_h
    { action_id: @action_id, latitude: @latitude, longitude: @longitude, last_temp: @last_temp }
  end

  private
    def current_temp
      url = "https://api.open-meteo.com/v1/forecast?latitude=#{@latitude}&longitude=#{@longitude}&current_weather=true"
      weather_info = HTTParty.get(url)
      weather_info["current_weather"]["temperature"].to_f
    rescue NoMethodError
      puts "Error: OpenMeteo return null"
    end
end
