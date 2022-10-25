require "rails_helper"

RSpec.describe EachMonthActionCommand do
  describe "#each_month" do
    let(:action) { create(:action) }
    mocked_response = HTTParty.get("https://api.timezonedb.com/v2.1/get-time-zone?key=MLW9WKV7JEUS&format=json&by=position&lat=44.8404&lng=-0.5805")
    context "when the last month is one month ago" do
      let(:options)  { { "action_id" => action.id, "last_month" => (Date.today-30).to_s } }
      it "returns true" do
        command = EachMonthActionCommand.new(options)
        handler = EachMonthActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end

    context "when the last month is today" do
      let(:options)  { { "action_id" => action.id, "last_month" => (Date.today).to_s } }
      it "returns false" do
        command = EachMonthActionCommand.new(options)
        handler = EachMonthActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last month is in 30 days" do
      let(:options)  { { "action_id" => action.id, "last_month" => (Date.today+30).to_s } }
      it "returns false" do
        command = EachMonthActionCommand.new(options)
        handler = EachMonthActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(false)
      end
    end

    context "when the last month is undefined" do
      let(:options)  { { "action_id" => action.id } }
      it "returns true" do
        command = EachMonthActionCommand.new(options)
        handler = EachMonthActionCommandHandler.new
        expect(handler.call(command.to_h, mocked_response)).to eq(true)
      end
    end
  end
end