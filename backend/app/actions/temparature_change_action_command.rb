# frozen_string_literal: true

class TemparatureChangeActionCommand
  def initialize(options)
    @action_id = options["action_id"]
    @widget_id = Action.find(@action_id).widget.id
    @latitude = options["latitude"]
    @longitude = options["longitude"]
    @last_temp = options["last_temp"].to_f || -50

    if @last_temp == -50
      begin
        url = "https://api.open-meteo.com/v1/forecast?latitude=#{@latitude}&longitude=#{@longitude}&current_weather=true"
        time_info = HTTParty.get(url)
        @last_temp = time_info["current_weather"]["temperature"].to_f
        puts "Last temperature: #{@last_temp}"
      rescue NoMethodError => e
        puts "Error: OpenMeteo return null"
        return false
      end
    end

  end

  def to_h
    { action_id: @action_id, widget_id: @widget_id, latitude: @latitude, longitude: @longitude, last_temp: @last_temp }
  end
end
