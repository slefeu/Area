# frozen_string_literal: true

class EmailReceivedActionCommandHandler
  def initialize
  end

  def call(attributs)
    puts "Email Received Command Handler"
    gmail = GmailClient.new(attributs[:token], attributs[:email])
    info = gmail.user_info
    current_number_of_mail_received = info["messagesTotal"]
    last_number_of_mail_received = attributs[:last_number_of_email_received]

    result = current_number_of_mail_received > last_number_of_mail_received
    some_mail_have_been_deleted = current_number_of_mail_received < last_number_of_mail_received

    if result || some_mail_have_been_deleted
      action = Action.find(attributs[:action_id])
      action.options["last_number_of_email_received"] = current_number_of_mail_received
      actions.save
    end
    result
  end
end
