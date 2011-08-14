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
      # redirect_to root_url, :notice => "Support was successfully sent."
      # redirect_to '/', :notice_sent => t(:sent)
      if locale == 'es'
        redirect_to(root_path+'#contact', :locale => "es") 
        flash[:notice_sent] = t(:sent)
      else 
        redirect_to(root_path+'#contact', :locale => "en")
        flash[:notice_sent] = t(:sent) 
      end 

    else
      if @support.errors.any?
        flash[:error_name] = @support.errors[:sender_name][0]
        flash[:error_email] = @support.errors[:email][0]
        flash[:error_content] = @support.errors[:content][0]
      end
      if locale == 'es'
        redirect_to(root_path+'#contact', :locale => "es") 
        # redirect_to '#contact'
        # locale => 'es'
      else 
        redirect_to(root_path+'#contact', :locale => "en") 
      end 
    end
  end 

end
