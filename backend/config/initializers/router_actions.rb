# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterAction = {}
  RouterAction[EachDayActionCommand] = EachDayActionCommandHandler.new
  RouterAction[AtHourActionCommand] = AtHourActionCommandHandler.new
end
