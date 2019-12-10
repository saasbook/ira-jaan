class ChildrenController < ApplicationController
    skip_before_action :verify_authenticity_token
    # before_action :authenticate_child!

    before_action :set_child, only: [:show, :edit, :update, :destroy, :connect]
    # skip_before_action :authorized, only: [:new, :create]

    def child_params
        params.require(:child).permit(:username, :password, :name, :age,
             :language, :description, :points, :search)
    end

    def set_child
        @child = Child.find params[:id]
    end

    def index
        @search = params[:search]
        if @search
            @admins = Child.where("username LIKE ? OR name LIKE ?", "%#{@search}%")
        else
            @admins = Child.all
        end
    end

    # Returns a form for creating a new profile page
    def new
    end

    def create
        @child = Child.create!(child_params)
        if @child.save
            render :json => { child: @child }
        else
            render :json => { }, :status => 500
        end
    end

    def show
    end

    def edit
    end

    def update
        @child.update!(child_params)
        flash[:notice] = "Your profile was successfully updated."
        redirect_to children_path(@child)
    end

    def destroy
        # Not needed for now, placeholder code to be RESTful
        # Need to make sure that only the actual user can delete their own profile.
        @child.destroy
        flash[:notice] = "Your profile was deleted."
        redirect_to children_path
    end

    # Connect this child to the current user (who must be an administrator)
    def connect
        @user = current_user
        if @user.instance_of? Administrator
            @user.children << @child
        else
            flash[:notice] = "Only an administrator can connect to a child"
        end
    end
end
