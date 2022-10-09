class WidgetsController < ApplicationController
  before_action :user_logged?, only: [ :create ]
  before_action :set_widget, only: %i[ show update destroy ]

  # GET /widgets
  def index
    @widgets = Widget.all

    render json: @widgets
  end

  # GET /widgets/1
  def show
    render json: @widget
  end

  # POST /widgets
  def create
    # Create Widget
    @widget = Widget.new(name: widget_params[:name], user_id: current_user.id)
    action_params = widget_params[:action]
    reaction_params = widget_params[:reaction]

    unless action_params && reaction_params && @widget.save
      render json: @widget.errors, status: :unprocessable_entity and return
    end

    # Create Action
    @action = Action.new(klass: action_params[:name], options: action_params[:options], widget_id: @widget.id)

    unless @action.save
      render json: @action.errors, status: :unprocessable_entity and return
    end

    # Create Reaction
    @reaction = Reaction.new(klass: reaction_params[:name], options: reaction_params[:options], action_id: @action.id)
    unless @reaction.save
      render json: @reaction.errors, status: :unprocessable_entity and return
    end

    render json: @widget, status: :created, location: @widget
  end

  # PATCH/PUT /widgets/1
  def update
    if @widget.update(widget_params)
      render json: @widget
    else
      render json: @widget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /widgets/1
  def destroy
    @widget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_widget
      @widget = Widget.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def widget_params
      params.require(:widget).permit(:name, action: {}, reaction: {})
    end
end
