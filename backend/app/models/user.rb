# frozen_string_literal: true

class User < ApplicationRecord
  enum user_type: [:normal, :administrator]
end
