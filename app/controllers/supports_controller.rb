class SupportsController < ApplicationController

  def new
    # id is required to deal with form
    @support = Support.new(:id => 1)
  end

  def create
    @support = Support.new(params[:support])
    if @support.save
      redirect_to root_url, :notice => "Support was successfully sent."
      #     redirect_to('#contact', :notice => "Support was successfully sent.")
    else
      if @support.errors.any?
        
        flash[:notice] =  @support.errors.full_messages
      end
      redirect_to('#contact')
#      flash[:alert] = "You must fill all fields."
    end
  end 

end