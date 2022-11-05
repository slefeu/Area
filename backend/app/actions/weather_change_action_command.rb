# frozen_string_literal: true

class WeatherChangeActionCommand
  def initialize(options)
    @action_id = options["action_id"]
    @widget_id = Action.find(@action_id).widget.id
    @latitude = options["latitude"]
    @longitude = options["longitude"]
    @last_weather = options["last_temp"].to_i || -50

    if @last_weather == -50
      begin
        url = "https://api.open-meteo.com/v1/forecast?latitude=#{@latitude}&longitude=#{@longitude}&current_weather=true"
        time_info = HTTParty.get(url)
        @last_weather = time_info["current_weather"]["weathercode"].to_i
        puts "Last Weather Code: #{@last_weather}"
      rescue NoMethodError => e
        puts "Error: OpenMeteo return null"
        return false
      end
    end

  end

  def to_h
    { action_id: @action_id, widget_id: @widget_id, latitude: @latitude, longitude: @longitude, last_weather: @last_weather }
  end
end
