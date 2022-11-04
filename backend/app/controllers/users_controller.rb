# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  before_action :is_admin?, only: %i[ index show update destroy ]
  before_action :user_logged?

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user, include: "*.*.*"
  end

  # GET /current_user
  def show_current_user
    @user = current_user
    render json: @user, include: "*.*.*"
  end

  # PATCH /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /users/reset_token
  def reset_token
    _raw, hashed = Devise.token_generator.generate(User, :reset_password_token)
    current_user.reset_token(hashed)

    render json: { token: hashed.to_s }
  end

  # DELETE /signout
  def signout
    sign_out current_user
    render json: { message: "Logged out." }, status: :ok
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "User not found" }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :admin, :password)
    end
end
