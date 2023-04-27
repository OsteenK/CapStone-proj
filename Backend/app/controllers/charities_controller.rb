class CharitiesController < ApplicationController
  before_action :set_charity, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:index, :show]

  def index
    @charities = Charity.all
    render json: @charities, status: :ok
  end

  def show
    @charity = Charity.includes(:administrator, :beneficiaries).find(params[:id])
    render json: @charity
  end
  
  def approve
    @charity = Charity.find(params[:id])
    @charity.update(approved: true)
    CharityNotifierMailer.send_application_approved_email(@charity).deliver
  
    redirect_to @charity
  end
  
  
  

  def create
    @charity = Charity.new(charity_params)

    if @charity.save
      AdministratorNotifierMailer.send_new_charity_application_email(@charity).deliver
      CharityNotifierMailer.send_application_received_email(@charity).deliver
      render json: @charity, status: :created, location: @charity
    else
      render json: @charity.errors, status: :unprocessable_entity
    end
  end

  def update
    if @charity.update(charity_params)
      render json: @charity, status: :ok
    else
      render json: @charity.errors, status: :unprocessable_entity
    end
  end

  def destroy
    AdministratorNotifierMailer.send_charity_deletion_email(@charity).deliver
    CharityNotifierMailer.send_charity_deletion_notice(@charity).deliver
    @charity.destroy
    head :no_content
  end

  def beneficiaries
    @charity = Charity.find(params[:id])
    @beneficiaries = @charity.beneficiaries
    render json: @beneficiaries, status: :ok
  end

  def create_beneficiary
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.create(beneficiary_params)
    render json: @beneficiary, status: :created, location: @beneficiary
  end

  def update_beneficiary
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])

    if @beneficiary.update(beneficiary_params)
      render json: @beneficiary, status: :ok
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  def destroy_beneficiary
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @beneficiary.destroy
    head :no_content
  end

  def items
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @items = @beneficiary.items
    render json: @items, status: :ok
  end

  def create_items
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @items = @beneficiary.items.create(items_params)
    render json: @items, status: :created, location: @items
  end

  def update_items
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @items = @beneficiary.items.find(params[:items_id])

    if @items.update(items_params)
      render json: @items, status: :ok
    else
      render json: @items.errors, status: :unprocessable_entity
    end
  end

  def destroy_items
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @items = @beneficiary.items.find(params[:items_id])
    @items.destroy
    head :no_content
end

private
def set_charity
@charity = Charity.find(params[:id])
end

def charity_params
params.require(:charity).permit(:name, :description)
end

def beneficiary_params
params.require(:beneficiary).permit(:name, :description)
end

def items_params
params.require(:items).permit(:name, :description, :quantity)
end
end