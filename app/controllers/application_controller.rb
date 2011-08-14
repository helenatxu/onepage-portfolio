class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
  
  def local_request?
    false
  end

  def rescue_action_in_public(exception)
    case exception
    when ActiveRecord::RecordNotFound
      render :file => "#{RAILS_ROOT}/public/404.html", :status => 404
    else
      super
    end
  end
  
end
