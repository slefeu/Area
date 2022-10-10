# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  Router = {}
  ToDie = []
  Router[EachDayCommand] = EachDayCommandHandler.new
  Router[SendMailCommand] = SendMailCommandHandler.new
  Router[AtHourCommand] = AtHourCommandHandler.new
  Router[DailyPhotoBgCommand] = DailyPhotoBgCommandHandler.new

  Bus_actions = BusActions.new(Router)
  Bus_reactions = BusReactions.new(Router)
end
