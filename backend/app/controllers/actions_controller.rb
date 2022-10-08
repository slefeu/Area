class ActionsController < ApplicationController
  before_action :set_action, only: %i[ show update destroy ]

  # GET /actions
  def index
    @actions = Action.all

    render json: @actions
  end

  # GET /actions/1
  def show
    render json: @action
  end

  # POST /actions
  def create
    @action = Action.new(action_params)

    if @action.save
      render json: @action, status: :created, location: @action
    else
      render json: @action.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /actions/1
  def update
    if @action.update(action_params)
      render json: @action
    else
      render json: @action.errors, status: :unprocessable_entity
    end
  end

  # DELETE /actions/1
  def destroy
    @action.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_action
      @action = Action.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def action_params
      params.require(:action).permit(:klass, :options, :reaction_id)
    end
end
