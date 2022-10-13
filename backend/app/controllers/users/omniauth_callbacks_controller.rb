class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def twitter
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      render json: { message: "Connected" }, status: :ok
    else
      # session["devise.twitter_data"] = request.env["omniauth.auth"] # .except('extra')
      render json: { message: "Not Connected", error: @user.errors }, status: :unauthorized
    end
  end

  def google_oauth2
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      render json: { message: "Connected" }, status: :ok
    else
      # session["devise.google_data"] = request.env["omniauth.auth"].except("extra") # Removing extra as it can overflow some session stores
      render json: { message: "Not Connected", error: @user.errors }, status: :unauthorized
    end
  end

  def failure
    render json: { message: "Not Connected", error: @user.errors }, status: :unauthorized
  end
end
