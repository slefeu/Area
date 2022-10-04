# frozen_string_literal: true

class User < ApplicationRecord
  enum status: [:normal, :administrato]
end
