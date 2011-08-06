class SupportsController < ApplicationController
  
  def new
    # id is required to deal with form
    @support = Support.new(:id => 1)
  end
 
  def create
    @support = Support.new(params[:support])
    if @support.save
      redirect_to('#contact', :notice => "Support was successfully sent.")
    else
      redirect_to('#contact', :notice => "Caca.")
      flash[:alert] = "You must fill all fields."
    end
  end
  
  
end