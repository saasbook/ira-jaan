class TasksController < ApplicationController
    def index
      render json: [{"name": "Do Laundry"}, {"name": "Clean Room"}]
    end
  end