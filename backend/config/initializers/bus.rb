# frozen_string_literal: true

require_relative "router_actions"
require_relative "router_reactions"

Rails.application.reloader.to_prepare do
  Widget_to_kill = WidgetToKill.new

  Bus_actions = BusActions.new(RouterAction)
  Bus_reactions = BusReactions.new(RouterReaction)
end
