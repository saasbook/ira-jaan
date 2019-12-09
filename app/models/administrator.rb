class Administrator < ApplicationRecord
    validates :username, :password, :name, :points, :email, :admin_type, presence: true
    validates :username, uniqueness: true
    validates :points, numericality: {greater_than_or_equal_to: 0}

    has_many :connections, :dependent => :destroy
    has_many :children, :through => :connections
    has_many :activities, :dependent => :destroy
    has_many :rewards, :dependent => :destroy
end
