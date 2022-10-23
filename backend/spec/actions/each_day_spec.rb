require "rails_helper"

RSpec.describe EachDayActionCommand do
  describe "#each_day" do
    let(:action) { create(:action) }
    context "when the last day is yesterday" do
      let(:options)  { { "action_id" => action.id, "last_day" => (Date.today-1).to_s } }
      it "returns true" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h)).to eq(true)
      end
    end
    context "when the last day is today" do
      let(:options)  { { "action_id" => action.id, "last_day" => (Date.today).to_s } }
      it "returns true" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h)).to eq(false)
      end
    end
  end
end
