# frozen_string_literal: true

class EachDayActionCommand
  def initialize(options)
    @action_id = options["action_id"]
  end

  def to_h
    { action_id: @action_id }
  end
end
