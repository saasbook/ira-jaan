class Activity < ApplicationRecord
    validates :title, :points_reward, :frequency, presence: true
    validates :points_reward, numericality: {only_integer: true, greater_than: 0}

    belongs_to :administrator
    validates :administrator, presence: true

    has_many :child_activities, :dependent => :destroy
end
