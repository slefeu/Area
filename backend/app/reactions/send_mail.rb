# frozen_string_literal: true

class SendMail
  def initialize(attributs)
    @reaction_id = attributs[:reaction_id]
  end

  def to_h
    { reaction_id: @reaction_id }
  end
end
