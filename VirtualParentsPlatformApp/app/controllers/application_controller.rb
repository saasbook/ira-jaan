class ApplicationController < ActionController::Base
    # Helpful for login stuff:
    # https://levelup.gitconnected.com/simple-authentication-guide-with-ruby-on-rails-16a6255f0be8
    # Can be used in views
    # before_action :authorized
    # helper_method :current_user
    # helper_method :logged_in?

    def current_user
        if session[:administrator_id]
            return Administrator.find_by(id: session[:administrator_id])
        elsif session[:child_id]
            return Child.find_by(id: session[:child_id])
        end
    end

    def logged_in?
        return !current_user.nil?
    end

    # def authorized
    #     redirect_to '/welcome/index' unless logged_in?
    # end
end
