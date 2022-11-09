# frozen_string_literal: true

class EmailReceivedActionCommand
  def initialize(options)
    user = Reaction.find(@reaction_id).action.widget.user
    @action_id = options["action_id"]
    @last_number_of_email_received = options["last_number_of_email_received"] || current_number_of_mail
    @token = user.google_token
    @email = user.email
  end

  def to_h
    { action_id: @action_id, last_number_of_email_received: @last_number_of_email_received, token: @token,
      email: @email }
  end

  private
    def current_number_of_mail
      gmail = GmailClient.new(@token, @email)
      info = gmail.user_info
      info["messagesTotal"]
    end
end
