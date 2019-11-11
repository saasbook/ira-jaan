class Connection < ApplicationRecord
  belongs_to :child
  validates :child, presence: true
  belongs_to :administrator
  validates :administrator, presence: true
end
