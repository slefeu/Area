require "sidekiq-scheduler"

class HardJob
  include Sidekiq::Job

  def perform(*args)
    User.all.each do |user|
      puts user.inspect
      user.widgets.each do |widget|
        action = widget.action
        if Bus_actions.call(action.klass, action.options)
          reaction = action.reaction
          Bus_reactions.call(reaction.klass, reaction.options)
        end
      end
    end
  end
end
