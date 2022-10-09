# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  Router = {}
  Router[EachDayCommand] = EachDayCommandHandler.new
  Router[SendMailCommand] = SendMailCommandHandler.new

  Bus_actions = BusActions.new(Router)
  Bus_reactions = BusReactions.new(Router)
end
