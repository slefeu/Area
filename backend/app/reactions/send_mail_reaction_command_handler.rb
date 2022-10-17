# frozen_string_literal: true
require "Gmail"

class SendMailCommandHandler
  def initialize
    Gmail.client_id = ENV["GMAIL_CLIENT_ID"]
    Gmail.client_secret = ENV["GMAIL_CLIENT_SECRET"]
  end

  def call(attributs)
    puts "Send Mail Command Handler"
    Gmail.refresh_token = attributs[:token_refreshed]
    mail = Gmail::Message.new(
      from: User.find(attributs[:user_id]).email,
      to: attributs[:to],
      subject: attributs[:subject],
      body: attributs[:body]
    )
    mail.deliver
  end
end