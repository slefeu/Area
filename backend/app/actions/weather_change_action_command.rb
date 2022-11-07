# frozen_string_literal: true

class WeatherChangeActionCommand
  def initialize(options)
    @action_id = options["action_id"]
    @latitude = options["latitude"]
    @longitude = options["longitude"]
    @last_weather = options["last_temp"] || current_weather
  end

  def to_h
    { action_id: @action_id, latitude: @latitude, longitude: @longitude, last_weather: @last_weather }
  end

  private
    def current_weather
      url = "https://api.open-meteo.com/v1/forecast?latitude=#{@latitude}&longitude=#{@longitude}&current_weather=true"
      weather_info = HTTParty.get(url)
      weather_info["current_weather"]["weathercode"].to_i
    rescue NoMethodError
      puts "Error: OpenMeteo return null"
      nil
    end
end
