# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :user_logged?, only: %i[ show_current_user reset_token ]
  before_action :set_user, only: %i[ show update destroy ]
  before_action :is_admin?, only: [:destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  def signout
    sign_out current_user
    render json: { message: "Logged out." }, status: :ok
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

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /users/reset_token
  def reset_token
    raw, hashed = Devise.token_generator.generate(User, :reset_password_token)
    user = current_user
    user.reset_password_token = Devise.token_generator.digest(User, :reset_password_token, hashed)
    user.reset_password_sent_at = Time.now
    user.save

    render json: hashed
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def is_admin?
      puts current_user.inspect
      unless current_user.admin
        render json: { message: "You are not admin." }, status: :unauthorized
      end
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :user_type, :password)
    end
end
