# frozen_string_literal: true

class ActionToDisable
  def initialize
    @liste = []
  end

  def append(action_id)
    @liste.append(action_id)
  end

  def call
    @liste.each do |action_id|
      Action.find(action_id)&.disactive
    end

    @liste.clear
  end
end
