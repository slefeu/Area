# frozen_string_literal: true

class WeatherChangeActionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "Weather Change Command Handler"

    begin
      url = "https://api.open-meteo.com/v1/forecast?latitude=#{attributes[:latitude]}&longitude=#{attributes[:longitude]}&current_weather=true"
      time_info = HTTParty.get(url)
      current_weather = time_info["current_weather"]["weathercode"].to_i
    rescue NoMethodError => e
      puts "Error: OpenMeteo return null"
      return false
    end

    last_weather = attributes[:last_weather].to_i
    result = current_weather != last_weather

    puts "Weather Change: #{result}"

    if result
      action = Action.find(attributes[:action_id])
      action.options["last_weather"] = current_weather.to_s
      action.save
    end

    result
  end
end
