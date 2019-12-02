class AdministratorController < ApplicationController
  before_action :set_admin, only: [:show, :edit, :update, :destroy, :connect]
  skip_before_action :authorized, only: [:new, :create]

  def administrator_params
      params.require(:administrator).permit(:username, :password, :name, :age,
          :email, :language, :description, :points, :search)
  end

  def set_admin
      @admin = Administrator.find params[:id]
  end

  def index
      @search = params[:search]
      if @search
          @admins = Administrator.where("username LIKE ? OR name LIKE ?", "%#{@search}%")
      else
          @admins = Administrator.all
      end
  end

  # Returns a form for creating a new profile page
  def new
  end

  def create
      @admin = Administrator.create!(administrator_params)
      session[:administrator_id] = @admin.id
      flash[:notice] = "#{@admin.username}, your profile was successfully created."
      redirect_to administrator_path(@admin)
  end

  def show
  end

  def edit
  end

  def update
      @admin.update!(administrator_params)
      flash[:notice] = "Your profile was successfully updated."
      redirect_to administrator_path(@admin)
  end

  def destroy
      # Not needed for now, placeholder code to be RESTful
      # Need to make sure that only the actual user can delete their own profile.
      @admin.destroy
      flash[:notice] = "Your profile was deleted."
      redirect_to administrators_path
  end

  # Displays form to add a chosen number of points
  def add_points
      @admin = Administrator.find params[:id]
  end

  # Adds points to this administrator's account
  def update_points
      @admin = Administrator.find params[:id]
      params.require(:points)
      @admin.points += params[:points]
      @admin.save!
      flash[:notice] = "Points updated"
      redirect_to administrator_path(@admin)
  end

  # Connect this administrator to the current user (who must be a child)
  def connect
      @user = current_user
      if @user.instance_of? Child
          @user.administrators << @admin
      else
          flash[:notice] = "Only a child can connect to an administrator"
      end
  end
end
