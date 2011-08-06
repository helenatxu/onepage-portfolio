class Project < ActiveRecord::Base
  
  validates :name,  :presence => true
  validates :description, :presence => true, :length => { :minimum => 5 }
  validates :work, :presence => true
  validates :tools, :presence => true
  
    
  def unique_name? 
    if Project.find_by_name(name) 
      errors.add(:name, "is already being used") 
    end 
  end
  
end
