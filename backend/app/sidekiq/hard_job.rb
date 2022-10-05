require "sidekiq-scheduler"

class HardJob
  include Sidekiq::Job

  def perform(*args)
    User.all.each do |user|
      puts user.inspect
    end
  end
end
