# frozen_string_literal: true

class User < ApplicationRecord
  enum user_type: [:normal, :administrator]

  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist
end
