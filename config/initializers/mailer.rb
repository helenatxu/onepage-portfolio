# config/initializers/mailer.rb
ActionMailer::Base.delivery_method = :smtp
 
ActionMailer::Base.smtp_settings = Settings.mailer_config