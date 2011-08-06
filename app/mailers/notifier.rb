# app/mailer/notifier.rb
class Notifier < ActionMailer::Base

  def support_notification(sender)
    @sender = sender
#    mail(:to => "no.reply.portfolio.system@gmail.com",
    mail(:to => "helenatxu@gmail.com",
#    :from => sender.email,
    :from => "no.reply.portfolio.system@gmail.com",
    :subject => "Message from my Portfolio: A new #{sender.support_type}")
  end
  
end