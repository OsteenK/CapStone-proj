class ApplicationMailer < ActionMailer::Base
  default from: "givehopecharities@gmail.com"
  layout "mailer"

  def send_contact_form_email(form_data)
    @sender_name = form_data[:name]
    @sender_email = form_data[:email]
    @subject = form_data[:subject]
    @message = form_data[:message]
    mail(
      to: @sender_email,
      bcc: "givehopecharities@gmail.com",
      subject: "Contact Form: #{form_data[:subject]}"
    )
  end
end
