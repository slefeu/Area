require "rails_helper"

RSpec.describe EachHourActionCommand do
  describe "#each_hour" do
    let(:action) { create(:action) }
    mocked_response = HTTParty.get("https://api.timezonedb.com/v2.1/get-time-zone?key=MLW9WKV7JEUS&format=json&by=position&lat=44.8404&lng=-0.5805")
    context "when the last hour is one hour ago" do
      let(:options)  { { "action_id" => action.id, "last_hour" => (Date.hour-1).to_s } }
      it "returns true" do
        command = EachHourActionCommand.new(options)
        handler = EachHourActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end

    context "when the last hour is now" do
      let(:options)  { { "action_id" => action.id, "last_hour" => (Date.hour).to_s } }
      it "returns false" do
        command = EachHourActionCommand.new(options)
        handler = EachHourActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last hour is in one hour" do
      let(:options)  { { "action_id" => action.id, "last_hour" => (Date.hour+1).to_s } }
      it "returns false" do
        command = EachHourActionCommand.new(options)
        handler = EachHourActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last hour is undefined" do
      let(:options)  { { "action_id" => action.id } }
      it "returns true" do
        command = EachHourActionCommand.new(options)
        handler = EachHourActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end
  end
end
