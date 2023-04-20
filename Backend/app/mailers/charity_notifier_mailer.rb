class CharityNotifierMailer < ApplicationMailer

    # Email to the charity once their application has been submitted for admin approval
    def send_application_received_email(charity)
        @charity = charity
        mail(
            to: @charity.email,
            subject: "Receipt of your Give Hope Application"
        )
    end

    # Email to the charity once their application has been approved
    def send_application_approved_email(charity)
        @charity = charity
        mail(
            to: @charity.email,
            subject: "Your Give Hope Application Has Been Approved - Access Your Account Now!"
        )
    end

    # Email to the charity once their application has been rejected
    def send_application_rejected_email(charity)
        @charity = charity
        mail(
            to: @charity.email,
            subject: "Give Hope Application Update"
        )
    end

    # Email to notify charity of new donation
    def send_new_donation_received_email(donation)
        @donation = donation
        donation.donor.anonymous ? @donor_name = "an anonymous donor" : @donor_name = donation.donor.first_name
        @charity = donation.charity
        mail(
            to: @charity.email,
            subject: "New Donation Alert!"
        )
    end

    # Email to notify the charity of deletion from the platform
    def send_charity_deletion_notice(charity)
        @charity = charity
        mail(
            to: @charity.email,
            subject: "Account Deletion Confirmation"
        )
    end
end
