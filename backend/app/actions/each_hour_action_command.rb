# frozen_string_literal: true

class EachHourActionCommand
    def initialize(options)
      @action_id = options["action_id"]
      @last_hour = options["last_hour"] || (Date.today-30).to_s
    end
  
    def to_h
      { action_id: @action_id, last_month: @last_hour }
    end
  end