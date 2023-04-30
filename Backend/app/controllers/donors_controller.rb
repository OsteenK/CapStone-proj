class DonorsController < ApplicationController
  # skip_before_action :authorize, only: [ :create]
  before_action :authorize_request, only: [:create, :donate, :set_donation_reminder]
 


  def index
    charities = Charity.all
    render json: { charities: charities }, status: :ok
  end

  def create
    donor = Donor.create(donor_params)
    if donor.save
      DonorNotifierMailer.send_donor_signup_email(donor).deliver_now

      render json: { message: 'Donor created successfully' }, status: :created
    else
      render json: { error: 'Unable to create donor' }, status: :unprocessable_entity
    end
  end

  def donate
    charity = Charity.find(params[:charity_id])
    donation = Donation.create(donation_params)
    if donation.save
      render json: { message: 'Donation made successfully' }, status: :created
    else
      render json: { error: 'Unable to make donation' }, status: :unprocessable_entity
    end
  end

  def set_donation_reminder
    reminder = Reminder.create(reminder_params)
    if reminder.save
      render json: { message: 'Donation reminder set successfully' }, status: :created
    else
      render json: { error: 'Unable to set donation reminder' }, status: :unprocessable_entity
    end
  end

  private

  def donor_params
    params.require(:donor).permit( :email, :password)
  end

  def donation_params
    params.permit(:amount, :charity_id, :anonymous, :payment_method)
  end

  def reminder_params
    params.permit(:donor_id, :reminder_time)
  end

  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin
      @decoded = JsonWebToken.decode(token)
      @current_donor = Donor.find(@decoded[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
