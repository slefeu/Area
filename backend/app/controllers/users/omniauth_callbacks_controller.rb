class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
    def twitter
        @user = User.from_omniauth(request.env["omniauth.auth"])

        if @user.persisted?
          puts "###b4rd###"
          sign_in_and_redirect @user, event: :authentication #this will throw if @user is not activated
        else
          session["devise.twitter_data"] = request.env["omniauth.auth"]#.except('extra')
          redirect_to new_user_registration_url
          puts "###ELSE###"
        end
      end

      def failure
        puts "###failure###"*10
        redirect_to root_path
      end
      def google_oauth2
        # You need to implement the method below in your model (e.g. app/models/user.rb)
        @user = User.from_omniauth(request.env['omniauth.auth'])

        if @user.persisted?
          sign_in_and_redirect @user, event: :authentication
        else
          session['devise.google_data'] = request.env['omniauth.auth'].except('extra') # Removing extra as it can overflow some session stores
          redirect_to new_user_registration_url, alert: @user.errors.full_messages.join("\n")
        end
    end
end