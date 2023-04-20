class DonorNotifierMailer < ApplicationMailer
    
    # Email to the donor once they've signed up to the platform
    def send_donor_signup_email(donor)
        @donor = donor
        mail(
            to: @donor.email,
            subject: "Welcome to our community, #{donor.first_name}!"
        )
    end

    # Email to the donor once their donation has been received
    def send_donation_received_email(donation)
        @donation = donation
        @donor = donation.donor
        @charity = donation.charity
        mail(
            to: @donor.email,
            subject: "Thank You for Your Generous Donation!"
        )
    end

    # Email to the donor once a charity they contributed to has reached their goal amount
    def send_goal_reached_email(donor)

    end
end
