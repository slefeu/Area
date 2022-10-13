# == Schema Information
#
# Table name: jwt_denylist
#
#  id  :bigint           not null, primary key
#  jti :string           not null
#  exp :datetime         not null
#
class JwtDenylist < ApplicationRecord
    include Devise::JWT::RevocationStrategies::Denylist

    self.table_name = 'jwt_denylist'
  end
