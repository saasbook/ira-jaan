class ChildController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_child, only: [:show, :edit, :update, :destroy]
    # before_action :authenticate_child!

    def child_params
        params.require(:child).permit(:username, :password, :name, :age,
             :language, :description, :points)
    end

    def set_child
        @child = Child.find params[:id]
    end

    def index
        # Needs to be implemented in context of being able to search for users
        # NEXT ITERATION
    end

    # Returns a form for creating a new profile page
    def new
    end

    def create
        @child = Child.create!(child_params)
        # flash[:notice] = "#{@child.username}, your profile was successfully created."
        # redirect_to children_path(@child)
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
end
