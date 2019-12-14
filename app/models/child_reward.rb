class ChildReward < ApplicationRecord
  belongs_to :child
  validates :child, presence: true
  belongs_to :reward
  validates :reward, presence: true
end
