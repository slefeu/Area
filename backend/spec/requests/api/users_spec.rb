# frozen_string_literal: true

require "swagger_helper"
require "rails_helper"

RSpec.describe "api/users", type: :request do
  path "/users" do
    get "Get all user" do
      tags "Users as admin"
      consumes "application/json"
      security [bearer: {}]

      response "200", "ok" do
        before { login_as create(:user_admin) }
        before { create(:user) }
        example "application/json", :example_two_user, [
                    {
                      id: 3,
                      first_name: "Alain",
                      last_name: "Provist",
                      email: "al.pro@email.com",
                      admin: false,
                      background: nil,
                      widgets: []
                    },
                    {
                      id: 4,
                      first_name: "Jean",
                      last_name: "Michelle",
                      email: "jean.michelle@email.com",
                      admin: false,
                      background: nil,
                      widgets: [
                        {
                          id: 1,
                          name: "Widget background",
                          active: true
                        },
                        {
                          id: 2,
                          name: "Widget twitter",
                          active: true
                        }
                      ]
                    }
                  ]
        run_test!
      end
      response "401", "unauthorized" do
        example "application/json", :your_not_logged, {
                  error: "You need to be logged"
                }

        example "application/json", :your_not_admin, {
                  error: "You are not admin."
                }

        run_test!
      end
    end
  end

  path "/current_user" do
    get "Get current user" do
      tags "Users"
      security [bearer: {}]

      response "200", "ok" do
        example "application/json", :example, {
                  id: 1,
                  first_name: "Adam",
                  last_name: "Smasher",
                  admin: false,
                  background: "https://apod.nasa.gov/apod/image/2210/LDN43_SelbyHanson_960.jpg",
                  widgets: [
                    {
                      id: 41,
                      name: "New background at 16h",
                      active: false,
                      action: {
                        id: 4,
                        name: "at_hour",
                        options: {
                          hour: "16:00:00",
                          action_id: 4
                        }
                      },
                      reaction: {
                        id: 3,
                        name: "daily_photo_bg",
                        options: {
                          reaction_id: 3
                        }
                      }
                    }
                  ]
                }

        run_test!
      end
      response "401", "unauthorized" do
        example "application/json", :your_not_logged, {
                  error: "You need to be logged"
                }

        run_test!
      end
    end
  end
end
