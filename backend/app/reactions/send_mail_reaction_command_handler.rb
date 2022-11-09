# frozen_string_literal: true

class SendMailReactionCommandHandler
  def initialize
  end

  def call(attributs)
    puts "Send Mail Command Handler"
    gmail = GmailClient.new(attributs[:token], attributs[:email])
    gmail.send_mail(attributs[:to], attributs[:subject], attributs[:body])
  end
end
