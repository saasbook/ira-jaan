class Administrator < User
    has_many :connections, :dependent => :destroy
    has_many :children, :through => :connections
    has_many :activities, :dependent => :destroy
    has_many :rewards, :dependent => :destroy

    validates :email, presence: true
end
