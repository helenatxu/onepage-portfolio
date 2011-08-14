class SupportsController < ApplicationController

  def new
    # id is required to deal with form
    @support = Support.new(:id => 1)
  end

  def create
    if I18n.locale == 'es'
      locale = 'es'
    else
      locale = 'en'
    end
    @support = Support.new(params[:support])
    if @support.save
      if locale == 'es'
        redirect_to(root_path+'#contact', :locale => "es") 
        flash[:notice_sent] = t(:sent)
      else 
        redirect_to(root_path+'#contact', :locale => "en")
        flash[:notice_sent] = t(:sent) 
      end 

    else
      @projects = Project.all    
      render :template => 'home/hello'
    end 
  end
end 

