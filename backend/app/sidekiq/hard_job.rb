# frozen_string_literal: true

require "sidekiq-scheduler"

class HardJob
  include Sidekiq::Job

  def perform(*args)
    user_job

    Widget_to_kill.call
    Widget_to_disable.call
  end

  private
    def user_job
      User.all.each do |user|
        user.widgets.activated.each do |widget|
          action = widget.action
          next unless Bus_actions.call(action.klass_command, action.options)

          reaction = action.reaction
          Bus_reactions.call(reaction.klass_command, reaction.options)
        end
        puts user.inspect
      end
    end
end
