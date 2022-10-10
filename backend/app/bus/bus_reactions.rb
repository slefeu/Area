# frozen_string_literal: true

class BusReactions
  def initialize(router)
    @router = router
  end

  def call(klass, options)
    klass = klass.camelize + "Command"
    reaction = klass.constantize.send(:new, options)
    router[reaction.class].call reaction.to_h
  end

  attr_accessor :router
end
