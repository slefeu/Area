# frozen_string_literal: true

require "sidekiq-scheduler"

class HardJob
  include Sidekiq::Job

  def perform(*args)
    user_job
    Widget_to_kill.call
  end

  private
    def user_job
      User.all.each do |user|
        user.widgets.each do |widget|
          action = widget.action
          if Bus_actions.call(action.klass, action.options)
            reaction = action.reaction
            Bus_reactions.call(reaction.klass, reaction.options)
          end
        end
        puts user.inspect
      end
    end
end
