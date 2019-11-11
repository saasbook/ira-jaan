class User < ApplicationRecord
    validates :type, :username, :password, :name, :points, presence: true
    validates :username, uniqueness: true
    validates :points, numericality: {only_integer: true, greater_than_or_equal_to: 0}

end
