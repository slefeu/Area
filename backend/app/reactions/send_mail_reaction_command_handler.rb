# frozen_string_literal: true

require "google-apis-gmail_v1"

class SendMailReactionCommandHandler
  def initialize
    # @client = Google::Apis::GmailV1Service.new
  end

  def call(attributs)
    puts "Send Mail Command Handler"
    user = User.find(attributs[:user_id])
    gmail = GmailClient.new(user.google_token, user.email)
    gmail.send_mail(attributs[:to], attributs[:subject], attributs[:body])
  end
end
