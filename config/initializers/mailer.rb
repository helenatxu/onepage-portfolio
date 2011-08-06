# config/initializers/mailer.rb
ActionMailer::Base.delivery_method = :smtp
 
ActionMailer::Base.smtp_settings = {
:enable_starttls_auto => true,
:address => 'smtp.gmail.com',
:port => 587,
:domain => "gmail.com",
:user_name => 'no.reply.portfolio.system@gmail.com',
:password => 'Hmc12345',
:authentication => 'plain',
}