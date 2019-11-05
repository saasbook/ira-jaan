class Connection < ApplicationRecord
  belongs_to :child
  belongs_to :administrator
end
