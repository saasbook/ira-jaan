# This tutorial is very helpful for nested resources implementation:
# https://www.digitalocean.com/community/tutorials/how-to-create-nested-resources-for-a-ruby-on-rails-application
class ActivityController < ApplicationController
    # NOTE: @user can be either an administrator or child
    before_action :get_admin, if: -> {params[:administrator_id].present?}
    before_action :get_child, if: -> {params[:child_id].present?}
    before_action :set_activity, only: [:show, :edit, :update, :destroy]

    def activity_params
        params.require(:activity).permit(:title, :description, :points_reward,
        :frequency, :notes, :feedback, :status, :activity_id)
    end

    def get_admin
        @user = Administrator.find params[:administrator_id]
    end

    def get_child
        @user = Child.find params[:child_id]
    end

    def set_activity
        @activity = Post.find params[:id]
    end

    def index
        # How to display list of activities directly on profile page instead
        # of having to click through?
        @activities = @user.activities
    end

    # Returns form for creating a new activity
    def new
    end

    def create
        @activity = @user.activities.build(activity_params)
        @activity.save!
        flash[:notice] = "New activity \"#{@activity.title}\" was successfully created."
        redirect_to administrator_activity_path(@user, @activity)
    end

    def show
    end

    def edit
    end

    def update
        @activity.update!(activity_params)
        flash[:notice] = "Activity \"#{@activity.title}\" was successfully updated."
        redirect_to administrator_activity_path(@user, @activity)
    end

    def destroy
        @activity.destroy
        flash[:notice] = "Activity \"#{@activity.title}\" was deleted."
    end
end
