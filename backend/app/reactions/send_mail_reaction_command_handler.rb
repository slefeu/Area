# frozen_string_literal: true

require "google-apis-gmail_v1"

class SendMailReactionCommandHandler
  def initialize
    # @client = Google::Apis::GmailV1Service.new
  end

  def call(attributs)
    puts "Send Mail Command Handler"
    HTTParty.get("https://gmail.googleapis.com/gmail/v1/users/#{user_id}/profile",
                 headers: { "Authorization": "Bearer #{access_token}" })
    result = HTTParty.post("https://accounts.google.com/o/oauth2/token", body: body,
                           headers: { "content-type": "application/x-www-form-urlencoded" })
  end
end
