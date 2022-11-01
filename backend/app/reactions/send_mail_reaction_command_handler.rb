# frozen_string_literal: true

require "google-apis-gmail_v1"

class SendMailReactionCommandHandler
  def initialize
    @client = Google::Apis::GmailV1Service.new
  end

  def call(attributs)
    puts "Send Mail Command Handler"
  end
end
