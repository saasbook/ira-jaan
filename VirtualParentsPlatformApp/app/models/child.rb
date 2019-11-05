class Child < User
    has_many :administrators, :through => :connections
    has_many :activities, :through => :child_activities
    has_many :rewards, :through => :child_rewards
end
