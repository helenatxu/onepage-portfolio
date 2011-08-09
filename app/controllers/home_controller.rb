class HomeController < ApplicationController

  def hello
    @projects = Project.all    
    @support = Support.new
  end

end
