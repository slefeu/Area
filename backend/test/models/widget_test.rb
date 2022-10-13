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
require "test_helper"

class WidgetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
