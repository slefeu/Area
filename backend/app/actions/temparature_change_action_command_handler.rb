# frozen_string_literal: true

class TemparatureChangeActionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "Temparature Change Command Handler"

    begin
      url = "https://api.open-meteo.com/v1/forecast?latitude=#{attributes[:latitude]}&longitude=#{attributes[:longitude]}&current_weather=true"
      time_info = HTTParty.get(url)
      current_temp = time_info["current_weather"]["temperature"].to_f
      # current_time = time_info["formatted"].to_time
    rescue NoMethodError => e
      puts "Error: OpenMeteo return null"
      return false
    end

    last_temp = attributes[:last_temp].to_f
    result = current_temp != last_temp

    puts "Temparature Change: #{result}"

    if result
      action = Action.find(attributes[:action_id])
      action.options["last_temp"] = current_temp.to_s
      action.save
    end

    result
  end
end
