class DonationsController < ApplicationController
  before_action :authenticate_donor

  def index
    @donations = Donation.all
    render json: @donations
  end

  def create
    @donation = Donation.new(donation_params)
    if @donation.save
      render json: @donation, status: :created
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  def show
    @donation = Donation.find(params[:id])
    render json: @donation
  end

  def update
    @donation = Donation.find(params[:id])
    if @donation.update(donation_params)
      render json: @donation
    else
      render json: @donation.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @donation = Donation.find(params[:id])
    @donation.destroy
  end

  private

  def donation_params
    params.require(:donation).permit(:donation_amount, :anonymous, :charity_id, :donor_id)
  end
end
