class ReactionsController < ApplicationController
  before_action :set_reaction, only: [ :show ]
  before_action :user_logged?
  before_action :is_admin?

  # GET /reactions
  def index
    @reactions = Reaction.all

    render json: @reactions
  end

  # GET /reactions/1
  def show
    render json: @reaction
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reaction
      @reaction = Reaction.find(params[:id])
    end
end
