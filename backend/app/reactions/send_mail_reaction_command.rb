# frozen_string_literal: true

class SendMailReactionCommand
  def initialize(options)
    @reaction_id = options["reaction_id"]
    @user_id = Reaction.find(@reaction_id).action.widget.user.id
    @token_refreshed = options["token_refreshed"]
    @to = options["receiver"]
    @subject = options["object"]
    @body = options["message"]
  end

  def to_h
    { reaction_id: @reaction_id, user_id: @user_id, token_refreshed: @token_refreshed, to: @to, subject: @subject, body: @body }
  end
end
