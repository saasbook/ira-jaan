class RewardsController < ApplicationController
    # NOTE: @user can be either an administrator or child
    before_action :get_admin, if: -> {params[:administrator_id].present?}
    before_action :get_child, if: -> {params[:child_id].present?}
    before_action :set_reward, only: [:show, :edit, :update, :destroy]

    def reward_params
        params.require(:reward).permit(:points_cost, :name, :description, :url, :reward_id)
    end

    def get_admin
        @user = Administrator.find params[:administrator_id]
    end

    def get_child
        @user = Child.find params[:child_id]
    end

    def set_reward
        @reward = Reward.find params[:id]
    end

    def index
        # How to display list of rewards directly on profile page instead
        # of having to click through?
        @rewards = @user.rewards
    end

    # Returns form for creating a new reward
    def new
    end

    def create
        @reward = @user.rewards.build(reward_params)
        @reward.save!
        flash[:notice] = "New reward \"#{@reward.name}\" was successfully created."
        redirect_to administrator_reward_path(@user, @reward)
    end

    def show
    end

    def edit
    end

    def update
        @reward.update!(reward_params)
        flash[:notice] = "Reward \"#{@reward.name}\" was successfully updated."
        redirect_to administrator_reward_path(@user, @reward)
    end

    def destroy
        @reward.destroy
        flash[:notice] = "Reward \"#{@reward.name}\" was deleted."
    end

    # Used by a child to claim a reward on an administrator's profile page.
    def claim
        @child = current_user
        if @child.instance_of? Child
            @child.points -= @reward.points_cost
            if @child.points < 0
                flash[:notice] = "You don't have enough points to claim this reward!"\
                @child.points += @reward.points_cost
            else
                @child.rewards << @reward
                @child_reward = @child.child_rewards.where(reward_id: @reward.id).first
                # TODO: add stuff here to send notification email to administrator.
            end
        end
    end
end
