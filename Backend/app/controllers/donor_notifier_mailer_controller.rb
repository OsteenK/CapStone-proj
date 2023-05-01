class Donornotifiermailer < ApplicationMailer
    default from: 'notifications@example.com'
  
    def send_donor_signup_email(donor)
      @donor = donor
      mail(to: @donor.email, subject: 'Thank you for signing up as a donor!')
    end
  end
  