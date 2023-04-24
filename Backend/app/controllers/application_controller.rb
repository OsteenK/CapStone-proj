class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session
  before_action :authorize
  skip_before_action :authorize, only: [:contact_us]

  def encode_token(payload)
    # should store secret in env variable
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def set_current_user
    if decoded_token
      if decoded_token[0].has_key? 'donor_id'
        @current_user = Donor.find(decoded_token[0]['donor_id'])
      elsif decoded_token[0].has_key? 'charity_id'
        @current_user = Charity.find(decoded_token[0]['charity_id'])
      elsif decoded_token[0].has_key? 'admin_id'
        @current_user = Admin.find(decoded_token[0]['admin_id'])
      end
    end
  end

  def logged_in?
    !!@current_user
  end

  def logged
    render json: { logged_in: logged_in?, current_user: @current_user }, include: :charities
  end

  def authorized_donor
    render json: { message: 'Please log in as a donor' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Donor)
  end

  def authorized_charity
    render json: { message: 'Please log in as a charity' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Charity)
  end

  def authorized_admin
    render json: { message: 'Please log in as an admin' }, status: :unauthorized unless logged_in? && @current_user.is_a?(Admin)
  end

  def authorize
    set_current_user

    if logged_in?
      if @current_user.is_a?(Donor) || @current_user.is_a?(Charity) || @current_user.is_a?(Admin)
        return true
      end
    end

    render json: { message: 'Please log in as a donor or as a charity or as an admin' }, status: :unauthorized
  end

  def contact_us
    @form_data = params[:application]
    # render json: @form_data
    ApplicationMailer.send_contact_form_email(@form_data).deliver
  end

end
