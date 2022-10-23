class EachDayActionCommandHandler
  def initialize
  end

  def call(attributes)
    puts "Each Day Command Handler"

    time_info = HTTParty.get("https://api.timezonedb.com/v2.1/get-time-zone?key=MLW9WKV7JEUS&format=json&by=position&lat=44.8404&lng=-0.5805")
    today = time_info["formatted"].to_time
    last_day = attributes[:last_day].to_time
    result = today.day > last_day.day

    if result
      action = Action.find(attributes[:action_id])
      today = today.to_date
      action.options["last_day"] = today.to_s
      action.save
    end
    result
  end
end
