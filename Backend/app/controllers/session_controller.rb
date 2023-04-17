

class SessionController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    def create
      donor = Donor.find_by(email: params[:email])
      charity = Charity.find_by(email: params[:email])
      admin = Admin.find_by(email: params[:email])
  
      if donor && donor.authenticate(params[:password])
        token = encode_token({ donor_id: donor.id })
        render json: { loggedin: true, donor: donor.as_json(only: [:id, :name]), jwt: token }, status: :accepted
      elsif charity && charity.authenticate(params[:password])
        token = encode_token({ charity_id: charity.id })
        render json: { loggedin: true, charity: charity.as_json(only: [:id, :name]), jwt: token }, status: :accepted
      elsif admin && admin.authenticate(params[:password])
      token = encode_token({ admin_id: admin.id })
      render json: { loggedin: true, admin: admin.as_json(only: [:id, :name]), jwt: token }, status: :accepted
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def destroy
      cookies.delete(:jwt_token)
      render json: { message: 'Logged out successfully' }
    end
  
    private
  
    def session_params
      params.permit(:email, :password)
    end
  end
  