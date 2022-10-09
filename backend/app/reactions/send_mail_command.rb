# frozen_string_literal: true

class SendMailCommand
  def initialize(attributs)
    @reaction_id = attributs[:reaction_id]
  end

  def to_h
    { reaction_id: @reaction_id }
  end
end
