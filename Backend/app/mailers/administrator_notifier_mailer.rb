class AdministratorNotifierMailer < ApplicationMailer

    # Email to notify administrator of new application to the platform
    def send_new_charity_application_email(charity)
        @charity = charity
        @administrator = charity.administrator
        mail(
            to: @administrator.email,
            subject: "New Application from #{@charity.name} Charity ID: #{@charity.id} | Awaiting Review"
        )
    end

    # Email to notify administrator of a charity'ss deletion from the platform
    def send_charity_deletion_email(charity)
        @charity = charity
        @administrator = charity.administrator
        mail(
            to: @administrator.email,
            subject: "Deletion of #{@charity.name} Charity ID: #{@charity.id}"
        )
    end
end
