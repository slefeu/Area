# frozen_string_literal: true

class WidgetToDisable
  def initialize
    @liste = []
  end

  def append(widget_id)
    @liste.append(widget_id)
  end

  def call
    @liste.each do |widget_id|
      Widget.find(action_id)&.disactive
    end

    @liste.clear
  end
end
