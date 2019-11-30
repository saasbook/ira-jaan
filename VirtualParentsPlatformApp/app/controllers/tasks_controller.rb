class TasksController < ApplicationController
    def index
      render json: [{"name": "Clean my room", "status": "IN_PROGRESS"}, {"name": "Do my homework", "status": "IN_PROGRESS"}, {"name": "Go to school", "status": "COMPLETED"}, {"name": "Go to practice", "status": "COMPLETED"}]
    end
  end