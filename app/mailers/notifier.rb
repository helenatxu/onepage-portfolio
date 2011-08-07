# app/mailer/notifier.rb
class Notifier < ActionMailer::Base

  def support_notification(sender)
    @sender = sender
    mail(:to => "hele.natxu@gmail.com",
#    :from => sender.email,
    :from => "no.reply.portfolio.system@gmail.com",
    :subject => "Message from my Portfolio: A new message from #{sender.sender_name}")
  end
  
end