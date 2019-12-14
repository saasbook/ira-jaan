class LoginController < ApplicationController
  # skip_before_action :authorized
  skip_before_action :verify_authenticity_token


  def index
  end

  def user
    if Administrator.where(:username => params[:username]).present?
        administrator
    else
        child
    end
  end

  def administrator
      @user = Administrator.find_by(username: params[:username])
      # TODO: add password authentication
      puts "Administrator Login"
      if @user && @user.password == params[:password]
          session[:administrator_id] = @user.id
          render json: @user
        #   redirect_to '/welcome/index'
      else
        #   redirect_to '/login/administrator'
      end
  end

  def child
      @user = Child.find_by(username: params[:username])
      # TODO: add password authentication
      if @user && @user.password == params[:password]
          session[:child_id] = @user.id
          render json: @user
        #   redirect_to '/welcome/index'
      else
        #   redirect_to '/login/child'
      end
  end

  def logout
      session[:child_id] = nil
      session[:administrator_id] = nil
      redirect_to '/welcome/index'
  end
end
