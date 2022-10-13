# == Schema Information
#
# Table name: reactions
#
#  id         :bigint           not null, primary key
#  klass      :string           not null
#  options    :jsonb            not null
#  action_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class ReactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
