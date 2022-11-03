# frozen_string_literal: true

Rails.application.reloader.to_prepare do
  RouterReaction ||= Router.new
  RouterReaction.resolve(command: SendMailReactionCommand, handler: SendMailReactionCommandHandler.new)
  RouterReaction.resolve(command: DailyPhotoBgReactionCommand, handler: DailyPhotoBgReactionCommandHandler.new)
end
