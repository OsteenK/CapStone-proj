class AdministratorsController < ApplicationController
  before_action :authorize_admin

  # POST /admin/login
  def login
    admin = Admin.find_by(email: params[:email])
    if admin && admin.authenticate(params[:password])
      token = JWT.encode({ admin_id: admin.id }, Rails.application.secrets.secret_key_base, 'HS256')
      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
    end
  end


  # GET /charity_applications
  def charity_applications
    @charity_applications = CharityApplication.all
    render json: @charity_applications
  end

  # POST /charity_applications/:id/approve
  def approve_charity_application
    @charity_application = CharityApplication.find(params[:id])
    if @charity_application.update(approved: true)
      # send email to notify charity that their application has been approved
      render json: @charity_application
    else
      render json: {"error": "unable to approve application" }, status: :unprocessable_entity
    end
  end

  # POST /charity_applications/:id/reject
  def reject_charity_application
    @charity_application = CharityApplication.find(params[:id])
    if @charity_application.update(approved: false)
      # send email to notify charity that their application has been rejected
      render json: @charity_application
    else
      render json: {"error": "unable to reject application" }, status: :unprocessable_entity
    end
  end

  # DELETE /charities/:id
  def destroy_charity
    @charity = Charity.find(params[:id])
    @charity.destroy
    render json: {"message": "charity deleted successfully" }
  end

  private
    def authorize_admin
      # check if the request is coming from an admin
      token = request.headers["Authorization"]&.split(" ")&.last
      begin
        decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
        admin_id = decoded_token[0]["admin_id"]
        @current_admin = Admin.find(admin_id)
      rescue JWT::DecodeError
        render json: {"error": "invalid token" }, status: :unauthorized
      end
    end
end
