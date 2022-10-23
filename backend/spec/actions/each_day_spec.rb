require "rails_helper"

RSpec.describe EachDay do
    describe "#each_day" do
        context "when the last day is yesterday" do
            let(:action) { create(:action, options: { last_day: (Date.today-1).to_s }) }
            it "returns true" do
                options = { "action_id" => action.id, "last_day" => (Date.today-1).to_s }
                command = EachDayActionCommand.new(options)
                handler = EachDayActionCommandHandler.new
                expect(handler.call(command.to_h)).to eq(true)
            end
        end
    end
end