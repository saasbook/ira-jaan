# This tutorial is very helpful for nested resources implementation:
# https://www.digitalocean.com/community/tutorials/how-to-create-nested-resources-for-a-ruby-on-rails-application
class ActivitiesController < ApplicationController
    # NOTE: @user can be either an administrator or child
    before_action :get_admin, if: -> {params[:administrator_id].present?}
    before_action :get_child, if: -> {params[:child_id].present?}
    before_action :set_activity, only: [:show, :edit, :update, :destroy, :start, :finish, :approve]

    def activity_params
        params.require(:activity).permit(:title, :description, :points_reward,
        :frequency, :notes, :feedback, :activity_id)
    end

    def get_admin
        @user = Administrator.find params[:administrator_id]
    end

    def get_child
        @user = Child.find params[:child_id]
    end

    def set_activity
        @activity = Activity.find params[:id]
    end

    def index
        # How to display list of activities directly on profile page instead
        # of having to click through?
        @activities = @user.activities
        render :json => {activities: @activities}
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
        render :json => {activity: @activity}
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

    # Used by child users to start a certain activity.
    # Context: child is on the page of an activity owned by an administrator
    def start
        @child = current_user
        if @child.instance_of? Child
            @child.activities << @activity
            @child_activity = @child.child_activities.where(activity_id: @activity.id).first
            @child_activity.status = "Started"
        end
    end

    # Used by child users to mark an activity they've started as finished.
    # Context: child is on the page of an activity started by them.
    def finish
        @child = current_user
        if @child.instance_of? Child && @child.id == @user.id
            @child_activity = @child.child_activities.where(activity_id: @activity.id).first
            @child_activity.status = "Finished"
        end
    end

    # Used by administrators to approve a certain child's finished activity.
    # Removes this activity from the child and gives the points to the child.
    # Context: administrator is on the page of an activity finished by a child.
    def approve
        @admin = current_user
        if @admin.instance_of? Administrator
            @admin.points -= @activity.points_reward
            if @admin.points < 0
                flash[:notice] = "You don't have enough points to approve this activity!"
                @admin.points += @activity.points_reward
            else
                @user.activities.delete(@activity)
                @user.points += @activity.points_reward
            end
        end
    end

    # Consolidates start, finish, and approve into a single POST method
    # Should include params[:action]
    def interact
        action = params[:action]
        if action == "start"
            @child = current_user
            if @child.instance_of? Child
                @child.activities << @activity
                @child_activity = @child.child_activities.where(activity_id: @activity.id).first
                @child_activity.status = "Started"
            end
        end

        if action == "finish"
            @child = current_user
            if @child.instance_of? Child && @child.id == @user.id
                @child_activity = @child.child_activities.where(activity_id: @activity.id).first
                @child_activity.status = "Finished"
            end
        end

        if action == "approve"
            @admin = current_user
            if @admin.instance_of? Administrator
                @admin.points -= @activity.points_reward
                if @admin.points < 0
                    flash[:notice] = "You don't have enough points to approve this activity!"
                    @admin.points += @activity.points_reward
                else
                    @user.activities.delete(@activity)
                    @user.points += @activity.points_reward
                end
            end
        end
    end
end
