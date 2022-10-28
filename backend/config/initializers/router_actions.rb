# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterAction ||= Router.new
  RouterAction.resolve(command: EachDayActionCommand, handler: EachDayActionCommandHandler.new)
  RouterAction.resolve(command: AtHourActionCommand, handler: AtHourActionCommandHandler.new)
end
