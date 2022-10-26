class EachHourActionCommandHandler
    def initialize
    end
  
    def call(attributes, mocked_response = nil)
      puts "Each Hour Command Handler"
  
      time_info = mocked_response || HTTParty.get("https://api.timezonedb.com/v2.1/get-time-zone?key=MLW9WKV7JEUS&format=json&by=position&lat=44.8404&lng=-0.5805")
      today = time_info["formatted"].to_time
      last_hour = attributes[:last_hour].to_time
      result = today.hour > last_hour.hour
  
      if result
        action = Action.find(attributes[:action_id])
        today = today.to_date
        action.options["last_hour"] = today.to_s
        action.save
      end
      result
    end
  end