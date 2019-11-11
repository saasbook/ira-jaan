class Activity < ApplicationRecord
  belongs_to :administrator
  validates :administrator, presence: true
  validates :title, :points_reward, :status, :date, :frequency, presence: true
  validates :points_reward, numericality: {only_integer: true, greater_than: 0}
end
