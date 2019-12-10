class Reward < ApplicationRecord
  validates :points_cost, :name, presence: true
  validates :points_cost, numericality: {only_integer: true, greater_than: 0}

  belongs_to :administrator
  validates :administrator, presence: true

  has_many :child_rewards, :dependent => :destroy
end
