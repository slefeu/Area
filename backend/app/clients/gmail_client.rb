# frozen_string_literal: true

class GmailClient
  def initialize(refresh_token, email)
    @refresh_token = refresh_token
    @email = email
  end

  def user_info
    HTTParty.get("https://gmail.googleapis.com/gmail/v1/users/#{@email}/profile",
                 headers: { "Authorization": "Bearer #{access_token}" })
  end

  def send_mail(to, subject, message)
    raw = Base64.encode64("From: <#{@email}>
To: <#{to}>
Subject: #{subject}

#{message}").tr("+/", "-_").delete("\n")
    puts raw

    HTTParty.post("https://gmail.googleapis.com/gmail/v1/users/#{@email}/messages/send",
                 headers: { "Authorization": "Bearer #{access_token}", "Accept": "application/json",
                            "Content-Type": "application/json" },
                 body: { raw: raw }.to_json)
  end

  private
    def access_token
      @access_token ||= HTTParty.post("https://accounts.google.com/o/oauth2/token", body: body_access_token,
                             headers: { "content-type": "application/x-www-form-urlencoded" })["access_token"]
    end

    def body_access_token
      { grant_type: "refresh_token",
        client_id: ENV["GOOGLE_CLIENT_ID"],
        client_secret: ENV["GOOGLE_CLIENT_SECRET"],
        refresh_token: @refresh_token }
    end
end
