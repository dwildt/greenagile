class Feature < ActiveRecord::Base
  validates_presence_of :title, :description, :status, :category
  validates_length_of :title, :maximum=>100
  validates_length_of :description, :maximum=>500
  validates_numericality_of :roi, :greater_than_or_equal_to=>0
end
