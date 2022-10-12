# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterAction = {}
  RouterAction[EachDayCommand] = EachDayCommandHandler.new
  RouterAction[AtHourCommand] = AtHourCommandHandler.new
end
