class LoginController < ApplicationController
  skip_before_action :authorized

  def index
  end

  def administrator
      @user = Administrator.find_by(username: params[:username])
      # TODO: add password authentication
      if @user
          session[:administrator_id] = @user.id
          redirect_to '/welcome/index'
      else
          redirect_to '/login/administrator'
      end
  end

  def child
      @user = Child.find_by(username: params[:username])
      # TODO: add password authentication
      if @user
          session[:child_id] = @user.id
          redirect_to '/welcome/index'
      else
          redirect_to '/login/child'
      end
  end

  def logout
      session[:child_id] = nil
      session[:administrator_id] = nil
      redirect_to '/welcome/index'
  end
end
