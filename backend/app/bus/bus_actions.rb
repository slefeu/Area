# frozen_string_literal: true

class BusActions
  def initialize(router)
    @router = router
  end

  def call(klass, options)
    klass = klass.camelize + "Command"

    action = klass.constantize.send(:new, options)
    router[action.class].call action.to_h
  end

  attr_accessor :router
end
