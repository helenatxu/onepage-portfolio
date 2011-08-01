class HomeController < ApplicationController
  def hello
    @projects = Project.all
  end

end
