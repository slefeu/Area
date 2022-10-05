require "sidekiq-scheduler"

class HardJob
  include Sidekiq::Job

  def perform(*args)
    puts "Hello world"
  end
end
