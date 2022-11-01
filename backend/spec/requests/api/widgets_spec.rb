# frozen_string_literal: true

require "swagger_helper"
require "rails_helper"

RSpec.describe "api/widgets", type: :request do
  path "/widgets" do
    post "Create a widget" do
      tags "Widgets"
      consumes "application/json"
      produces "application/json"
      security [bearer: {}]
      parameter name: :widget, in: :body, schema: {
        type: :object,
        properties: {
          widget: {
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
        }
      }

      response "201", "widget created" do
        let!(:widget) {
          {
            widget: {
                  name: "widget", action: {  name: "each_day", options: {} },
                  reaction: { name: "daily_photo_bg", options: {} }
            }
          }
        }

        example "application/json", :example_request, {
                  id: 45,
                  name: "New background at 16h",
                  active: true,
                  action: {
                    id: 8,
                    name: "at_hour",
                    options: {
                      "action_id"=>8,
                      "hour": "16:00:00"
                    }
                  },
                  reaction: {
                    id: 8,
                    name: "daily_photo_bg",
                    options: {}
                  }
                }
        run_test!
      end

      response "422", "action invalid" do
        let!(:widget) {
          {
            widget: {
                  name: "widget", action: {  name: "I don't know", options: {} },
                  reaction: { name: "daily_photo_bg", options: {} }
            }
          }
        }
        run_test!
      end

      response "422", "reaction invalid" do
        let!(:widget) {
          {
            widget: {
                  name: "widget", action: {  name: "at_hour", options: {} },
                  reaction: { name: "I don't know", options: {} }
            }
          }
        }
        run_test!
      end

      response "422", "invalid request" do
        let(:widget) { { widget: { name: nil } } }
        run_test!
      end
    end
  end

  path "/widgets/{id}" do
    patch "Update a widget" do
      tags "Widgets"
      consumes "application/json"
      produces "application/json"
      security [bearer: {}]
      parameter name: :id, in: :path, type: :string
      parameter name: :widget, in: :body, schema: {
        type: :object,
        properties: {
          widget: { type: :object, properties: {
            name: { type: :string, example: "Other name" },
            active: { type: :boolean, example: true },
            action: {
              type: :object,
              properties: { name: { type: :string, example: "each_day" },
                      options: { type: :object, properties: {}, example: {} } },
              required: %w[name active options]
            },
          },
          required: %w[active]
        }
      }
    }

      response "200", "widget modified" do
        let!(:widget) {
          {
            widget: {
                  name: "other name", active: true, action: {  name: "each_day", options: {} },
            }
          }
        }

        example "application/json", :example_request, {
                  id: 45,
                  name: "Other name",
                  active: true,
                  action: {
                    id: 8,
                    name: "each_day",
                    options: {
                      "action_id"=>8,
                    }
                  },
                  reaction: {
                    id: 8,
                    name: "daily_photo_bg",
                    options: {}
                  }
                }
        run_test!
      end

      response "422", "invalid request" do
        let(:widget) {
          {
            widget: {
                  name: "other", active: true, action: {  name: "I don't know", options: { "hour": "14:00:00" } },
            }
          }
        }
        run_test!
      end
    end

    delete "Destroy widget" do
      tags "Widgets"
      security [bearer: {}]
      produces "application/json"
      parameter name: :id, in: :path, type: :string

      response "204", "widget deleted" do
        run_test!
      end

      response "404", "widget not found" do
        let!(:id) { 340 }
        run_test!
      end
    end
  end
end
