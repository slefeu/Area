require "rails_helper"

RSpec.describe ReactionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/reactions").to route_to("reactions#index")
    end

    it "routes to #show" do
      expect(get: "/reactions/1").to route_to("reactions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/reactions").to route_to("reactions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/reactions/1").to route_to("reactions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/reactions/1").to route_to("reactions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/reactions/1").to route_to("reactions#destroy", id: "1")
    end
  end
end
