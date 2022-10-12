# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterReaction = {}
  RouterReaction[SendMailReactionCommand] = SendMailReactionCommandHandler.new
  RouterReaction[DailyPhotoBgReactionCommand] = DailyPhotoBgReactionCommandHandler.new
end
