# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterReaction = {}
  RouterReaction[SendMailCommand] = SendMailCommandHandler.new
  RouterReaction[DailyPhotoBgCommand] = DailyPhotoBgCommandHandler.new
end
