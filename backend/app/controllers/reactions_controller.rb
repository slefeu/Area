class ReactionsController < ApplicationController
  before_action :set_reaction, only: %i[ show update destroy ]

  # GET /reactions
  def index
    @reactions = Reaction.all

    render json: @reactions
  end

  # GET /reactions/1
  def show
    render json: @reaction
  end

  # POST /reactions
  def create
    @reaction = Reaction.new(reaction_params)

    if @reaction.save
      render json: @reaction, status: :created, location: @reaction
    else
      render json: @reaction.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reactions/1
  def update
    if @reaction.update(reaction_params)
      render json: @reaction
    else
      render json: @reaction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reactions/1
  def destroy
    @reaction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reaction
      @reaction = Reaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reaction_params
      params.require(:reaction).permit(:service, :class, :widget_id)
    end
end
