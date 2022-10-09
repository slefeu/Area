# frozen_string_literal: true

class AtHourCommand
  def initialize(attributs)
    @action_id = attributs["action_id"]
    @widget_id = Action.find(@action_id).widget.id
    @hour = attributs["hour"]
  end

  def to_h
    { action_id: @action_id, widget_id: @widget_id, hour: @hour }
  end
end
