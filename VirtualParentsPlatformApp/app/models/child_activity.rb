class ChildActivity < ApplicationRecord
  belongs_to :child
  validates :child, presence: true
  belongs_to :activity
  validates :activity, presence: true
end
