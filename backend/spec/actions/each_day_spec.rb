require "rails_helper"

RSpec.describe EachDayActionCommand do
  describe "#each_day" do
    let(:action) { create(:action) }
    mocked_response = HTTParty.get("https://api.timezonedb.com/v2.1/get-time-zone?key=MLW9WKV7JEUS&format=json&by=position&lat=44.8404&lng=-0.5805")
    context "when the last day is yesterday" do
      let(:options)  { { "action_id" => action.id, "last_day" => (Date.today-1).to_s } }
      it "returns true" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end

    context "when the last day is today" do
      let(:options)  { { "action_id" => action.id, "last_day" => (Date.today).to_s } }
      it "returns false" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last day is tomorrow" do
      let(:options)  { { "action_id" => action.id, "last_day" => (Date.today+1).to_s } }
      it "returns false" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last day is undefined" do
      let(:options)  { { "action_id" => action.id } }
      it "returns true" do
        command = EachDayActionCommand.new(options)
        handler = EachDayActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end
  end
end
