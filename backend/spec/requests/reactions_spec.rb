require "rails_helper"

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/reactions", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Reaction. As you add validations to Reaction, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    attributes_for(:reaction)
  }

  let(:invalid_attributes) {
    { klass: 23, options: "" }
  }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # ReactionsController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) {
    {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      Reaction.create! valid_attributes
      get reactions_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      reaction = Reaction.create! valid_attributes
      get reaction_url(reaction), as: :json
      expect(response).to be_successful
    end
  end
end
