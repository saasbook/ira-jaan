class Administrator < User
    has_many :children, :through => :connections
    has_many :activities
    has_many :rewards
end
