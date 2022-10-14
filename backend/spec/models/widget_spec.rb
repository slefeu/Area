# == Schema Information
#
# Table name: widgets
#
#  id         :bigint           not null, primary key
#  active     :boolean          default(TRUE), not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_widgets_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
require "rails_helper"

RSpec.describe Widget, type: :model do
  context "create a widget valid" do
    let(:name) { "nom" }
    subject { create(:widget, name: name) }
    it "should persist widget" do
      expect { subject }.to change(Widget, :count).by(1)
    end

    it "had capitalized the name" do
      expect(subject.name).to eq("Nom")
    end

    it "is activated" do
      expect(subject.active).to be_truthy
    end
  end

  context "change widget status" do
    let(:widget) { create(:widget) }
    it "should desactivate the widget" do
      expect { widget.disactivate }.to change(widget, :active).to(false)
    end

    it "should return back to active" do
      widget.disactivate
      expect { widget.activate }.to change(widget, :active).to(true)
    end
  end
end
