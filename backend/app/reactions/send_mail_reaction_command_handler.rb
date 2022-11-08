# frozen_string_literal: true

require "google-apis-gmail_v1"

class SendMailReactionCommandHandler
  def initialize
    # @client = Google::Apis::GmailV1Service.new
  end

  def call(attributs)
    puts "Send Mail Command Handler"
    gmail = GmailClient.new(attributs[:token], attributs[:email])
    gmail.send_mail(attributs[:to], attributs[:subject], attributs[:body])
  end
end
