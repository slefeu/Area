# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  Router = {}
  Router[EachDay] = EachDayHandler.new
  Router[SendMail] = SendMailHandler.new

  Bus_actions = BusActions.new(Router)
  Bus_reactions = BusReactions.new(Router)
end
