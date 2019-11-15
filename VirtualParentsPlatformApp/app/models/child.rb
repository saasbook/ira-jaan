class Child < ApplicationRecord
    validates :username, :password, :name, :points, presence: true
    validates :username, uniqueness: true
    validates :points, numericality: {only_integer: true, greater_than_or_equal_to: 0}

    has_many :connections, :dependent => :destroy
    has_many :administrators, :through => :connections
    has_many :child_activities, :dependent => :destroy
    has_many :child_rewards, :dependent => :destroy
    has_many :activities, :through => :child_activities
    has_many :rewards, :through => :child_rewards
end
