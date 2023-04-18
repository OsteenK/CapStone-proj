class CharitiesController < ApplicationController
  before_action :set_charity, only: [:show, :edit, :update, :destroy]

  def index
    @charities = Charity.all
    render json: @charities, status: :ok
  end

  def show
    render json: @charity, status: :ok
  end

  def create
    @charity = Charity.new(charity_params)

    if @charity.save
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

  def inventory
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @inventory = @beneficiary.inventory
    render json: @inventory, status: :ok
  end

  def create_inventory
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @inventory = @beneficiary.inventory.create(inventory_params)
    render json: @inventory, status: :created, location: @inventory
  end

  def update_inventory
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @inventory = @beneficiary.inventory.find(params[:inventory_id])

    if @inventory.update(inventory_params)
      render json: @inventory, status: :ok
    else
      render json: @inventory.errors, status: :unprocessable_entity
    end
  end

  def destroy_inventory
    @charity = Charity.find(params[:id])
    @beneficiary = @charity.beneficiaries.find(params[:beneficiary_id])
    @inventory = @beneficiary.inventory.find(params[:inventory_id])
    @inventory.destroy
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

def inventory_params
params.require(:inventory).permit(:name, :description, :quantity)
end
end