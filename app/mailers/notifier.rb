# app/mailer/notifier.rb
class Notifier < ActionMailer::Base

  def support_notification(sender)
    @sender = sender
    mail(:to => Settings.mail_to,
    :from => Settings.mailer_config[:user_name],
    :subject => "My Portfolio: A new message from #{sender.sender_name}")
  end
  
end