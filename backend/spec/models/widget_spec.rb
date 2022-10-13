# == Schema Information
#
# Table name: widgets
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  active     :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
require 'rails_helper'

RSpec.describe Widget, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
