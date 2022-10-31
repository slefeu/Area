# frozen_string_literal: true

require "swagger_helper"
require "rails_helper"

RSpec.describe "api/widgets", type: :request do
  before { login_as create(:user) }

  path "/widgets" do
    post "Create a widget" do
      tags "Widgets"
      consumes "application/json"
      security [bearer: {}]
      parameter name: :widget, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string, example: "New Background at 16h" },
          action: {
            type: :object,
            properties: { name: { type: :string, example: "at_hour" },
                    options: { type: :object, properties: {}, example: { "hour" => "16:00:00" } } },
            required: %w[name options]
          },
          reaction: {
            type: :object,
            properties: { name: { type: :string, example: "daily_photo_bg" },
options: { type: :object, properties: {}, example: {} } },
            required: %w[name options]
          }
        },
        required: %w[name action reaction]
      }

      response "201", "widget created" do
        let!(:widget) {
          { name: "widget", action: {  name: "each_day", options: {} },
            reaction: { name: "daily_photo_bg", options: {} } }
        }
        run_test!
      end

      response "422", "invalid request" do
        let(:widget) { { name: nil } }
        run_test!
      end
    end
  end
end
